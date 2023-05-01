import { DarkTheme } from "../components/themes";
import {
  useColorScheme,
} from "react-native";
import Chat from "./home/chat/Chat";
import ConfirmRegister from "./auth/ConfirmRegister.js";
import CreateHousehold from "./households/CreateHousehold";
import Events from "./home/events/Events";
import InitialPage from "./households/InitialPage";
import Lists from "./home/lists/Lists";
import Login from "./auth/Login.js";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./auth/Register.js";
import Tasks from "./home/tasks/Tasks";
import { HouseHoldContext } from "./HouseHoldContext";
import SideBar from "./SideBar";
import { useEventData, useListsData, useTasksData } from "../api/hooks";
import { useContext, useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { fetchEventHandlerById, fetchEventHandlersByCalendarId, fetchEventsByCalendarId, fetchItemsByListId, fetchLists, fetchTasksByHouseHoldId } from "../api/fetching";
import { createSubListItems, deleteSubListItems, updateSubListItems } from "../api/subscribing";

const processLists = async (lists) => {
  const processedLists = await Promise.all(
    lists.map(async (list) => {
      const listItems = await fetchItemsByListId(list.id);

      const processedListItems = listItems.filter((item) => item._deleted !== true);

      return {
        ...list,
        listItems: processedListItems,
      };
    })
  );

  return processedLists;
};

export const processTasks = async (tasks) => {
  const processedTasks = await Promise.all(tasks.map(async (task) => {
    if (!task.eventHandlerId || task.eventHandlerId === '') {
      return task;
    }

    const eventHandler = await fetchEventHandlerById(task.eventHandlerId);

    return {
      ...task,
      eventHandler,
    };
  }));

  return processedTasks;
};

/* Login page */
export default function Wrappy({  }) {
  const scheme = useColorScheme();
  const theme = DarkTheme; //scheme === "dark" ? DarkTheme : LightTheme;
  const colors = theme.colors;

  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  const onItemCreated = (item, listId, setHouseHold) => {
    console.log("SUBSCRIPTION CREATE ITEM", item);

    const listIndex = houseHold.lists.findIndex((list) => list.id == listId);
    const itemIndex = houseHold.lists[listIndex].listItems.findIndex((elem) => elem.id === item.id);
    if (itemIndex !== -1) {
      return;
    }

    setHouseHold((oldHouseHold) => {
      const newHouseHold = { ...oldHouseHold };
      const listIndex = newHouseHold.lists.findIndex((list) => list.id === listId);
      newHouseHold.lists[listIndex].listItems.push(item);
      return newHouseHold;
    });
  };

  const onItemUpdated = (item, listId, setHouseHold) => {
    console.log("SUBSCRIPTION UPDATE ITEM", item);

    const listIndex = houseHold.lists.findIndex((list) => list.id == listId);
    const itemIndex = houseHold.lists[listIndex].listItems.findIndex((elem) => elem.id === item.id);

    console.log("item index: ", itemIndex);
    if (itemIndex === -1) {
      return;
    }

    const existingItem = houseHold.lists[listIndex].listItems[itemIndex];

    if (existingItem._version === item._version) {
      return;
    }

    setHouseHold((oldHouseHold) => {
      const newHouseHold = { ...oldHouseHold };
      const list = newHouseHold.lists[listIndex];
      list.listItems[itemIndex] = item;
      return newHouseHold;
    });
  };

  const onItemDeleted = (item, listId, setHouseHold) => {
    console.log("SUBSCRIPTION DELETE ITEM", item);
    
    const listIndex = houseHold.lists.findIndex((list) => list.id == listId);
    const itemIndex = houseHold.lists[listIndex].listItems.findIndex((elem) => elem.id === item.id);

    if (itemIndex === -1) {
      return;
    }

    setHouseHold((oldHouseHold) => {
      const newHouseHold = { ...oldHouseHold };
      const listIndex = newHouseHold.lists.findIndex((list) => list.id === listId);
      const itemIndex = newHouseHold.lists[listIndex].listItems.findIndex((elem) => elem.id === item.id);
      newHouseHold.lists[listIndex].listItems.splice(itemIndex, 1);
      return newHouseHold;
    });
  };

  // LISTS
  useEffect(() => {
    async function loadLists() {
      if (!houseHold.id || houseHold.id === "") {
        console.log("No houseHoldId defined to fetch lists");
        return;
      }

      const lists = await fetchLists(houseHold.id);

      const processedData = await processLists(lists);

      setHouseHold((oldHouseHold) => {
        const newHouseHold = { ...oldHouseHold };
        newHouseHold.lists = processedData;
        return newHouseHold;
      });
    }

    loadLists();
  }, [houseHold.id, processLists]);

  // LIST ITEM SUBSCRIPTIONS
  useEffect(() => {
    const subs = [];

    if (!houseHold.lists || houseHold.lists.length === 0 || !onItemCreated || !onItemUpdated || !onItemDeleted) {
      return;
    }

    houseHold.lists.forEach(async (list) => {
      const createItemSub = createSubListItems(list.id, setHouseHold, onItemCreated);
      const updateItemSub = updateSubListItems(list.id, setHouseHold, onItemUpdated);
      const deleteItemSub = deleteSubListItems(list.id, setHouseHold, onItemDeleted);
      subs.push(createItemSub);
      subs.push(updateItemSub);
      subs.push(deleteItemSub);
    });

    return () => {
      subs.forEach(async (sub) => {
        (await sub).unsubscribe();
      });
    };
  }, [houseHold.lists.length]);

  // TASKS
  useEffect(() => {
    async function loadTasks() {
      if (!houseHold.id || houseHold.id === "") {
        console.log("No houseHoldId defined to fetch tasks");
        return;
      }

      const tasks = await fetchTasksByHouseHoldId(houseHold.id);
      const processedTasks = await processTasks(tasks);

      setHouseHold((oldHouseHold) => {
        const newHouseHold = { ...oldHouseHold };
        newHouseHold.tasks = processedTasks;
        return newHouseHold;
      });
    }

    loadTasks();
  }, [houseHold.id, processTasks]);

  // EVENTS
  useEffect(() => {
    async function loadEvents() {
      if (!houseHold.calendarId || houseHold.calendarId === "") {
        console.log("No calendarId defined to fetch events");
        return;
      }

      const events = await fetchEventsByCalendarId(houseHold.calendarId);
      setHouseHold((oldHouseHold) => {
        const newHouseHold = { ...oldHouseHold };
        newHouseHold.events = events;
        return newHouseHold;
      });
    }

    loadEvents();
  }, [houseHold.calendarId]);

  // EVENT HANDLERS
  useEffect(() => {
    async function loadEventHandlers() {
      if (!houseHold.calendarId || houseHold.calendarId === "") {
        console.log("No calendarId defined to fetch event handlers");
        return;
      }

      const eventHandlers = await fetchEventHandlersByCalendarId(houseHold.calendarId);
      setHouseHold((oldHouseHold) => {
        const newHouseHold = { ...oldHouseHold };
        newHouseHold.eventHandlers = eventHandlers;
        return newHouseHold;
      });
    }

    loadEventHandlers();
  }, [houseHold.calendarId]);

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={() => <SideBar/>} screenOptions=
      {{
        headerShown:false,
        headerStyle:{backgroundColor: colors.background, height:0},
        headerTintColor: colors.text,
        headerLeftContainerStyle: {display:'flex', flexDirection:'row', alignItems:'center', marginLeft:10},

        }}>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="ConfirmRegister"
          component={ConfirmRegister}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="InitialPage"
          component={InitialPage}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="CreateHousehold"
          component={CreateHousehold}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Events"
          component={Events}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Lists"
          component={Lists}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

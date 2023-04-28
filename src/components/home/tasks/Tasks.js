import { ScrollView, Text, View } from "react-native";

import DatedTasks from "./DatedTasks";
import HeaderBar from "../HeaderBar";
import Navbar from "../Navbar";
import UndatedTasks from "./UndatedTasks";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useContext, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { HouseHoldContext } from "../../HouseHoldContext";
import { useTasksData } from "../../../api/hooks";

/* Tasks page */
export default function Tasks({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  // Get actual tasks from the backend here
  const [tasks, setTasks] = useState(data.tasks);

  const { houseHold } = useContext(HouseHoldContext);

  const [taskData, setTaskData] = useTasksData({
    houseHoldId: houseHold.id,
  });

  // Filters out completed tasks (will be done with query in future? or completed tasks will be deleted)
  const unfinishedTasks = tasks.filter((task) => !task.completed);

  // Undated tasks are those without an attached EventHandler
  const undatedTasks = unfinishedTasks
    .filter((task) => !("eventHandlerId" in task))
    .map((task) => {
      return {
        ...task,
        listTitle: "listId" in task ? data.lists[task.listId].title : null,
      };
    });
  let datedTasks = [];

  // For dated tasks, find every Event associated with its EventHandler
  for (const task of unfinishedTasks.filter(
    (task) => "eventHandlerId" in task
  )) {
    for (const event of data.eventHandlers[task.eventHandlerId].events) {
      datedTasks.push({
        ...task,
        eventId: event.id,
        date: new Date(event.date),
        listTitle: "listId" in task ? data.lists[task.listId].title : null,
      });
    }
  }

  function last(array) {
    return array[array.length - 1];
  }

  // Group the tasks by month and day
  datedTasks.sort((a, b) => (a.date > b.date ? 1 : -1));
  let datedTasksByDate = [];
  let lastDate = new Date(0);
  for (const task of datedTasks) {
    let date = new Date(task.date);
    if (
      date.getFullYear() != lastDate.getFullYear() ||
      date.getMonth() != lastDate.getMonth()
    ) {
      datedTasksByDate.push({ date: new Date(task.date), days: [], length: 0 });
    }
    if (
      last(datedTasksByDate).days.length == 0 ||
      date.getDate() != lastDate.getDate()
    ) {
      last(datedTasksByDate).days.push({
        date: new Date(task.date),
        tasks: [],
      });
    }
    last(last(datedTasksByDate).days).tasks.push(task);
    last(datedTasksByDate).length++;
    lastDate = date;
  }

  // Called when a task is checked/unchecked
  function handleCheckTask(isChecked, taskId, eventId) {
    setTasks((oldTasks) => {
      let newTasks = [...oldTasks];
      const newTaskIndex = newTasks.findIndex((task) => task.id == taskId);
      newTasks[newTaskIndex].completed = !newTasks[newTaskIndex].completed;
      return newTasks;
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={houseHold.name} screenName={route.name} />
      <ScrollView
        style={{ marginHorizontal: 16, marginTop: 16, flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <UndatedTasks undatedTasks={undatedTasks} onChecked={handleCheckTask} />
        <DatedTasks datedTasks={datedTasksByDate} onChecked={handleCheckTask} />
        <View style={{ height: 16 }} />
      </ScrollView>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={houseHold}
      />
    </View>
  );
}

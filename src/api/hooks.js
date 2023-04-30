import { createSubListItems, updateSubListItems } from "./subscribing";
import {
  fetchEventHandlersByCalendarId,
  fetchEventsByCalendarId,
  fetchLists,
  fetchTasksByHouseHoldId,
} from "./fetching";
import { useEffect, useState } from "react";

export const useListsData = ({
  houseHoldId,
  processDataCallback,
  onListItemCreated,
  onListItemUpdated,
}) => {
  const [listData, setListData] = useState([]);

  // TODO (carlos): subscrive to new/updated lists

  // first we fetch the lists
  useEffect(() => {
    async function loadListData() {
      if (!houseHoldId || houseHoldId === "") {
        console.log("No houseHoldId defined to fetch lists");
        return;
      }

      const lists = await fetchLists(houseHoldId);
      const processedData = processDataCallback
        ? await processDataCallback(lists)
        : lists;
      setListData(processedData);
    }

    loadListData();
  }, [houseHoldId, processDataCallback]);

  // subscribe to new/updated list items
  useEffect(() => {
    const subs = [];

    if (
      !listData ||
      listData.length === 0 ||
      !onListItemCreated ||
      !onListItemUpdated
    ) {
      return;
    }

    listData.forEach(async (list, listIndex) => {
      const createItemSub = createSubListItems(
        list.id,
        setListData,
        onListItemCreated
      );
      const updateItemSub = updateSubListItems(
        list.id,
        setListData,
        onListItemUpdated
      );
      subs.push(createItemSub);
      subs.push(updateItemSub);
    });

    return () => {
      subs.forEach(async (sub) => {
        (await sub).unsubscribe();
      });
    };
  }, [listData.length]);

  return [listData, setListData];
};

export const useTasksData = ({ houseHoldId, processDataCallback }) => {
  const [taskData, setTaskData] = useState([]);

  // first we fetch the tasks
  useEffect(() => {
    async function loadTaskData() {
      if (!houseHoldId || houseHoldId === "") {
        console.log("No houseHoldId defined to fetch tasks");
        return;
      }

      const tasks = await fetchTasksByHouseHoldId(houseHoldId);
      const processedTasks = processDataCallback
        ? await processDataCallback(tasks)
        : tasks;
      setTaskData(processedTasks);
    }

    loadTaskData();
  }, [houseHoldId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Tasks

  return [taskData, setTaskData];
};

export const useEventData = ({ calendarId, processDataCallback }) => {
  const [eventData, setEventData] = useState([]);

  // first we fetch the events
  useEffect(() => {
    async function loadEventData() {
      if (!calendarId || calendarId === "") {
        console.log("No calendarId defined to fetch events");
        return;
      }

      const events = await fetchEventsByCalendarId(calendarId);
      const processedEvents = processDataCallback
        ? await processDataCallback(events)
        : events;
      setEventData(processedEvents);
    }

    loadEventData();
  }, [calendarId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Events

  return [eventData, setEventData];
};

export const useEventHandlerData = ({ calendarId, processDataCallback }) => {
  const [eventHandlerData, setEventHandlerData] = useState([]);

  // first we fetch the events
  useEffect(() => {
    async function loadEventHandlerData() {
      if (!calendarId || calendarId === "") {
        console.log("No calendarId defined to fetch event handlers");
        return;
      }

      const events = await fetchEventHandlersByCalendarId(calendarId);
      const processedEvents = processDataCallback
        ? await processDataCallback(events)
        : events;
      setEventHandlerData(processedEvents);
    }

    loadEventHandlerData();
  }, [calendarId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Events

  return [eventHandlerData, setEventHandlerData];
};

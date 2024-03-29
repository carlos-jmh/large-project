import { useEffect, useState } from 'react';
import { fetchEventHandlersByCalendarId, fetchEventsByCalendarId, fetchLists, fetchTasksByHouseHoldId } from './fetching';
import { createSubListItems, deleteSubListItems, updateSubListItems } from './subscribing';

export const useListsData = ({
  houseHoldId,
  processDataCallback,
  onListItemCreated,
  onListItemUpdated,
  onListItemDeleted,
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
      const processedData = processDataCallback ? await processDataCallback(lists) : lists;
      setListData(processedData);
    }

    loadListData();
  }, [houseHoldId, processDataCallback]);

  // subscribe to new/updated list items
  useEffect(() => {
    const subs = [];

    listData.forEach(async (list, listIndex) => {
      const createItemSub = createSubListItems(list.id, listIndex, setListData, onListItemCreated);
      const updateItemSub = updateSubListItems(list.id, listIndex, setListData, onListItemUpdated);
      const deleteItemSub = deleteSubListItems(list.id, listIndex, setListData, onListItemDeleted);
      subs.push(createItemSub);
      subs.push(updateItemSub);
      subs.push(deleteItemSub);
    });
    
    return () => {
      subs.forEach(async (sub) => {
        (await sub).unsubscribe();
      });
    }
  }, [listData.length]);

  return [listData, setListData];
}

export const useTasksData = ({
  houseHoldId,
  processDataCallback,
}) => {
  const [taskData, setTaskData] = useState([]);

  // first we fetch the tasks
  useEffect(() => {
    async function loadTaskData() {
      if (!houseHoldId || houseHoldId === "") {
        console.log("No houseHoldId defined to fetch tasks");
        return;
      }

      const tasks = await fetchTasksByHouseHoldId(houseHoldId);
      const processedTasks = processDataCallback ? await processDataCallback(tasks) : tasks;
      setTaskData(processedTasks);
    }

    loadTaskData();
  }, [houseHoldId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Tasks

  return [taskData, setTaskData];
}

export const useEventData = ({
  calendarId,
  processDataCallback,
}) => {
  const [eventData, setEventData] = useState([]);

  // first we fetch the events
  useEffect(() => {
    async function loadEventData() {
      if (!calendarId || calendarId === "") {
        console.log("No calendarId defined to fetch events");
        return;
      }

      const events = await fetchEventsByCalendarId(calendarId);
      const processedEvents = processDataCallback ? await processDataCallback(events) : events;
      setEventData(processedEvents);
    }
  
    loadEventData();
  }, [calendarId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Events

  return [eventData, setEventData];
}

export const useEventHandlerData = ({
  calendarId,
  processDataCallback,
}) => {
  const [eventHandlerData, setEventHandlerData] = useState([]);

  // first we fetch the events
  useEffect(() => {
    async function loadEventHandlerData() {
      if (!calendarId || calendarId === "") {
        console.log("No calendarId defined to fetch event handlers");
        return;
      }

      const events = await fetchEventHandlersByCalendarId(calendarId);
      const processedEvents = processDataCallback ? await processDataCallback(events) : events;
      setEventHandlerData(processedEvents);
    }
  
    loadEventHandlerData();
  }, [calendarId, processDataCallback]);

  // TODO (carlos): subscribe to new/updated Events

  return [eventHandlerData, setEventHandlerData];
}

export const refreshCalendarData = async (calendarId, setEventHandlerData, setEventData) => {
  if (calendarId && calendarId !== "") {
    const events = await fetchEventsByCalendarId(calendarId);
    setEventData(events);
    const eventHandlers = await fetchEventHandlersByCalendarId(calendarId);
    setEventHandlerData(eventHandlers);
  }
}

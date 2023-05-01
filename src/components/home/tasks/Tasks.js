import { ScrollView, Text, View } from "react-native";
import { useContext, useState } from "react";

import DatedTasks from "./DatedTasks";
import HeaderBar from "../HeaderBar";
import { HouseHoldContext } from "../../HouseHoldContext";
import Navbar from "../Navbar";
import UndatedTasks from "./UndatedTasks";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Tasks page */
export default function Tasks({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const { houseHold } = useContext(HouseHoldContext);

  const tasks = houseHold.tasks;

  console.log(houseHold.events);

  // // Filters out completed tasks (will be done with query in future? or completed tasks will be deleted)
  // const unfinishedTasks = tasks.filter((task) => !task.completed);

  // Undated tasks are those without an attached EventHandler
  const undatedTasks = tasks
    .filter((task) => !("eventHandler" in task))
    .map((task) => {
      return {
        ...task,
        listTitle:
          "listId" in task
            ? (
                houseHold.lists.find((list) => list.id == task.listId) ?? {
                  title: null,
                }
              ).title
            : null,
      };
    });

  // For dated tasks, find every Event associated with its EventHandler
  let datedTasks = [];
  for (const task of tasks.filter((task) => "eventHandler" in task)) {
    for (const event of houseHold.events.filter(
      (event) => event.eventHandlerId == task.eventHandler.id
    )) {
      datedTasks.push({
        ...task,
        completed: event.completed,
        eventId: event.id,
        eventHandlerId: task.eventHandler.id,
        date: new Date(event.date),
        listTitle:
          "listId" in task
            ? (
                houseHold.lists.find((list) => list.id == task.listId) ?? {
                  title: null,
                }
              ).title
            : null,
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
    console.log("CHECK TASK", isChecked, taskId, eventId);
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

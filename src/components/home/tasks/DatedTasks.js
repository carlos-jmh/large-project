import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Task from "./Task";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

export default function DatedTasks({ datedTasks }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <View>
      {datedTasks.map((taskMonth) => {
        return <TasksMonth taskMonth={taskMonth} />;
      })}
    </View>
  );
}

function TasksMonth({ taskMonth }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Pressable
      onPress={() => setIsExpanded(!isExpanded)}
      android_ripple={{ color: colors.border }}
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: colors.card,
        marginTop: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: colors.text,
            fontFamily: "Inter_600SemiBold",
            fontSize: 14,
            flex: 1,
            textAlign: "center",
          }}
        >
          {months[taskMonth.date.getMonth()]} {taskMonth.date.getFullYear()} (
          {taskMonth.length})
        </Text>
        <AntDesign
          name={isExpanded ? "caretdown" : "caretleft"}
          size={16}
          color={colors.text}
        />
      </View>
      {isExpanded
        ? taskMonth.days.map((taskDay) => {
            return <TasksDay taskDay={taskDay} />;
          })
        : null}
    </Pressable>
  );
}

function TasksDay({ taskDay }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View
      style={{
        marginTop: 16,
        flexDirection: "row",
      }}
    >
      <DateLabel date={taskDay.date} />
      <View
        style={{
          flex: 1,
        }}
      >
        {taskDay.tasks.map((task, i) => {
          return (
            <View style={{ marginTop: i > 0 ? 10 : 0 }}>
              <Task
                title={task.title}
                listTitle={task.listTitle}
                date={task.date}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

function DateLabel({ date }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <View style={{ width: 32, alignItems: "center", marginRight: 8 }}>
      <Text
        style={{
          color: isToday ? colors.primary : colors.textFaded,
          fontFamily: "Roboto_700Bold",
          fontSize: 12,
        }}
      >
        {days[date.getDay()]}
      </Text>
      <View
        style={
          isToday
            ? {
                height: 30,
                width: 30,
                borderRadius: 30,
                backgroundColor: colors.primary,
                justifyContent: "center",
              }
            : {}
        }
      >
        <Text
          style={{
            color: isToday ? colors.primaryText : colors.text,
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {date.getDate()}
        </Text>
      </View>
    </View>
  );
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

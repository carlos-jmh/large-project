import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Task from "./Task";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function DatedTasks({ datedTasks }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <View>
      {datedTasks.map((taskMonth, i) => {
        return <TasksMonth taskMonth={taskMonth} key={i} />;
      })}
    </View>
  );
}

function TasksMonth({ taskMonth }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const caratRotation = useSharedValue(0);
  const caratAnimationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${caratRotation.value}deg` }] };
  });

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Animated.View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        marginTop: 16,
        backgroundColor: colors.card,
      }}
      layout={Layout.duration(200)}
    >
      <AnimatedPressable
        onPress={() => {
          setIsExpanded(!isExpanded);
          caratRotation.value = withTiming(90 * isExpanded, { duration: 200 });
        }}
        android_ripple={{ color: colors.border }}
        style={{
          padding: 16,
        }}
        layout={Layout.duration(200)}
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
          <Animated.View style={caratAnimationStyles}>
            <AntDesign name={"caretdown"} size={16} color={colors.text} />
          </Animated.View>
        </View>
        {isExpanded
          ? taskMonth.days.map((taskDay, i) => {
              return <TasksDay taskDay={taskDay} key={i} />;
            })
          : null}
      </AnimatedPressable>
    </Animated.View>
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
            <View style={{ marginTop: i > 0 ? 10 : 0 }} key={i}>
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
    <Animated.View
      style={{ width: 32, alignItems: "center", marginRight: 8 }}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
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
    </Animated.View>
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

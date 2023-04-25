import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";

import Checkbox from "../../Checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* List item component */
export default function ListItem({
  title,
  taskTitle,
  date,
  onChecked,
  isChecked,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const primaryTextColor = isChecked
    ? colors.primaryTextFaded
    : colors.primaryText;

  return (
    <Animated.View
      style={{ borderRadius: 8, overflow: "hidden" }}
      layout={Layout.duration(200)}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      <Pressable
        style={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: colors.primary,
          flexDirection: "row",
        }}
        android_ripple={{ color: colors.highlight }}
      >
        <Checkbox
          isChecked={isChecked}
          onChecked={onChecked}
          fadedWhenChecked={true}
        />
        <View>
          <Text
            style={{
              color: primaryTextColor,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
          <ListItemInfo taskTitle={taskTitle} date={date} />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function ListItemInfo({ taskTitle, date }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  let dateInfo = null;
  if (date) {
    let hours = date.getHours();
    const m = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    if (hours == 0) {
      hours = 12;
    }
    const minutes = date.getMinutes();

    dateInfo = (
      <ListItemInfoLabel
        text={`${hours}${minutes != 0 ? `:${minutes}` : ""} ${m}`}
        iconName="clock"
      />
    );
  }

  let taskInfo = null;
  if (taskTitle) {
    taskInfo = <ListItemInfoLabel text={taskTitle} iconName="tasks" />;
  }

  if (taskTitle || date) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {dateInfo}
        {taskTitle && date ? <View style={{ width: 12 }} /> : null}
        {taskInfo}
      </View>
    );
  } else {
    return null;
  }
}

function ListItemInfoLabel({ text, iconName }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome5 name={iconName} size={14} color={colors.primaryTextFaded} />
      <View style={{ width: 6 }} />
      <Text
        style={{
          color: colors.primaryTextFaded,
          fontFamily: "Inter_400Regular",
          fontSize: 14,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

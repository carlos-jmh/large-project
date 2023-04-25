import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";

import Checkbox from "../../Checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Task component */
export default function Task({ title, listTitle, date, isChecked, onChecked }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

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
              color: colors.primaryText,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
          <TaskInfo listTitle={listTitle} date={date} />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function TaskInfo({ listTitle, date }) {
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
      <TaskInfoLabel
        text={`${hours}${minutes != 0 ? `:${minutes}` : ""} ${m}`}
        iconName="clock"
      />
    );
  }

  let listInfo = null;
  if (listTitle) {
    listInfo = <TaskInfoLabel text={listTitle} iconName="list" />;
  }

  if (listTitle || date) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {dateInfo}
        {listTitle && date ? <View style={{ width: 12 }} /> : null}
        {listInfo}
      </View>
    );
  } else {
    return null;
  }
}

function TaskInfoLabel({ text, iconName }) {
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

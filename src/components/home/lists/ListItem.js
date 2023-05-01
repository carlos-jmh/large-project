import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";

import Checkbox from "../../Checkbox";
import CustomModal from "../../CustomModal";
import EditList from "./EditList";
import { FontAwesome5 } from "@expo/vector-icons";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* List item component */
export default function ListItem({ item, itemListId, onChecked }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [modalVisible, setModalVisible] = useState(false);

  const primaryTextColor = item.completed
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
        onPress={() => setModalVisible(true)}
        style={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: colors.primary,
          flexDirection: "row",
        }}
        android_ripple={{ color: colors.highlight }}
      >
        <Checkbox
          isChecked={item.completed}
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
            {item.title}
          </Text>
          {/* <Text
            style={{
              color: primaryTextColor,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
            }}
          >
            {item.task.id}
          </Text> */}
          <ListItemInfo taskTitle={item.taskTitle} date={item.date} />
        </View>
      </Pressable>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <EditList
          list={{ ...item, taskId: "" }}
          setModalVisible={setModalVisible}
          itemListId={itemListId}
        />
      </CustomModal>
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

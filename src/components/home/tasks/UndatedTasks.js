import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Task from "./Task";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

export default function UndatedTasks({ undatedTasks }) {
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
          Undated tasks ({undatedTasks.length})
        </Text>
        <AntDesign
          name={isExpanded ? "caretdown" : "caretleft"}
          size={16}
          color={colors.text}
        />
      </View>
      {isExpanded
        ? undatedTasks.map((task, i) => {
            return (
              <View style={{ marginTop: i > 0 ? 10 : 16 }}>
                <Task title={task.title} listTitle={task.listTitle} />
              </View>
            );
          })
        : null}
    </Pressable>
  );
}

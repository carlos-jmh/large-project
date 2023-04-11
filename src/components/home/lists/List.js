import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import ListItem from "./ListItem";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* List component */
export default function List({ title, listItems }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(listItems);

  return (
    <Pressable
      onPress={() => setIsExpanded(!isExpanded)}
      android_ripple={{ color: colors.border }}
      style={{
        padding: 16,
        marginBottom: 16,
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
          {title} ({items.reduce((n, item) => n + item.completed, 0)}/
          {items.length})
        </Text>
        <AntDesign
          name={isExpanded ? "caretdown" : "caretleft"}
          size={16}
          color={colors.text}
        />
      </View>
      {isExpanded
        ? items.map((item, i) => {
            return (
              <View style={{ marginTop: i > 0 ? 10 : 16 }}>
                <ListItem
                  title={item.title}
                  isChecked={item.completed}
                  taskTitle={item.taskTitle}
                  date={item.date}
                  onChecked={(isChecked) => {
                    setItems((oldItems) => {
                      let newItem = oldItems[i];
                      newItem.completed = isChecked;
                      return [
                        ...oldItems.slice(0, i),
                        newItem,
                        ...oldItems.slice(i + 1),
                      ];
                    });
                  }}
                />
              </View>
            );
          })
        : null}
    </Pressable>
  );
}

import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import ListItem from "./ListItem";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/* List component */
export default function List({ title, listItems }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const caratRotation = useSharedValue(0);
  const caratAnimationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${caratRotation.value}deg` }] };
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(listItems);

  return (
    <Animated.View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 16,
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
            {title} ({items.reduce((n, item) => n + item.completed, 0)}/
            {items.length})
          </Text>
          <Animated.View style={caratAnimationStyles}>
            <AntDesign name={"caretdown"} size={16} color={colors.text} />
          </Animated.View>
        </View>
        {isExpanded
          ? items.map((item, i) => {
              return (
                <View style={{ marginTop: i > 0 ? 10 : 16 }} key={i}>
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
      </AnimatedPressable>
    </Animated.View>
  );
}

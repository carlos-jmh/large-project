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
import ListItem from "./ListItem";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/* List component */
export default function List({ title, listItems }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(listItems);

  const caratRotation = useSharedValue(90 * !isExpanded);
  const caratAnimationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${caratRotation.value}deg` }] };
  });
  const numCompleted = items.reduce((n, item) => n + item.completed, 0);

  // Called when an item is checked/unchecked
  function handleCheckItem(isChecked, itemIndex) {
    setItems((oldItems) => {
      let newItem = oldItems[itemIndex];
      newItem.completed = isChecked;
      return [
        ...oldItems.slice(0, itemIndex),
        newItem,
        ...oldItems.slice(itemIndex + 1),
      ];
    });
  }

  return (
    <Animated.View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 16,
        backgroundColor: colors.card,
      }}
      layout={Layout.duration(200)}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      <AnimatedPressable
        onPress={() => {
          caratRotation.value = withTiming(90 * isExpanded, { duration: 200 });
          setIsExpanded(!isExpanded);
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
              marginBottom: isExpanded ? 6 : 0,
            }}
          >
            {title} ({numCompleted}/{items.length})
          </Text>
          <Animated.View style={caratAnimationStyles}>
            <AntDesign name={"caretdown"} size={16} color={colors.text} />
          </Animated.View>
        </View>
        {isExpanded
          ? items.map((item, i) => {
              if (!item.completed) {
                return (
                  <View style={{ marginTop: 10 }} key={item.id}>
                    <ListItem
                      title={item.title}
                      isChecked={item.completed}
                      taskTitle={item.taskTitle}
                      date={item.date}
                      onChecked={(isChecked) => handleCheckItem(isChecked, i)}
                    />
                  </View>
                );
              } else {
                return null;
              }
            })
          : null}
        {isExpanded && numCompleted > 0 ? (
          <Animated.Text
            style={{
              marginTop: 16,
              color: colors.primaryTextFaded,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
              flex: 1,
              textAlign: "center",
              marginBottom: isExpanded ? 6 : 0,
            }}
            layout={Layout.duration(200)}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            Completed items
          </Animated.Text>
        ) : null}
        {isExpanded
          ? items.map((item, i) => {
              if (item.completed) {
                return (
                  <View style={{ marginTop: 10 }} key={item.id}>
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
              } else {
                return null;
              }
            })
          : null}
      </AnimatedPressable>
    </Animated.View>
  );
}

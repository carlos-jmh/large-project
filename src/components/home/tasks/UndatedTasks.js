import Animated, {
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

export default function UndatedTasks({ undatedTasks }) {
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
            Undated tasks ({undatedTasks.length})
          </Text>
          <Animated.View style={caratAnimationStyles}>
            <AntDesign name={"caretdown"} size={16} color={colors.text} />
          </Animated.View>
        </View>
        {isExpanded
          ? undatedTasks.map((task, i) => {
              return (
                <View style={{ marginTop: i > 0 ? 10 : 16 }} key={i}>
                  <Task title={task.title} listTitle={task.listTitle} />
                </View>
              );
            })
          : null}
      </AnimatedPressable>
    </Animated.View>
  );
}

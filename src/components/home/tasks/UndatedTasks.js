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

export default function UndatedTasks({ undatedTasks, onChecked }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isExpanded, setIsExpanded] = useState(true);

  const caratRotation = useSharedValue(-90 * !isExpanded);
  const caratAnimationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${caratRotation.value}deg` }] };
  });

  return (
    <Animated.View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: colors.card,
      }}
      layout={Layout.duration(200)}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      <AnimatedPressable
        onPress={() => {
          setIsExpanded(!isExpanded);
          caratRotation.value = withTiming(-90 * isExpanded, { duration: 200 });
        }}
        android_ripple={{ color: colors.border }}
        style={{
          padding: 16,
        }}
        layout={Layout.duration(200)}
      >
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={caratAnimationStyles}>
            <AntDesign name={"caretdown"} size={16} color={colors.text} />
          </Animated.View>
          <Text style={styles.groupTitleText}>
            Undated tasks ({undatedTasks.length})
          </Text>
        </View>
        {isExpanded
          ? undatedTasks.map((task, i) => {
              return (
                <View style={{ marginTop: i > 0 ? 10 : 16 }} key={task.id}>
                  <Task
                    title={task.title}
                    listTitle={task.listTitle}
                    isChecked={task.completed}
                    onChecked={(isChecked) => onChecked(isChecked, task.id)}
                  />
                </View>
              );
            })
          : null}
      </AnimatedPressable>
    </Animated.View>
  );
}

import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { createNewItem, updateExistingItem } from "../../../api/mutating";

import CustomModal from "../../CustomModal";
import EditList from "./EditList";
import ListItem from "./ListItem";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/* List component */
export default function List({ list }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [itemAddModalVisible, setItemAddModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(list.listItems);

  const caratRotation = useSharedValue(-90 * !isExpanded);
  const caratAnimationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${caratRotation.value}deg` }] };
  });
  const numCompleted = items.reduce((n, item) => n + item.completed, 0);

  // Called when an item is checked/unchecked
  function handleCheckItem(isChecked, item) {
    console.log("CHECK ITEM", isChecked);
    const updatedItem = {
      ...item,
      completed: isChecked,
    };
    updateExistingItem(updatedItem);

    updatedItem._version += 1;

    setItems((oldItems) => {
      return oldItems.map((oldItem) =>
        oldItem.id == item.id ? updatedItem : oldItem
      );
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
          caratRotation.value = withTiming(-90 * isExpanded, {
            duration: 200,
          });
          setIsExpanded(!isExpanded);
        }}
        onLongPress={() => setEditModalVisible(true)}
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
          <Text
            style={[
              styles.groupTitleText,
              { marginBottom: isExpanded ? 6 : 0 },
            ]}
          >
            {list.title} ({numCompleted}/{items.length})
          </Text>
          <Pressable
            android_ripple={{ color: colors.text, borderless: true }}
            onPress={() => setEditModalVisible(true)}
            hitSlop={16}
          >
            <MaterialIcons name={"mode-edit"} size={20} color={colors.text} />
            <CustomModal
              modalVisible={editModalVisible}
              setModalVisible={setEditModalVisible}
            >
              <EditList list={list} setModalVisible={setEditModalVisible} />
            </CustomModal>
          </Pressable>
        </View>
        {isExpanded
          ? items.map((item, i) => {
              if (!item.completed) {
                return (
                  <View style={{ marginTop: 10 }} key={item.id}>
                    <ListItem
                      item={item}
                      itemListId={list.id}
                      onChecked={(isChecked) =>
                        handleCheckItem(isChecked, item)
                      }
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
              marginBottom: 6,
              color: colors.textFaded,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
              flex: 1,
              textAlign: "center",
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
                      item={item}
                      itemListId={list.id}
                      onChecked={(isChecked) =>
                        handleCheckItem(isChecked, item)
                      }
                    />
                  </View>
                );
              } else {
                return null;
              }
            })
          : null}
        {isExpanded ? (
          <AnimatedPressable
            onPress={() => setItemAddModalVisible(true)}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 16,
            }}
            android_ripple={{ color: colors.border }}
            layout={Layout.duration(200)}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Entypo name="plus" size={16} color={colors.textFaded} />
            <View style={{ width: 6 }} />
            <Text
              style={{
                color: colors.textFaded,
                fontFamily: "Inter_500Medium",
                fontSize: 14,
              }}
            >
              Add item
            </Text>
            <CustomModal
              modalVisible={itemAddModalVisible}
              setModalVisible={setItemAddModalVisible}
            >
              <EditList
                setModalVisible={setItemAddModalVisible}
                itemListId={list.id}
              />
            </CustomModal>
          </AnimatedPressable>
        ) : null}
      </AnimatedPressable>
    </Animated.View>
  );
}

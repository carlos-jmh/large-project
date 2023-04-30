import { Keyboard, Pressable, Text, View } from "react-native";
import {
  createNewItem,
  createNewList,
  deleteList,
  editList,
  updateExistingItem,
} from "../../../api/mutating";
import { useContext, useState } from "react";

import Checkbox from "../../Checkbox";
import CustomButton from "../../CustomButton";
import CustomModal from "../../CustomModal";
import { HouseHoldContext } from "../../HouseHoldContext";
import LabeledInput from "../../LabeledInput";
import LabeledSelectList from "../../LabeledSelectList";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Button to add event/task/list */
export default function EditList({ list, setModalVisible, itemListId }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [taskId, setTaskId] = useState(list == null ? "" : list.taskId);
  const [title, setTitle] = useState(list == null ? "" : list.title);
  const [hasTask, setHasTask] = useState(
    list == null ? false : list.taskId !== ""
  );

  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  // Get tasks from backend here
  const tasks = [];

  async function handleSubmit() {
    setModalVisible(false);
    if (itemListId != null) {
      // TODO: list items could have tasks, but API doesn't support it yet
      if (list == null) {
        // Create item
        createNewItem(itemListId, title);
      } else {
        // Update item
        updateExistingItem({ ...list, title: title });
      }
    } else {
      if (list == null) {
        // Create list
        const newList = await createNewList(
          "",
          false,
          taskId,
          houseHold.id,
          title
        );
        setHouseHold((oldHouseHold) => {
          return {
            ...oldHouseHold,
            lists: [...oldHouseHold.lists, { ...newList, listItems: [] }],
          };
        });
      } else {
        // Update list
        const updatedList = {
          ...list,
          title: title,
          taskId: taskId,
        };
        setHouseHold((oldHouseHold) => {
          return {
            ...oldHouseHold,
            lists: oldHouseHold.lists.map((oldList) =>
              oldList.id == list.id ? updatedList : oldList
            ),
          };
        });
        await editList(updatedList);
      }
    }
  }

  async function handleDelete() {
    setModalVisible(false);
    if (itemListId != null && list != null) {
      // Delete item
    } else if (list != null) {
      // Delete list
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          lists: oldHouseHold.lists.filter((x) => x.id != list.id),
        };
      });
      await deleteList(list.id);
    }
  }

  return (
    <Pressable
      style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
      onPress={Keyboard.dismiss}
    >
      <Text style={[styles.groupTitleText, { flex: 0 }]}>
        {(list == null ? "New " : "Edit ") +
          (itemListId == null ? "list" : "item")}
      </Text>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <LabeledInput
          value={title}
          label={"TITLE"}
          onChangeText={setTitle}
          placeholder={(itemListId == null ? "List" : "Item") + " title"}
          backgroundColor={colors.border}
        />
        <View style={{ height: 18 }}></View>
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => setHasTask(!hasTask)}
        >
          <Checkbox
            isChecked={hasTask}
            onChecked={() => setHasTask(!hasTask)}
            disableBuiltInState={true}
            size={20}
          />
          <Text
            style={{
              color: colors.primaryText,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
            }}
          >
            Attach task?
          </Text>
        </Pressable>
        {hasTask ? (
          <View>
            <View style={{ height: 18 }}></View>
            <LabeledSelectList
              label={"TASK"}
              setSelected={setTaskId}
              data={tasks}
              save="key"
              backgroundColor={colors.border}
              defaultOption={
                /* TODO: get task name */
                hasTask && list != null && list.taskId !== ""
                  ? {
                      key: taskId,
                      value: taskId,
                    }
                  : null
              }
            />
          </View>
        ) : null}
        <View style={{ height: 24 }}></View>
        <View style={{ flexDirection: "row" }}>
          <CustomButton
            title={list == null ? "CANCEL" : "DELETE"}
            onPress={() => {
              if (list != null) {
                setDeleteConfirmVisible(true);
              } else {
                setModalVisible(false);
              }
            }}
            style={{ flex: 1 }}
          />
          <View style={{ width: 16 }}></View>
          <CustomButton
            title={"DONE"}
            onPress={handleSubmit}
            style={{ flex: 1 }}
          />
          <ConfirmDelete
            modalVisible={deleteConfirmVisible}
            setModalVisible={setDeleteConfirmVisible}
            handleDelete={handleDelete}
            listTitle={list == null ? "" : list.title}
            itemListId={itemListId}
          />
        </View>
      </View>
    </Pressable>
  );
}

/* Modal to confirm deletion */
function ConfirmDelete({
  modalVisible,
  setModalVisible,
  handleDelete,
  listTitle,
  itemListId,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Pressable
        style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
        onPress={Keyboard.dismiss}
      >
        <Text style={[styles.groupTitleText, { flex: 0 }]}>Delete list</Text>
        <View style={{ height: 20 }}></View>
        <View
          style={{
            alignSelf: "stretch",
          }}
        >
          <Text
            style={{
              color: colors.primaryText,
              fontFamily: "Inter_500Medium",
              fontSize: 14,
            }}
          >
            {`Are you sure you want to delete the ${
              itemListId ? "item" : "list"
            } titled "${listTitle}"?`}
          </Text>
          <View style={{ height: 24 }}></View>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              title={"CANCEL"}
              onPress={() => setModalVisible(false)}
              style={{ flex: 1 }}
            />
            <View style={{ width: 16 }}></View>
            <CustomButton
              title={"DELETE"}
              onPress={handleDelete}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </Pressable>
    </CustomModal>
  );
}

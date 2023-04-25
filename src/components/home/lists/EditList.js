import { Keyboard, Pressable, Text, View } from "react-native";

import Checkbox from "../../Checkbox";
import CustomButton from "../../CustomButton";
import CustomModal from "../../CustomModal";
import LabeledInput from "../../LabeledInput";
import LabeledSelectList from "../../LabeledSelectList";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Button to add event/task/list */
export default function EditList({ list, setModalVisible }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [taskId, setTaskId] = useState(list == null ? null : list.taskId);
  const [title, setTitle] = useState(list == null ? "" : list.title);
  const [hasTask, setHasTask] = useState(
    list == null ? false : list.taskId != null
  );

  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

  // Get tasks from backend here
  const tasks = data.tasks.map((task) => {
    return { key: task.id, value: task.title };
  });

  function handleSubmit() {
    if (list == null) {
      let newList = {
        id: data.lists.length,
        title: title,
        items: [],
      };
      if (hasTask && taskId != null) {
        newList.taskId = taskId;
      }
      data.lists.push(newList);
    } else {
      const newListIndex = data.lists.findIndex((x) => x.id == list.id);
      data.lists[newListIndex].title = title;
      delete data.lists[newListIndex].taskId;
      if (hasTask && taskId != null) {
        data.lists[newListIndex].taskId = taskId;
      }
    }
    setModalVisible(false);
  }

  function handleDelete() {
    if (list != null) {
      const deleteListIndex = data.lists.findIndex((x) => x.id == list.id);
      if (deleteListIndex != -1) {
        data.lists.splice(deleteListIndex, 1);
      }
      setModalVisible(false);
    } else {
      setModalVisible(false);
    }
  }

  return (
    <Pressable
      style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
      onPress={Keyboard.dismiss}
    >
      <Text style={[styles.groupTitleText, { flex: 0 }]}>
        {list == null ? "New list" : "Edit list"}
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
          placeholder={"List title"}
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
                hasTask && list != null && list.taskId != null
                  ? {
                      key: taskId,
                      value: data.tasks.find((task) => task.id == taskId).title,
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
            {`Are you sure you want to delete the list titled "${listTitle}"?`}
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

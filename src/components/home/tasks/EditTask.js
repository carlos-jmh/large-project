import { Keyboard, Pressable, Text, View } from "react-native";
import { useContext, useState } from "react";

import Checkbox from "../../Checkbox";
import CustomButton from "../../CustomButton";
import CustomModal from "../../CustomModal";
import { HouseHoldContext } from "../../HouseHoldContext";
import LabeledInput from "../../LabeledInput";
import LabeledSelectList from "../../LabeledSelectList";
import { createNewTask } from "../../../api/mutating";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Modal to add/edit Task */
export default function EditTask({ task, setModalVisible }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [eventId, setEventId] = useState(task == null ? null : task.eventId);
  const [title, setTitle] = useState(task == null ? "" : task.title);
  const [hasEvent, setHasEvent] = useState(task == null ? false : task.eventId);

  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  // Get tasks from backend here
  const tasks = [];

  async function handleSubmit() {
    setModalVisible(false);
    if (task == null) {
      // Create task
      console.log("CREATE TASK", title, eventId);
      const newTask = await createNewTask(
        false,
        false,
        false,
        houseHold.id,
        null,
        null,
        null,
        title
      );
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          tasks: [newTask, ...oldHouseHold.tasks],
        };
      });
    } else {
      // Update task
      console.log("UPDATE TASK", title, eventId);
    }
  }

  async function handleDelete() {
    setModalVisible(false);
    // Delete task
    console.log("DELETE TASK", title, eventId);
  }

  return (
    <Pressable
      style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
      onPress={Keyboard.dismiss}
    >
      <Text style={[styles.groupTitleText, { flex: 0 }]}>
        {task == null ? "New task" : "Edit task"}
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
          placeholder={"Task title"}
          backgroundColor={colors.border}
        />
        {/* <View style={{ height: 18 }}></View>
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
                hasTask && list != null && list.taskId !== ""
                  ? {
                      key: taskId,
                      value: taskId,
                    }
                  : null
              }
            />
          </View>
        ) : null} */}
        <View style={{ height: 24 }}></View>
        <View style={{ flexDirection: "row" }}>
          <CustomButton
            title={task == null ? "CANCEL" : "DELETE"}
            onPress={() => {
              if (task != null) {
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
            taskTitle={task == null ? "" : task.title}
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
  taskTitle,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Pressable
        style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
        onPress={Keyboard.dismiss}
      >
        <Text style={[styles.groupTitleText, { flex: 0 }]}>Delete task</Text>
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
            {`Are you sure you want to delete the task titled "${taskTitle}"?`}
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

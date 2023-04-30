import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import CustomModal from "../CustomModal";
import EditList from "./lists/EditList";
import { getStyles } from "../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import AddEvent from "./events/AddEvent";

/* Button to add event/task/list */
export default function AddButton({}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventModalVisible, setEventModalVisible] = useState(false);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const newTypeEnum = {
    None: 0,
    Event: 1,
    Task: 2,
    List: 3,
  };
  const [newType, setNewType] = useState(newTypeEnum.None);

  return (
    <Pressable
      style={{
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        height: 54,
        width: 54,
        borderRadius: 100,
      }}
      onPress={() => {
        setNewType(newTypeEnum.None);
        setModalVisible(true);
      }}
    >
      <Entypo name="plus" size={32} color={colors.primaryText} />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        {newType == newTypeEnum.None ? (
          <Pressable style={styles.modalView}>
            <Text style={[styles.groupTitleText, { flex: 0 }]}>Add new:</Text>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: "row" }}>
              <AddOptionButton
                title={"Event"}
                onPress={() => {setEventModalVisible(true)}}
                icon={() => (
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color={colors.primaryText}
                  />
                )}
              />
              <AddEvent visible={eventModalVisible} setModalVisible={setEventModalVisible} onClose={() => setEventModalVisible(false)}/>
              <View style={{ width: 16 }}></View>
              <AddOptionButton
                title={"Task"}
                icon={() => (
                  <MaterialCommunityIcons
                    name="checkbox-outline"
                    size={24}
                    color={colors.primaryText}
                  />
                )}
              />
              <View style={{ width: 16 }}></View>
              <AddOptionButton
                title={"List"}
                onPress={() => {
                  setNewType(newTypeEnum.List);
                }}
                icon={() => (
                  <MaterialCommunityIcons
                    name="clipboard-list-outline"
                    size={24}
                    color={colors.primaryText}
                  />
                )}
              />
            </View>
          </Pressable>
        ) : null}
        {newType == newTypeEnum.List ? (
          <EditList setModalVisible={setModalVisible} />
        ) : null}
      </CustomModal>
    </Pressable>
  );
}

function AddOptionButton({ title, icon, onPress }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <Pressable
        onPress={onPress}
        style={{
          width: 70,
          height: 60,
          padding: 6,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colors.primary,
          borderRadius: 8,
        }}
        android_ripple={{ color: colors.highlight }}
      >
        {icon()}
        <Text style={[styles.navbarText, { color: colors.primaryText }]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

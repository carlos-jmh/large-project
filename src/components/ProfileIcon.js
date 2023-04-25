import { Modal, Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import CustomModal from "./CustomModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getStyles } from "./styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

function getInitial(username) {
  let initial = username.charAt(0).toUpperCase();
  return initial;
}
/* Text input with label and optional help text/callback */
export default function ProfileIcon({ username, deleteFunc }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const [bgHue, setBgHue] = useState(Math.floor(Math.random() * 360));

  const styles = getStyles(colors);
  const initial = getInitial(username);
  return (
    <Pressable
      style={[
        styles.profileIcon,
        {
          backgroundColor: `hsl(${bgHue}, ${colors.profileSat}, ${colors.profileLight})`,
        },
      ]}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={styles.iconText}>{initial}</Text>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Pressable style={styles.modalView}>
          <Text style={styles.label}>USERNAME:</Text>
          <View style={{ height: 20 }}></View>
          <Text style={styles.textTitle}>{username}</Text>
          <View style={{ height: 20 }}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={[
                styles.buttonContainer,
                { width: 50, backgroundColor: colors.danger },
              ]}
              onPress={() => {
                deleteFunc(username);
                setModalVisible(!modalVisible);
              }}
            >
              <MaterialCommunityIcons
                name="delete-outline"
                size={24}
                color="black"
              />
            </Pressable>
            <Pressable
              style={[
                styles.buttonContainer,
                {
                  width: 50,
                  backgroundColor: colors.success,
                  marginLeft: 20,
                },
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="checkcircleo" size={24} color="black" />
            </Pressable>
          </View>
        </Pressable>
      </CustomModal>
    </Pressable>
  );
}

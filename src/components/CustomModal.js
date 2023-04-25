import { Modal, Pressable } from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";

/* Button to add event/task/list */
export default function CustomModal({
  modalVisible,
  setModalVisible,
  children,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <Pressable
        style={[styles.modalContainer]}
        onPress={() => {
          setModalVisible(false);
        }}
      >
        {children}
      </Pressable>
    </Modal>
  );
}

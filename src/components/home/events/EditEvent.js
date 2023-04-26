import React, { useState } from 'react';
import { TextInput,Pressable, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from '../../styles';
import CustomModal from '../../CustomModal';
import LabeledInput from '../../LabeledInput';

export default function EditEvent({ event, visible, onClose, onSave }) {
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const handleSave = () => {
    onSave({ id: event.id, title, date });
    onClose();
  };

  return (
    <CustomModal modalVisible={visible} setModalVisible={onClose}>
      <View style={[styles.modalView]}>
        <Text style={styles.modalTitle}>Edit Event</Text>
        <LabeledInput
          value={title}
          label={"TITLE"}
          onChangeText={setTitle}
          placeholder={"Event title"}
          backgroundColor={colors.border}
        />
        {/* <TextInput
          style={[styles.textInput, styles.modalTextInput]}
          onChangeText={setTitle}
          value={title}
          placeholder="Event title"
          placeholderTextColor={colors.gray}
        /> */}
        <TextInput
          style={[styles.textInput, styles.modalTextInput]}
          onChangeText={setDate}
          value={date}
          placeholder="Event date"
          placeholderTextColor={colors.gray}
        />
        <View style={styles.modalButtonsContainer}>
          <Pressable style={[styles.modalButton, styles.modalButtonSave]} onPress={handleSave}>
            <Text style={[styles.modalButtonText, styles.modalButtonTextSave]}>Save</Text>
          </Pressable>
          <Pressable style={[styles.modalButton, styles.modalButtonCancel]} onPress={onClose}>
            <Text style={[styles.modalButtonText, styles.modalButtonTextCancel]}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </CustomModal>
  );
}

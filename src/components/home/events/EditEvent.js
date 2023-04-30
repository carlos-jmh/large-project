import React, { useState } from 'react';
import { TextInput, Keyboard , Pressable, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from '../../styles';
import CustomModal from '../../CustomModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from '../../CustomButton';
import LabeledInput from '../../LabeledInput';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EditEvent({ event, visible, onClose, onSave }) {
  const [title, setTitle] = useState(event.title);
  const [startDate, setStartDate] = useState(new Date(event.date));
  const [endDate, setEndDate] = useState(new Date(event.date));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const [frequency, setFrequency] = useState(event.frequency); // default value
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const handleSave = () => {
    onSave({ id: event.id, title, startDate, endDate, frequency });
    onClose();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowDatePicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <CustomModal modalVisible={visible} setModalVisible={onClose}>
      <View style={[styles.modalView]}>
        <Text style={styles.householdButtonText}>Edit Event</Text>
        <LabeledInput
          value={title}
          label={"TITLE"}
          onChangeText={setTitle}
          placeholder={"Event title"}
          backgroundColor={colors.border}
        />
  
        <Text style={[styles.label, { marginTop:10, textAlign: 'left', display:"flex", alignSelf:'baseline' }]}>DATE & TIME</Text>
        <View style={styles.dateInputContainer}>
          <Pressable style={styles.dateInput} onPress={showDatepicker}>
            <Text style={styles.dateInputText}>{formatDate(startDate)}</Text>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="datetime"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={{marginTop: 10}}>
          <Text style={[styles.label, { textAlign: 'left', marginBottom:10 }]}>FREQUENCY</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <BouncyCheckbox
              text="Once"
              isChecked={frequency === "Once"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("Once");
                setEndDate(startDate);
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Daily"
              isChecked={frequency === "Daily"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("Daily");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Weekly"
              isChecked={frequency === "Weekly"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("Weekly");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 7)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Monthly"
              isChecked={frequency === "Monthly"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("Monthly");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 30)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
          </View>
        </View>
        <Text style={[styles.label, { textAlign: 'left', marginTop: 10 }]}>END DATE</Text>
        <View style={styles.dateInputContainer}>
          <Pressable style={styles.dateInput} onPress={showDatepicker}>
            <Text style={styles.dateInputText}>{formatDate(endDate)}</Text>
          </Pressable>
          {showDatePicker && (Platform.OS === 'ios') &&(
            <DateTimePicker
              value={endDate}
              mode="datetime"
              display="default"
              minimumDate={startDate}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || endDate;
                setShowDatePicker(Platform.OS === 'ios');
                setEndDate(currentDate);
              }}
            />
          )}
          {showDatePicker && (Platform.OS === 'android') &&(
            <DateTimePicker
              value={endDate}
              mode="datetime"
              display="default"
              minimumDate={startDate}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || endDate;
                setShowDatePicker(false);
                setEndDate(currentDate);
              }}
            />
          )}
        </View>

        <View style={styles.modalButtonsContainer}>
          <CustomButton
            title={"DELETE"}
            onPress={() => setDeleteConfirmVisible(true)}
            style={{ flex: 1 }}
          />
          <CustomButton
            title={"DONE"}
            onPress={handleSave}
            style={{ flex: 1 , marginLeft: 8}}
          />
        </View>
        <ConfirmDelete
          modalVisible={deleteConfirmVisible}
          setModalVisible={setDeleteConfirmVisible}
          handleDelete={onClose}
          eventTitle={title}
          frequency = {frequency}
        />
      </View>
    </CustomModal>
  );
}
function ConfirmDelete({
  modalVisible,
  setModalVisible,
  handleDelete,
  eventTitle,
  frequency
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [isRecurrent, setIsRecurrent] = useState(false);


  if(frequency !== "Once"){
    setIsRecurrent(true);
  }
  
  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Pressable
        style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
        onPress={Keyboard.dismiss}
      >
        <Text style={[styles.groupTitleText, { flex: 0 }]}>Delete Event</Text>
        <View style={{ height: 20 }}></View>
        <View style={{ alignSelf: "stretch"}}>
          {isRecurrent ? (
            <View>
              <Text style={{color: colors.primaryText, fontFamily: "Inter_500Medium", fontSize: 14,}}>
                {`This is a recurring event. Do you want to delete all instances of this event?`}
              </Text>
              <CustomButton
                title={"ALL INSTANCES"}
                onPress={() => setModalVisible(false)}
                style={{ flex: 1 }}
              />
              <View style={{ width: 16 }}></View>
              <CustomButton
                title={"THIS INSTANCE"}
                onPress={() => setModalVisible(false)}
                style={{ flex: 1 }}
              />
            </View>
          ) : (
            <View>
              <Text
                style={{
                  color: colors.primaryText,
                  fontFamily: "Inter_500Medium",
                  fontSize: 14,
                }}
              >
                {`Are you sure you want to delete the list titled "${eventTitle}"?`}
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
          )}
        </View>
      </Pressable>
    </CustomModal>
  );
}


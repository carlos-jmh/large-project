import React, { useState, useContext } from 'react';
import { TextInput, Keyboard , Pressable, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from '../../styles';
import CustomModal from '../../CustomModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from '../../CustomButton';
import LabeledInput from '../../LabeledInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {HouseHoldContext} from '../../HouseHoldContext';
import {generateEventHandler} from '../../../api/mutating';

export default function AddEvent({ visible, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [frequency, setFrequency] = useState("Once"); // default value
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const {houseHold}= useContext(HouseHoldContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  async  function handleSave  () {
    let newEvent = {
        calendarId : houseHold.calendarId,
        title: title,
        frequency: frequency.toUpperCase(),
        sourceDate: startDate,
        endDate: endDate,
        eventType: "EVENT",
    }
    console.log("Event created", newEvent)
    const result = await generateEventHandler(
      newEvent.calendarId, "", newEvent.frequency, newEvent.sourceDate, newEvent.endDate, newEvent.eventType, newEvent.title)
    console.log(result)
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

  return(
    <CustomModal modalVisible={visible} setModalVisible={onClose}>
      <View style={styles.modalView}>
        <Text style={styles.householdButtonText}>Add Event</Text>
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
          {showDatePicker && (
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
        <ConfirmCancel
          modalVisible={deleteConfirmVisible}
          setModalVisible={setDeleteConfirmVisible}
          handleDelete={onClose}
          eventTitle={title}
        />
      </View>
    </CustomModal>
  );
}
function ConfirmCancel({
    modalVisible,
    setModalVisible,
    handleDelete,
    eventTitle,
  }) {
    const { colors } = useTheme();
    const styles = getStyles(colors);
  
    return (
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <Pressable
          style={[styles.modalView, { alignSelf: "stretch", margin: 16 }]}
          onPress={Keyboard.dismiss}
        >
          <Text style={[styles.groupTitleText, { flex: 0 }]}>Cancel event</Text>
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
              {`Are you sure you want to cancel creating the event : "${eventTitle}"?`}
            </Text>
            <View style={{ height: 24 }}></View>
            <View style={{ flexDirection: "row" }}>
              <CustomButton
                title={"NO"}
                onPress={() => setModalVisible(false)}
                style={{ flex: 1 }}
              />
              <View style={{ width: 16 }}></View>
              <CustomButton
                title={"YES"}
                onPress={handleDelete}
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </Pressable>
      </CustomModal>
    );
  }
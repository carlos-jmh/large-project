import React, { useState, useContext } from 'react';
import { TextInput, Keyboard , Pressable, View, Text, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from '../../styles';
import CustomModal from '../../CustomModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from '../../CustomButton';
import LabeledInput from '../../LabeledInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {HouseHoldContext} from '../../HouseHoldContext';
import {generateEventHandler} from '../../../api/mutating';
import {fetchEventHandlerById} from '../../../api/fetching';
import {refreshCalendar} from './Events';


export default function AddEvent({ visible, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [frequency, setFrequency] = useState("once"); // default value
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const {houseHold,setHouseHold}= useContext(HouseHoldContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  async  function handleSave  () {
    let newEvent = {
        calendarId : houseHold.calendarId,
        title: title,
        frequency: frequency.toUpperCase(),
        sourceDate: startDate,
        endDate: (frequency.toUpperCase() === "ONCE") ? startDate : endDate,
        eventType: "EVENT",
    }
    console.log("Event created", newEvent)
    const result = await generateEventHandler(
    newEvent.calendarId, "", newEvent.frequency, newEvent.sourceDate, newEvent.endDate, newEvent.eventType, newEvent.title)
    const newEventHandler = await fetchEventHandlerById(result)
    await refreshCalendar(houseHold.calendarId, setHouseHold);
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
    if(Platform.OS === 'ios' ){
      setShowDatePicker(Platform.OS === 'ios');
    }
    if(Platform.OS === 'android' ){
      setShowDatePicker(false);
    }
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25}}>
            <BouncyCheckbox
              text="Once"
              isChecked={frequency === "once"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("once");
                setEndDate(startDate);
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Daily"
              isChecked={frequency === "daily"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("daily");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Weekly"
              isChecked={frequency === "weekly"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("weekly");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 7)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
            <BouncyCheckbox
              text="Monthly"
              isChecked={frequency === "monthly"}
              disableBuiltInState = {true}
              onPress={() => {
                setFrequency("monthly");
                setEndDate(new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 30)));
              }}
              iconStyle={{borderColor: colors.border}}
              textStyle = {{color: colors.primaryText,  paddingRight: 10 ,fontSize: 16, textDecorationLine : 'none'}}
            />
          </View>
        </View>
        { frequency !== "once" && (
          <>
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
          </>
        )}
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
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";
import data from '../mockData';

export default function MyCalendar({getEventsByDate}) {
  const [markedDates, setMarkedDates] = useState({});
  const [selected, setSelected] = useState((new Date()).toDateString);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    // Loop through the data and add each date to the markedDates object
    const newMarkedDates = {};
    data.eventHandlers.forEach(handler => {
      handler.events.forEach(event => {
        newMarkedDates[event.date.substring(0, 10)] = {
          marked: true,
          dotColor: colors.primary,
          selected: false,
        };
      });
    });
    setMarkedDates(newMarkedDates);
  }, []
  );
  
  console.log(markedDates) 
  return (
    <View style = {{borderRadius:20}}>
      <Calendar
        markedDates={markedDates}  
        theme={styles.calendarStyles}
        onDayPress={day => {
            getEventsByDate(day.dateString)
            setSelected(day.dateString)
        }}
        selected = {selected}
      />
    </View>
  );
}
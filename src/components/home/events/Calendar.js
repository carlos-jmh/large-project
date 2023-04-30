import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

export default function MyCalendar({ events , callBack}) {
  const [markedDates, setMarkedDates] = useState({});
  const [selected, setSelected] = useState("");
  const { colors } = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    // Loop through the data and add each date to the markedDates object
    const newMarkedDates = {};
    if (events) {
    events.forEach((event) => {
        newMarkedDates[event.date.substring(0, 10)] = {
          marked: true,
          dotColor: colors.primary,
          selected: false,
        };
      });
    setMarkedDates(newMarkedDates);
  }
  }, [events]);

  const handleDayPress = (day) => {
    const newMarkedDates = { ...markedDates };
    if (selected) {
      newMarkedDates[selected] = {
        ...newMarkedDates[selected],
        selected: false,
        dotColor: colors.primary,
      };
    }
    if (newMarkedDates[day.dateString]) {
      newMarkedDates[day.dateString] = {
        ...newMarkedDates[day.dateString],
        selected: true,
        selectedColor: colors.primary,
      };
    } else {
      newMarkedDates[day.dateString] = {
        selected: true,
        selectedColor: colors.primary,
        dotColor: colors.primary,
      };
    }
    setMarkedDates(newMarkedDates);
    setSelected(day.dateString);
    callBack(day.dateString);
  };

  return (
    <View style={{ borderRadius: 20 }}>
      <Calendar
        onDayPress= {handleDayPress}
        style={{ borderRadius: 20, padding: 10 }}
        markedDates={markedDates}
        theme={styles.calendarStyles}
      />
    </View>
  );
}

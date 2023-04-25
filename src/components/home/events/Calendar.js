import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Calendar } from "react-native-calendars";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

export default function MyCalendar({ getEventsByDate }) {
  const [markedDates, setMarkedDates] = useState({});
  const [selected, setSelected] = useState("");
  const { colors } = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    // Loop through the data and add each date to the markedDates object
    const newMarkedDates = {};
    data.eventHandlers.forEach((handler) => {
      handler.events.forEach((event) => {
        newMarkedDates[event.date.substring(0, 10)] = {
          marked: true,
          dotColor: colors.primary,
          selected: false,
        };
      });
    });
    setMarkedDates(newMarkedDates);
  }, []);

  if (selected) {
    markedDates[selected] = {
      selected: true,
      selectedColor: colors.primary,
    };
  }

  return (
    <View style={{ borderRadius: 20 }}>
      <Calendar
        onDayPress={(day) => {
          markedDates[selected] = {
            marked: true,
            selected: false,
            dotColor: colors.primary,
          };
          setSelected(day.dateString);
          getEventsByDate(day.dateString);
        }}
        style={{ borderRadius: 20, padding: 10 }}
        markedDates={markedDates}
        theme={styles.calendarStyles}
      />
    </View>
  );
}

import { Text, View, SectionList, ScrollView } from "react-native";

import HeaderBar from "../HeaderBar";
import Navbar from "../Navbar";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";
import MyCalendar from "./Calendar";
import mockData from "../mockData";
import Event from "./Event";
import { useState } from "react";

/* Events page */
export default function Events({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [events, setEvents] = useState();
  const [date, setDate] = useState(getTodaysDate());
  // Get actual eventHandlers from the backend here

  function getEventsByDate(date) {
    // First, filter the tasks to get all the tasks with events (i.e., tasks with an "eventHandlerId" property)
    const tasksWithEvents = data.tasks.filter(task => task.eventHandlerId !== undefined);
  
    // Next, use the "reduce" method to group the events by date
    const eventsByDate = tasksWithEvents.reduce((acc, task) => {
      const eventHandler = data.eventHandlers.find(handler => handler.id === task.eventHandlerId);
      if (eventHandler) {
        const event = eventHandler.events.find(event => event.date.startsWith(date));
        if (event) {
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push({
            title: eventHandler.title,
            time: event.date,
          });
        }
      }
      return acc;
    }, {});
  
    // Finally, return the events for the given date (or an empty array if there are no events on that date)
    setEvents(eventsByDate[date])
    setDate(date)
    return eventsByDate[date] || [];
  }

  function getTodaysDate(){
    let today = new Date();
    let getYear = today.toLocaleString("default", { year: "numeric" });
    let getMonth = today.toLocaleString("default", { month: "2-digit" });
    let getDay = today.toLocaleString("default", { day: "2-digit" });
    
    return getYear +"-" + getMonth + "-" + getDay;    
  }
  function formatDate(date) {
    if (date) {
      let month = date.substring(5, 7);
      month = new Date(Date.parse(date)).toLocaleString('en-US', { month: 'long' });
      let year = date.substring(0, 4);
      let day = parseInt(date.substring(8), 10);
      return month + " " + day + getDaySuffix(day) + ", " + year;
    }
    return undefined;
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={route.params.household.name} screenName={route.name} />
      <View style={{ flex: 1}}>
        <View style= {{margin:20, borderRadius:20}}>
          <MyCalendar getEventsByDate={getEventsByDate}/>
        </View>
        <Text style = {[styles.text, {fontSize:25}]}>Events on {formatDate(date)}</Text>
        <ScrollView>
        {events === undefined ? (
        <Text style = {[styles.p, {fontSize:15, textAlign:'left',paddingLeft:20,paddingTop:20}]}>No events for this date.</Text>
      ) : (
        events.map((event) => <Event key={event.id} event={event} />)
      )}
      </ScrollView>
      </View>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={route.params.household}
      />
    </View>
  );
}

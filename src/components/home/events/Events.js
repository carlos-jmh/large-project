import { Text, View, SectionList, ScrollView } from "react-native";

import HeaderBar from "../HeaderBar";
import Navbar from "../Navbar";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";
import MyCalendar from "./Calendar";
import Event from "./Event";
import { useContext, useState, useEffect } from "react";
import { HouseHoldContext } from "../../HouseHoldContext";
import { useEventData, useEventHandlerData } from '../../../api/hooks';
import { Auth as CognitoAuth } from "aws-amplify";

/* Events page */
export default function Events({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [events, setEvents] = useState();
  const [date, setDate] = useState(getTodaysDate());
  const { houseHold, setHouseHold } = useContext(HouseHoldContext);


  const [eventData] = useEventData({
    calendarId: houseHold.calendarId,
  })

  const [eventHandlerData] = useEventHandlerData({
    calendarId: houseHold.calendarId,
  })



  useEffect(() => {
    if( eventData && eventData.length > 0) {
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          events: eventData,
        }
      })
    }
    console.log(eventData)
  }, [eventData])

  useEffect(() => {
    if( eventHandlerData && eventHandlerData.length > 0) {
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          eventHandlers: eventHandlerData,
        }
      })
    }
    console.log(eventHandlerData)
  }, [eventHandlerData])
  
  function getEventsByDate(today) {
    const eventsToday = [];
    for (const [key, value] of Object.entries(houseHold.events)) {
      if (value.date === today) {
        eventsToday.push(value);
      }
    }
    return eventsToday;
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
  
  const handleCalendarCallback = (date) => {
    setDate(date);
  };

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
      <HeaderBar title={houseHold.name} screenName={route.name} />
      <View style={{ flex: 1}}>
        <View style= {{margin:20, borderRadius:20}}>
          <MyCalendar events = {houseHold.events} callBack = {handleCalendarCallback}/>
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
        household={houseHold}
      />
    </View>
  );
}

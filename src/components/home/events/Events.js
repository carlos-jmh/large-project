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
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
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
  
  function getEventsAndHandlersByDate(today) {
    const eventsToday = [];
    //get eventhandler title,frequency, all events related 
    for (const [key, value] of Object.entries(houseHold.events)) {
      if (value.date.substring(0,10) === today) {
        const eventHandler = houseHold.eventHandlers.find((handler) => handler.id === value.eventHandlerId);
        eventsToday.push({...value , eventHandler});
        }
      }
    setEvents(eventsToday);
    console.log("Todays events", eventsToday)
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
      let month = parseInt(date.substring(5, 7), 10);
      let year = date.substring(0, 4);
      let day = parseInt(date.substring(8), 10);
      let monthName;
      switch(month) {
        case 1:
          monthName = "January";
          break;
        case 2:
          monthName = "February";
          break;
        case 3:
          monthName = "March";
          break;
        case 4:
          monthName = "April";
          break;
        case 5:
          monthName = "May";
          break;
        case 6:
          monthName = "June";
          break;
        case 7:
          monthName = "July";
          break;
        case 8:
          monthName = "August";
          break;
        case 9:
          monthName = "September";
          break;
        case 10:
          monthName = "October";
          break;
        case 11:
          monthName = "November";
          break;
        case 12:
          monthName = "December";
          break;
        default:
          monthName = "";
      }
      return monthName + " " + day + getDaySuffix(day) + ", " + year;
    }
    return undefined;
  }

  const handleCalendarCallback = (date) => {
    console.log("Calendar callback", date)
    setDate(date);
    getEventsAndHandlersByDate(date);
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
        <Text style = {[styles.text, {fontSize:25}]}>Events on {formatDate(date)} </Text>
        <ScrollView>
        {events === undefined ? (
        <Text style = {[styles.p, {fontSize:15, textAlign:'left',paddingLeft:20,paddingTop:20}]}>No events for this date.</Text>
      ) : (
        events.map((event) =>  {
        console.log("Event passed", event)
        return(
        <Event key={event.id} event={event} />
        )}) 
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

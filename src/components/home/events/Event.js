import React from 'react';
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";
import { Pressable, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Event = ({ event }) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const { title, date } = event;

  return (
    <Pressable
      style={{
        margin:20,
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.primary,
        flexDirection: "row",
      }}
      android_ripple={{ color: colors.highlight }}
    >
    <AntDesign name="infocirlceo" size={18} color={colors.text} style= {{margin:5}} />
      <View style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
        <Text
          style={{
            paddingLeft:20,
            color: colors.primaryText,
            fontFamily: "Inter_500Medium",
            fontSize: 15,
          }}
        >
          {title}
        </Text>
        <EventInfo listTitle={"Myrabi"} date={event.date} />
      </View>
    </Pressable>
  );
};

function TaskInfoLabel({ text, iconName }) {
    const { colors } = useTheme();
    const styles = getStyles(colors);
  
    return (
      <View style={{ flexDirection: "row", alignItems: "center" , paddingLeft:20, paddingTop:2}}>
        <FontAwesome5 name={iconName} size={14} color={colors.primaryTextFaded} />
        <View style={{ width: 6 }} />
        <Text
          style={{
            color: colors.primaryTextFaded,
            fontFamily: "Inter_400Regular",
            fontSize: 14,
          }}
        >
          {text}
        </Text>
      </View>
    );
  }

function EventInfo({ listTitle, date }) {
    const { colors } = useTheme();
    const styles = getStyles(colors);
  
    let dateInfo = null;
    if (date) {
      let hours = date.getHours();
      const m = hours >= 12 ? "PM" : "AM";
      hours %= 12;
      if (hours == 0) {
        hours = 12;
      }
      const minutes = date.getMinutes();
  
      dateInfo = (
        <TaskInfoLabel
          text={`${hours}${minutes != 0 ? `:${minutes}` : ""} ${m}`}
          iconName="clock"
        />
      );
    }
  
    let listInfo = null;
    if (listTitle) {
      listInfo = <TaskInfoLabel text={listTitle} iconName="check-square" />;
    }
  
    if (listTitle || date) {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {dateInfo}
          {listTitle && date ? <View style={{ width: 12 }} /> : null}
          {listInfo}
        </View>
      );
    } else {
      return null;
    }
  }

export default Event;
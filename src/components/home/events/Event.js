import React , {useState} from 'react';
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";
import { Pressable, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import EditEvent from './EditEvent';

const Event = ({ event }) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [modalVisible, setModalVisible] = useState(false);
    const { title, date } = event;


    const handleSave = (editedEvent) => {
      // handle the save logic
  }
  return (
    <Pressable
      style={{
        marginVertical:8,
        marginHorizontal:20,
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.primary,
        flexDirection: "row",
      }}
      android_ripple={{ color: colors.highlight }}
      onLongPress={() => setModalVisible(true)}
    >
    <AntDesign name="infocirlceo" size={22} color={colors.background} style= {{margin:8}} />
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
        <EventInfo listTitle={"Task"} date={date} />
      </View>
      <EditEvent event={event} visible={modalVisible} onClose={() => setModalVisible(false)} onSave={handleSave} />
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
    let eventDate = new Date(date);
    console.log(eventDate)
    if (eventDate) {
      let hours = eventDate.getHours();
      const m = hours >= 12 ? "PM" : "AM";
      hours %= 12;
      if (hours == 0) {
        hours = 12;
      }
      const minutes = eventDate.getMinutes();
  
      dateInfo = (
        <TaskInfoLabel
          text={`${hours}${minutes != 0 ? `:${minutes}` : ""} ${m}`}
          iconName="clock"
        />
      );
    }
  

  
    if (date) {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {dateInfo}
        </View>
      );
    } else {
      return null;
    }
  }

export default Event;
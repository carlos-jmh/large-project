import { Pressable, Text, TextInput, View, Modal} from "react-native";
import { getStyles } from "./styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

let iconColors = ['#74EC80', '#7480EC', '#EC7474','#74ECD6']
let randomColor = iconColors[Math.floor(Math.random() * iconColors.length)]
function getInitial(username){
  let initial = (username.charAt(0)).toUpperCase()
  
  return initial
}
/* Text input with label and optional help text/callback */
export default function ProfileIcon ({
    username,
    list
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const initial = getInitial(username)
  return (
    <Pressable style = {[styles.profileIcon, {backgroundColor: randomColor}]} onPress={() => setModalVisible(!modalVisible)}>
            <Text style = {styles.iconText}>{initial}</Text>
            <Modal 
            animationType="fade" transparent= {true} visible = {modalVisible}
            onRequestClose={()=> {
              Alert.alert("popup has been closed");
              setModalVisible(!modalVisible)
            }} >
              <View style = {[styles.modalContainer] }>
                <View style = {styles.modalView}>
                <Text style = {styles.label}>USERNAME:</Text>
                <View style = {{height:20}}></View>
                <Text style = {styles.textTitle}>{username}</Text>
                <View style = {{height:20}}></View>
                <View style = {{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Pressable style = {[styles.buttonContainer , {width:50 , backgroundColor: '#d11a2a'}]}>
                    <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style = {[styles.buttonContainer , {width:50 , backgroundColor: '#008000', marginLeft: 20}]} onPress={()=> setModalVisible(!modalVisible)}>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                  </Pressable>
                </View>
                </View>
              </View>
            </Modal>
    </Pressable>

    
  );
}

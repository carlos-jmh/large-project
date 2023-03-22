import { ScrollView, Text, View } from "react-native";

import HouseholdButton from "./HouseholdButton";
import { getStyles } from "./styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Login page */
// TODO: Connect to backend
export default function InitialPage({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  //TODO: GET households from backend .
  const households = [
    {
    id: "1",
    name: "Dorm",
    },
    {
    id: "2",
    name: "Apartment",
    },
  ];
//TODO: Change John Doe with Account Name.
  return (
    
    <View style={styles.container}>
      <View >
      <Text style = {styles.p}>Hi there,</Text>
      <Text style = {styles.header}>John Doe</Text>
      </View>
      <View>
      <Text style = {styles.p}>Please choose your household</Text>
      <View style={{ height: 22 }}></View>
      <View>
      {households.map((household) => {
        return (
          <View>
            <HouseholdButton style = {styles.householdButtonContainer} title= {household.name}> </HouseholdButton>
            <View style={{ height: 22 }}></View>
            </View>
        );
      })}
      </View>
      <View style={styles.circleButton}>
        <Text style = {styles.circlePlus}>+</Text>
      </View>
      </View>
    </View>
  );
}

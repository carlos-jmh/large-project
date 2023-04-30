import { Pressable, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import HouseholdButton from "./HouseholdButton";
import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";

import { useEffect } from "react";
import { fetchHouseHolds } from "../../api/fetching";
import { HouseHoldContext } from "../HouseHoldContext";

/* Login page */
export default function InitialPage({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [username, setUsername] = useState(route.params?.user.username ?? "Unknown user");
  const [houseHolds, setHouseHolds] = useState([]);

  const { setHouseHold } = useContext(HouseHoldContext);

  const handleHouseHoldPress = (houseHold) => {
    //first fetch events, lists, and tasks
    // 
    setHouseHold(houseHold);
    console.log(houseHold)
    navigation.navigate("Events")
  }

  // on page load
  useEffect(() => {
    async function fetchData() {
        const fetchedHouseHolds = await fetchHouseHolds();
        if (isMounted) {
          setHouseHolds(fetchedHouseHolds);
        }
    }

    let isMounted = true;
    fetchData();

    return () => {
      isMounted = false
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.p}>Hi there,</Text>
        
        <Text style={styles.header}>{ username }</Text>
      </View>
      <View>
        <Text style={styles.p}>Please choose your household</Text>
        <View style={{ height: 22 }}></View>
        <View>
          {houseHolds.map((houseHold, index) => {
            return (
              <View key={index}>
                <HouseholdButton
                  style={styles.householdButtonContainer}
                  title={houseHold.name}
                  onPress={() => handleHouseHoldPress(houseHold)}
                >
                  {" "}
                </HouseholdButton>
                <View style={{ height: 22 }}></View>
              </View>
            );
          })}
        </View>
        <Pressable style={styles.circleButton} onPress={() => navigation.navigate("CreateHousehold")} >
            <Entypo name="plus" size={36} color={colors.primaryText}  />
        </Pressable>
      </View>
    </View>
  );
}

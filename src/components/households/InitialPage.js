import { Pressable, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import HouseholdButton from "./HouseholdButton";
import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";

import { useEffect } from "react";
import { getCognitoUser, getCognitoToken } from "../auth/auth";

/* Login page */
// TODO: Connect to backend
export default function InitialPage({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [username, setUsername] = useState("");
  const [houseHolds, setHouseHolds] = useState([]);

  const getUserProfile = async () => {
    try {
      const user = await getCognitoUser();
      const token = await getCognitoToken();

      const userProfile = await API.graphql(
        graphqlOperation(
          `query GetUserProfileByOwner($owner: String!) {
            userProfileByOwner(owner: $owner) {
              items {
                id
              }
            }
          }`,
          { owner: user.attributes.sub }
        ),
        { Authorization: token }
      );

      return userProfile.data.userProfileByOwner.items[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getUsersHouseHolds = async (userProfileId) => {
    try {
      const token = await getCognitoToken();

      const houseHolds = await API.graphql(
        graphqlOperation(
          `query GetHouseHoldMembersByUserProfileId($userProfileId: ID!) {
            houseHoldMembersByUserProfileId(userProfileId: $userProfileId) {
              items {
                HouseHold {
                  id
                  name
                }
              }
            }
          }`,
          { userProfileId: userProfileId }
        ),
        { Authorization: token }
      );

      return houseHolds.data.houseHoldMembersByUserProfileId.items.map(
        (houseHoldMember) => houseHoldMember.HouseHold
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // get the user's profile id, then get the user's households
  const fetchHouseHolds = async () => {
    const userProfile = await getUserProfile();

    if (userProfile) {
      const houseHolds = await getUsersHouseHolds(userProfile.id);
      setHouseHolds(houseHolds);
    }
  };

  // on page load
  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getCognitoUser();
        setUsername(user.username);
  
        await fetchHouseHolds();
        
        return subscription;
      } catch (error) {
        console.log(error);
      }
    }
  
    const subscription = fetchData();
  
    return () => {
      subscription.unsubscribe();
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
                  onPress={() =>
                    navigation.navigate("Events", { household: houseHold })
                  }
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

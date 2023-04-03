import { Pressable, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import HouseholdButton from "./HouseholdButton";
import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";
import CreateHousehold from "./CreateHousehold"
import { Button } from "react-native-web";
import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";
import { DataStore } from "aws-amplify";
import { Auth } from "aws-amplify";
import { HouseHold } from "../../models";
import { useEffect } from "react";

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

  const getUserProfile = async () => {
    // API call to get userProfileByOwner, Owner beingthe user's sub
    // Using custom Lambda Authorizer that takes in the user's AccessToken
    const user = await Auth.currentAuthenticatedUser();

    try {
      console.log("running getUserProfile");

      const userProfile = await API.graphql(
        graphqlOperation(
          `query GetUserProfileByOwner($owner: ID!) {
            userProfileByOwner(owner: $owner) {
              items {
                id
              }
            }
          }`,
          { owner: user.attributes.sub }
        ),
        { Authorization: `Banana ${user.signInUserSession.accessToken.jwtToken}` }
      );

      console.log("returning userProfile: ", userProfile);
      // return the items
      return userProfile;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getUsersHouseHolds = async (userProfileId) => {
    const houseHolds = await API.graphql(
      graphqlOperation(
        `query GetHouseHoldMembersByUserProfileId($userProfileId: ID!) {
          houseHoldMembersByUserProfileId(userProfileId: $userProfileId) {
            items {
              houseHoldId
            }
          }
        }`,
        { userProfileId: userProfileId }
      ),
      { Authorization: user.signInUserSession.accessToken.jwtToken }
    );

    return houseHolds;
  };

  // on page load, get the user's profile id
  useEffect(() => {
    console.log("running!");

    const getUserProfileId = async () => {
      const userProfile = await getUserProfile();
      console.log(userProfile);
    };

    getUserProfileId();
  }, []);


  //TODO: Change John Doe with Account Name.
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.p}>Hi there,</Text>
        <Text style={styles.header}>John Doe</Text>
      </View>
      <View>
        <Text style={styles.p}>Please choose your household</Text>
        <View style={{ height: 22 }}></View>
        <View>
          {households.map((household, index) => {
            return (
              <View key={index}>
                <HouseholdButton
                  style={styles.householdButtonContainer}
                  title={household.name}
                  onPress={() =>
                    navigation.navigate("Events", { household: household })
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

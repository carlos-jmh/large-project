import { Pressable, Text, View } from "react-native";

import HeaderBar from "./HeaderBar";
import Navbar from "./Navbar";
import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";

import { useState } from "react";
import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";
import { getCognitoToken } from "../auth/auth";

/* Events page */
export default function Events({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [invitedUsers, setInvitedUsers] = useState(["evoth-test"]);

  const addUsersToHouseHold = async (invitedUsers, houseHoldId) => {
    console.log("Adding users to household");
    const failedUsers = [];
    const token = await getCognitoToken();

    // This is the mutation in the schema
    // addUserToHouseHold(cognitoUsername: String!, houseHoldId: String!): String @function(name: "addUserToHouseHold-${env}") @auth(rules: [{allow: custom}])

    // auth issue?
    await Promise.all(
      invitedUsers.map(async (user) => {
        try {
          await API.graphql(
            graphqlOperation(
              `mutation AddUserToHouseHold($cognitoUsername: String!, $houseHoldId: String!) {
                addUserToHouseHold(cognitoUsername: $cognitoUsername, houseHoldId: $houseHoldId)
              }`,
              { cognitoUsername: user.name, houseHoldId: houseHoldId }
            ),
            { Authorization: `Banana ${token}` }
          );
        }
        catch (error) {
          failedUsers.push({ name: user.name, error: error.errors[0].message });
        }
      })
    );

    return failedUsers;
  };

  async function handleAddUsers() {
    console.log("route params: ", route.params);
    const failedUsers = await addUsersToHouseHold(invitedUsers, route.params.household.id);
    console.log("Failed to add users to household: ", failedUsers);
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={route.params.household.name} />
      <View style={{ flex: 1 }}>
        {/* button that calls handleAddUsers, for now */}
        <Pressable
          style={styles.button}
          onPress={() => { handleAddUsers() }}
        >
          <Text style={styles.buttonText}>Add Users</Text>
        </Pressable>
      </View>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={route.params.household}
      />
    </View>
  );
}

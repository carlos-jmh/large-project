import { Pressable, Text, View } from "react-native";

import { API } from "aws-amplify";
import CustomButton from "../CustomButton";
import LabeledInput from "../LabeledInput";
import ProfileIcon from "../ProfileIcon";
import { getCognitoToken } from "../auth/auth";
import { getStyles } from "../styles";
import { graphqlOperation } from "@aws-amplify/api";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

export default function CreateHousehold({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [invitedUsers, setInvitedUsers] = useState([]);
  const [houseHoldName, setHouseHoldName] = useState("");
  const [usernameToAdd, setUsernameToAdd] = useState("");

  function handleInvitedUserAdd() {
    setInvitedUsers([...invitedUsers, { name: usernameToAdd }]);
    setUsernameToAdd("");
  }

  function handleInvitedUserDelete(username) {
    setInvitedUsers(invitedUsers.filter((item) => item.name !== username));
  }

  const createHouseHold = async () => {
    try {
      const token = await getCognitoToken();

      const createNewHouseHoldResponse = await API.graphql(
        graphqlOperation(
          `mutation CreateNewHouseHold($houseHoldName: String!) {
            createNewHouseHold(houseHoldName: $houseHoldName)
          }`,
          { houseHoldName: houseHoldName }
        ),
        { Authorization: token }
      );

      const newHouseHoldId = createNewHouseHoldResponse.data.createNewHouseHold;

      const getHouseHoldResponse = await API.graphql(
        graphqlOperation(
          `query GetHouseHold($id: ID!) {
            getHouseHold(id: $id) {
              id
              name
            }
          }`,
          { id: newHouseHoldId }
        ),
        { Authorization: token }
      );

      const newHouseHold = getHouseHoldResponse.data.getHouseHold;

      return newHouseHold;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const addUsersToHouseHold = async (invitedUsers, houseHoldId) => {
    const failedUsers = [];
    const token = await getCognitoToken();

    await Promise.all(
      invitedUsers.map(async (user) => {
        try {
          await API.graphql(
            graphqlOperation(
              `mutation AddUserToHouseHold($cognitoUsername: String!, $houseHoldId: String!) {
                addUserToHouseHold(cognitoUsername: $cognitoUsername, houseHoldId: $houseHoldId) {
                  cognitoUsername
                  HouseHoldDisplayInfo {
                    id
                    name
                  }
                }
              }`,
              { cognitoUsername: user.name, houseHoldId: houseHoldId }
            ),
            { Authorization: `Banana ${token}` }
          );
        } catch (error) {
          failedUsers.push({ name: user.name, error: error });
        }
      })
    );

    return failedUsers;
  };

  async function handleCreateHousehold() {
    const newHouseHold = await createHouseHold();
    const failedUsers = await addUsersToHouseHold(
      invitedUsers,
      newHouseHold.id
    );

    if (failedUsers.length > 0) {
      console.log("Failed to add users to household: ", failedUsers);
    }

    console.log("New household created: ", newHouseHold);
    // navigation.navigate("Events", { household: newHouseHold });
  }

  return (
    <View style={styles.createHouseholdContainer}>
      <View>
        <Text style={styles.p}>Hi there,</Text>
        <Text style={styles.header}>John Doe</Text>
      </View>
      <View style={{ alignSelf: "stretch" }}>
        <View style={{ height: 100 }} />
        <Text style={styles.p}>Create a new household</Text>
        <View style={{ height: 22 }} />
        <LabeledInput
          label={"HOUSEHOLD NAME"}
          placeholder={"Apartment"}
          onChangeText={setHouseHoldName}
          value={houseHoldName}
        />
        <View style={{ height: 22 }} />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ height: 22 }} />
          <LabeledInput
            label={"INVITE BY USERNAME"}
            placeholder={"Username"}
            onChangeText={setUsernameToAdd}
            value={usernameToAdd}
          />
          <View style={{ width: 100 }} />
          <Pressable
            style={styles.createHouseholdButtonContainer}
            android_ripple={{ color: colors.highlight }}
            onPress={handleInvitedUserAdd}
          >
            <Text style={styles.buttonText}>INVITE</Text>
          </Pressable>
        </View>
        <View style={{ height: 22 }} />
        <Text style={[styles.label, { marginBottom: 4 }]}>
          INVITED MEMBERS:
        </Text>
        <View style={{ height: 22 }} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {invitedUsers.map((item, index) => (
            <ProfileIcon
              key={index}
              username={item.name}
              deleteFunc={handleInvitedUserDelete}
            />
          ))}
          <View style={{ flexBasis: "100%", height: 50 }} />
          <View style={{ width: "100%" }}>
            <CustomButton
              title="CREATE HOUSEHOLD"
              onPress={async () => {
                await handleCreateHousehold();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
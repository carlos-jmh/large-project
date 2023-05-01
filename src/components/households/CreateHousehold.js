import { Pressable, Text, View } from "react-native";

import CustomButton from "../CustomButton";
import LabeledInput from "../LabeledInput";
import ProfileIcon from "../ProfileIcon";
import { getCognitoToken } from "../../utils/auth";
import { getStyles } from "../styles";
import { useState, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { HouseHoldContext } from "../HouseHoldContext";
import { addUser, createHouseHold } from "../../api/mutating";
import { fetchHouseHold } from "../../api/fetching";

export default function CreateHousehold({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [invitedUsers, setInvitedUsers] = useState([]);
  const [houseHoldName, setHouseHoldName] = useState("");
  const [usernameToAdd, setUsernameToAdd] = useState("");
  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  function handleInvitedUserAdd() {
    setInvitedUsers([...invitedUsers, { name: usernameToAdd }]);
    setUsernameToAdd("");
  }

  function handleInvitedUserDelete(username) {
    setInvitedUsers(invitedUsers.filter((item) => item.name !== username));
  }

  const addUsersToHouseHold = async (invitedUsers, houseHoldId) => {
    const failedUsers = [];
    const token = await getCognitoToken();

    await Promise.all(
      invitedUsers.map(async (user) => {
        try {
          addUser(houseHoldId, user.name);
        } catch (error) {
          failedUsers.push({ name: user.name, error: error });
        }
      })
    );

    return failedUsers;
  };

  async function handleCreateHousehold() {
    const newHouseHoldId = await createHouseHold(houseHoldName);
    const newHouseHold = await fetchHouseHold(newHouseHoldId);
    const failedUsers = await addUsersToHouseHold(
      invitedUsers,
      newHouseHoldId
    );

    if (failedUsers.length > 0) {
      console.log("Failed to add users to household: ", failedUsers);
    }

    console.log("New household created: ", newHouseHold);
    setHouseHold((oldHouseHold) => {
      return {
        ...oldHouseHold,
        ...newHouseHold,
        lists: [],
        events: [],
        eventHandlers: [],
        tasks: []
      };
    });
    navigation.navigate("Events");
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

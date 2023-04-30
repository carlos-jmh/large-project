import { Text, View } from "react-native";

import { Auth as CognitoAuth } from "aws-amplify";
import CustomButton from "../CustomButton";
import LabeledInput from "../LabeledInput";
import { getStyles } from "../styles";
import { useState, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { UserContext } from "../UserContext";

/* Login page */
// TODO: Connect to backend
export default function Login({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  async function signIn() {
    try {
      // TODO: Add more validation
      if (username === "" || password === "") {
        throw new Error("Username and password cannot be empty");
      }

      const user = await CognitoAuth.signIn(username, password);
      setUser(user);
      navigation.navigate("InitialPage", { user: user });
    } catch (error) {
      console.log("Error signing in:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <LabeledInput
          value={username}
          label={"USERNAME"}
          onChangeText={setUsername}
          placeholder={"Enter username"}
        />
        <View style={{ height: 18 }}></View>
        <LabeledInput
          value={password}
          label={"PASSWORD"}
          onChangeText={setPassword}
          placeholder={"Enter password"}
          isPassword={true}
          helpLabel={"Forgot password?"}
        />
        <View style={{ height: 24 }}></View>
        <CustomButton title={"SIGN IN"} onPress={async () => await signIn()} />
      </View>
      <Text style={[styles.text, { color: colors.textFaded }]}>
        Don't have an account?
        <Text
          style={{ color: colors.primary }}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Sign up
        </Text>
      </Text>
    </View>
  );
}

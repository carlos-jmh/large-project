import { Text, View } from "react-native";

import { Auth as CognitoAuth } from "aws-amplify";
import CustomButton from "../CustomButton";
import LabeledInput from "../LabeledInput";
import { getStyles } from "../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Register page */
// TODO: Connect to backend
export default function Register({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUp() {
    try {
      const user = await CognitoAuth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: true,
      });

      console.log(user);

      navigation.navigate("ConfirmRegister", { username: username });
    } catch (error) {
      console.log("Error signing up:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <LabeledInput
          value={username}
          label={"USERNAME"}
          onChangeText={setUsername}
          placeholder={"Enter Username"}
        />
        <View style={{ height: 18 }}></View>
        <LabeledInput
          value={email}
          label={"EMAIL"}
          onChangeText={setEmail}
          placeholder={"Enter email address"}
        />
        <View style={{ height: 18 }}></View>
        <LabeledInput
          value={password}
          label={"PASSWORD"}
          onChangeText={setPassword}
          placeholder={"Enter password"}
          isPassword={true}
        />
        <View style={{ height: 18 }}></View>
        <LabeledInput
          value={confirmPassword}
          label={"CONFIRM PASSWORD"}
          onChangeText={setConfirmPassword}
          placeholder={"Confirm password"}
          isPassword={true}
        />
        <View style={{ height: 24 }}></View>
        <CustomButton title={"SIGN UP"} onPress={async () => await signUp()} />
      </View>
      <Text style={[styles.text, { color: colors.textFaded }]}>
        Already have an account?
        <Text
          style={{ color: colors.primary }}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Sign in
        </Text>
      </Text>
    </View>
  );
}

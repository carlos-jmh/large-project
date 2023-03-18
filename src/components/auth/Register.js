import { Text, View } from "react-native";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <LabeledInput
          value={name}
          label={"NAME"}
          onChangeText={setName}
          placeholder={"Enter full name"}
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
        <CustomButton
          title={"SIGN UP"}
          onPress={() => console.log("Sign Up")}
        />
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

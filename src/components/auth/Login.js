import { Text, View } from "react-native";

import CustomButton from "../CustomButton";
import LabeledInput from "../LabeledInput";
import { getStyles } from "../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Login page */
// TODO: Connect to backend
export default function Login({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
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
          helpLabel={"Forgot password?"}
        />
        <View style={{ height: 24 }}></View>
        <CustomButton
          title={"SIGN IN"}
          onPress={() => navigation.navigate("InitialPage")}
        />
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

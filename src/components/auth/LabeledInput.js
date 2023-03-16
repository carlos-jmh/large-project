import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { getStyles } from "../styles";

export default function LabeledInput({
  value,
  onChangeText,
  placeholder,
  label,
  isPassword = false,
  helpLabel,
  helpCallback,
  helpColor,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [isHidden, setIsHidden] = useState(true);

  return (
    <View
      style={{
        alignSelf: "stretch",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.label, { marginBottom: 4 }]}>{label}</Text>
        <Pressable onPress={helpCallback}>
          <Text
            style={[
              styles.label,
              { marginBottom: 4, color: helpColor ?? colors.primary },
            ]}
          >
            {helpLabel}
          </Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, { marginRight: 8 }]}
          placeholder={placeholder}
          placeholderTextColor={colors.textHint}
          selectionColor={colors.highlight}
          secureTextEntry={isPassword && isHidden}
        />
        {isPassword ? (
          <PasswordVisibilityButton
            isHidden={isHidden}
            setIsHidden={setIsHidden}
            colors={colors}
          />
        ) : null}
      </View>
    </View>
  );
}

function PasswordVisibilityButton({ isHidden, setIsHidden, colors }) {
  return (
    <Pressable
      onPress={() => setIsHidden(!isHidden)}
      android_ripple={{ color: colors.text, borderless: true }}
    >
      <FontAwesome5
        name={isHidden ? "eye" : "eye-slash"}
        size={20}
        color={colors.textFaded}
      />
    </Pressable>
  );
}

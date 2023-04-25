import { Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { getStyles } from "./styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Styled select list with label */
export default function LabeledSelectList({
  label,
  setSelected,
  data,
  save,
  defaultOption,
  backgroundColor,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  // Whether characters are obscured by dots
  const [isHidden, setIsHidden] = useState(true);

  return (
    <View
      style={{
        alignSelf: "stretch",
      }}
    >
      <Text style={[styles.label, { marginBottom: 4 }]}>{label}</Text>
      <SelectList
        setSelected={setSelected}
        data={data}
        save={save}
        defaultOption={defaultOption}
        boxStyles={[
          styles.selectListBox,
          { backgroundColor: backgroundColor ?? null },
        ]}
        dropdownStyles={[
          styles.selectListBox,
          { backgroundColor: backgroundColor ?? null },
        ]}
        inputStyles={{ color: colors.text }}
        dropdownTextStyles={{ color: colors.text }}
        arrowicon={
          <AntDesign name="caretdown" size={16} color={colors.textFaded} />
        }
        searchicon={
          <AntDesign
            name="search1"
            size={16}
            color={colors.textFaded}
            style={{ marginRight: 16 }}
          />
        }
        closeicon={
          <AntDesign name="close" size={16} color={colors.textFaded} />
        }
      />
    </View>
  );
}

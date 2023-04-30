import { ScrollView, View } from "react-native";
import { useContext } from "react";

import HeaderBar from "../HeaderBar";
import { HouseHoldContext } from "../../HouseHoldContext";
import List from "./List";
import Navbar from "../Navbar";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Lists page */
export default function Lists({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={houseHold.name} screenName={route.name} />
      <ScrollView
        style={{
          marginHorizontal: 16,
          marginTop: 16,
          flex: 1,
        }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {houseHold.lists
          ? houseHold.lists.map((list, i) => {
              return <List list={list} key={list.id} />;
            })
          : null}
      </ScrollView>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={houseHold}
      />
    </View>
  );
}

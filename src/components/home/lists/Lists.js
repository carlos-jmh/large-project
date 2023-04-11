import { ScrollView, Text, View } from "react-native";

import HeaderBar from "../HeaderBar";
import List from "./List";
import Navbar from "../Navbar";
import data from "../mockData";
import { getStyles } from "../../styles";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

/* Lists page */
export default function Tasks({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  // Get actual tasks from the backend here
  const [lists, setLists] = useState(data.lists);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={route.params.household.name} screenName={route.name} />
      <ScrollView style={{ marginHorizontal: 16, marginTop: 16, flex: 1 }}>
        {lists.map((list, i) => {
          return <List title={list.title} listItems={list.items} />;
        })}
      </ScrollView>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={route.params.household}
      />
    </View>
  );
}

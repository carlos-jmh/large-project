import { ScrollView, Text, View } from "react-native";

import HeaderBar from "../HeaderBar";
import List from "./List";
import Navbar from "../Navbar";
import { getStyles } from "../../styles";
import { useContext, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { useListsData } from '../../../api/hooks';
import { HouseHoldContext } from "../../HouseHoldContext";
import { fetchItemsByListId } from "../../../api/fetching";

const processLists = async (lists) => {
  const processedLists = await Promise.all(lists.map(async (list) => {
    const listItems = await fetchItemsByListId(list.id);

    return {
      ...list,
      listItems: listItems,
    }
  }));

  return processedLists;
};

/* Lists page */
export default function Lists({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const onItemCreated = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION CREATE ITEM", item);
    setListData((oldListData) => {
      const newListData = [...oldListData];
      newListData[listIndex].listItems.push(item);
      return newListData;
    });
  };

  const onItemUpdated = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION UPDATE ITEM", item);
    setListData((oldListData) => {
      const newListData = [...oldListData];
      const itemIndex = newListData[listIndex].listItems.findIndex(
        (listItem) => listItem.id === item.id
      );
      newListData[listIndex].listItems[itemIndex] = item;
      return newListData;
    });
  };

  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  const [listData] = useListsData({
    houseHoldId: houseHold.id,
    processDataCallback: processLists,
    onListItemCreated: onItemCreated,
    onListItemUpdated: onItemUpdated,
  });


  useEffect(() => {
    if( listData && listData.length > 0) {
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          lists: listData,
        }
      })
      console.log(houseHold);
    }
  }, [listData])


  useEffect(() => {
    console.log(houseHold)
  }, [houseHold])
  
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
        {listData.map((list, i) => {
          return <List list={list} key={list.id} />;
        })}
      </ScrollView>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={houseHold}
      />
    </View>
  );
}

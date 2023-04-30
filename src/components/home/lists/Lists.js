import { ScrollView, Text, View } from "react-native";
import { useContext, useEffect } from "react";

import HeaderBar from "../HeaderBar";
import { HouseHoldContext } from "../../HouseHoldContext";
import List from "./List";
import Navbar from "../Navbar";
import { fetchItemsByListId } from "../../../api/fetching";
import { getStyles } from "../../styles";
import { useListsData } from "../../../api/hooks";
import { useTheme } from "@react-navigation/native";

const processLists = async (lists) => {
  const processedLists = await Promise.all(
    lists.map(async (list) => {
      const listItems = await fetchItemsByListId(list.id);

      return {
        ...list,
        listItems: listItems,
      };
    })
  );

  return processedLists;
};

/* Lists page */
export default function Lists({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const onItemCreated = (item, listId, setListData) => {
    console.log("SUBSCRIPTION CREATE ITEM", item);

    const itemAlreadyInList = listData[listIndex].listItems.find(listItem => listItem.id === item.id);
    if (itemAlreadyInList) {
      return;
    }

    setListData((oldListData) => {
      const newListData = [...oldListData];
      const listIndex = newListData.findIndex((list) => list.id == listId);
      newListData[listIndex].listItems.push(item);
      return newListData;
    });
  };

  const onItemUpdated = (item, listId, setListData) => {
    console.log("SUBSCRIPTION UPDATE ITEM", item);

    const currentItemIndex = listData[listIndex].listItems.findIndex(listItem => listItem.id === item.id);
    const currentItem = listData[listIndex].listItems[currentItemIndex];

    // if the item is the same version, do nothing (we already have the latest version)
    if (currentItem._version === item._version) {
      return;
    }
    
    setListData((oldListData) => {
      const newListData = [...oldListData];
      newListData[listIndex].listItems[currentItemIndex] = item;
      return newListData;
    });
  };

  const onItemDeleted = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION DELETE ITEM", item);
    
    const currentItemIndex = listData[listIndex].listItems.findIndex(listItem => listItem.id === item.id);
    if (currentItemIndex === -1) {
      return;
    }

    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems.splice(currentItemIndex, 1);
      return newListData;
    });
  };

  const { houseHold, setHouseHold } = useContext(HouseHoldContext);

  const [listData] = useListsData({
    houseHoldId: houseHold.id,
    processDataCallback: processLists,
    onListItemCreated: onItemCreated,
    onListItemUpdated: onItemUpdated,
    onListItemDeleted: onItemDeleted,
  });

  useEffect(() => {
    if (listData && listData.length > 0) {
      setHouseHold((oldHouseHold) => {
        return {
          ...oldHouseHold,
          lists: listData,
        };
      });
      console.log(houseHold);
    }
  }, [listData]);

  useEffect(() => {
    console.log(houseHold);
  }, [houseHold]);

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

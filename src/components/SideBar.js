import { View, Text, TouchableOpacity } from 'react-native'
import React , {useEffect, useState, useContext} from 'react'
import { UserContext } from './UserContext';
import { fetchHouseHolds } from "../api/fetching";
import { useTheme } from '@react-navigation/native';
import { getStyles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Auth as CognitoAuth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { HouseHoldContext } from './HouseHoldContext';

// Define a state variable to keep track of authentication status


const SideBar = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const styles = getStyles(colors);
    const {user, setUser} = useContext(UserContext);
    const { houseHold, setHouseHold } = useContext(HouseHoldContext);
    const [houseHolds, setHouseHolds] = useState([]);
    const [isMounted, setIsMounted] = useState(true);

    const signOutUser = async () => {
      try {
        await CognitoAuth.signOut();
        setUser(null);
        setHouseHold({
          id: "",
          calendarId: "",
          lists: [],
          tasks: [],
          events: [],
          eventHandlers: [],
        });
        console.log("User signed out successfully")
        navigation.navigate("Login")
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
      async function fetchData() {
        if (user) {
          const fetchedHouseHolds = await fetchHouseHolds();
          if (isMounted) {
            setHouseHolds(fetchedHouseHolds);
          }
        }
      }
  
      let isMounted = true;
      fetchData();
  
      return () => {
        isMounted = false
      };
    }, [user]);

    return (
      <View style={styles.sidebarContainer}>
        <View style={styles.profileContainer}>
        <MaterialIcons name="account-circle" size={100} color= {colors.textFaded} />
          <Text style={styles.header}>{user ? user.username : 'Guest'}</Text>
          { user ? (
            <View>
          <CustomButton title={"SIGN OUT"} 
          style={{width: 80, height: 40, borderRadius: 10, marginVertical:20, backgroundColor: colors.primary, alignSelf: "center"}} 
          onPress={async () => await signOutUser()}
          />
        <View style={styles.separator} />
        <TouchableOpacity style={styles.manageHouseholdButton} onPress={()=> (navigation.navigate("InitialPage"))}>
          <Text style={styles.manageHouseholdText}>MANAGE HOUSEHOLDS</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.householdText}>Your Households</Text>
        <View style={styles.householdsContainer}>
          {/* Loop through the user's households and render them */}
          {user && houseHolds.map((household, index) => (
              <View key={index} style={styles.houseHoldButton}>
              <FontAwesome5 name="house-user" size={24} color={colors.textFaded} style={{paddingHorizontal: 20}}/>
              <Text style={styles.householdText} key={household.id}>
                {household.name}
              </Text>
              </View>
            ))}
            </View>
            </View>
          ) : (
            <View>
            <CustomButton
          title={"SIGN IN"}
          style={{
            alignSelf: "center",
            width: 80,
            height: 40,
            borderRadius: 10,
            marginVertical: 20,
            backgroundColor: colors.primary,
          }}
          onPress={() => (navigation.navigate("Login"))}
        />
        <View style={styles.separator} />
            <Text style={styles.householdText}>No Households</Text>
            </View>
          )}
          
        </View>
      </View>
    );
  };

export default SideBar

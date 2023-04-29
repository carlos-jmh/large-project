import { View, Text, TouchableOpacity } from 'react-native'
import React , {useEffect, useState, useContext} from 'react'
import { UserContext } from './UserContext';
import { useTheme } from '@react-navigation/native';
import { getStyles } from './styles';

// Define a state variable to keep track of authentication status

const SideBar = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const {user} = useContext(UserContext);

    return (
      <View style={styles.sidebarContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.header}>{user ? user.username : 'Guest'}</Text>
          <TouchableOpacity style={styles.signoutButton} >
            <Text style={styles.signoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.manageHouseholdButton}>
          <Text style={styles.manageHouseholdText}>Manage Households</Text>
        </TouchableOpacity>
        <View style={styles.householdsContainer}>
          {/* Loop through the user's households and render them */}
          {/* {user &&
            user.households.map((household) => (
              <Text style={styles.householdText} key={household.id}>
                {household.name}
              </Text>
            ))} */}
        </View>
      </View>
    );
  };

export default SideBar
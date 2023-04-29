import { View, Text } from 'react-native'
import { Auth as CognitoAuth } from "aws-amplify";
import React , {useEffect, useState, useContext} from 'react'
import { UserContext } from './UserContext';

// Define a state variable to keep track of authentication status

const SideBar = () => {
    const {user} = useContext(UserContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    // Define a function to handle authentication status updates
    // const handleAuthStatusUpdate = (status) => {
    //   setIsAuthenticated(status);
    // };


    // useEffect(() => {
    //     setUsername(user.username)
    // }, [user]);


    // async function getUser () {
    //     const user = await CognitoAuth.currentAuthenticatedUser()
    //     .then(
    //         setIsAuthenticated(true)
    //     )
    //     .catch(
    //         setIsAuthenticated(false)
    //     )
    // }
  return (
    <View>
      <Text>Hello there, {user ? (
        <Text>{user.username}</Text>
      ): (
        <Text>Guest</Text>
      )}</Text>
    </View>
  )
}

export default SideBar
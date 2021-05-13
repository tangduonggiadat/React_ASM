//App.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
// create our app's navigation stack
const Stack = createStackNavigator();
const Auth = () => {
    return (
       
     
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading" component={Loading}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Login" component={Login}/>
         
        </Stack.Navigator>
      
        
    )
}
export default Auth;
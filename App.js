import React from 'react'
import { StyleSheet, Text, View,StatusBar,TouchableOpacity } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNav from './screens/BottomNav';
import Reading from './screens/Reading';
import Home from './screens/Home';
import ListBook from './screens/ListBook';
import Auth from './screens/AuthStack';
import AddCategory from './screens/AddCategory';
import AddListBook from './screens/AddListBook';
import Intro from './screens/Intro';


import { AuthProvider } from '@ryanar/react-auth-provider';



const Stack = createStackNavigator();
const App = () => {
  
    return (
       
        <NavigationContainer >
        <Stack.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomNav" component={BottomNav}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ListBook" component={ListBook}/>
          <Stack.Screen name="Reading" component={Reading}/>
          <Stack.Screen name="AuthStack" component={Auth}/>
          <Stack.Screen name="AddCategory" component={AddCategory}/>
          <Stack.Screen name="AddListBook" component={AddListBook}/>
          <Stack.Screen name="Intro" component={Intro}/>
        </Stack.Navigator>
      </NavigationContainer>
        
    )
}

export default App;

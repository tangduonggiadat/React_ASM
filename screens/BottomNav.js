import React, { Component, useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, 
    Text, TouchableOpacity, View,Image,ImageBackground} from "react-native";
 
    import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
    import Icon from 'react-native-vector-icons/Ionicons';

    import Home from './Home';
    import Category from './Category';
    import News from './News';
    import Profile from './Profile';
    
    
    const Tab = createMaterialBottomTabNavigator();
    
    const MainTabScreen = () => (
        <Tab.Navigator
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#339999',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Category"
            component={Category}
            options={{
              tabBarLabel: 'Category',
              tabBarColor: '#339999',
              tabBarIcon: ({ color }) => (
                <Icon name="layers-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarLabel: 'News',
              tabBarColor: '#339999',
              tabBarIcon: ({ color }) => (
                <Icon name="newspaper-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#339999',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    );
    
    export default MainTabScreen;
    
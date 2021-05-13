import React, { Component, useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Button, View,Image,ImageBackground} from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';



export default class Profile extends Component{
 
    state = { currentUser: null }
    handleSignOut = () => {
        auth()
        .signOut()
        .then(() => Alert.alert('User signed out!'));
    }
    componentDidMount() {
        const { currentUser } = auth()
        this.setState({ currentUser })
    }
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
  
          <View style={styles.header}>
            <Text style={{color:'#fff',margin:5}}>Hi...</Text>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{currentUser && currentUser.email}</Text>
                         
              <View style={{marginTop:50}}>
              <TouchableOpacity onPress={()=> navigation.navigate('Intro') } style={styles.buttonContainer}>
                <Text style={{color:"#fff"}}>Introduce</Text> 
              </TouchableOpacity>

              <TouchableOpacity onPress={this.handleSignOut} style={styles.buttonContainer}>
                <Text style={{color:"#fff"}}>Sign Out</Text>  
              </TouchableOpacity>  
              </View>
               
            </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#339999",
    height:150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:70
  },
  body:{
    marginTop:20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:20,
    color: "#fb5b5a",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#339999",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#fff",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    height:45,
    color:"#fff",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#339999",
  },
  
  });
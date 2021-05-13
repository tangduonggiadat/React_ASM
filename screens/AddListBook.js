import React,{useState,useContext} from 'react';
import {} from 'react-native';
import { StyleSheet, Text, View,TextInput,Pressable,Alert,
    Image,SafeAreaView,TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import ImagePicker from "react-native-image-picker"
// import { Button } from 'native-base';


const AddCategory = ({navigation}) => {
    const [name,setName] = useState();
    const [Tacgia,setTacgia] = useState();
    const [NXB,setNXB] = useState();
    const [ImageURL,setImageURL] = useState('https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-pink-book-reading-book-hobby-icon-image_1185710.jpg');
    
  
    //HamThem
      const insert=(id,name,TacGia,NXB)=>{
        let key;
        if(id==null){
            key=database().ref().push().key;
        }else{
            key=id;
        }
        database()
        .ref('/Sach/'+key)
        .update({
          id:key,
          Name: name,
          ImageURL:ImageURL,
          TacGia:TacGia,
          NXB:NXB
        })
        .then(() => navigation.navigate('BottomNav'));
    }

  
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>ADDING BOOKS</Text>
            <View style={styles.inputView} >
                <TextInput style={styles.textInput} placeholder="Enter Name" onChangeText={(text)=>setName(text)}/>
            </View>
            <View style={styles.inputView} >
                <TextInput style={styles.textInput} placeholder="Enter Tác giả" onChangeText={(text)=>setTacgia(text)}/>
            </View>
            <View style={styles.inputView} >    
                <TextInput style={styles.textInput} placeholder="Enter NXB" onChangeText={(text)=>setNXB(text)}/>
            </View>
            
      <Pressable style={{height:40,backgroundColor:'#fb5b5a',width:100,alignSelf:'center',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:20}}
             onPress={()=>insert(null,name,Tacgia,NXB)}>
                <Text style={{fontWeight:'bold'}}>Add</Text>
            </Pressable>
            
        </View>
        
        
    )
}



export default AddCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#339999',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textInput:{
      height:40,
      color:"#000",
    },
    inputView: {
        width:"80%",
        backgroundColor:"#E8E8E8",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        
      },
      inputView2: {
        width:"60%",
        backgroundColor:"#E8E8E8",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        alignSelf:"center"
        
      },
      logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:20
      },
      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
      titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 0,
      },
      textStyle: {
        padding: 10,
        color: 'black',
      },
      buttonStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        marginBottom:150,
        borderRadius:20
      },
      imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
      },
    
  })

import React,{useState} from 'react'
import {} from 'react-native'
import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native'
import database from '@react-native-firebase/database'
const AddCategory = ({navigation}) => {
    const [name,setName] = useState();
    const insert=(id,name)=>{
        let key;
        if(id==null){
            key=database().ref().push().key;
        }else{
            key=id;
        }
        database()
        .ref('/TL/'+key)
        .update({
            id:key,
          Name: name,
        })
        .then(() => navigation.navigate('BottomNav'));
    }
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>ADDING CATEGORY</Text>
        <View style={styles.inputView} >
            <TextInput style={styles.textInput} placeholder="Enter Name" onChangeText={(text)=>setName(text)}/>
        </View>
        <Pressable style={{height:40,backgroundColor:'#fb5b5a',width:100,alignSelf:'center',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:30}}
         onPress={()=>insert(null,name)}>
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
      logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:20
      }
})

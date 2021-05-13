import React, {useState,useEffect } from "react";
import database from '@react-native-firebase/database';
import { Alert, FlatList, TextInput, Button, StyleSheet, Text, View,TouchableOpacity,StatusBar} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

let TL=[
    {
      id:"1",
      nameTL:"Ngôn Tình", 
    },
    {
        id:"2",
        nameTL:"Kinh dị", 
    },
    
    ];
  
   
    function Item({id,nameTL}){
           const navigation = useNavigation();
           const removing=(id,name)=>{
               let key;
               if(id==null){
                   key=database().ref().push().key;
               }else{
                   key=id;
               }
               database()
               .ref('/TL/'+key)
               .remove()
               .then(() => navigation.navigate('BottomNav'));
           }

        
        return(
              
             <View  style={styles.listItem}>

                <TouchableOpacity onPress={()=> navigation.navigate('ListBook')} style={styles.listChu}>
                  <Text style={styles.listName}>{nameTL}</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>removing(id)}>
                  <Icons name="close-outline" style={{marginTop:2}} size={20} color={'#fff'}/>
                </TouchableOpacity>
            </View>
            );
      
    };
  
    const Flatlist =()=> {
      const navigation = useNavigation();
      const [data,setData] = useState([]);
      useEffect( () => {   
        //I/O - networking
        const loadData = async () => {
           database()
            .ref('/TL/')
            .on('value', snapshot => {
                setData( Object.values(snapshot.val()));
                console.log("data: ", Object.values(snapshot.val()));
            });
        }
        loadData();
        // setData(TL);
        console.log("object: ", data);
    
    }, []);
        
        return(
          //Item
          <View style={styles.cotainer}>
         
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{fontSize:17,marginTop:10,marginLeft:5,fontWeight:'bold',color:'#000'}}>CATEGORY</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('AddCategory')}>
            <Icons name="add-circle-outline" size=
            {30} style={{alignSelf:'flex-end',marginTop:5,marginRight:5}}></Icons>
            </TouchableOpacity>
           
            </View>
          
          
      <View style={{flex:1,marginTop:5,textAlign:"center",flexDirection:'column',backgroundColor:"#EEEEEE"}}>
          <FlatList numColumns={2} data={data}
          renderItem={({item})=>{
              return(
          <View>

         <Item id={item.id} 
               nameTL={item.Name}>
          </Item>    
          </View>
         
              )
          }}>
      </FlatList>
      </View>
      </View>
        );
      }
       export default Flatlist; 
    

      const styles = StyleSheet.create({
        cotainer:{
          flex:1,
          backgroundColor: '#eee',  
          
      },
        headerText: {textAlign:"center",fontWeight: "bold"},
        listItem:{
            backgroundColor:"#339999",
            flexDirection:'row',
            margin: 5,
            height:100,
            width:186,
            borderRadius:10,
            color:"#fff"     
        },
        listName:{
            alignItems:"flex-start",
            marginTop: 35,
            marginLeft:20,
            fontSize: 20,
            fontWeight: "bold",
            color:"#fff"
        
        },
        listSalary:{
            alignItems:"flex-end",
            fontSize: 15,
        },
        listChu:{
          alignItems:'center',
          flex:1,
          flexDirection:'column',
        }
      });

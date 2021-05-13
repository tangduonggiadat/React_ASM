import React, { useEffect, useState } from "react";
import database from '@react-native-firebase/database';
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


let Books=[
    {
      id:"1",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức",
      MoTa:"TẠI SAO BẠN CỨ PHẢI SỐNG THEO KHUÔN MẪU NGƯỜI KHÁC ĐẶT RA?\nDưới hình thức một cuộc đối thoại giữa Chàng thanh niên và Triết gia,cuốn sách trình bày một cách sinh động và hấp dẫn những nét chính trong..."
    },
    
    {
      id:"2",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức"

    },
    
    {
      id:"3",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức"
    },
    
    {
      id:"4",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức",
      MoTa:"TẠI SAO BẠN CỨ PHẢI SỐNG THEO KHUÔN MẪU NGƯỜI KHÁC ĐẶT RA?\nDưới hình thức một cuộc đối thoại giữa Chàng thanh niên và Triết gia,cuốn sách trình bày một cách sinh động và hấp dẫn những nét chính trong..."
    },
    
    {
      id:"5",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức"
    },

    {
      id:"6",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám bị ghét",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức",
    },
    {
      id:"7",
      imageUrl:"https://d1jcd7uaat3ead.cloudfront.net/eyJidWNrZXQiOiAic2hlbGZvdXQiLCAia2V5IjogIm1lZGlhL2Jvb2svMjAyMDAzMzFfNTkwanZkLmdpZiIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE2MCwgImhlaWdodCI6IDI2MCwgImZpdCI6ICJjb3ZlciJ9fX0=",
      name:"Dám b",
      TacGia: "Nguyễn Thanh Vân",
      NXB:"Đồng Nai",
      TL:"Kiến thức"
    },
    ];
  
    function Item({id,imageUrl,name,TacGia,NXB}){
      const navigation = useNavigation();
      const removing=(id)=>{
          let key;
          if(id==null){
              key=database().ref().push().key;
          }else{
              key=id;
          }
          database()
          .ref('/Sach/'+key)
          .remove()
          .then(() => navigation.navigate('BottomNav'));
      }
      
            return(
              
             <View  style={styles.listItem}>
               
                    <Image source={{uri: imageUrl}}
                       style={{width: 100,height: 150,margin:8}}> 
                    
                    </Image>

                <View style={styles.listChu}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Reading')}>
                  <Text style={styles.listName}>{name}</Text>
                  <Text style={styles.listSalary}>{"Tác giả:\t"+TacGia}</Text>
                  <Text style={styles.listSalary}>{"NXB:\t"+NXB}</Text>
                  </TouchableOpacity>
                 
                </View>
                <TouchableOpacity onPress={()=>removing(id)}>
                  <Icons name={'close-outline'} marginTop={5} size={25} color={'#000000'}/>
                </TouchableOpacity>
            </View>
            );
      
    };

   
   const Flatlist=()=> {  
    const navigation = useNavigation();
    const [data,setData] = useState([]);
    useEffect( () => {   
      //I/O - networking
      const loadData = async () => {
         database()
          .ref('/Sach/')
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
          
      <View style={{flex:1,marginTop:5}}>
          <FlatList  data={data}
          renderItem={({item})=>{
              return(
          <TouchableOpacity>

         <Item id={item.id} name={item.Name}
            imageUrl={item.imageUrl}
            TacGia={item.TacGia}
            NXB={item.NXB}
            >
          </Item>    
          </TouchableOpacity>
         
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
          backgroundColor: '#EEEEEE',  
      },
        headerText: {textAlign:"center",fontWeight: "bold"},
        listItem:{
            backgroundColor:"#ffffff",
            flexDirection:'row',
            margin: 5,
            borderRadius:10,
            
        },
        listName:{
            alignItems:"flex-start",
            marginTop: 10,
            fontSize: 20,
            fontWeight: "bold"
        },
        listSalary:{
            alignItems:"flex-end",
            fontSize: 15,
        },
        listChu:{
           flex:1,
           flexDirection:'column',
        }
      });
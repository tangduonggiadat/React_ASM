import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';


export class Intro extends Component {
    
    render() {
        return (
            <View>
                <Text>BOOKS APP</Text>
                <Text>Design by G.A.D</Text>
                <Text>Ngày sản xuất:</Text>
                <Text>03/03/2021</Text>
                <Text>Quyền sở hữu trí tuệ:</Text>
                <Text>Công ty phần mềm phát triển và đầu tư VNNP.</Text>
                <Text>Ứng dụng được phát triển bởi Cndvn.com</Text>
                <Text>Phiên bản 1.0</Text>


            </View>
        )
    }
}

export default Intro

// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image
} from 'react-native'
import auth from '@react-native-firebase/auth'
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => { 
    auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message }))
}
render() {
    return (
      <View style={styles.container}>
         <Image  style={styles.tinyLogo} source={{
          uri: 'https://images.designtrends.com/wp-content/uploads/2016/02/16114252/Colorful-book-Logo-design.jpg',
        }}></Image>

        <Text style={styles.logo}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

          <View style={styles.inputView} >
        <TextInput
          placeholder="Email..."
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        /></View>
        <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          placeholder="Password..."
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        </View>
        
        <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin} >
            <Text onPress={this.handleSignUp} style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.SignUp}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#339999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom:20,
    borderRadius:100
  },
  forgot:{
    alignItems:"center",
    marginTop:40
  },
  inputView: {
    width:"80%",
    backgroundColor:"#E8E8E8",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  textInput:{
    height:50,
    color:"#000"
  },
  forgot:{
    color:"white",
    fontSize:11,
    alignItems:"center",
    justifyContent:"center"

  },
  loginBtn:{
    width:"30%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },
  loginText:{
    fontWeight: "bold",
  },
  SignUp:{
    marginTop:20,
    color:"white",
    fontSize:15,
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#fb5b5a",
    marginBottom:20
  }
})
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from "react-native";

export default function Login({navigation}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit=()=>{
      if(username=="dirayu"||password=="111"){
        navigation.navigate('MainApp');
      }
      else{
        Alert.alert("Username atau Password salah");
        
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Comercio</Text>
        </View>
          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#777"
                  onChangeText={(value)=>setUsername(value)}
                  value={username}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={[styles.input, {marginTop:5,}]}
                  placeholder="Password"
                  keyboardType={"default"}
                  secureTextEntry={true}
                  placeholderTextColor="#777"
                  onChangeText={(value)=>setPassword(value)}
                  value={password} 
                />
            </View> 
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
              <Text
              style={{alignSelf:'center', fontSize:11}}
              >
                Belum terdaftar ?
              </Text>
              <TouchableOpacity>
                  <Text style={{textDecorationLine:'underline', marginLeft:4, fontSize:11}}
                  onPress={()=>navigation.navigate('RegisterScreen')}
                  >Daftar</Text>
              </TouchableOpacity>
            </View>            
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 20,   
      flex:1,
      justifyContent:'center', 
    },
    posTitle:{
      alignItems: 'center',
      marginBottom:10
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color: '#000'
    },
    contInput:{      
      alignSelf:'center',
      marginTop:5,
      width:280
    },
    posInput:{
      marginBottom : 10,
    },
    input:{
      height : 30,
      color:"#000",      
      borderBottomWidth:1,
      borderBottomColor : '#777',      
    },
    posButton:{
      margin: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      width: 285,
      height: 44,
      alignItems:'center',
      backgroundColor : '#14BB57', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#fff'
    },
});

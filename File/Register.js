import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Alert } from "react-native";
import {dataRef} from './References';

export default function Form({navigation, route}){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
    const [kelamin, setKelamin] = useState("");

  const submit = () => {
      if(password !== konfirmasiPassword){
        Alert.alert('Password belum sesuai');
      }else{
        let newData={
          username: username,
          email: email,
          password: password
      };
      const ref = dataRef.child("users").push(newData);
      const key = ref.key;
      dataRef.child("users").child(key).update({'key': key})
      Alert.alert('Daftar berhasil!');
      navigation.navigate('LoginScreen');
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
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#777"
                    onChangeText={(value)=>setEmail(value)}
                    value={email}
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
              <View style={styles.posInput}>
                  <TextInput 
                    style={[styles.input, {marginTop:5,}]}
                    placeholder="Konfirmasi Password"
                    keyboardType={"default"}
                    secureTextEntry={true}
                    placeholderTextColor="#777"
                    onChangeText={(value)=>setKonfirmasiPassword(value)}
                    value={konfirmasiPassword} 
                  />
              </View> 
              <View style={[styles.posInput,{borderBottomColor:'#777', borderBottomWidth:1, marginTop:5, width:280}]}>
              <Picker 
                        selectedValue={kelamin}
                        onValueChange={(itemValue, itemIndex) =>setKelamin(itemValue)}
                        style={[styles.input,{height:25, width:328, right:23, transform:[{scaleX:0.9}, {scaleY:0.9}]}]}                     
                        >
                            <Picker.Item label="Pilih Jenis Kelamin" value="Belum terisi"/>
                            <Picker.Item label="Laki-laki" value="Laki-laki"/>
                            <Picker.Item label="Perempuan" value="Perempuan"/>
                        </Picker>
              </View>
              <View style={styles.posButton}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=>submit()}
                  >
                    <Text style={styles.textButton}>Daftar</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Text
                style={{alignSelf:'center', fontSize:11}}
                >
                  Sudah daftar ?                  
                </Text>
                <TouchableOpacity>
                    <Text style={{textDecorationLine:'underline', marginLeft:4, fontSize:11}}
                    onPress={()=>navigation.navigate('LoginScreen')}
                    >Masuk</Text>
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

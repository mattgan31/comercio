import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet } from "react-native";
import {dataRef} from './References';

export default function Edit({navigation, route}){
    const {key, skill, level} = route.params;
    const [keyUbah, setKey] = useState(key);
    const [skillmhs, setSkillmhs] = useState(skill);
    const [levelmhs, setLevelmhs] = useState(level);

   const ubahData = (keyUbah) => {
        dataRef.child(keyUbah).update({'skill': skillmhs,
                                       'level' : levelmhs});
        navigation.navigate('Portofolio');
    };

    const hapusData = (keyUbah) =>{
        dataRef.child(key).remove();
        navigation.navigate('Portofolio');
     }

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Ubah Portofolio</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setSkillmhs(value)}
                  value={skillmhs}
                />
            </View>
            <View style={styles.posInput}>
                 <Picker
                  selectedValue={levelmhs}
                  onValueChange={(itemValue, itemIndex) =>setLevelmhs(itemValue)}
                  style={{height:28, placeholderTextColor:"white", color:'white'}}
                >
                  <Picker.Item label="Level" value="Belum Terisi" />
                  <Picker.Item label="Beginer" value="Beginer" />
                  <Picker.Item label="Middle" value="Middle" />
                  <Picker.Item label="Advance" value="Advance" />
                </Picker>
            </View>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>ubahData(keyUbah)}
                >
                  <Text style={styles.textButton}>Ubah</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView1}>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>hapusData(keyUbah)}
                >
                  <Text style={styles.textButton}>Hapus</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 40
    },
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color:'#0066ff'
    },
    contInput:{
      backgroundColor:'#0066ff',
      margin: 20,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color:'white'
    },
    posButton:{
      margin: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      width: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff',
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
    buttonView1:{
        marginLeft:20,
        marginRight:20
    },
});

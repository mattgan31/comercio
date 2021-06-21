import React, {useState,useEffect} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import {dataRef} from './References';

export default function Data({navigation, route}){
  

  const [dskill, setDskill] = useState([]);

  useEffect(()=> {
        const dataFocus = navigation.addListener('focus', ()=>{
          const listener = dataRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let dskill;
            if(data != null){
              dskill = Object.values(data);
            } else{
              
            }
            setDskill(dskill);
            }
            )
          }
        )
      }
    )

    const sendData=(item) => {
        navigation.navigate('MyStack',{
            screen:'Edit',
            params: {key:item.key,
                        skill:item.skill,
                        level:item.level}
        })
      }
    
    return(
       <View style={styles.container}>
          <View style={styles.posTitle}>
            <Text style={styles.title}>Portofolio</Text>
          </View>
          <View style={styles.contData}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Skill</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Level</Text>
             </View>
          </View>
          <View style={styles.contFlat}>
          {data !== null
           ? (<FlatList
            data={dskill}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity
                        onPress={()=>sendData(item)}
                    >
                        <View style={styles.contData1}>
                            <View style = {styles.contentTitle1}>
                                <Text style = {styles.textContentTitle1}> {item.skill} </Text>
                            </View>
                            <View style = {styles.contentTitle1}>
                                <Text style = {styles.textContentTitle1}> {item.level}
                                </Text>
                            </View> 
                        </View>
                </TouchableOpacity>
                )
            }}
            />)
           : (<Text>Belum ada</Text>)
          }
              
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
      color: '#0066ff'
    },
    contData:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'#0066ff',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      padding: 15,
    },
    contFlat:{
      backgroundColor:'#ccffff',
      paddingTop : 15,
      marginLeft:20,
      marginRight:20,
    },
    contData1:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom : 5
    },
    contentTitle:{
        marginTop:5,
    },
    contentTitle1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    textContentTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15
    },
    textContentTitle1:{
        fontWeight:'bold',
        fontSize:15
    }
});

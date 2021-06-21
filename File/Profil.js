import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function Data({navigation}){
    return(
        <SafeAreaView>
            <StatusBar
            barStyle="light-content"
            //backgroundColor="#fff"
            //translucent={true}
            />
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.top}>                    
                    <Text style={styles.welcome}>About Us</Text>                                        
                </View>                
            </View>
                <View style={{justifyContent:'center',marginTop:20,width:"80%",height:'80%',borderTopWidth:1,borderBottomWidth:1,borderBottomColor:'#777', borderTopColor:'#777'}}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Dionisius Chandra Irawan</Text>
                    <Text style={{textAlign: 'center', fontSize:16}}>Rahmat Alamsyah</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Yusuf Syakir</Text>
                </View>                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container:{
        alignItems:'center',        
        backgroundColor:'#fff',
        height:'100%'
    },
    header:{
        marginTop:50,                
    },    
    welcome:{
        fontWeight:'bold',
        marginBottom:10,
        fontSize:16
    },
    top:{        
        width:332
    },
    boxiklan:{
        backgroundColor:'#f3f3f3', 
        width:357, 
        height:128,
        borderRadius:20,
        marginTop:20,        
        justifyContent:'center',
        alignSelf:'center'
    },
    contiklan:{
        marginTop:0,        
        width:'100%',        
    },        
    foto:{
        width:99,
        height:99,
        backgroundColor:"#c4c4c4",        
        marginLeft:15,
        borderRadius:45
    },
    juduliklan:{
        position:'absolute', 
        left:140,
        top:30, 
        fontSize:16,
        fontWeight:'bold'
    },
   
    iklan:{
        position:'absolute', 
        left:40, 

        top:155,
        fontWeight:'bold'
    }
    
})
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
                    <Text style={styles.welcome}>Profil</Text>                                        
                </View>                
            </View>
            <View>                
                <View style={styles.contiklan}>                                                    

                            <View style={[styles.boxiklan]}>
                                <Text style={styles.juduliklan}>DiRaYu</Text>
                              
                                <View style={styles.foto}>

                                </View>
                               
                                <TouchableOpacity style={{position:'absolute', right:35}}
                                 onPress={()=>navigation.navigate('EditProfil')}>
                                    <Image
                                    source={require('../assets/edit.png')}
                                    />
                                </TouchableOpacity>
                                
                            </View>
                    
                            
                                            
                      
            </View> 
                        
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
import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function Iklanku(){
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
                    <Text style={styles.welcome}>Iklanku</Text>                                        
                </View>                
            </View>
            <View>                
                <View style={styles.contiklan}>                                
                    <ScrollView>

                            <View style={[styles.boxiklan]}>
                                <Text style={styles.juduliklan}>Nama barang</Text>
                                <Text style={styles.kategori}>Kategori</Text>
                                <View style={styles.foto}>

                                </View>
                                <TouchableOpacity style={{position:'absolute', right:35}}>
                                    <Image
                                    source={require('../assets/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.boxiklan}>
                                <Text style={styles.juduliklan}>Nama barang</Text>
                                <Text style={styles.kategori}>Kategori</Text>
                                <View style={styles.foto}>
                                    
                                </View>
                                <Text style={{position:'absolute', left:140, bottom:40}}>Rp1.999.000</Text>
                                <TouchableOpacity style={{position:'absolute', right:35}}>
                                    <Image
                                    source={require('../assets/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        
                    </ScrollView>           
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
        borderRadius:15
    },
    juduliklan:{position:'absolute', left:140, top:30, fontSize:16, fontWeight:'normal'},
    kategori:{position:'absolute', left:140, top:50, fontSize:13, fontWeight:'normal', color:'#7a7a7a'}
})
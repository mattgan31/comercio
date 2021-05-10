import React from "react";
import { View, Text, TextInput,StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Biodata(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.top}>
                    <Text style={styles.welcome}>Welcome User</Text>
                    <TouchableOpacity style={{marginLeft:'auto'}}>
                        <Image                         
                        source={require('../assets/cart.png')}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.contSearch}>
                    <Image
                    style={{marginLeft:15, alignSelf:'center', marginRight:10}}
                    source={require("../assets/search.png")}/>
                    <TextInput
                    style={styles.search}
                    placeholder="Cari"
                    />
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={styles.contkonten}>
                    <Text style={{marginLeft:37, fontWeight:'bold', fontSize:16}}>Kategori</Text>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}            
                    >
                        <View style={{flexDirection:'row', marginLeft:37}}>                
                                <View style={styles.boxkategori}>

                                </View>
                                <View style={styles.boxkategori}>

                                </View>
                            
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.contkonten}>
                <Text style={{marginLeft:37, fontWeight:'bold', fontSize:16}}>Terbaru</Text>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}            
                >
                    <View style={{flexDirection:'row', marginLeft:37}}>                
                            <View style={styles.boxterbaru}>

                            </View>
                            <View style={styles.boxterbaru}>

                            </View>
                        
                    </View>
                </ScrollView>
            </View>            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	container:{
        alignItems:'center',
        flexDirection:'column'
    },
    header:{
        marginTop:50,
        width:337,
        alignItems:'center',
        alignSelf:'center'
    },
    contSearch:{
        borderColor:'#777',
        borderWidth:1,
        padding:5,
        width:337,
        borderRadius:26,
        flexDirection:'row',
        height:52,
    },
    welcome:{
        fontWeight:'bold',
        marginBottom:10,
        fontSize:16
    },
    top:{
        flexDirection:'row',
        width:332
    },
    boxkategori:{
        backgroundColor:'#c4c4c4', 
        width:223, 
        height:108,
        borderRadius:20,
        marginTop:20,
        marginRight:20
    },
    contkonten:{
        marginTop:30,
        alignSelf:'center',
        width:'100%'
    },    
    boxterbaru:{
        backgroundColor:'#c4c4c4', 
        width:223, 
        height:204,
        borderRadius:20,
        marginTop:20,
        marginRight:20
    }
})
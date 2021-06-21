import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {dataRef, storageRef} from './References';
import NumberFormat from 'react-number-format';


export default function Iklanku({navigation, route}){
    const {user} = route.params;
    console.log(route.params);
    const [diklan, setDiklan] = useState(['']);

    useEffect(() => {
        const dataFocus = navigation.addListener('focus', ()=>{
            const listener = dataRef.child("barang").orderByChild("user").equalTo(user).on('value', (snapshot) => {
              let data = snapshot.val();
              let diklan;
              if(data != null){
                diklan = Object.values(data);
              } else{
                
              }
              setDiklan(diklan);
              })})}) 
        const sendData=(item) => {
        navigation.navigate('MyStack',{
            screen:'Edit',
            params: {key:item.key,
                        nama:item.nama,
                        user:item.user,
                        harga:item.harga,
                        kategori:item.kategori,
                        deskripsi:item.deskripsi,}
        })
        }

    return(
        <SafeAreaView>
            <StatusBar
            barStyle="light-content"
            //backgroundColor="#fff"
            //translucent={true}
            />
        
        <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center', marginTop:10}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    
                        <View style={{width:50, height:50, alignItems:'center', justifyContent:'center', marginLeft:10}}>
                            <Image 
                            source={require('../assets/back.png')}                    
                            />
                        </View>                                                                               
                </TouchableOpacity>
            
                <Text style={{ marginLeft:0, fontSize:16, fontWeight:'bold'}}>BarangKu</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyStack', { screen: 'Add', params: { user: user } })}
                        style={{left:140,backgroundColor:'#14BB57', paddingHorizontal:10, paddingVertical:7, borderRadius:10}}
                        >
                            <View>
                                <Text style={{color:'#FFF'}}>
                                    Tambah Barang
                                </Text>
                            </View>    
                        </TouchableOpacity>
            </View>    
            <View>                
                <View style={styles.contiklan}>                    
                        {diklan != null ?
                            <FlatList
                            data={diklan}                            
                            keyExtractor={(item) => item.key}
                            renderItem={({item})=>{
                                return (                            
                            <View style={[styles.boxiklan]}>
                                <Text style={styles.juduliklan}>{item.nama}</Text>
                                <Text style={styles.kategori}>{item.kategori}</Text>                                
                                <Text style={{position:'absolute', left:30, bottom:40}}>
                                    <NumberFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={"Rp"} renderText={(value, props) => <Text {...props}>{value}</Text>} />
                                </Text>
                                <TouchableOpacity style={{position:'absolute', right:35}}
                                onPress={()=>sendData(item)}
                                >
                                    <Image
                                    source={require('../assets/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                            /> : <View style={{height:'80%', justifyContent:'center'}}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, top: 30 }}>Anda belum memiliki barang</Text>
                                </View>
                        }
                                                               

                        </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container:{
        // alignItems:'center',        
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
        width:"90%", 
        height:128,
        borderRadius:20,
        marginTop:10,        
        justifyContent:'center',
        alignSelf:'center'
    },
    contiklan:{
        marginTop:0,
        height: 680, 
        width:'100%',        
    },        
    juduliklan:{position:'absolute', left:30, top:30, fontSize:14, fontWeight:'normal', fontWeight:'bold'},
    kategori:{position:'absolute', left:30, top:50, fontSize:13, fontWeight:'normal', color:'#7a7a7a'}
})
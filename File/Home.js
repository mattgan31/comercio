import React, {useEffect, useState} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from "react-native";
import {dataRef, storageRef} from './References';
import NumberFormat from 'react-number-format';

export default function Biodata({navigation, route}){
    const {user} = route.params;  
    const[diklan, setDiklan] = useState('');

    useEffect(()=>{
        const dataFocus = navigation.addListener('focus', ()=>{
            const listener = dataRef.child("barang").orderByChild("key").on('value', (snapshot) => {
              let data = snapshot.val();
              let diklan;
              if(data != null){
                diklan = Object.values(data);
              } else{
                
              }
              setDiklan(diklan);
              })})}) 
        
        
    
    return(
        <SafeAreaView>
            <StatusBar
            barStyle="light-content"            
            />
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.top}>
                    <Text style={styles.welcome}>Welcome, <Text style={{fontStyle:'italic'}}>{(user)}</Text></Text>
                    <TouchableOpacity style={{marginLeft:'auto',backgroundColor:'#14BB57', paddingHorizontal:10, paddingVertical:5, borderRadius:7}}
                    onPress={()=>navigation.navigate('MyStack',{screen:'Barang', params:{user:user}})}>
                        <Text style={{color:'#fff'}}>BarangKu</Text>
                    </TouchableOpacity>
                    
                </View>                
            </View>
            <View style={{flexDirection:'column'}}>                
                <View style={styles.contkonten}>
                <Text style={{marginBottom:20,marginLeft:40, fontWeight:'bold', fontSize:16}}>Semua Barang</Text>
                <SafeAreaView style={{flexDirection:'row'}}>                
                        <FlatList
                            data={diklan}
                            keyExtractor={(item)=>item.key}
                            renderItem={({item})=>{
                                return (                                    
                                        <View style={[styles.boxterbaru,{alignSelf:'center'}]}>
                                            <View style={{justifyContent:'center'}}>
                                                <Text style={{marginLeft:25, fontSize:13, fontWeight:'bold'}}>{item.nama}</Text>
                                            <Text style={{ marginLeft: 25, fontSize: 11, fontStyle:'italic' }}>{item.kategori}</Text>
                                            {item.deskripsi.length >= 25 ? <Text style={{ marginLeft: 25, fontSize: 12 }}>{item.deskripsi.substr(0, 25)}...</Text> : <Text style={{ marginLeft: 25, fontSize: 12 }}>{item.deskripsi}</Text>}
                                            <Text style={{marginLeft:25, fontSize:11}}>Diposting oleh {item.user}</Text>
                                            </View>
                                            <View style={{position:'absolute', left:'65%'}}>
                                                <NumberFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={"Rp"} renderText={(value, props) => <Text {...props} style={{marginLeft:25, fontSize:12}}>{value}</Text>} />
                                            </View>
                                        </View>                                    
                                )
                            }}
                        />
                </SafeAreaView>
            </View>            
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container:{
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#fff',
        height:'100%',
        width:'100%',        
    },
    header:{
        marginTop:20,
        width:337,
        alignItems:'center',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#777',
        paddingVertical:15,        
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
        fontSize:16,
    },
    top:{
        flexDirection:'row',
        width:332, 
        justifyContent:'center'       
    },
    contkonten:{
        marginTop:20,        
        width:410,
        height:550,        
    },    
    boxterbaru:{
        backgroundColor:'#e7e7e7', 
        width:337, 
        height:100,
        borderRadius:10,
        marginBottom:15,
        justifyContent:'center'
    }
})
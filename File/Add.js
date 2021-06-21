import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Picker, Alert } from 'react-native'
import {dataRef, storageRef} from './References';
import * as firebase from 'firebase';

export default function Add({navigation, route}) {
    const {user} = route.params;
    console.log(user);
    const [nama, setNama] = useState(null);
    const [seller, setSeller] = useState(null);        
    const [kategori, setKategori] = useState(null);
    const [deskripsi, setDeskripsi] = useState(null);    
    const [harga, setHarga] = useState(null);
    const [tgl, setTgl] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    setTgl(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
    
    
      

  const submit = () => {
         let newData={
             nama: nama,
             kategori: kategori,             
             deskripsi:deskripsi,
             harga:harga,     
             user:user,
             tgl:tgl             
        };
                
        setSeller(user);
        const ref = dataRef.child("barang").push(newData);
        const key = ref.key;
        
                
        dataRef.child("barang").child(key).update({ 'key': key });
      
        navigation.navigate("Barang");
        Alert.alert("Input Barang Berhasil!");
        return ;
    };
    

    

    return (
        <View style={{backgroundColor:'#fff', height:'100%'}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    
                        <View style={{width:50, height:50, alignItems:'center', justifyContent:'center', marginTop:19, marginLeft:10}}>
                            <Image 
                            source={require('../assets/back.png')}                    
                            />
                        </View>                                                                               
                </TouchableOpacity>
            
                <Text
                style={{marginTop:32, marginLeft:0, fontSize:16, fontWeight:'bold'}}
                >Tambah Barang</Text>     
            </View>    
            <View style={{top:0}}>                

                {/* Input form */}

                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:37, marginTop:20}}>
                            Nama Barang
                        </Text>
                        <Text style={{marginLeft:5, marginTop:20, color:'#B00808'}}>
                            *
                        </Text>
                    </View>
                    <View style={{borderBottomColor:'#c4c4c4', borderBottomWidth:1, width:337, alignSelf:'center', marginTop:10}}>
                        <TextInput
                        style={{width:337, alignSelf:'center', height:25, color:'#000'}}
                        placeholder='Masukan nama barang'
                        onChangeText={(value)=>setNama(value)}
                        value={nama}
                        />
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:37, marginTop:20}}>
                            Kategori Barang
                        </Text>
                        <Text style={{marginLeft:5, marginTop:20, color:'#B00808'}}>
                            *
                        </Text>
                    </View>
                    <View style={{borderBottomColor:'#c4c4c4', borderBottomWidth:1, width:337, alignSelf:'center', marginTop:10}}>
                        <Picker 
                        selectedValue={kategori}
                        onValueChange={(itemValue, itemIndex) =>setKategori(itemValue)}
                        style={{height:25, width:382, right:26, transform:[{scaleX:0.9}, {scaleY:0.9}]}}                     
                        >
                            <Picker.Item label="Pilih kategori barang" value="Belum diisi"/>
                            <Picker.Item label="Elektronik" value="Elektronik"/>
                            <Picker.Item label="Mebel" value="Mebel"/>
                            <Picker.Item label="Kecantikan" value="Kecantikan" />
                            <Picker.Item label="Kendaraan" value="Kendaraan" />
                            <Picker.Item label="Perkakas" value="Perkakas"/>
                        </Picker>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:37, marginTop:20}}>
                            Deskripsi Barang
                        </Text>
                        <Text style={{marginLeft:5, marginTop:20, color:'#B00808'}}>
                            *
                        </Text>
                    </View>
                    <View style={{borderBottomColor:'#c4c4c4', borderBottomWidth:1, width:337, alignSelf:'center', marginTop:10}}>
                        <TextInput
                        multiline={true}
                        style={{width:337, alignSelf:'center', height:25, color:'#000'}}
                        placeholder='Masukan deskripsi barang'
                        onChangeText={(value)=>setDeskripsi(value)}
                        value={deskripsi}
                        />
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:37, marginTop:20}}>
                            Harga Barang
                        </Text>
                        <Text style={{marginLeft:5, marginTop:20, color:'#B00808'}}>
                            *
                        </Text>
                    </View>
                    <View style={{borderBottomColor:'#c4c4c4', borderBottomWidth:1, width:337, alignSelf:'center', marginTop:10}}>
                        <TextInput
                        style={{width:337, alignSelf:'center', height:25, color:'#000'}}
                        placeholder='Masukan harga barang'
                        onChangeText={(value)=>setHarga(value)}
                        value={harga}
                        />
                    </View>
                </View>
                {/* Input form finished */}
                
                <TouchableOpacity
                onPress={()=>submit()}
                >
                    <View 
                    style={{width:337,height:57, backgroundColor:'#14BB57', alignSelf:'center', alignItems:'center', borderRadius:15, marginTop:31, justifyContent:'center'}}
                    >
                        <Image />
                        <Text style={{color:'#fff'}}>
                            Simpan
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    maybeRenderContainer: {
        borderRadius: 3,
        elevation: 2,
        marginTop: 30,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 4,
          width: 4,
        },
        shadowRadius: 5,
        width: 250,
      },
      maybeRenderImageContainer: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        overflow: 'hidden',
      },
      maybeRenderImage: {
        height: 250,
        width: 250,
      },
      maybeRenderImageText: {
        paddingHorizontal: 10,
        paddingVertical: 10,
      }
})

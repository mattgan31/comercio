import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Picker, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {dataRef} from './References';

export default function Add({navigation}) {

    const [nama, setNama] = useState("");
    const [image, setImage] = useState(null);   
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");

  const submit = () => {
         let newData={
             nama: nama,
             kategori: kategori,
             image:image,
             deskripsi:deskripsi,
             harga:harga
        };

        const ref = dataRef.child("barang").push(newData);
        const key = ref.key;

        dataRef.child("barang").child(key).update({'key': key})
        navigation.navigate('Iklanku')
    };

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
                
        if (pickerResult.cancelled === true) {
            this.uploadImage(result.uri)
            .then(()=>{
                Alert.alert('Success');
            })
            .catch((error)=>{
                Alert.alert(error);
            })
        }        
        
      }     
    
    let uploadImage = async (uri) =>{
            const response = await fetch(uri);
            const blob = await response.blog();

            var ref = firebase.storage().ref().child("images/"+imageName);
            return ref.put(blob);
      }

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
                >Tambah Iklan</Text>     
            </View>    
            <View style={{top:0}}>                

                <View 
                style={{width:337, height:114, backgroundColor:'#f3f3f3', alignSelf:'center', marginTop:40, justifyContent:'center',borderRadius:15}}
                >
                    <View 
                    style={{width:94, height:94, backgroundColor:'#c4c4c4', marginLeft:10, borderRadius:15, justifyContent:'center', alignItems:'center'}}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {/* Gambar */}
                        {/* {image !== null ? <Text>data</Text>: <Text>Ieu</Text> } */}
                        
                        { image 
                            ? null
                            : <Text>+</Text>                            
                        }

                        </View>
                    </View>

                    <TouchableOpacity
                    onPress={openImagePickerAsync}
                    style={{position:'absolute', right:30}}>
                        <Text>Tambah Foto +</Text>
                    </TouchableOpacity>                          
                </View>

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

gambar = () => {
    let {
        image
      } = this.state;
  
      if (!image) {
        return;
      }
  
      return (
        <View
          style={styles.maybeRenderContainer}>
          <View
            style={styles.maybeRenderImageContainer}>
            <Image source={{ uri: image }} style={styles.maybeRenderImage} />
          </View>
  
          <Text
            onPress={this._copyToClipboard}
            onLongPress={this._share}
            style={styles.maybeRenderImageText}>
            {image}
          </Text>
        </View>
      );
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

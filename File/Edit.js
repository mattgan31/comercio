import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Picker } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function Add({navigation}) {

    const [kategori, setKategori] = useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }        
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
                    >Edit Iklan</Text>                            
            </View>
            <View style={{top:0}}>                

                <View 
                style={{width:337, height:114, backgroundColor:'#f3f3f3', alignSelf:'center', marginTop:40, justifyContent:'center',borderRadius:15}}
                >
                    <View 
                    style={{width:94, height:94, backgroundColor:'#c4c4c4', marginLeft:10, borderRadius:15, justifyContent:'center', alignItems:'center'}}
                    >
                        <Image 
                        source={require('../assets/plus.png')}                    
                        />
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
                        />
                    </View>
                </View>
                {/* Input form finished */}

                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <TouchableOpacity>
                        <View 
                        style={{width:159,height:57,marginRight:19, backgroundColor:'#14BB57', alignSelf:'center', alignItems:'center', borderRadius:15, marginTop:31, justifyContent:'center'}}
                        >
                            <Image />
                            <Text style={{color:'#fff'}}>
                                Simpan
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View 
                        style={{width:159,height:57, backgroundColor:'#e11616', alignSelf:'center', alignItems:'center', borderRadius:15, marginTop:31, justifyContent:'center'}}
                        >
                            <Image />
                            <Text style={{color:'#fff'}}>
                                Terjual
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({})

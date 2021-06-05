import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

export default function Detail() {
    return (
        <View>
            <View style={{height:405, width:411, backgroundColor:'#c4c4c4'}}>
                <Image source={require('../assets/back.png')}
                style={{top:33, left:27}}
                />
            </View>
            <View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:19,marginLeft:27, fontSize:14}}>Nama Barang</Text>
                        <Text style={{left:195, marginTop:19, fontSize:14}}>Rp1.999.000</Text>                    
                    </View>
                    <Text style={{marginTop:3,marginLeft:27, fontSize:12, color:'#808080'}}>Kategori</Text>
                    <Text style={{marginTop:3,marginLeft:27, fontSize:14, color:'#000'}}>Nama Penjual/Toko</Text>
                </View>
                <View>
                    <Text style={{width:357, alignSelf:'center', marginTop:20}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent adipiscing adipiscing odio dictum. 
                    Est, sed laoreet ultricies non id. 
                    Lobortis sodales scelerisque fames nisl non habitant mollis ac bibendum. 
                    Eros, non at cum eget donec. 
                    Diam quis ut donec habitasse orci. 
                    Neque vel arcu semper mattis ipsum. 
                    Augue nibh consequat urna, sit ac nunc, senectus sagittis. 
                    Et viverra lorem augue aliquet eu bibendum nisl. 
                    Curabitur lacus, morbi pulvinar sed.
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

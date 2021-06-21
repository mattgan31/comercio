import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../File/Login';
import Barang from '../File/Barang';
import Register from '../File/Register';
import Add from '../File/Add';
import Profil from '../File/Profil';
import Edit from '../File/Edit';
import Home from '../File/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router() {    
    return (
        <NavigationContainer>            
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Coba" component={Coba} />     */}
                <Stack.Screen name="LoginScreen" component={Login} />    
                <Stack.Screen name="MainApp" component={MainApp} />                
                <Stack.Screen name="RegisterScreen" component={Register} />                
                <Stack.Screen name="Home" component={Home} />                
                <Stack.Screen name="MyStack" component={MyStack} />                
                <Stack.Screen name="Add" component={Add}/>
                <Stack.Screen name="Edit" component={Edit}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

const MainApp=(route)=>{     
    // const {user} = route.params;
    return(        
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor:'#000',
                inactiveTintColor: '#000',
                activeBackgroundColor: '#CACACA',
                labelStyle:{fontSize:13, marginBottom:10},
                style:{
                    backgroundColor: '#F3F3F3',
                    height:60,
                    alignContent:'center'
                }
            }}
        >                        
            <Tab.Screen 
            name="Home" 
            component={Home}
            initialParams={{params: route.params}}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source={
                        require('../assets/home.png')
                        
                    }
                    style={{marginTop:10}}/>
                ),
            }}
            />
            {/* <Tab.Screen name="Iklanku" component={Iklanku}
            // initialParams={{params: {user: user}}}
            options={{                
                tabBarIcon: ({focused}) => (
                    <Image 
                    source={
                        require('../assets/post.png')
                        
                    }
                    style={{marginTop:10}}/>
                ),
            }}
            /> */}
            <Tab.Screen name="About us" component={Profil}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source={
                        require('../assets/akun.png')
                        
                    }
                    style={{marginTop:10}}/>
                ),
            }}
            />
        </Tab.Navigator>
    )
}



const MyStack=()=>{
    return(
    <Stack.Navigator>
            <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />            
        <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }}/>
        <Stack.Screen name="Barang" component={Barang} options={{ headerShown: false }}/>
    </Stack.Navigator>
    )
}
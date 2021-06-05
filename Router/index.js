import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../File/Login';
import Form from '../File/Form';
import Iklanku from '../File/Iklanku';
import Register from '../File/Register';
import Detail from '../File/Detail';

import Data from '../File/Data';
import About from '../File/About';
import Edit from '../File/Edit';
import Home from '../File/Home';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>            
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="LoginScreen" component={Login} />    
                <Stack.Screen name="RegisterScreen" component={Register} />                
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />                
                <Stack.Screen name="MyStack" component={MyStack} />
                <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>        
        </Stack.Navigator>
    </NavigationContainer>
    )
}

const MainApp=()=>{
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
            <Tab.Screen name="Iklanku" component={Iklanku}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source={
                        require('../assets/post.png')
                        
                    }
                    style={{marginTop:10}}/>
                ),
            }}
            />
            <Tab.Screen name="Profil" component={Data}
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
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>        
    </Stack.Navigator>
    )
}

const MyDrawer=()=>(
        <Drawer.Navigator>
            <Drawer.Screen name="Biodata" component={MainApp} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Detail" component={Detail}/>        
        </Drawer.Navigator>
)

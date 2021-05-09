import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../File/Login';
import Biodata from '../File/Biodata';
import Form from '../File/Form';
import Data from '../File/Data';
import About from '../File/About';
import Edit from '../File/Edit';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={Login} />                
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="Home" component={Biodata} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />                
                <Stack.Screen name="MyStack" component={MyStack} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}

const MainApp=()=>{
    return(
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor:'#2991FF',
            inactiveTintColor: 'white',
            activeBackgroundColor: '#ccffff',
            labelStyle:{fontSize:13, marginBottom:10},
            style:{
                backgroundColor: '#2991FF',
                height:40
            }
            }}
        >
            <Tab.Screen name="Biodata" component={Biodata}/>
            <Tab.Screen name="Isi Portofolio" component={Form}/>
            <Tab.Screen name="Portofolio" component={Data}/>
        </Tab.Navigator>
    )
    }
const MyStack=()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Isi Portofolio" component={Form} options={{ headerShown: false }}/>
        <Stack.Screen name='Edit' component={Edit} options={{ title:'Kembali' }}/>
  </Stack.Navigator>
    )
}

const MyDrawer=()=>(
        <Drawer.Navigator>
            <Drawer.Screen name="Biodata" component={MainApp} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
)

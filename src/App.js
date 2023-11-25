import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login_form } from './login/login.js'; 
import { Lobby } from './lobby/lobby.js'; 
import { Admin } from './admin/admin.js'; 
import { Allchecklist } from './allchecklist/allchecklist.js'; 
import { Client } from './client/client.js'; 
import React, { useState,useEffect } from "react";

//import SyncStorage from 'sync-storage';
const Stack = createNativeStackNavigator(); 
export default function App() {  
  var pkg = require('./app.json'); 
//  SyncStorage.set('version',pkg['version'] );   
var title = "A&M";

async function logo(){

  try {
    const response = await fetch(localStorage.getItem("APIthemelogo"), {
        method: 'GET',
        headers: {
          Accept: 'application/json', 
          'Content-Type': 'application/json',
        },
      } 
    );  
    const json = await response.json();
    localStorage.setItem('logo', json[0]['image']);

    return json.movies; 
  } catch (error) {
  }
}
async function themes(){

  try {
    const response = await fetch(localStorage.getItem("APIthemeviews"), {
        method: 'GET',
        headers: {
          Accept: 'application/json', 
          'Content-Type': 'application/json',
        },
      } 
    );  

    const json = await response.json();
    if(JSON.stringify(json)==="[]"){ 
      localStorage.setItem('themecolor1', "#1D3D4C");
      localStorage.setItem('themecolor2', "#1F1F1F");
      localStorage.setItem('themecolor3', "#303030");
      localStorage.setItem('themecolor4', "#3D3D3D");
      localStorage.setItem('themecolor5', "#FFFFFF");
      localStorage.setItem('themecolor6', "#878787");
      localStorage.setItem('themecolor7', "#ff1100");
      localStorage.setItem('themetype', "Simple");
      localStorage.setItem('themefont', "Inter");
      localStorage.setItem('themefontweight', "normal");
      localStorage.setItem('themefontsizebigtitle', "50"); 
      localStorage.setItem('themefontsizetitle', "20");  
      localStorage.setItem('themefontsizetext', "15"); 
      localStorage.setItem('themefontsizeheader', "30"); 
      localStorage.setItem('themeiconssize', "50"); 
    }else{
      localStorage.setItem('themecolor1', json[0]['web_theme_color_1_id']);
      localStorage.setItem('themecolor2', json[0]['web_theme_color_2_id']);
      localStorage.setItem('themecolor3', json[0]['web_theme_color_3_id']);
      localStorage.setItem('themecolor4', json[0]['web_theme_color_4_id']);
      localStorage.setItem('themecolor5', json[0]['web_theme_color_5_id']);
      localStorage.setItem('themecolor6', json[0]['web_theme_color_6_id']);
      localStorage.setItem('themecolor7', json[0]['web_theme_color_7_id']);
      localStorage.setItem('themetype', json[0]['web_theme_type_id']);
      localStorage.setItem('themefont', json[0]['web_theme_font_id']);
      localStorage.setItem('themefontweight', json[0]['web_theme_font_weight_id']);
      localStorage.setItem('themefontsizebigtitle', json[0]['web_theme_font_size_bigtitle_id']); 
      localStorage.setItem('themefontsizetitle',json[0]['web_theme_font_size_title_id']);  
      localStorage.setItem('themefontsizetext', json[0]['web_theme_font_size_text_id']); 
      localStorage.setItem('themefontsizeheader', json[0]['web_theme_font_size_header_id']); 
      localStorage.setItem('themeiconssize', json[0]['web_theme_icons_size_id']);  
      
    }
    return json.movies; 
  } catch (error) {
  } 
}
themes()
logo()    
 

  return ( 
    <NavigationContainer>  
    <Stack.Navigator screenOptions={{ headerShown: true }}>   
    <Stack.Screen name="Login" component={ Login_form } options={{ title:title}} /> 
    <Stack.Screen name="Lobby" component={ Lobby } options={{ title:title}} /> 
    <Stack.Screen name="Admin" component={ Admin } options={{ title:title}} /> 
    <Stack.Screen name="Allchecklist" component={ Allchecklist} options={{ title:title}} /> 
    <Stack.Screen name="Client" component={ Client} options={{ title:title}} /> 
    </Stack.Navigator>  
  </NavigationContainer>  

  );
} 

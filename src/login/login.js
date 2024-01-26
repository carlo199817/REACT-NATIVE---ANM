import React, { useState,useEffect } from "react";
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/plain.css';
import 'react-simple-toasts/dist/theme/failure.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/dark.css';

import {
  Text, 
    View,
    TextInput,  

    TouchableHighlight,
  } from "react-native";  

export const Login_form = props => {  
let  [myemail, setEmail] = useState(""); 
let  [mypassword, setPassword] = useState("");   
let  [mylogo, setlogo] = useState("");  
setTimeout(() => { 
  setlogo(localStorage.getItem('logo'))
 }, 500);


async function login(){ 

    try { 
      const response = await fetch(localStorage.getItem("APIlogin")+'?email='+myemail+'&password='+mypassword, {
          method: 'GET',
          headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json',
          },
        } 
      );  
      const json = await response.json();
      if(response.status==200){
      localStorage.setItem('tokens', json[0]['tokens']['access']);
      toast( 
        "Successfuly login",
        toastConfig({
       theme:'success'
        })
      ) 
      localStorage.setItem('roles',JSON.stringify(json[0]['roles_user_id']))
      
      var orp = json[0]['roles_user_id']
      localStorage.setItem('rolesNumber', orp.length);
      setTimeout(() => {
        if(orp.length===0){
          toast( 
            "No roles assign yet",
            toastConfig({
           theme:'success'
            })
          ) 
        }else if(orp.length===1){ 
         if(orp[0]['roles_description_id']['description']==="USER"){
          props.navigation.navigate('Client');
         }else if(orp[0]['roles_description_id']['description']==="ADMIN"){
          props.navigation.navigate('Admin');
         }else{
          localStorage.setItem("MainRoles",orp[0]['roles_description_id']['description'])
          props.navigation.navigate('Allchecklist');
         }
        }else{ 
          props.navigation.navigate('Lobby');
        }
        }, 2000);
      }else if(response.status==401) {
        toast( 
          json['detail'],
          toastConfig({
         theme:'failure'
          })
        )
      }else if(response.status==500) {

        toast(
          "Internal server error",
          toastConfig({
         theme:'plain'
          })
        )
    
      }
      return json.movies; 
    } catch (error) {
 

    }
  }


document.body.style = 'background:'+localStorage.getItem('themecolor1');


    return (   
        <View style={{
                flex: 1,
      alignItems: "center",
      justifyContent: "center",
  
        }}> 
              
        <View
            style={{ 

              height: 700,

            }} 
          />
             <View
            style={{ 
              height:500,
              width:500,
              backgroundColor:localStorage.getItem('themecolor2'),
              borderRadius: 30,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 100,
              alignItems: "center",
            }} >
                   <View
            style={{
              height: 10,

            }}
          /> 
           <img src={localStorage.getItem('logo')} alt=""
      style={{
        height:200, width:200}}
      /> 

          <Text style={{
               fontFamily: 'Cochin',
          }}>
          <Text style={{
                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                color:localStorage.getItem('themecolor5'),
                fontWeight: localStorage.getItem('themefontweight'), 
          }}>
       A & M ELITE AVIATION   
          </Text>
        </Text>
    
        <View
            style={{
              height: 30,

            }}
          />
          <View style={{
            height:50
          }}>



            <TextInput

  
              style={
                { 
                   
                  caretColor:localStorage.getItem('themecolor5'),
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:350,
                  borderWidth:2,
                  paddingLeft: 12,
                  
          paddingRight: 8,
          color:localStorage.getItem('themecolor5'),
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,   
                }
              }
              placeholder="USERNAME"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              
              onChangeText={(email) => {setEmail(email)}}
            /> 

            
          </View> 
          <View 
            style={{ 
              height: 10,  
            }}
          />


          <View style={{
            height:50
          }}>
            
            <TextInput
   secureTextEntry={true}
  
              style={
                {
                  fontWeight:localStorage.getItem("themefontweight"),
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:350,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
          color:localStorage.getItem('themecolor5'),
                }
              }
              placeholder="PASSWORD"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              
              onChangeText={(password) => {setPassword(password)}}
            /> 
          </View> 
          <View
            style={{
              height: 30,

            }}
          />
          <TouchableHighlight 
          activeOpacity={0.6}
          underlayColor="#9c9c9c"
          style={{
            width: 180,
            borderRadius: 25,
            
            height: 45,
              alignItems: 'center', 
              backgroundColor: localStorage.getItem('themecolor6'), 
              fontWeight:localStorage.getItem("themefontweight"),
              justifyContent: "center",
          }}onPress={()=>{
         
            if(myemail===""||mypassword===""){
    
              if(localStorage.getItem("allow")==="on"){
                localStorage.setItem('allow', "off");
            toast(
              'Avoid blank space',
              toastConfig({
             theme:'dark'
              })
            )

            setTimeout(() => {
              localStorage.setItem('allow', "on");
             }, 3000);
              }
              }else{ 
                if(localStorage.getItem("allow")==="on"){

                  localStorage.setItem('allow', "off");
                  login(); 
        
              setTimeout(() => {
                localStorage.setItem('allow', "on");
               }, 3000);
                } 
        
              }
          }}>
          <Text
          style={{
            color:localStorage.getItem('themecolor5'),
            fontWeight:localStorage.getItem("themefontweight"),
            fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
          }}
          >LOGIN</Text>
      </TouchableHighlight>
            </View>
          </View>
    
      );
  
  }
  localStorage.setItem('rolesNumber', "");
  localStorage.setItem('roles', "");
  localStorage.setItem('allow', "on");
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

  localStorage.setItem('APIlogin', "https://core01.ameliteaviation.com:19987/login/");
  localStorage.setItem('APIusers', "https://core01.ameliteaviation.com:19987/users/");
  localStorage.setItem('APImultiroles', "  https://core01.ameliteaviation.com:19987/multiroles/");
  localStorage.setItem('APIroles', "https://core01.ameliteaviation.com:19987/roles/");
  localStorage.setItem('APIaircraftlist', "https://core01.ameliteaviation.com:19987/aircraft/");
  localStorage.setItem('APIdeparture', "https://core01.ameliteaviation.com:19987/origin_destination/");
  localStorage.setItem('APIbook', "https://core01.ameliteaviation.com:19987/client/");
  localStorage.setItem('APIbook2', "https://core01.ameliteaviation.com:19987/clientfiltered/");
  localStorage.setItem('APIbook3', "https://core01.ameliteaviation.com:19987/clientfilteredall/");
  localStorage.setItem('APIbook4', "https://core01.ameliteaviation.com:19987/clientadmin/");
  localStorage.setItem('APIbook5', "https://core01.ameliteaviation.com:19987/clientcheck/");
  
  localStorage.setItem('APIpassenger', "https://core01.ameliteaviation.com:19987/passenger/");
  localStorage.setItem('APImultirole', "https://core01.ameliteaviation.com:19987/multiroles/");
  localStorage.setItem('APIvalidation', "https://core01.ameliteaviation.com:19987/validation/");
  localStorage.setItem('APIversion', "https://core01.ameliteaviation.com:19987/version/");

  localStorage.setItem('APIquestiontype', "https://core01.ameliteaviation.com:19987/question_type/");
  localStorage.setItem('APImyquestion', "https://core01.ameliteaviation.com:19987/my_question/");
  localStorage.setItem('APIoption', "https://core01.ameliteaviation.com:19987/option/");
  localStorage.setItem('APIthemes', "https://core01.ameliteaviation.com:19987/themes/");
  localStorage.setItem('APIthemecolor', "https://core01.ameliteaviation.com:19987/theme_color/");

  localStorage.setItem('APIthemetype', "https://core01.ameliteaviation.com:19987/theme_type/");
  localStorage.setItem('APIthemefontfamily', "https://core01.ameliteaviation.com:19987/themes_font/");
  localStorage.setItem('APIthemefontsize', "https://core01.ameliteaviation.com:19987/themes_font_size/");
  localStorage.setItem('APIthemefontweight', "https://core01.ameliteaviation.com:19987/themes_font_weight/");
  localStorage.setItem('APIthemelogo', "https://core01.ameliteaviation.com:19987/themes_logo/");
  localStorage.setItem('APIchecklist', "https://core01.ameliteaviation.com:19987/checklist/");
  localStorage.setItem('APIoverall', "https://core01.ameliteaviation.com:19987/overall/"); 
  localStorage.setItem('APIallmyquestion', "https://core01.ameliteaviation.com:19987/all_my_question/");
  localStorage.setItem('APIallchoices', "https://core01.ameliteaviation.com:19987/allchoices/");
 
  localStorage.setItem('APIwebthemeviews', "https://core01.ameliteaviation.com:19987/web_themes_view/"); 
  localStorage.setItem('APImobilethemeviews', "https://core01.ameliteaviation.com:19987/mobile_themes_view/"); 
  localStorage.setItem('APImobile_themes', "https://core01.ameliteaviation.com:19987/mobile_themes/"); 
  localStorage.setItem('APImobile_themes_activator', "https://core01.ameliteaviation.com:19987/mobile_themes_activate/"); 
  localStorage.setItem('APIweb_themes', "https://core01.ameliteaviation.com:19987/web_themes/"); 
  localStorage.setItem('APIweb_themes_activator', "https://core01.ameliteaviation.com:19987/web_themes_activate/"); 

  
  
import React, { useState} from "react";
import { FaUsersCog } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { AiOutlineForm } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import toasty, { toastConfig } from 'react-simple-toasts';

import { 
    View,
    Text,
    TouchableHighlight
  } from "react-native";
import toast from "react-simple-toasts";
  
 

export const Lobby = props => {
  const secondColumnStart = Math.ceil( JSON.parse(localStorage.getItem('roles')).length/ -7);

    return (
      <View >  
         <View
      style={{
        padding:20,
    
         alignItems: "start",
      
      }}
      >
  <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          
          style={{
            
              alignItems: 'center', 
   
              justifyContent: "center",
          }}onPress={()=>{ 
            props.navigation.navigate('Login');
          }}>
            
             <View
                                      style={{
                                      
                                    //   shadowColor: '#000',
                                     //  shadowOffset: { width: 0, height: 2 },
                                      // shadowOpacity: 0.4,
                                    //   shadowRadius: 10,
                                       alignItems: "center", 
                                       justifyContent: "center", 
                                      }}
                                      > 
                                <BiLogOut 
                                color={localStorage.getItem('themecolor5')}
                                size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}/> 
                                      <View
                                    style={{
                               
                                    }}
                                    >
                                    </View>
                            
                                      </View>
      </TouchableHighlight>
      </View>
     
      <View
      style={{
        flex: 1,
         alignItems: "center",
      
      }}
      >
    <div className='wholecontainer'
    
    > 
                            <div className='col1'>
                                {JSON.parse(localStorage.getItem('roles')).slice(0,secondColumnStart).map((keys) => {
           
                     
                                    return (
                                      <td
                                      style={{
                                        padding:15
                                      }}
                                      > 
                                       <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          style={{
  
              alignItems: 'center', 
          
              justifyContent: "center",
          }}onPress={()=>{
            if(keys.roles_description_id.description==="ADMIN"){
              props.navigation.navigate('Admin');
            } else if(keys.roles_description_id.description==="USER"){
              props.navigation.navigate('Client');
            }else{
              localStorage.setItem("MainRoles",keys.roles_description_id.description)
              console.log(localStorage.getItem('MainRoles'))
              props.navigation.navigate('Allchecklist');
            }
          }}>
             <View
                                      style={{
                                       width:200, 
                                       height:200,
                                       shadowColor: '#000',
                                       shadowOffset: { width: 0, height: 2 },
                                       shadowOpacity: 0.4,
                                       shadowRadius: 10,
                                       alignItems: "center", 
                                       backgroundColor:localStorage.getItem('themecolor2'),
                                       justifyContent: "center", 
                                      }}
                                      > 
                                      {}
                                  
                                    <img src={`data:image/jpeg;base64,`+localStorage.getItem('logo')} style={{height:120, width:120}}/>
                                    <View
                                    style={{
                                      height:15
                                    }}
                                    >
                                    </View> 
                                     <Text
                                     style={{
                                      height:100,
                                      textAlign: 'center', 
                                      color:localStorage.getItem('themecolor5'),
                                      fontSize:localStorage.getItem('themefontsize'),
                                      fontFamily:localStorage.getItem('themefont'),
                                      fontWeight:localStorage.getItem('themefontweight')
                                     }}
                                     >
                                      
                                     {keys.roles_description_id.description}
                                     </Text>
                              
                                      </View>
      </TouchableHighlight>
                              
                                  </td>
                                    )   
                                })}
                            </div>
                            <div className='col2'>
                                {JSON.parse(localStorage.getItem('roles')).slice(secondColumnStart).map((keys) => {

                     
                                    return (
                                      <td
                                      style={{
                                        padding:15
                                      }}
                                      > 
                                       <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          style={{
  
              alignItems: 'center', 
          
              justifyContent: "center",
          }}onPress={()=>{
            if(keys.roles_description_id.description==="ADMIN"){
              props.navigation.navigate('Admin');
            } else if(keys.roles_description_id.description==="USER"){
              props.navigation.navigate('Client');
            }else{
              localStorage.setItem("MainRoles",keys.roles_description_id.description)
              props.navigation.navigate('Allchecklist');
            }
          }}>
             <View
                                      style={{
                                       width:200, 
                                       height:200,
                                       backgroundColor:localStorage.getItem('themecolor2'),
                                       shadowColor: '#000',
                                       shadowOffset: { width: 0, height: 2 },
                                       shadowOpacity: 0.4,
                                       shadowRadius: 10,
                                       alignItems: "center", 
                                     justifyContent:'center',
                        
                                      }}
                                      > 
                                      {}
                                      <View
                                    style={{
                                      height:25
                                    }}
                                    >
                                    </View> 
                                    <img src={keys.roles_description_id.image} style={{height:100, width:100}}/>
                                    <View
                                    style={{
                                      height:20
                                    }} 
                                    ></View>
                                    <Text
                                     style={{
                                      height:100,
                                      textAlign: 'center', 
                                      color:localStorage.getItem('themecolor5'),
                                      fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
                                      fontFamily:localStorage.getItem('themefont'),
                                      fontWeight:localStorage.getItem('themefontweight')
                                     }}
                                     >
                                     {keys.roles_description_id.description}
                                     </Text>
                                      </View>
      </TouchableHighlight>
                              
                                  </td>
                                    )   
                                })}
                            </div>
                       
                        </div>
      </View>
    </View>
    );
  } 



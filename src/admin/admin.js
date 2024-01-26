import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IoMdArrowBack } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-toastify/dist/ReactToastify.css';
import ReactFileReader from 'react-file-reader';
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import Paper from '@mui/material/FormGroup';
import { IoAdd } from "react-icons/io5";
import Grid from '@mui/material/FormGroup';
import dateFormat from 'dateformat';
import moment from 'moment';
import Select from 'react-select'
import { FaCheck } from "react-icons/fa6";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BiSelection } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import {
    View,   
    Text,
    TouchableHighlight,  
    TextInput
  } from "react-native";
  import uploadI from './upload.png'
  import anm from './anm.png'
import { BiZoomIn, BiZoomOut } from "react-icons/bi";


export const Admin = props => {
  var Menu
  if(localStorage.getItem('rolesNumber')==="1"){
    Menu = ['FLIGHT LIST','USER MANAGEMENT','ADD PLANE','ADD DESTINATION','ADD ROLES','THEMES','LOGO','REPORT']
 }else{ 
   Menu = ['FLIGHT LIST','USER MANAGEMENT','ADD PLANE','ADD DESTINATION','ADD ROLES','THEMES','LOGO','REPORT','SWITCH USER']
 }
  const [images, setImages] = useState([]);

  const [images2, setImages2] = useState([]);

  const handleFiles = (files) => {
    setImages(files.base64)

  }; 
  const handleFiles2 = (files) => {
    setImages2(files.base64)

  }; 
  let  [getThemeColors, setThemeColors] = useState(""); 
  let  [getThemeType, setThemeType] = useState(""); 
  let  [getThemeFont, setThemeFont] = useState(""); 
  let  [getThemeSize, setThemeSize] = useState(""); 
  let  [getThemeWeight, setThemeWeight] = useState(""); 

  let  [insertuse, insertUse] = useState(false);  
  let  [myroles1, setRoles1] = useState([]);  
  let  [myrolesid1, setRolesID1] = useState([]);  
 
  let  [inputemail, inputEmail] = useState("");  
  let  [inputpassword, inputPassword] = useState("");  
  let  [inputusername, inputUsername] = useState("");  
  let  [inputfirstname, inputFirstname] = useState("");  
  let  [inputmiddlename, inputMiddlename] = useState("");  
  let  [inputlastname, inputLastname] = useState("");  
  let  [inputsuffix, inputSuffix] = useState("");  
  let  [inputgender, inputGender] = useState("");  
  let  [inputbirthdate, inputBirthdate] = useState("");  
  let  [inputaddress, inputAddress] = useState("");  
  let  [inputcontact, inputContact] = useState(""); 
  let  [inputroles, inputRoles] = useState(""); 


  let  [getOverAll, setOverAll] = useState("");  
  let  [getClientID, setClientID] = useState("");  
  let  [inputlogo, inputLogo] = useState([]);  

  let  [getAircraft, setAircraft] = useState("");  
  let  [getOrigin, setOrigin] = useState("");  
  let  [getDestination, setDestination] = useState("");  
  let  [getOption, setOption] = useState("");  
  let  [getTimeDeparture, setTimeDeparture] = useState("");  
  let  [getPassenger, setPassenger] = useState("");  

  
  let  [mychooser, setChooser] = useState("FLIGHT LIST"); 
  let  [myrole, setRole] = useState("");   
  let  [getroles, setRoles] = useState("");   
 
  let  [myclient, setClient] = useState("[]");   
  let  [mychecklist, setChecklist] = useState("[]");   
  let  [myquestionlist, setQuestionlist] = useState("[]");   

  let  [getdestinationdata, setDestinationData] = useState("");   
  let  [getplanedata, setPlaneData] = useState("");  

  let  [inputdestination, inputDestination] = useState("");  
  let  [inputplane, inputPlane] = useState("");  
  let  [inputcapacity, inputCapacity] = useState("0");  
  let  [getusersdata, setUsersData] = useState("[]"); 
  
  let  [mythemes, setThemes] = useState("1");  

  let  [getthemecolor, setThemeColor] = useState("[]"); 
  let  [getfontfamily, setThemeFontFamily] = useState("[]"); 
  let  [getfontweight, setThemeFontWeight] = useState("[]"); 
  let  [getfontsize, setThemeFontSize] = useState("[]"); 

  let  [insertthemecolor, insertThemeColor] = useState(""); 
  let  [insertthemefamily, insertThemeFontFamily] = useState(""); 
  let  [insertthemeweight, insertThemeFontWeight] = useState(""); 
  let  [insertthemesize, insertThemeSize] = useState(""); 

  let  [getwebtheme, setWebTheme] = useState("[]"); 
  let  [getwebthemeviews, setWebThemeViews] = useState("[]"); 
  let  [getmobiletheme, setMobileTheme] = useState("[]"); 
  let  [getmobilethemeviews, setMobileThemeViews] = useState("[]"); 


  let  [insertwebthemecolor1, insertWebThemeColor1] = useState(""); 
  let  [insertwebthemecolor2, insertWebThemeColor2] = useState(""); 
  let  [insertwebthemecolor3, insertWebThemeColor3] = useState(""); 
  let  [insertwebthemecolor4, insertWebThemeColor4] = useState(""); 
  let  [insertwebthemecolor5, insertWebThemeColor5] = useState(""); 
  let  [insertwebthemecolor6, insertWebThemeColor6] = useState(""); 
  let  [insertwebthemecolor7, insertWebThemeColor7] = useState(""); 
  let  [insertwebthemetype, insertWebThemeType] = useState(""); 
  let  [insertwebthemefont, insertWebThemeFont] = useState(""); 
  let  [insertwebthemeweight, insertWebThemeWeight] = useState(""); 
  let  [insertwebthemesizebigtitle, insertWebThemeSizeBigTitle] = useState(""); 
  let  [insertwebthemesizetitle, insertWebThemeSizeTitle] = useState(""); 
  let  [insertwebthemesizetext, insertWebThemeSizeText] = useState(""); 
  let  [insertwebthemesizeheader, insertWebThemeSizeHeader] = useState(""); 
  let  [insertwebthemeiconsize, insertWebThemeIconSize] = useState(""); 
  

  let  [insertmobilethemecolor1, insertMobileThemeColor1] = useState(""); 
  let  [insertmobilethemecolor2, insertMobileThemeColor2] = useState(""); 
  let  [insertmobilethemecolor3, insertMobileThemeColor3] = useState(""); 
  let  [insertmobilethemecolor4, insertMobileThemeColor4] = useState(""); 
  let  [insertmobilethemecolor5, insertMobileThemeColor5] = useState(""); 
  let  [insertmobilethemecolor6, insertMobileThemeColor6] = useState(""); 
  let  [insertmobilethemetype, insertMobileThemeType] = useState(""); 
  let  [insertmobilethemefont, insertMobileThemeFont] = useState(""); 
  let  [insertmobilethemesize, insertMobileThemeSize] = useState(""); 
  let  [insertmobilethemeweight, insertMobileThemeWeight] = useState(""); 

  async function getUsersAPI(){
    try { 
      const response = await fetch(
        localStorage.getItem("APIusers"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        },  
        } 
      );   
      const json = await response.json();
      
      setUsersData(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) {  
    }
  }

  async function getPlane(){
    try {
      const response = await fetch(
        localStorage.getItem("APIaircraftlist"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setPlaneData(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) { 
    }
  }
  getPlane()


  async function getDestinationOriginAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIdeparture"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setDestinationData(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) { 
    }
  }

  async function getPlaneAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIaircraftlist"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setPlaneData(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getMobileThemesViewAPI(){
    try { 
      const response = await fetch(localStorage.getItem("APImobilethemeviews"), {
          method: 'GET', 
          headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json',
          }, 
        }  
      );  
   
      const json = await response.json();
      if(JSON.stringify(json)!="[]"){  
        setMobileThemeViews(JSON.stringify(json))
        insertMobileThemeColor1({ value: json[0]['theme_color_1_id'], label:<tr
        
        >
          <td> 
          <View
        style={{
          height:20,
          width:20,
          borderColor:'grey',
          borderWidth:0.01, 
          backgroundColor:json[0]['theme_color_1_id']
        }}  
        ></View>
          </td>
          <td>
            <View
            style={{
              width:5
            }}
            >  

            </View>
          </td>
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >{json[0]['theme_color_1_id']}</Text>
          </td>
        </tr>})
   insertMobileThemeColor2({ value: json[0]['theme_color_2_id'], label:<tr
    
   >
     <td>
     <View
   style={{
     height:20,
     width:20,
     borderColor:'grey',
     borderWidth:0.01, 
     backgroundColor:json[0]['theme_color_2_id']
   }}  
   ></View>
     </td>
     <td>
       <View
       style={{
         width:5
       }}
       >  

       </View>
     </td>
     <td>
     <Text 
     style={{
       color:localStorage.getItem('themecolor5')
     }}
     >{json[0]['theme_color_2_id']}</Text>
     </td>
   </tr>})
      insertMobileThemeColor3({ value: json[0]['theme_color_3_id'], label:<tr
    
      >
        <td>
        <View
      style={{
        height:20,
        width:20,
        borderColor:'grey',
        borderWidth:0.01, 
        backgroundColor:json[0]['theme_color_3_id']
      }}  
      ></View>
        </td>
        <td>
          <View
          style={{
            width:5
          }}
          >  

          </View>
        </td>
        <td>
        <Text 
        style={{
          color:localStorage.getItem('themecolor5')
        }}
        >{json[0]['theme_color_3_id']}</Text>
        </td>
      </tr>})
         insertMobileThemeColor4({ value: json[0]['theme_color_4_id'], label:<tr
    
         >
           <td>
           <View
         style={{
           height:20,
           width:20,
           borderColor:'grey',
           borderWidth:0.01, 
           backgroundColor:json[0]['theme_color_4_id']
         }}  
         ></View>
           </td>
           <td>
             <View
             style={{
               width:5
             }}
             >  
 
             </View>
           </td>
           <td>
           <Text 
           style={{
             color:localStorage.getItem('themecolor5')
           }}
           >{json[0]['theme_color_4_id']}</Text>
           </td>
         </tr>})
            insertMobileThemeColor5({ value: json[0]['theme_color_5_id'], label:<tr
    
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:json[0]['theme_color_5_id']
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >{json[0]['theme_color_5_id']}</Text>
              </td>
            </tr>})
               insertMobileThemeColor6({ value: json[0]['theme_color_6_id'], label:<tr
    
               >
                 <td>
                 <View
               style={{
                 height:20,
                 width:20,
                 borderColor:'grey',
                 borderWidth:0.01, 
                 backgroundColor:json[0]['theme_color_6_id']
               }}  
               ></View>
                 </td>
                 <td>
                   <View
                   style={{
                     width:5
                   }}
                   >  
       
                   </View>
                 </td>
                 <td> 
                 <Text 
                 style={{
                   color:localStorage.getItem('themecolor5')
                 }}
                 >{json[0]['theme_color_6_id']}</Text>
                 </td>
               </tr>})
               


insertMobileThemeType({ value: json[0]['theme_type_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['theme_type_id']}</Text>
  </td>
</tr>})
insertMobileThemeFont({ value: json[0]['theme_font_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    fontWeight:json[0]['theme_font_id'],  
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['theme_font_id']}</Text>
  </td> 
</tr>})

insertMobileThemeSize({ value: json[0]['theme_font_size_id'], label:<tr
        
> 
 
  <td>
  <Text 
  style={{
    fontSize:parseInt(json[0]['theme_font_size_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }} 
  >{json[0]['theme_font_size_id']}</Text>
  </td>
</tr>}) 


insertMobileThemeWeight({ value: json[0]['theme_font_weight_id'], label:<tr
        
>
  
  <td>
  <Text 
  style={{
    fontWeight:json[0]['theme_font_weight_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['theme_font_weight_id']}</Text>
  </td>
</tr>})


        

      }
      return json.movies; 
    } catch (error) {
    } 
  }
  async function getWebThemesViewAPI(){
    try {
      const response = await fetch(localStorage.getItem("APIwebthemeviews"), {
          method: 'GET',
          headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json',
          },
        } 
      );  
  
      const json = await response.json();
      if(JSON.stringify(json)!="[]"){  
        setWebThemeViews(JSON.stringify(json))
        insertWebThemeColor1({ value: json[0]['web_theme_color_1_id'], label:<tr
        
        >
          <td> 
          <View
        style={{
          height:20,
          width:20,
          borderColor:'grey',
          borderWidth:0.01, 
          backgroundColor:json[0]['web_theme_color_1_id']
        }}  
        ></View>
          </td>
          <td>
            <View
            style={{
              width:5
            }}
            >  

            </View>
          </td>
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >{json[0]['web_theme_color_1_id']}</Text>
          </td>
        </tr>})
   insertWebThemeColor2({ value: json[0]['web_theme_color_2_id'], label:<tr
    
   >
     <td>
     <View
   style={{
     height:20,
     width:20,
     borderColor:'grey',
     borderWidth:0.01, 
     backgroundColor:json[0]['web_theme_color_2_id']
   }}  
   ></View>
     </td>
     <td>
       <View
       style={{
         width:5
       }}
       >  

       </View>
     </td>
     <td>
     <Text 
     style={{
       color:localStorage.getItem('themecolor5')
     }}
     >{json[0]['web_theme_color_2_id']}</Text>
     </td>
   </tr>})
      insertWebThemeColor3({ value: json[0]['web_theme_color_3_id'], label:<tr
    
      >
        <td>
        <View
      style={{
        height:20,
        width:20,
        borderColor:'grey',
        borderWidth:0.01, 
        backgroundColor:json[0]['web_theme_color_3_id']
      }}  
      ></View>
        </td>
        <td>
          <View
          style={{
            width:5
          }}
          >  

          </View>
        </td>
        <td>
        <Text 
        style={{
          color:localStorage.getItem('themecolor5')
        }}
        >{json[0]['web_theme_color_3_id']}</Text>
        </td>
      </tr>})
         insertWebThemeColor4({ value: json[0]['web_theme_color_4_id'], label:<tr
    
         >
           <td>
           <View
         style={{
           height:20,
           width:20,
           borderColor:'grey',
           borderWidth:0.01, 
           backgroundColor:json[0]['web_theme_color_4_id']
         }}  
         ></View>
           </td>
           <td>
             <View
             style={{
               width:5
             }}
             >  
 
             </View>
           </td>
           <td>
           <Text 
           style={{
             color:localStorage.getItem('themecolor5')
           }}
           >{json[0]['web_theme_color_4_id']}</Text>
           </td>
         </tr>})
            insertWebThemeColor5({ value: json[0]['web_theme_color_5_id'], label:<tr
    
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:json[0]['web_theme_color_5_id']
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >{json[0]['web_theme_color_5_id']}</Text>
              </td>
            </tr>})
               insertWebThemeColor6({ value: json[0]['web_theme_color_6_id'], label:<tr
    
               >
                 <td>
                 <View
               style={{
                 height:20,
                 width:20,
                 borderColor:'grey',
                 borderWidth:0.01, 
                 backgroundColor:json[0]['web_theme_color_6_id']
               }}  
               ></View>
                 </td>
                 <td>
                   <View
                   style={{
                     width:5
                   }}
                   >  
       
                   </View>
                 </td>
                 <td>
                 <Text 
                 style={{
                   color:localStorage.getItem('themecolor5')
                 }}
                 >{json[0]['web_theme_color_6_id']}</Text>
                 </td>
               </tr>})
                  insertWebThemeColor7({ value: json[0]['web_theme_color_7_id'], label:<tr
    
                  >
                    <td>
                    <View
                  style={{
                    height:20,
                    width:20,
                    borderColor:'grey',
                    borderWidth:0.01, 
                    backgroundColor:json[0]['web_theme_color_7_id']
                  }}  
                  ></View>
                    </td>
                    <td>
                      <View
                      style={{
                        width:5
                      }}
                      >  
          
                      </View>
                    </td>
                    <td>
                    <Text 
                    style={{
                      color:localStorage.getItem('themecolor5')
                    }}
                    >{json[0]['web_theme_color_7_id']}</Text>
                    </td>
                  </tr>})


insertWebThemeType({ value: json[0]['web_theme_type_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_type_id']}</Text>
  </td>
</tr>})
insertWebThemeFont({ value: json[0]['web_theme_font_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    fontWeight:json[0]['web_theme_font_id'],  
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeText({ value: json[0]['web_theme_font_size_text_id'], label:<tr
        
>
 
  <td>
  <Text 
  style={{
    fontSize:parseInt(json[0]['web_theme_font_size_text_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_size_text_id']}</Text>
  </td>
</tr>}) 

insertWebThemeSizeTitle({ value: json[0]['web_theme_font_size_title_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    fontSize:parseInt(json[0]['web_theme_font_size_title_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_size_title_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeBigTitle({ value: json[0]['web_theme_font_size_bigtitle_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    fontSize:parseInt(json[0]['web_theme_font_size_bigtitle_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_size_bigtitle_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeHeader({ value: json[0]['web_theme_font_size_header_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
        fontSize:parseInt(json[0]['web_theme_font_size_header_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_size_header_id']}</Text>
  </td>
</tr>})

insertWebThemeWeight({ value: json[0]['web_theme_font_weight_id'], label:<tr
        
>
  
  <td>
  <Text 
  style={{
    fontWeight:json[0]['web_theme_font_weight_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_font_weight_id']}</Text>
  </td>
</tr>})

insertWebThemeIconSize({ value: json[0]['web_theme_icons_size_id'], label:<tr
        
>
  
  <td>
  <Text 
  style={{
    fontSize:parseInt(json[0]['web_theme_icons_size_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{json[0]['web_theme_icons_size_id']}</Text>
  </td>
</tr>})
        

      }
      return json.movies; 
    } catch (error) {
    } 
  }
  async function getMobileThemesAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APImobile_themes"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setMobileTheme(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getWebThemesAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIweb_themes"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setWebTheme(JSON.stringify(json))
    
      return json.movies;   
    } catch (error) { 
    }
  }
  
  async function getColorAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIthemecolor"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      setThemeColor(JSON.stringify(json))
      var ghs = json
      var ni = []
      for(var i=0;i<ghs.length;i++){ 
        ni.push({ value: ghs[i]['description'], label:<tr
        
        >
          <td>
          <View
        style={{
          height:20,
          width:20,
          borderColor:'grey',
          borderWidth:0.01, 
          backgroundColor:ghs[i]['description']
        }}  
        ></View>
          </td>
          <td>
            <View
            style={{
              width:5
            }}
            >  

            </View>
          </td>
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >{ghs[i]['description']}</Text>
          </td>
        </tr>})
      }  
      setThemeColors(ni)
      
    
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getThemeTypeAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIthemetype"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
     // setThemeType(JSON.stringify(json))
      var ghs = json
      var ni = []
      for(var i=0;i<ghs.length;i++){ 
        ni.push({ value: ghs[i]['description'], label:<tr
        
        >
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >{ghs[i]['description']}</Text>
          </td>
        </tr>})
      }  
      setThemeType(ni)
      return json.movies;   
    } catch (error) { 
    }
  }

  async function getFontFamilyAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontfamily"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      setThemeFontFamily(JSON.stringify(json))
      var ghs = json
      var ni = []
      for(var i=0;i<ghs.length;i++){ 
        ni.push({ value: ghs[i]['description'], label:<tr
        
        >
          <td>
          <Text 
          style={{
            fontFamily:ghs[i]['description'],
            color:localStorage.getItem('themecolor5')
          }}
          >{ghs[i]['description']}</Text>
          </td>
        </tr>})
      }  
      setThemeFont(ni)
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getFontSizeAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontsize"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      setThemeFontSize(JSON.stringify(json))
      var ghs = json
      var ni = []
      for(var i=0;i<ghs.length;i++){ 
        ni.push({ value: ghs[i]['description'], label:<tr
        
        >
          <td>
          <Text 
          style={{ 
            fontSize:parseInt(ghs[i]['description'], 0) + 0, 
            color:localStorage.getItem('themecolor5')
          }}
          >{ghs[i]['description']}</Text>
          </td>
        </tr>})
      }  
      setThemeSize(ni)
      return json.movies;   
    } catch (error) { 
    }
  }


  async function getFontWeightAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontweight"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      setThemeFontWeight(JSON.stringify(json))
      var ghs = json
      var ni = []
      for(var i=0;i<ghs.length;i++){ 
        ni.push({ value: ghs[i]['description'], label:<tr
        
        >
          <td>
          <Text 
          style={{ 
            fontWeight:ghs[i]['description'],
            color:localStorage.getItem('themecolor5')
          }}
          >{ghs[i]['description']}</Text>
          </td>
        </tr>})
      }  
      setThemeWeight(ni)
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getChecklist(){

    try {
      const response = await fetch(
        localStorage.getItem("APIbook")+getClientID+"/", {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setChecklist(JSON.stringify(json['checklist_client']))
      var checklist_status = json['checklist_client'];
      var k = 0;
      for(var i=0;i<checklist_status.length;i++) {

        
        if (checklist_status[i]['checklist_status'].toString() == "PENDING") {
          k = 1;
        } else if (checklist_status[i]['checklist_status'].toString() == "DECLINED") {
          k = 2;
        }
      }

        if(k==0){
          try {
            const response = await fetch(
              localStorage.getItem("APIoverall")+getClientID+"/", {
                method: 'PATCH',
                headers: {
                  'Content-type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
              }, 
              body: JSON.stringify({  
                final_administrator_id:"COMPLETED"
              }) 
              } 
            );  
            
          
          } catch (error) { 
          }
          setOverAll("COMPLETED")
      }else if(k==1){
        try {
          const response = await fetch(
            localStorage.getItem("APIoverall")+getClientID+"/", {
              method: 'PATCH',
              headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
            }, 
            body: JSON.stringify({  
              final_administrator_id:"PENDING"
            }) 
            } 
          );  
          
        
        } catch (error) { 
        }
        setOverAll("PENDING")
      }else if(k==2){
        try {
          const response = await fetch(
            localStorage.getItem("APIoverall")+getClientID+"/", {
              method: 'PATCH',
              headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
            }, 
            body: JSON.stringify({  
              final_administrator_id:"DECLINED"
            }) 
            } 
          );  
          
        
        } catch (error) { 
        }
        setOverAll("DECLINED")
      }

      getClient()
      if(response.status==200){ 
   
      }
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getClient(){

    try {
      const response = await fetch(
        localStorage.getItem("APIbook4"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();

      if(response.status==200){ 
      setClient(JSON.stringify(json))
      }
      return json.movies;   
    } catch (error) { 
    }
  }

  async function getlogoAPI(){

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
      inputLogo(json[0]['image'])
      return json.movies;  
    } catch (error) {   
    }
  }

getClient()
  async function getRoles(){

    try {
      const response = await fetch(
        localStorage.getItem("APIroles"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();

      if(response.status==200){ 
      setRoles(JSON.stringify(json))
      var ghs = json
      niag = []
      for(var i=0;i<ghs.length;i++){ 
        niag.push({ value: ghs[i]['description'], label: ghs[i]['description']})
      } 
      inputRoles(niag)

      }
      return json.movies;   
    } catch (error) { 
    }
  }


async function UpdateChecklist(){

var h = JSON.parse(myquestionlist)
var g =0
var c = 0
var checklist_number

var ept = JSON.parse(mychecklist)
for(var i=0;i<ept.length;i++){
  c=0;
  for(var y=0;y<h.length;y++){ 
    if(ept[i]['checklist_group']===h[y]['question_type_user_id']){
      g+=1

try {
  const response = await fetch(
    localStorage.getItem("APImyquestion")+h[y]['id']+"/", {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
    }, 
    body: JSON.stringify({ 
      answer:h[y]['answer'],
      question:h[y]['question'], 
      checker:"admin"
    }) 
    }  
  );  

  if(response.status==200){ 

    if(h[y]['answer']===null||h[y]['answer']===""||h[y]['answer']==="[]"){
      c=1;
    }else  if(h[y]['answer']=="NO"){
      c=2;
    }
  
  }

} catch (error) { 
}
    }


    } 
    checklist_number=ept[i]['id'].toString();
    if(c==0){
      try {
        const response = await fetch(
          localStorage.getItem("APIchecklist")+checklist_number+"/", {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
          }, 
          body: JSON.stringify({  
            checklist_status:"COMPLETED"
          }) 
          } 
        );  
        
      
      } catch (error) { 
      }
    }else if(c==1){
      try {
        const response = await fetch(
          localStorage.getItem("APIchecklist")+checklist_number+"/", {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
          }, 
          body: JSON.stringify({  
            checklist_status:"PENDING"
          }) 
          } 
        );  
        
      
      } catch (error) { 
      }
    }else if(c==2){
      try {
        const response = await fetch(
          localStorage.getItem("APIchecklist")+checklist_number+"/", {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
          }, 
          body: JSON.stringify({  
            checklist_status:"DECLINED"
          }) 
          } 
        );  
        
      
      } catch (error) { 
      }
    }
}



if(h.length===g){

  toast(
    'Update Successfully',
    toastConfig({
   theme:'success'
    })
  )
  getChecklist()
}

}



async function UpdatePlane(){

  try {
    const response = await fetch(
      localStorage.getItem("APIaircraftlist")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: inputplane,
        capacity:inputcapacity
      })
      } 
    );  
 
    if(response.status==200){ 
      toast(
        'Update Plane',
        toastConfig({
       theme:'success'
        })
      )
      getPlaneAPI()
      inputPlane("")
      inputCapacity("0")
    }else if(response.status==400){
      toast(
        'PLANE ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}

async function UpdateFontWeight(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontweight")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      },  
      body: JSON.stringify({ 
        description: insertthemeweight
      })
      } 
    );   

    if(response.status==200){ 
      toast(
        'Update Fontweight',
        toastConfig({
       theme:'success'
        })
      )
      getFontWeightAPI()  
      insertThemeFontWeight("")
    }else if(response.status==400){
      toast(
        'FONTWEIGHT ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}

async function UpdateFontFamily(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontfamily")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemefamily
      })
      } 
    );   

    if(response.status==200){ 
      toast(
        'Update Font Family',
        toastConfig({
       theme:'success'
        })
      )
      getFontFamilyAPI()  
      insertThemeFontFamily("")
    }else if(response.status==400){
      toast(
        'FONT FAMILY ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}
async function UpdateFontSize(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontsize")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemesize
      })
      } 
    );  
 
    if(response.status==200){ 
      toast(
        'Update Font Size',
        toastConfig({
       theme:'success'
        })
      )
      getFontSizeAPI()
      insertThemeSize("")
    }else if(response.status==400){
      toast(
        'FONT SIZE ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}
async function ActivateMobileThemes(){
  if(insertuse===true){
    try {
      const response = await fetch(
        localStorage.getItem("APImobile_themes_activator")+RolesID+"/", {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
   
      if(response.status==200){ 
        toast(
          'THEMES ACTIVATE',
          toastConfig({
         theme:'success'
          })
        )
        getMobileThemesAPI()
        getMobileThemesViewAPI()
      }
   
    } catch (error) { 
    }
  } 
  }
async function ActivateWebThemes(){
if(insertuse===true){
  try {
    const response = await fetch(
      localStorage.getItem("APIweb_themes_activator")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      } 
    );  
 
    if(response.status==200){ 
      toast(
        'THEMES ACTIVATE',
        toastConfig({
       theme:'success'
        })
      )
      getWebThemesAPI()
      getWebThemesViewAPI()
      toast(
        'RESTART IN SECOND',
        toastConfig({
       theme:'success'
        })
      )
      setTimeout(() => { 
        window.location.reload();
       }, 3000);
    }
 
  } catch (error) { 
  }
}
}
async function UpdateColor(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemecolor")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemecolor
      })
      } 
    );  
 
    if(response.status==200){ 
      toast(
        'Update Color',
        toastConfig({
       theme:'success'
        })
      )
      getColorAPI()
      insertThemeColor("")
    }else if(response.status==400){
      toast(
        'COLOR ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}
async function UpdateDestination(){

  try {
    const response = await fetch(
      localStorage.getItem("APIdeparture")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: inputplane,
      })
      } 
    );  
 
    if(response.status==200){ 
      toast(
        'Update Destination',
        toastConfig({
       theme:'success'
        })
      )
      getDestinationOriginAPI()
      inputPlane("")
    }else if(response.status==400){
      toast(
        'DESTINATION ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
 
  } catch (error) { 
  }
}


async function UpdateLogo(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemelogo")+"5/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        image:images2
      })
      } 
    );  

    if(response.status==200){ 
      toast(
        'Logo Update',
        toastConfig({
       theme:'success'
        })
      )

      getlogoAPI()
   
    }
 
  } catch (error) { 
  }
}





async function UpdateRoles(){

  try {
    const response = await fetch(
      localStorage.getItem("APIroles")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: myrole,
        image:images
      })
      } 
    );  

    if(response.status==200){ 

      if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
    toast(
      'Update Roles',
      toastConfig({
     theme:'success'
      })
    )
    setRole("")
    setImages("")
    getRoles()
    setTimeout(() => { 
      getRoles()
      localStorage.setItem('allow', "on");
     }, 3000);
      }
    }else if(response.status==400){
      if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
    toast(
      'ROLES ALREADY EXIST',
      toastConfig({
     theme:'failure'
      })
    )
    setTimeout(() => {
      localStorage.setItem('allow', "on");
     }, 3000);
      }
    }
 
  } catch (error) { 
  }
}

async function addPlane(){

  try {
    const response = await fetch(
      localStorage.getItem("APIaircraftlist"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: inputplane,
        capacity:inputcapacity
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Plane Added',
        toastConfig({
       theme:'success'
        })
      )
      getPlaneAPI()
      inputPlane("")
      inputCapacity("0")

    }else if(response.status==400){
      toast(
        'PLANE ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}

async function addFontFamily(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontfamily"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemefamily,
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Font Family Added',
        toastConfig({
       theme:'success'
        })
      )
      getFontFamilyAPI()
      insertThemeFontFamily("")
     
    }else if(response.status==400){
      toast(
        'FONT FAMILY ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}
async function addFontWeight(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontweight"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemeweight
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Fontweight Added',
        toastConfig({
       theme:'success'
        })
      )
      getFontWeightAPI()
      insertThemeFontWeight("")
     
    }else if(response.status==400){
      toast(
        'FONTWEIGHT ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}
async function addFontSize(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemefontsize"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemesize
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Font Size Added',
        toastConfig({
       theme:'success'
        })
      )
      getFontSizeAPI()
      insertThemeSize("")
     
    }else if(response.status==400){
      toast(
        'FONT SIZE ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}
async function addColor(){

  try {
    const response = await fetch(
      localStorage.getItem("APIthemecolor"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: insertthemecolor,
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Color Added',
        toastConfig({
       theme:'success'
        })
      )
      getColorAPI()
      insertThemeColor("")
     
    }else if(response.status==400){
      toast(
        'COLOR ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}
async function addDestination(){

  try {
    const response = await fetch(
      localStorage.getItem("APIdeparture"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        description: inputdestination,
      })
      } 
    );   
 
   
    if(response.status==201){ 
      toast(
        'Destination Added',
        toastConfig({
       theme:'success'
        })
      )
      getDestinationOriginAPI()
      inputDestination("")
     
    }else if(response.status==400){
      toast(
        'DESTINATION ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
    }
    
  } catch (error) { 
  }
}
async function updateUsers(){


  try {
    const response = await fetch(
      localStorage.getItem("APIusers")+RolesID+"/", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        email:inputemail,
        username:inputusername,
        first_name:inputfirstname,
        middle_name:inputmiddlename,
        last_name:inputlastname,
        suffix:inputsuffix,
        gender:inputgender,
        birthdate:inputbirthdate,
        address:inputaddress,
        contactnumber:inputcontact,
        storepassword:inputpassword,
        password:inputpassword,  
      })
      } 
    );   
    const json = await response.json();
    RolesID=json['email']
    if(response.status==200){ 
      toast(
        'USER UPDATED',
        toastConfig({
       theme:'success'
        })
      )
      DeleteUserRoles()
    }else if(response.status===400){ 
      let keys = Object.keys(json);
      for(var index=0;index<keys.length;index++)
      {
         toast(
          json[keys[index]],
          toastConfig({
         theme:'failure'
          })
        )
      }
    }
    return json.movies;   
  } catch (error) { 
  }
}

async function DeleteUserRoles(){
   
  var gs1 = myrolesid1

  for(var i=0;i<gs1.length;i++){

 try {
    const response = await fetch(
      localStorage.getItem("APImultiroles")+gs1[i]+"/", {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
  
      } 
    );  

  } catch (error) { 
  }
    }   
addUserRoles()

}
async function addUserRoles(){
  
  var gsd = myroles1
  var h = 0 

 for(var i=0;i<gsd.length;i++){

 
   h+=1
 try {
    const response = await fetch(
      localStorage.getItem("APImultiroles"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        roles_description_id:myroles1[i]['value'],
        roles_user_id:RolesID
      })
      } 
    );   
    const json = await response.json();
 


  } catch (error) { 
  }
    }   
    if(h===gsd.length){
      RolesID=""
      inputEmail("")
      inputPassword("")
      inputUsername("") 
      inputFirstname("")
      inputMiddlename("")
      inputLastname("")
      inputSuffix("")
      inputGender("")
      inputBirthdate("")
      inputAddress("")
      inputContact("")
      setRoles1([])
      getUsersAPI()
      getRoles()
    }
  

}
async function addUsers(){

 try {
    const response = await fetch(
      localStorage.getItem("APIusers"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        email:inputemail,
        username:inputusername,
        first_name:inputfirstname,
        middle_name:inputmiddlename,
        last_name:inputlastname,
        suffix:inputsuffix,
        gender:inputgender,
        birthdate:inputbirthdate,
        address:inputaddress,
        contactnumber:inputcontact,
        storepassword:inputpassword,
        password:inputpassword,  
      })
      } 
    );   
    const json = await response.json();
    RolesID = json['email']
    if(response.status==201){ 
      addUserRoles()
      toast(
        'NEW USER CREATED',
        toastConfig({
       theme:'success'
        })
      )

    }else if(response.status===400){ 
      let keys = Object.keys(json);
      for(var index=0;index<keys.length;index++)
      {
         toast(
          json[keys[index]],
          toastConfig({
         theme:'failure'
          })
        )
      }
    }
    return json.movies;   
  } catch (error) { 
  }
}
async function DeleteMobileThemes(){

 try { 
   const response = await fetch(
     localStorage.getItem("APImobile_themes")+RolesID+"/", {
       method: 'DELETE',  
       headers: {
         'Content-type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
     } 
     } 
   );  

   if(response.status==204){ 

     toast(     
       'DELETED',
       toastConfig({
      theme:'failure'
       })  
     )
     getMobileThemesAPI() 
   }

 } catch (error) { 
 }
}
async function DeleteWebThemes(){

  try { 
    const response = await fetch(
      localStorage.getItem("APIweb_themes")+RolesID+"/", {
        method: 'DELETE',  
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      } 
      } 
    );  

    if(response.status==204){ 
 
      toast(     
        'DELETED',
        toastConfig({
       theme:'failure'
        })  
      )
      getWebThemesAPI() 
    }

  } catch (error) { 
  }
}
async function UpdateMobileThemes(){
  
  try { 
    const response = await fetch(
      localStorage.getItem("APImobile_themes")+RolesID+"/", {
        method: 'PATCH', 
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        use_id: insertuse,
        theme_color_1_id: insertmobilethemecolor1.value,
        theme_color_2_id: insertmobilethemecolor2.value,
        theme_color_3_id: insertmobilethemecolor3.value,
        theme_color_4_id: insertmobilethemecolor4.value,
        theme_color_5_id: insertmobilethemecolor5.value,
        theme_color_6_id: insertmobilethemecolor6.value,
        theme_type_id: insertmobilethemetype.value,
        theme_font_id: insertmobilethemefont.value,
        theme_font_size_id: insertmobilethemesize.value,
        theme_font_weight_id: insertmobilethemeweight.value,  
      })  
      } 
    );  
    const json = await response.json();

    RolesID=json['id']
    if(response.status==200){ 
 
      toast(     
        'THEMES UPDATED',
        toastConfig({
       theme:'success'
        })  
      )
      getMobileThemesAPI()
      ActivateMobileThemes() 
    }
    return json.movies;   
  } catch (error) { 
  }
}
async function UpdateWebThemes(){
  
  try { 
    const response = await fetch(
      localStorage.getItem("APIweb_themes")+RolesID+"/", {
        method: 'PATCH', 
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        use_id: insertuse,
        web_theme_color_1_id: insertwebthemecolor1.value,
        web_theme_color_2_id: insertwebthemecolor2.value,
        web_theme_color_3_id: insertwebthemecolor3.value,
        web_theme_color_4_id: insertwebthemecolor4.value,
        web_theme_color_5_id: insertwebthemecolor5.value,
        web_theme_color_6_id: insertwebthemecolor6.value,
        web_theme_color_7_id: insertwebthemecolor7.value,
        web_theme_type_id: insertwebthemetype.value,
        web_theme_font_id: insertwebthemefont.value,
        web_theme_font_size_text_id: insertwebthemesizetext.value,
        web_theme_font_size_title_id: insertwebthemesizetitle.value,
        web_theme_font_size_bigtitle_id: insertwebthemesizebigtitle.value,
        web_theme_font_size_header_id: insertwebthemesizeheader.value,
        web_theme_font_weight_id: insertwebthemeweight.value,  
        web_theme_icons_size_id: insertwebthemeiconsize.value, 
      })  
      } 
    );  
    const json = await response.json();

    RolesID=json['id']
    if(response.status==200){ 
 
      toast(     
        'THEMES UPDATED',
        toastConfig({
       theme:'success'
        })  
      )
      getWebThemesAPI()
      ActivateWebThemes() 
    }
    return json.movies;   
  } catch (error) { 
  }
}
async function addMobileThemes(){

  try { 
    const response = await fetch(
      localStorage.getItem("APImobile_themes"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        use_id: insertuse,
        theme_color_1_id: insertmobilethemecolor1.value,
        theme_color_2_id: insertmobilethemecolor2.value,
        theme_color_3_id: insertmobilethemecolor3.value,
        theme_color_4_id: insertmobilethemecolor4.value,
        theme_color_5_id: insertmobilethemecolor5.value,
        theme_color_6_id: insertmobilethemecolor6.value,
        theme_type_id: insertmobilethemetype.value,
        theme_font_id: insertmobilethemefont.value,
        theme_font_size_id: insertmobilethemesize.value,
        theme_font_weight_id: insertmobilethemeweight.value,  
      })  
      } 
    );  
    const json = await response.json();

    RolesID=json['id']
    if(response.status==201){ 
 
      toast(     
        'THEMES CREATED',
        toastConfig({
       theme:'success'
        }) 
      )
      getMobileThemesAPI()
      ActivateMobileThemes()
    }
    return json.movies;   
  } catch (error) { 
  }
}
async function addWebThemes(){
  try { 
    const response = await fetch(
      localStorage.getItem("APIweb_themes"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        use_id: insertuse,
        web_theme_color_1_id: insertwebthemecolor1.value,
        web_theme_color_2_id: insertwebthemecolor2.value,
        web_theme_color_3_id: insertwebthemecolor3.value,
        web_theme_color_4_id: insertwebthemecolor4.value,
        web_theme_color_5_id: insertwebthemecolor5.value,
        web_theme_color_6_id: insertwebthemecolor6.value,
        web_theme_color_7_id: insertwebthemecolor7.value,
        web_theme_type_id: insertwebthemetype.value,
        web_theme_font_id: insertwebthemefont.value,
        web_theme_font_size_text_id: insertwebthemesizetext.value,
        web_theme_font_size_title_id: insertwebthemesizetitle.value,
        web_theme_font_size_bigtitle_id: insertwebthemesizebigtitle.value,
        web_theme_font_size_header_id: insertwebthemesizeheader.value,
        web_theme_font_weight_id: insertwebthemeweight.value,  
        web_theme_icons_size_id: insertwebthemeiconsize.value, 
      })  
      } 
    );  
    const json = await response.json();

    RolesID=json['id']
    if(response.status==201){ 
 
      toast(     
        'THEMES CREATED',
        toastConfig({
       theme:'success'
        }) 
      )
      getWebThemesAPI()
      ActivateWebThemes()
    }
    return json.movies;   
  } catch (error) { 
  }
}
  async function addRoles(){

    try {
      const response = await fetch(
        localStorage.getItem("APIroles"), {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        body: JSON.stringify({ 
          description: myrole,
          image:images
        })
        } 
      );  
      const json = await response.json();
      getRoles()

      if(response.status==201){ 
  
        if(localStorage.getItem("allow")==="on"){
          localStorage.setItem('allow', "off");
      toast(
        'ROLES ADDED',
        toastConfig({
       theme:'success'
        })
      )
      setRole("")
      setImages("")
      getRoles()
      setTimeout(() => { 
        getRoles()
        localStorage.setItem('allow', "on");
       }, 3000);
        }
      }else if(response.status==400){
        if(localStorage.getItem("allow")==="on"){
          localStorage.setItem('allow', "off");
      toast(
        'ROLES ALREADY EXIST',
        toastConfig({
       theme:'failure'
        })
      )
      setTimeout(() => {
        localStorage.setItem('allow', "on");
       }, 3000);
        }
      }
      return json.movies;   
    } catch (error) { 
    }
  }
  async function DeletePlane(){

    try {
      const response = await fetch(
        localStorage.getItem("APIaircraftlist")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  
  
      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getPlaneAPI()
        inputPlane("")
        inputCapacity("0")
      }
 
    } catch (error) { 
    }
  }
  async function DeleteFontWeight(){

    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontweight")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  

   
      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getFontWeightAPI()
        insertThemeFontWeight("")
      }
 
    } catch (error) { 
    }
  }
  async function DeleteFontFamily(){

    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontfamily")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  

   
      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getFontFamilyAPI()
        insertThemeFontFamily("")
      }
 
    } catch (error) { 
    }
  }
  async function DeleteFontSize(){

    try {
      const response = await fetch(
        localStorage.getItem("APIthemefontsize")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  


      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getFontSizeAPI()
        insertThemeSize("")
      }
 
    } catch (error) { 
    }
  }
  async function DeleteColor(){

    try {
      const response = await fetch(
        localStorage.getItem("APIthemecolor")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  


      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getColorAPI()
        insertThemeColor("")
      }
 
    } catch (error) { 
    }
  }
  async function DeleteDestination(){

    try {
      const response = await fetch(
        localStorage.getItem("APIdeparture")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  
  
      if(response.status==204){ 
        toast(
          'DELETED',
          toastConfig({
         theme:'failure' 
          })
        )
        getDestinationOriginAPI()
        inputDestination("")
      }
 
    } catch (error) { 
    }
  }

  async function DeleteUser(){

    try {
      const response = await fetch(
        localStorage.getItem("APIusers")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  
      toast(
        'USER DELETED',
        toastConfig({
       theme:'failure'
        })
      )
      if(response.status==204){ 
        RolesID=""
        inputEmail("")
        inputPassword("")
        inputUsername("")
        inputFirstname("")
        inputMiddlename("")
        inputLastname("")
        inputSuffix("")
        inputGender("")
        inputBirthdate("")
        inputAddress("")
        inputContact("")
        inputRoles("")
        setRoles1([]) 
        getUsersAPI()
        getRoles()
      }
 
    } catch (error) { 
    }
  }

  async function DeleteRoles(){

    try {
      const response = await fetch(
        localStorage.getItem("APIroles")+RolesID+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 

        } 
      );  
  
      if(response.status==204){ 
        if(localStorage.getItem("allow")==="on"){
          localStorage.setItem('allow', "off");
      toast(
        'DELETED',
        toastConfig({
       theme:'failure'
        })
      )
      setRole("")
      setImages("")
      getRoles()
      setTimeout(() => { 
        getRoles()
        localStorage.setItem('allow', "on");
       }, 3000);
        }
      }
 
    } catch (error) { 
    }
  }

  const secondColumnStart = Math.ceil(Menu.length/ 1);
  var MyUI;
  var setInit;
  var setInit2;
  var DETAILS
  var DETAILS2




  if(mychooser==="SWITCH USER"){
    props.navigation.navigate('Lobby');
  }else if(mychooser==="REPORT"){  
    if(getClientID!=""){
      var STATUS;
      if(getOverAll==="PENDING"){
  STATUS=<Text
  style={{
    color:'yellow'
  }}
  >
    PENDING
  </Text>
      }else if(getOverAll==="DECLINED"){
        STATUS=<Text
        style={{
          color:'red'
        }}
        >
          DECLINED
        </Text>
            }else if(getOverAll==="COMPLETED"){
              STATUS=<Text
              style={{
                color:'cyan'
              }}
              >
                COMPLETED
              </Text>
                  }











    }
    
    MyUI =   MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
      <Text
        style={{
          color:localStorage.getItem('themecolor5'),
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >REPORT</Text>
      </td>
    

    
    </tr>
    <tr>
      <td> </td>
      <td></td>
    </tr>
  </tbody>
  

<View
style={{
  height:20
}}
/>
        
<table>
<tr>
<td>
<View
    style={{
      overflowY:"scroll",
      height: window.innerHeight-200,



    }}
  >
   {
   JSON.parse(myclient).map((str) => {
    var STATUS;
    if(str['final_administrator_id']==="PENDING"){
STATUS=<Text
style={{
  color:'yellow',
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>
  PENDING
</Text>
    }else if(str['final_administrator_id']==="DECLINED"){
      STATUS=<Text
      style={{
        color:'red',
        fontWeight:localStorage.getItem("themefontweight"),
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
      }}
      >
        DECLINED
      </Text>
          }else if(str['final_administrator_id']==="COMPLETED"){
            STATUS=<Text
            style={{
              color:'cyan',
              fontWeight:localStorage.getItem("themefontweight"),
              fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
            }}
            >
              COMPLETED
            </Text>
                }
            return (
              <tr>
                        
                <td>
               
             
                                <Button
                                style={{
                                  backgroundColor:'grey',
                                  color:'white'
                                }}
                                onClick={async ()=>{
                          

                                  try {
                                    const response = await fetch(
                                      localStorage.getItem("APIbook")+str.id+"/", {
                                        method: 'GET',
                                        headers: {
                                          'Content-type': 'application/json',
                                          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
                                      }, 
                                      } 
                                    );  
                                    const json = await response.json();
                                        
                  
                            
                                    var compress = [] 
                                    compress.push(json.aircraft_id.description);
                                    compress.push(json.origin_id);
                                    compress.push(json.destination_id)
                                    compress.push(json.option_id)
                                    compress.push(json.time_departure)
                                    compress.push(json.time_arrival)
                                    var g = json.passenger_id
                                    var h = []
                                    for(var i=0;i<g.length;i++){
                                      h.push(g[i]['first_name']+" "+g[i]['last_name'])
                                    }
                                    compress.push(h.join("\n"))
                                    compress.push(json.final_administrator_id+" OVER ALL")
                                    var g1 = json.checklist_client
                                    var h1 = []
                                    for(var i=0;i<g1.length;i++){
                                      h1.push(g1[i]['checklist_status']+" "+g1[i]['checklist_group'])
                                    }
                                    compress.push(h1.join("\n"))
                                    var g2 = json.question_client_status_id
                                    var h2 = []
                                    for(var i=0;i<g2.length;i++){
                                      h2.push(g2[i]['answer']+" "+g2[i]['question'])
                                    }
                                    compress.push(h2.join("\n"))
                                    let encoded = base64_encode(compress.join("\n"));
                                    const anchor = document.createElement('a');
                                    anchor.href = 'data:application;base64,' + encoded;
                                    anchor.target = '_blank';
                                    anchor.download = dateFormat(str['time_departure'], "mm/dd/yyyy")+" "+json.destination_id+".csv";
                                    anchor.click();
                                  } catch (error) { 
                                  }
                           




                              
                                }} 
                                >Download</Button>
                                
                                  <Button
                                          activeOpacity={0.9}
                                          underlayColor="#9c9c9c"
                                          
                                          style={{
                         
                           
                                          }}
                                       
                                      disabled="true"
                                           
                                          > 
                                            
                                             <View
                                                      style={{
        
                                 width:500,
                                                       alignItems:'left'
                                                           }}
                                            
                                                                      > 
                                                                   
                                                                      
                                                           <td>
                                                  
                                                        
 
          <tr>
            
            <td
          
            >   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                          
                                                              }}
                                                           >
                                                            {dateFormat(str['time_departure'], "mm/dd/yyyy")}
                                                           </Text></td>
                                                           <td><View
                                                           style={{
                                                            width:10
                                                            
                                                           }}
                                                           ></View></td>
                                                           <td>   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                  
                                                              }}
                                                           >
                                                            {str['destination_id']}
                                                           </Text></td>
                                                           <td><View
                                                           style={{
                                                            width:10
                                                           }}
                                                           ></View></td>
                                                           <td>   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                  
                                                              }}
                                                           >
                                                            {STATUS}
                                                           </Text></td>
          </tr>
                                                           
                                          
                        


  
                          
 
 
                                                           </td>
                                                           
                                                            
                                                                      </View>
                                      </Button>


                                 
                </td>
             
              </tr>
            );
          })}
          
       
  </View>

</td>
<td >
 <View
 style={{
  backgroundColor:'yellow',
  width:100
 }}
 >

 </View>
    </td>   
  <td >
 {DETAILS}
    </td>    
    <td >
 <View
 style={{
  backgroundColor:'yellow',
  width:160
 }}
 >

 </View>
    </td> 
    <td >
 {DETAILS2}
    </td>    
</tr>
  </table>

  
    </View>
    
</Typography>
  }else if(mychooser==="FLIGHT LIST"){  
    if(getClientID!=""){
      var STATUS;
      if(getOverAll==="PENDING"){
  STATUS=<Text
  style={{
    color:'yellow'
  }}
  >
    PENDING
  </Text>
      }else if(getOverAll==="DECLINED"){
        STATUS=<Text
        style={{
          color:'red'
        }}
        >
          DECLINED
        </Text>
            }else if(getOverAll==="COMPLETED"){
              STATUS=<Text
              style={{
                color:'cyan'
              }}
              >
                COMPLETED
              </Text>
                  }


                  DETAILS2 = <View
                  style={{
                    overflowY:"scroll",
                    height: window.innerHeight-200,
                    width: 500,
                  
                  }} 
                  >
                 {
   JSON.parse(mychecklist).map((str) => {
    var Status1 
    if(str.checklist_status==="PENDING"){
      Status1 =  <Text
      style={{
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
        fontWeight:'400',
        color:'yellow'
      }}
      >{str.checklist_status}</Text>
    }  if(str.checklist_status==="DECLINED"){
      Status1 =  <Text
      style={{
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
        fontWeight:'400',
        color:'red'
      }}
      >{str.checklist_status}</Text>
    } if(str.checklist_status==="COMPLETED"){
      Status1 =  <Text
      style={{
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
        fontWeight:'400',
        color:'cyan'
      }}
      >{str.checklist_status}</Text>
    }
            return (
              <table>
                <tr>
          <td
          style={{
            width:350
          }}
          > <Text
style={{
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
  fontWeight:'400',
}}
>{str.checklist_group}</Text></td>
<td>{Status1}</td>

              </tr>
              <tr>
                <td>
                {
   JSON.parse(myquestionlist).map((str2,index) => {
  


    var status3
if(str.checklist_group==str2.question_type_user_id){
  var ANSWER
  var yes = false
  var no =false
  var others 

  if(str2.question_type_id==="MULTIPLE"){
var h = JSON.stringify(str2.choices_client_status_id)

    if(str2.answer==="null"){
      others="0:00 AM" 
    }else{
      others=str2.answer 
    }
    ANSWER = <table>
    <tr>
    {JSON.parse(h).map((str4) => {
 
var choices
if(str2.answer===str4.choices){
  choices=
  <td>
  <input 
              type="radio" 
              value={str2.answer} 
              checked={true}
              onClick={()=>{
                var y =  JSON.parse(myquestionlist)
                y[index]['answer']=str4.choices
                setQuestionlist(JSON.stringify(y))
              }} 
              style={{
                width:18,
                height:18,
              }}
          />
         
              <Text
     style={{
   
       fontSize:20,
  color:"white",
  
     }}
     >
  {str4.choices}
     </Text>
  </td>
}   else{
  choices=
  <td>
  <input 
              type="radio" 
              value={str2.answer} 
              checked={false}
              onClick={()=>{
                var y =  JSON.parse(myquestionlist)
                y[index]['answer']=str4.choices
                setQuestionlist(JSON.stringify(y))
              }} 
              style={{
                width:18,
                height:18,
              }}
          />
         
              <Text
     style={{
   
       fontSize:20,
  color:"white",
  
     }}
     >
  {str4.choices}
     </Text>
  </td>
}      


//HERE
return (
<td>
{choices}
</td>
)   
})}
      </tr>
    </table>
  }
  if(str2.question_type_id==="TAG"){ 
 
const options = []
const label = []
var pp = JSON.parse("[]");
if(str2.choices_client_status_id!=null){
  pp =  str2.choices_client_status_id
} 
for(var i=0;i<pp.length;i++){ 
  options.push({ value: pp[i]['choices'], label: pp[i]['choices']})
}  
var oo = JSON.parse("[]");
if(str2.answer!=null){
   oo = JSON.parse(str2.answer);
} 

for(var i=0;i<oo.length;i++){ 
  label.push({ value: oo[i], label: oo[i]})
} 




ANSWER = <table>
    <tr> 
      <td

      >
      <Select
         isMulti
      options={options} 
      value={label}
    onChange={(e)=>{
      var op = e
      var gh = []
      for(var i=0;i<op.length;i++){ 
       gh.push(op[i]['value'])
      } 
      var y =  JSON.parse(myquestionlist)
      y[index]['answer']=JSON.stringify(gh)
      setQuestionlist(JSON.stringify(y))
    }}
      />
      </td>
      </tr>
    </table>
  }
  if(str2.question_type_id==="TIME"){ 

    if(str2.answer==="null"){
      others="0:00 AM" 
    }else{
      others=str2.answer 
    }
    ANSWER = <table>
    <tr>
      <td>
      <input type="TIME" 
     onChange={(v)=>{
      var y =  JSON.parse(myquestionlist)
      y[index]['answer']=v.target.value
      setQuestionlist(JSON.stringify(y))
     }}
     value={moment(str2.answer, ["h:mm A"]).format("HH:mm")}
        style={{
          paddingLeft:10,
          width:200,
          height:30
        }}
        />
      </td>

      </tr>
    </table>
  }
  if(str2.question_type_id==="DATE"){
    if(str2.answer==="null"){
      others=moment().format("yyyy-MM-DD")
    }else{
      others=str2.answer
    }
    ANSWER = <table>
    <tr>
      <td>
      <input type="DATE" 
     onChange={(v)=>{
      var y =  JSON.parse(myquestionlist)
      y[index]['answer']=v.target.value
      setQuestionlist(JSON.stringify(y))
     }}
     value={dateFormat(others, "yyyy-mm-dd")}
        style={{
          paddingLeft:10,
          width:200,
          height:30
        }}
        />
      </td>

      </tr>
    </table>
  }

  if(str2.question_type_id==="OTHERS"){
    if(str2.answer==="null"){
      others=""
    }else{
      others=str2.answer
    }
    ANSWER = <table>
    <tr>
      <td>
      <input type="textfield" 
     onChange={(v)=>{
      var y =  JSON.parse(myquestionlist)
      y[index]['answer']=v.target.value
      setQuestionlist(JSON.stringify(y))
     }}
     value={others}
        style={{
          paddingLeft:10,
          width:200,
          height:30
        }}
        />
      </td>

      </tr>
    </table>
  }
  if(str2.question_type_id==="NUMBER"){
    if(str2.answer==="null"){
      others="" 
    }else{
      others=str2.answer
    }
    ANSWER = <table>
    <tr>
      <td>
      <input type="number" 
     onChange={(v)=>{
      var y =  JSON.parse(myquestionlist)
      y[index]['answer']=v.target.value
      setQuestionlist(JSON.stringify(y))
     }}
     value={others}
        style={{
          paddingLeft:10,
          width:200,
          height:30
        }}
        />
      </td>

      </tr>
    </table>
  }  if(str2.question_type_id==="YESNO"){
      if(str2.answer==="YES"){
        yes=true
        no=false

      }else if(str2.answer==="NO"){
        yes=false
        no=true

      }else{
        yes=false
        no=false

      }
  
    ANSWER = <table>
    <tr>
      <td>
      <input type="checkbox" 
      onClick={()=>{
        var y =  JSON.parse(myquestionlist)
        y[index]['answer']="YES"
        setQuestionlist(JSON.stringify(y))
   
       }}
          checked={yes}
        style={{
          width:18,
          height:18
        }}
        />
      </td>
       <td>
       <Text
       style={{  
         fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
    color:localStorage.getItem('themecolor5'),
    fontWeight:localStorage.getItem('themefontweight')
    
       }}
       >YES</Text>
       </td>
       <td>
      <input type="checkbox" 
               checked={no}
               onClick={()=>{
                var y =  JSON.parse(myquestionlist)
                y[index]['answer']="NO"
                setQuestionlist(JSON.stringify(y))
        
               }}
        style={{
          width:18,
          height:18
        }}
        />
      </td>
       <td>
       <Text
       style={{
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
        fontWeight:localStorage.getItem('themefontweight')
    
       }}
       >
    NO
       </Text>
       </td>
      </tr>
    </table>
    }
  
  status3=
<table>
  <tr>
  <table>
<tr>
   <td
      style={{
  
      }}>
   <Text
   style={{
    fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
    color:localStorage.getItem('themecolor6'),
    fontWeight:localStorage.getItem('themefontweight')

   }}
   >
{str2.question}
   </Text>
   </td>
  </tr>
</table>
  </tr>
  <tr>
{ANSWER}
  </tr>
</table>
}

            return (
              <table>
                <tr>
                {status3}
                </tr>
              </table>
            );
          })}
                </td>
                </tr>
              </table>
            );
          })}
                  </View>  


DETAILS = <View
style={{
  overflowY:"scroll",
  height: window.innerHeight-200,
}}
>
<table
   style={{
  }}>
<tr>
<td>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:'200',
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>DETAILS :</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{getAircraft}</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{getOrigin+"  >  "+getDestination}</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{getOption}</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{"DEPART. : "+dateFormat(getTimeDeparture, "UTC:mmmm dd, yyyy h:MM TT")}</Text>
 </td>
 
</tr>
<tr>
  <View
  style={{
    height:10
  }}
  >
    
  </View>
</tr>
<tr
>
<td
style={{

}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:'200',
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>PASSENGER</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{getPassenger}</Text>
 </td>
 
</tr>
<tr>
  <View
  style={{
    height:10
  }}
  >
    
  </View>
</tr>
<tr
>
<td
style={{

}}
>
<Text
style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:'200',
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>OVERALL STATUS :</Text>
 </td>
 
</tr>
<tr
>
<td
style={{
  paddingLeft:30
}}
>
<Text
style={{
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>{STATUS}</Text>
 </td>
 
</tr>
</table>
</View>    



setInit= <Text
style={{
  fontSize:25,

  color:localStorage.getItem('themecolor5'),
}}
>CLIENT VIEW</Text>


setInit2= <table>
  <tr>
    <td>
    <Text
style={{
  fontSize:25,

  color:localStorage.getItem('themecolor5'),
}}
>CHECKLIST</Text>
    </td>

      <td>
    <Button
    onClick={()=>{
      UpdateChecklist()
    }}
    >
    <FaCheck 
        size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}
        color={localStorage.getItem('themecolor5')}
      ></FaCheck >
    </Button>
      </td>
  </tr>
</table>


    }
    
    MyUI =   MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
      <Text
        style={{
          color:localStorage.getItem('themecolor5'),
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >FLIGHT LIST</Text>
      </td>
      <td>
        <View
        style={{
width:440
        }}>

        </View>
      </td>
      <td>
      <Text
        style={{
 

          color:localStorage.getItem('themecolor5'),
          fontWeight:localStorage.getItem("themefontweight"),
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >{setInit}</Text>
      </td>
      <td>
        <View
        style={{
width:360
        }}>

        </View>
      </td>
      <td>
      <Text
        style={{
          color:localStorage.getItem('themecolor5'),
          fontWeight:localStorage.getItem("themefontweight"),
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >{setInit2}</Text>
      </td>
      <td>
        <View
        style={{
width:10
        }}>

        </View>
      </td>
    
    </tr>
    <tr>
      <td> </td>
      <td></td>
    </tr>
  </tbody>
  

<View
style={{
  height:20
}}
/>
        
<table>
<tr>
<td>
<View
    style={{
      overflowY:"scroll",
      height: window.innerHeight-200,



    }}
  >
   {
   JSON.parse(myclient).map((str) => {
    var STATUS;
    if(str['final_administrator_id']==="PENDING"){
STATUS=<Text
style={{
  color:'yellow',
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
}}
>
  PENDING
</Text>
    }else if(str['final_administrator_id']==="DECLINED"){
      STATUS=<Text
      style={{
        color:'red',
        fontWeight:localStorage.getItem("themefontweight"),
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
      }}
      >
        DECLINED
      </Text>
          }else if(str['final_administrator_id']==="COMPLETED"){
            STATUS=<Text
            style={{
              color:'cyan',
              fontWeight:localStorage.getItem("themefontweight"),
              fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
            }}
            >
              COMPLETED
            </Text>
                }
            return (
              <tr>
                        
                <td>
               
             
                                
                
                                
                                  <Button
                                          activeOpacity={0.9}
                                          underlayColor="#9c9c9c"
                                          
                                          style={{
                         
                           
                                          }}
                                       
                                          onClick={async ()=>{ 
                         
                                            try {
                                              const response = await fetch(
                                                localStorage.getItem("APIbook")+str.id+"/", {
                                                  method: 'GET',
                                                  headers: {
                                                    'Content-type': 'application/json',
                                                    'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
                                                }, 
                                                } 
                                              );  
                                              const json = await response.json();
                                              setClientID(json.id)
                                              setAircraft(json .aircraft_id.description)
                                              setOrigin(json .origin_id)
                                              setDestination(json .destination_id)
                                              setOption(json .option_id) 
                                              setTimeDeparture(json.time_departure)
                                              var g = json.passenger_id
                                              var h = []
                                              for(var i=0;i<g.length;i++){
                                                h.push(g[i]['first_name']+" "+g[i]['last_name'])
                                              }
                                              setPassenger(h.join("\n"))
                                              setOverAll(json.final_administrator_id)
                                              setChecklist(JSON.stringify(json.checklist_client))
                                              
                                              setQuestionlist(JSON.stringify(json.question_client_status_id))
                                            } catch (error) { 
                                            }
                                     
                                  

                                          }}
                                           
                                          > 
                                            
                                             <View
                                                      style={{
        
                                 width:500,
                                                       alignItems:'left'
                                                           }}
                                            
                                                                      > 
                                                                   
                                                                      
                                                           <td>
                                                  
                                                        
 
          <tr>
            
            <td
          
            >   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                          
                                                              }}
                                                           >
                                                            {dateFormat(str['time_departure'], "mm/dd/yyyy")}
                                                           </Text></td>
                                                           <td><View
                                                           style={{
                                                            width:10
                                                            
                                                           }}
                                                           ></View></td>
                                                           <td>   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                  
                                                              }}
                                                           >
                                                            {str['destination_id']}
                                                           </Text></td>
                                                           <td><View
                                                           style={{
                                                            width:10
                                                           }}
                                                           ></View></td>
                                                           <td>   <Text
                                                              style={{
                                                                color:localStorage.getItem('themecolor5'),
                                                                fontWeight:localStorage.getItem("themefontweight"),
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                  
                                                              }}
                                                           >
                                                            {STATUS}
                                                           </Text></td>
          </tr>
                                                           
                                          
                        


  
                          
 
 
                                                           </td>
                                                           
                                                            
                                                                      </View>
                                      </Button>


                                 
                </td>
             
              </tr>
            );
          })}
          
       
  </View>

</td>
<td >
 <View
 style={{
  backgroundColor:'yellow',
  width:100
 }}
 >

 </View>
    </td>   
  <td >
 {DETAILS}
    </td>    
    <td >
 <View
 style={{
  backgroundColor:'yellow',
  width:160
 }}
 >

 </View>
    </td> 
    <td >
 {DETAILS2}
    </td>    
</tr>
  </table>

  
    </View>
    
</Typography>
  }else if(mychooser==="USER MANAGEMENT"){
  if(getusersdata!=""){ 
    MyUI = <Typography>
    <View>
    <Text
        style={{
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
          fontWeight:'bold',
        }}
        >USER MANAGEMENT</Text>
        <View
        style={{
          height:20
        }}
        ></View>
     <table>
<tr>

<td>
<View
        style={{
          overflowY:"scroll",
          height: window.innerHeight-180,
        }}
        >
        {
   JSON.parse(getusersdata).map((str) => {
    return (                   
      <td>

                        <Button

                    
                                onClick={()=>{ 
                                  RolesID = str['id']
                                  inputEmail(str['email'])
                                  inputPassword(str['storepassword'])
                                  inputUsername(str['username'])
                                  inputFirstname(str['first_name'])
                                  inputMiddlename(str['middle_name'])
                                  inputLastname(str['last_name'])
                                  inputSuffix(str['suffix'])
                                  inputGender(str['gender'])
                                  inputBirthdate(str['birthdate'])
                                  inputAddress(str['address'])
                                  inputContact(str['contactnumber'])

                                  var fg =str.roles_user_id
                                  var tyrr = []
                                  var tyra = []
                                  for(var i=0;i<fg.length;i++){ 
                                    tyra.push(fg[i]['id'])
                                    tyrr.push({value:fg[i]['roles_description_id']['description'],label:fg[i]['roles_description_id']['description']})
                                   } 
                                   setRoles1(tyrr)
                                   setRolesID1(tyra)
                                }}
                                 
                                > 
                                  
<View style={{
  width: 500,

  }}>
<Text
                                                style={{
                                                  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
                                                  color:localStorage.getItem('themecolor5'),
                                                  fontWeight:localStorage.getItem('themefontweight')
                                    
                                                }}
                                             >
                                              {str['email']}
                                             </Text>
</View>
</Button>
 </td>
            );
          })}
        </View>
</td>
<td >
<View
style={{
  height: window.innerHeight-180,
}}
>


<table
style={{
  minWidth: 375,
  borderCollapse: 'separate',
  borderSpacing: '0px 4px'
}}
>

<tr>
<td>
<Button
style={{
backgroundColor:localStorage.getItem('themecolor2'),
}}
onClick={()=>{
  RolesID=""
  inputEmail("")
  inputPassword("")
  inputUsername("")
  inputFirstname("")
  inputMiddlename("")
  inputLastname("")
  inputSuffix("")
  inputGender("")
  inputBirthdate("")
  inputAddress("")
  inputContact("")
  setRoles1([])
}}
><Text
style={{
fontWeight:'bold',
fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
color:localStorage.getItem('themecolor5'),
}}
>CLEAR</Text></Button>
</td>

<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(inputemail===""){
  toast(
    "Email shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else if(inputusername===""){
  toast(
    "Username shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else if(inputpassword===""){
  toast(
    "Password shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else{ 
  addUsers()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>ADD</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{


if(inputemail===""){
  toast(
    "Email shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else if(inputusername===""){
  toast(
    "Username shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else if(inputpassword===""){
  toast(
    "Password shouldn't empty",
    toastConfig({
    theme:'dark'
    })
    )
}else{ 
  updateUsers()
}


}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(RolesID==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Select One',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
} 
}else{
  DeleteUser()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>DELETE</Text></Button>
</td>
</tr>
</table>
<View
style={{
  height:15
}}
></View>
<TextInput
        style={
          {
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
        value={inputemail}
        placeholder="EMAIL"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputEmail(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputpassword}
        placeholder="PASSWORD"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputPassword(v)}}
      /> 
      <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputusername}
        placeholder="USERNAME"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputUsername(v)}}
      /> 
      <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputfirstname}
        placeholder="FIRSTNAME"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputFirstname(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputmiddlename}
        placeholder="MIDDLENAME"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputMiddlename(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputlastname}
        placeholder="LASTNAME"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputLastname(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputsuffix}
        placeholder="SUFFIX"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputSuffix(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputgender}
        placeholder="GENDER"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputGender(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputbirthdate}
        placeholder="BIRTHDATE"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputBirthdate(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputaddress}
        placeholder="ADDRESS"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputAddress(v)}}
      /> 
       <View
style={{
  height:5
}}
></View>
<TextInput
        style={
          {
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
        value={inputcontact}
        placeholder="CONTACT NUMBER"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(v) => {inputContact(v)}}
      /> 
</View> 

</td>
<td >
<View
style={{
  height: window.innerHeight-180,
}}
>
<View
            style={{
              height:52.4,
      
            }}>
            </View>


<td
style={{
width:350
}}
>
<Select

         isMulti 
         closeMenuOnSelect={false}
     options={inputroles}
     value={myroles1}
    onChange={(e)=>{
      setRoles1(e)
    }} 
      />
</td>
</View> 

</td>
</tr>
</table>
    </View>
    
</Typography>
  }
  }else if(mychooser==="ADD PLANE"){
    MyUI = <Typography>
    <View>
    <Text
        style={{
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          fontWeight:'bold',
          color:localStorage.getItem('themecolor5'),
        }}
        >PLANE</Text>
        <View
        style={{
          height:20
        }}
        ></View>
     <table>
<tr>

<td>
<View
        style={{
          overflowY:"scroll",
          height: window.innerHeight-180,
        }}
        >
        {
   JSON.parse(getplanedata).map((str) => {
    return (                   
      <td>

                        <Button

                    
                                onClick={()=>{ 
                               inputPlane(str['description'])
                               inputCapacity(str['capacity'])
                                  RolesID = str['id']
                                }}
                                 
                                > 
                                  
<View style={{
  width: 500,

  }}>
<Text
                                                style={{
                                                  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
                                                  fontWeight:localStorage.getItem('themefontweight'),
                                                  color:localStorage.getItem('themecolor5'),
                                    
                                                }}
                                             >
                                              {str['description']}
                                             </Text>
</View>
</Button>
 </td>
            );
          })}
        </View>
</td>
<td >
<View
style={{
  height: window.innerHeight-180,
}}
>


<table
style={{
  minWidth: 375,
  borderCollapse: 'separate',
  borderSpacing: '0px 4px'
}}
>

<tr>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),
}}
onClick={()=>{
inputPlane("")
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>CLEAR</Text></Button>
</td>

<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(inputplane==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Plane name is required',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}else if(inputcapacity==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Capacity is required',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}else{
addPlane()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>ADD</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
if(inputplane==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Plane is required',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}if(inputcapacity==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Capacity is required',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}else{
  UpdatePlane()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(RolesID==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Select One',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}else{
DeletePlane()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>DELETE</Text></Button>
</td>
</tr>
</table>

<View
style={{
  height:15
}}
></View>
<TextInput
        style={
          {
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
        value={inputplane}
        placeholder="PLANE"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(role) => {inputPlane(role)}}
      /> 


<View
style={{
  height:5 
}}
></View>
<TextInput

        style={
          {
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
        
        value={inputcapacity} 
        placeholder="CAPACITY"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(role) => {inputCapacity(role.replace(/[^0-9]/g, ''),)}}
      /> 
  


</View> 
</td>

</tr>
</table>
    </View>
    
</Typography>
  }else if(mychooser==="ADD DESTINATION"){ 
if(getdestinationdata!=""){

  MyUI = <Typography>
  <View>
  <Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >DESTINATION</Text>
      <View
      style={{
        height:20
      }}
      ></View>
   <table>
<tr>
<td>
<View
      style={{
        overflowY:"scroll",
        height: window.innerHeight-180,
      }}
      >
      {
 JSON.parse(getdestinationdata).map((str) => {
  return (                   
    <td>

                      <Button

                  
                              onClick={()=>{ 
                             inputDestination(str['description'])
                                RolesID = str['id']
                              }}
                               
                              > 
                                
<View style={{
width: 300,

}}>
<Text
                                              style={{
                                                fontSize:20,
                                                color:localStorage.getItem('themecolor5'),
                                  
                                              }}
                                           >
                                            {str['description']}
                                           </Text>
</View>
</Button>
</td>
          );
        })}
      </View>
</td>
<td >
<View
style={{
height: window.innerHeight-180,
}}
>


<table
style={{
minWidth: 375,
borderCollapse: 'separate',
borderSpacing: '0px 4px'
}}
>

<tr>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),
}}
onClick={()=>{
inputDestination("")
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>CLEAR</Text></Button>
</td>

<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(inputdestination==="")
{
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
addDestination()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>ADD</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
if(inputdestination==="")
{
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
UpdateDestination()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

if(RolesID==="")
{
if(localStorage.getItem("allow")==="on"){
localStorage.setItem('allow', "off");
toast(
'Select One',
toastConfig({
theme:'dark'
})
)

setTimeout(() => {
localStorage.setItem('allow', "on");
}, 3000);
}
}else{
DeleteDestination()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>DELETE</Text></Button>
</td>
</tr>
</table>

<View
style={{
height:15
}}
></View>
<TextInput
      style={
        {
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
      value={inputdestination}
      placeholder="DESTINATION"
      placeholderTextColor={localStorage.getItem('themecolor6')}
      onChangeText={(role) => {inputDestination(role)}}
    /> 






</View> 
</td>

</tr>
</table>
  </View>
  
</Typography>
}
  }else if(mychooser==="ADD ROLES"){ 
   if(getroles!=""){
    var MYIMAGES  
    if(images.length===0){
      MYIMAGES =   <View
      style={{
        height:500, width:500,
      justifyContent:'center',

      alignItems:'center'
      }}
        
      >
        <img src={uploadI} alt=""
      style={{
        height:100, width:100}}
      />
      </View>
    }else{
      MYIMAGES =   <img src={images} alt=""
      style={{
        height:500, width:500}}
      />
    }
    MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
      <Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >ROLES</Text>
      </td>
      
    </tr>
  </tbody>
  


        
<table>
<tr>
<td

>
<View
    style={{
      overflowY:"scroll",
      height: window.innerHeight-200,
      width: 550,

alignItems:'center' 
    }}
  >
   {
   JSON.parse(getroles).map((str) => {
            return (
              <tr>
                        
                <td>
               
             
                                
                
                                
                                  <Button
                                          activeOpacity={0.9}
                                          underlayColor="#9c9c9c"
                                          
                                          style={{
                                            
                                              alignItems: 'center', 
                                   
                                              justifyContent: "center",
                                          }}
                                       
                                          onClick={()=>{ 
                                            setRole(str['description'])
                                            setImages(str['image'])
                                            RolesID = str['id']
                                          }}
                                           
                                          > 
                                            
                                             <View
                                                                      > 
                                                                   
                                                                      
                                                           <td>
                                                  
                                                           <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      paddingLeft:20,
      justifyContent:'center',
      flexGrow: 1,
      width: 400,
    }}>
             <Text
                                                              style={{
                                                                fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                                                                color:localStorage.getItem('themecolor5'),
                                                  
                                                              }}
                                                           >
                                                            {str['description']}
                                                           </Text>
                                          
                        

    </View> 
    <View style={{
 
   
    }}>
                                   <img src={str['image']} style={{


height:120, width:120}}/>    
    </View>
  </View>
                                                           </td>
                                                           
                                                            
                                                                      </View>
                                      </Button>


                                 
                </td>
             
              </tr>
            );
          })}
          
       
  </View>

</td>
<td
>
<View
style={{
  width:10,
  backgroundColor:'red'
}}
></View>
</td>
<td>
  <View
  style={{width:200}}
  ></View>
</td>
  <td >
  <View
style={{
  overflowY:"scroll",

  height: window.innerHeight-200,
  width:500,
  alignItems:'center' 
}}
>
<table
   
   >
<tr>

<td
>
<View
style={{
width:10,
backgroundColor:'red'
}}
></View>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
  setRole("")
  setImages("")
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>CLEAR</Text></Button>
 </td>
<td
>
<View
style={{
width:10,
backgroundColor:'red'
}}
></View>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
 
if(myrole==="")
{
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
 addRoles()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>ADD</Text></Button>
 </td>
 <td
>
<View
style={{
width:10,
backgroundColor:'red'
}}
></View>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
  if(myrole==="")
{
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
 UpdateRoles()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
 </td>
 <td
>
<View
style={{
width:10,
backgroundColor:'red'
}}
></View>
</td>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

  if(RolesID==="")
{
  if(localStorage.getItem("allow")==="on"){
    localStorage.setItem('allow', "off");
toast(
  'Select One',
  toastConfig({
 theme:'dark'
  })
)

setTimeout(() => {
  localStorage.setItem('allow', "on");
 }, 3000);
  }
}else{
  DeleteRoles()
}
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>DELETE</Text></Button>
 </td>
</tr>

</table>
<td>
  <View
  style={{
    height:20
  }}
  >
  </View>
</td>
<td>
<TextInput
              style={
                {
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
              value={myrole}
              placeholder="ROLES"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(role) => {setRole(role)}}
            /> 
</td>


            <View
            style={{
              height:30
            }}>
            </View>
            <ReactFileReader fileTypes={[".png"]} base64={true} handleFiles={handleFiles}>
          {MYIMAGES}
</ReactFileReader>
        
          


</View> 
    </td>

</tr>
  </table>

  
    </View>
    
</Typography>
   }
  }else if(mychooser==="THEMES"){ 

    var MyUI3 

    if(mythemes==="3"){
      MyUI3 = <View>
      <table
      >
      <tr>

 <td
  style={{
    width:340,

  }}
  >

   <Text
  style={{
    fontWeight:'100', 
    fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
    color:localStorage.getItem('themecolor5'),  
  }}
  >MOBILE THEMES</Text>

   
  </td>



</tr>

      </table>
       <table

       >
      <tr>
      <td>
      <View
            style={{
              height: window.innerHeight-180,  
              alignItems:'center', 
              //WEB THEMES
            }}

            >  

 {
              JSON.parse(getmobilethemeviews).map((str) => {
    
 
               return (                   
                 <td
                 style={{
                   paddingBottom:10
                 }}
                 >
             
             <Button
             disabled={true}
             style={{ 
               width:160,
               height:160,
             }}
             >
               <View>
               <table>
                 <tr>
                   <td
                   >
                   <View style={{
                           borderColor:'white',
                           borderWidth:3, 
         backgroundColor:str['theme_color_1_id'],
         width:160,
         height:160,
         alignItems:'center',
         justifyContent:'center'
               }}> 
                     
                    <View
                   style={{ 
                     height:150,
                     width:150,
                     backgroundColor:str['theme_color_2_id'],
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
               height:40, width:40}}
             /> 
       
              
                 <Text style={{ 
                       fontSize:7,
                       fontFamily: 'Cochin',
                       color:str['theme_color_5_id'],
                       fontWeight: localStorage.getItem('themefontweight'), 
                 }}>
              A & M ELITE AVIATION   
                 </Text>
         
           
               <View
                   style={{
                     height: 10,
       
                   }}
                 />
                 <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
       
       editable={false}
                     style={
                       { 
                          
                         caretColor:str['theme_color_5_id'],
                         outlineStyle: 'none',
                         borderColor:str['theme_color_2_id'], 
                         backgroundColor:str['theme_color_3_id'],
                         height:20,
                         width:70,
                         borderWidth:2,
                         paddingLeft: 5,
                         
                 paddingRight: 8, 
                 color:str['theme_color_5_id'],
                 fontSize:5
                       }
                     }
                     value="email@gmail.com"
                     placeholder="USERNAME"
                     placeholderTextColor={str['theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
       
       <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
                secureTextEntry={true}
         editable={false}
                     style={
                       { 
                        caretColor:str['theme_color_5_id'],
                        outlineStyle: 'none',
                        borderColor:str['theme_color_2_id'], 
                        backgroundColor:str['theme_color_3_id'],
                        height:20,
                        width:70,
                        borderWidth:2,
                        paddingLeft: 5,
                         
                        paddingRight: 8, 
                        color:str['theme_color_5_id'],
                        fontSize:5
                       }
                     }
       
                     placeholder="PASSWORD"
                     placeholderTextColor={str['theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
                 <View style={{
                   height:10
                 }}>
                   
               
                 </View> 
                 <TouchableHighlight 
                 activeOpacity={0.6}
                 underlayColor="#9c9c9c"
                 style={{
                   width:70,
                   borderRadius: 25,
                   height: 15,
                     alignItems: 'center', 
                     backgroundColor: str['theme_color_6_id'], 
                     fontWeight:localStorage.getItem("themefontweight"),
                     justifyContent: "center",
                 }}
                 disabled={true}
                 >
                 <Text
                 style={{
                   color:str['theme_color_5_id'],
                   fontWeight:localStorage.getItem("themefontweight"),
                   fontSize:5
                 }}
                 >LOGIN</Text>
             </TouchableHighlight>
                   </View>
                 </View>
                   </td>
                 </tr>
               </table>
             </View>
             </Button>
       
             </td>
                       );
                     })}

<View
            style={{
              overflowY:"scroll",  
              height: window.innerHeight-460,
              width:161,
       
            }}

            >  
 
            {   
       JSON.parse(getmobiletheme).map((str) => {
      
   
        return (                   
          <td
          style={{
            paddingBottom:10
          }}
          >
      
      <Button
          onClick={()=>{
            insertMobileThemeColor1({ value: str['theme_color_1_id'], label:<tr
        
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:str['theme_color_1_id']
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >{str['theme_color_1_id']}</Text>
              </td>
            </tr>}) 
       insertMobileThemeColor2({ value: str['theme_color_2_id'], label:<tr
        
       >
         <td>
         <View
       style={{
         height:20,
         width:20,
         borderColor:'grey',
         borderWidth:0.01, 
         backgroundColor:str['theme_color_2_id']
       }}  
       ></View>
         </td>
         <td>
           <View
           style={{
             width:5
           }}
           >  

           </View>
         </td>
         <td>
         <Text 
         style={{
           color:localStorage.getItem('themecolor5')
         }}
         >{str['theme_color_2_id']}</Text>
         </td>
       </tr>})
          insertMobileThemeColor3({ value: str['theme_color_3_id'], label:<tr
        
          >
            <td>
            <View
          style={{
            height:20,
            width:20,
            borderColor:'grey',
            borderWidth:0.01, 
            backgroundColor:str['theme_color_3_id']
          }}  
          ></View>
            </td>
            <td>
              <View
              style={{
                width:5
              }}
              >  
  
              </View>
            </td>
            <td>
            <Text 
            style={{
              color:localStorage.getItem('themecolor5')
            }}
            >{str['theme_color_3_id']}</Text>
            </td>
          </tr>})
             insertMobileThemeColor4({ value: str['theme_color_4_id'], label:<tr
        
             >
               <td>
               <View
             style={{
               height:20,
               width:20,
               borderColor:'grey',
               borderWidth:0.01, 
               backgroundColor:str['theme_color_4_id']
             }}  
             ></View>
               </td>
               <td>
                 <View
                 style={{
                   width:5
                 }}
                 >  
     
                 </View>
               </td>
               <td>
               <Text 
               style={{
                 color:localStorage.getItem('themecolor5')
               }}
               >{str['theme_color_4_id']}</Text>
               </td>
             </tr>})
                insertMobileThemeColor5({ value: str['theme_color_5_id'], label:<tr
        
                >
                  <td>
                  <View
                style={{
                  height:20,
                  width:20,
                  borderColor:'grey',
                  borderWidth:0.01, 
                  backgroundColor:str['theme_color_5_id']
                }}  
                ></View>
                  </td>
                  <td>
                    <View
                    style={{
                      width:5
                    }}
                    >  
        
                    </View>
                  </td>
                  <td>
                  <Text 
                  style={{
                    color:localStorage.getItem('themecolor5')
                  }}
                  >{str['theme_color_5_id']}</Text>
                  </td>
                </tr>})
                   insertMobileThemeColor6({ value: str['theme_color_6_id'], label:<tr
        
                   >
                     <td>
                     <View
                   style={{
                     height:20,
                     width:20,
                     borderColor:'grey',
                     borderWidth:0.01, 
                     backgroundColor:str['theme_color_6_id']
                   }}  
                   ></View>
                     </td>
                     <td>
                       <View
                       style={{
                         width:5
                       }}
                       >  
           
                       </View>
                     </td>
                     <td>
                     <Text 
                     style={{
                       color:localStorage.getItem('themecolor5')
                     }}
                     >{str['theme_color_6_id']}</Text>
                     </td>
                   </tr>})
                    

insertMobileThemeType({ value: str['theme_type_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    color:localStorage.getItem('themecolor5')
  }}
  >{str['theme_type_id']}</Text>
  </td>
</tr>})

insertMobileThemeFont({ value: str['theme_font_id'], label:<tr
        
>
 

  <td>
  <Text 
  style={{ 
    fontFamily:str['theme_font_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{str['theme_font_id']}</Text>
  </td>
</tr>})

insertMobileThemeSize({ value: str['theme_font_size_id'], label:<tr
        
>
 
  <td>
  <Text 
  style={{
    fontSize:parseInt(str['theme_font_size_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['theme_font_size_id']}</Text>
  </td>
</tr>})  






insertMobileThemeWeight({ value: str['theme_font_weight_id'], label:<tr
        
>
  
  <td> 
  <Text 
  style={{
    fontWeight:str['theme_font_weight_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{str['theme_font_weight_id']}</Text>
  </td>
</tr>})




            RolesID=str['id']
            insertUse(str['use_id'])
          }}
             style={{ 
               width:160,
               height:160,
             }}
             >
               <View>
               <table>
                 <tr>
                   <td
                   >
                   <View style={{
                           borderColor:'white',
                           borderWidth:0.01, 
         backgroundColor:str['theme_color_1_id'],
         width:160,
         height:160,
         alignItems:'center',
         justifyContent:'center'
               }}> 
                     
                    <View
                   style={{ 
                     height:150,
                     width:150,
                     backgroundColor:str['theme_color_2_id'],
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
               height:40, width:40}}
             /> 
       
              
                 <Text style={{ 
                       fontSize:7,
                       fontFamily: 'Cochin',
                       color:str['theme_color_5_id'],
                       fontWeight: localStorage.getItem('themefontweight'), 
                 }}>
              A & M ELITE AVIATION   
                 </Text>
         
           
               <View
                   style={{
                     height: 10,
       
                   }}
                 />
                 <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
       
       editable={false}
                     style={
                       { 
                          
                         caretColor:str['theme_color_5_id'],
                         outlineStyle: 'none',
                         borderColor:str['theme_color_2_id'], 
                         backgroundColor:str['theme_color_3_id'],
                         height:20,
                         width:70,
                         borderWidth:2,
                         paddingLeft: 5,
                         
                 paddingRight: 8, 
                 color:str['theme_color_5_id'],
                 fontSize:5
                       }
                     }
                     value="email@gmail.com"
                     placeholder="USERNAME"
                     placeholderTextColor={str['theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
       
       <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
                secureTextEntry={true}
         editable={false}
                     style={
                       { 
                        caretColor:str['theme_color_5_id'],
                        outlineStyle: 'none',
                        borderColor:str['theme_color_2_id'], 
                        backgroundColor:str['theme_color_3_id'],
                        height:20,
                        width:70,
                        borderWidth:2,
                        paddingLeft: 5,
                         
                        paddingRight: 8, 
                        color:str['theme_color_5_id'],
                        fontSize:5
                       }
                     }
       
                     placeholder="PASSWORD"
                     placeholderTextColor={str['theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
                 <View style={{
                   height:10
                 }}>
                   
               
                 </View> 
                 <TouchableHighlight 
                 activeOpacity={0.6}
                 underlayColor="#9c9c9c"
                 style={{
                   width:70,
                   borderRadius: 25,
                   height: 15,
                     alignItems: 'center', 
                     backgroundColor: str['theme_color_6_id'], 
                     fontWeight:localStorage.getItem("themefontweight"),
                     justifyContent: "center",
                 }}
                 disabled={true}
                 >
                 <Text
                 style={{
                   color:str['theme_color_5_id'],
                   fontWeight:localStorage.getItem("themefontweight"),
                   fontSize:5
                 }}
                 >LOGIN</Text>
             </TouchableHighlight>
                   </View>
                 </View>
                   </td>
                 </tr>
               </table>
             </View>
             </Button>

      </td>
                );
              })}
            </View>
            </View> 
      </td>
      <td>

      </td>
      <View style={{
           flex: 1,
           alignItems: "center",
           height: window.innerHeight-180,  
      }}> 
              
  <View
  style={{
    height:530,
    width:530,
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor:insertmobilethemecolor1.value 
}}
  >
  <View
            style={{ 


            }} 
          />
             <View
            style={{ 
              height:500,
              width:500,
              backgroundColor:insertmobilethemecolor2.value,
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
                fontSize:parseInt(insertmobilethemesize.value, 0) + 0, 
                color:insertmobilethemecolor5.value,
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
            editable={false}
  
              style={
                { 
                   
                  caretColor:insertmobilethemecolor5.value,
                  outlineStyle: 'none',
                  borderColor:insertmobilethemecolor2.value, 
                  backgroundColor:insertmobilethemecolor3.value,
                  height:50,
                  width:350,
                  borderWidth:2,
                  paddingLeft: 12, 
                  
          paddingRight: 8,
          color:insertmobilethemecolor5.value,
          fontSize:parseInt(insertmobilethemesize.value, 0) + 0,   
                }
              }
              value="email@gmail.com"
              placeholder="USERNAME"
              placeholderTextColor={insertmobilethemecolor6.value}
              
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
   editable={false}
              style={
                {
                  caretColor:insertmobilethemecolor5.value,
                  outlineStyle: 'none',
                  borderColor:insertmobilethemecolor2.value, 
                  backgroundColor:insertmobilethemecolor3.value,
                  height:50,
                  width:350,
                  borderWidth:2,
                  paddingLeft: 12,
                  
          paddingRight: 8,
          color:insertmobilethemecolor5.value,
          fontSize:parseInt(insertmobilethemesize.value, 0) + 0,   
                }
              }
              placeholder="PASSWORD"
              placeholderTextColor={insertmobilethemecolor6.value}
     
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
              backgroundColor: insertmobilethemecolor6.value, 
              fontWeight:localStorage.getItem("themefontweight"),
              justifyContent: "center",
          }}>
          <Text
          style={{ 
            color:insertmobilethemecolor5.value,
            fontWeight:localStorage.getItem("themefontweight"),
            fontSize:parseInt(insertmobilethemesize.value, 0) + 0,    
          }} 
          >LOGIN</Text>
      </TouchableHighlight>
            </View>
  </View>
          </View>
          <td >
      <View
      style={{
      height: window.innerHeight-180,


      }}
      >
      
      
      <table
      style={{

      borderCollapse: 'separate',
      borderSpacing: '0px 4px'
      }}
      >
        <tr>
        <input type="checkbox" 
      onClick={()=>{
      if(insertuse===false){
        insertUse(true) 
      }else{
        insertUse(false)   
      }
       }}
          checked={insertuse}
        style={{
          width:18,
          height:18
        }}
        />
                <Text
                style={{
                  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
                  color:localStorage.getItem('themecolor5')
                }}
                > Use this</Text>
        </tr>
        <tr>
      <Button
      style={{
        width:220,
        backgroundColor:localStorage.getItem('themecolor2'),
      }}
      onClick={()=>{
        insertMobileThemeColor1({ value:"#1D3D4C", label:<tr
        
        >
          <td>
          <View
        style={{
          height:20,
          width:20,
          borderColor:'grey',
          borderWidth:0.01, 
          backgroundColor:"#1D3D4C"
        }}  
        ></View>
          </td>
          <td>
            <View
            style={{
              width:5
            }}
            >  

            </View>
          </td>
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >#1D3D4C</Text>
          </td>
        </tr>})
   insertMobileThemeColor2({ value: "#1F1F1F", label:<tr
    
   >
     <td>
     <View
   style={{
     height:20,
     width:20,
     borderColor:'grey',
     borderWidth:0.01, 
     backgroundColor:"#1F1F1F"
   }}  
   ></View>
     </td>
     <td>
       <View
       style={{
         width:5
       }}
       >  

       </View>
     </td>
     <td>
     <Text 
     style={{
       color:localStorage.getItem('themecolor5')
     }}
     >#1F1F1F</Text>
     </td>
   </tr>})
      insertMobileThemeColor3({ value: "#303030", label:<tr
    
      >
        <td>
        <View
      style={{
        height:20,
        width:20,
        borderColor:'grey',
        borderWidth:0.01, 
        backgroundColor:"#303030"
      }}  
      ></View>
        </td>
        <td>
          <View
          style={{
            width:5
          }}
          >  

          </View>
        </td>
        <td>
        <Text 
        style={{
          color:localStorage.getItem('themecolor5')
        }}
        >#303030</Text>
        </td>
      </tr>})
         insertMobileThemeColor4({ value:"#3D3D3D", label:<tr
    
         >
           <td>
           <View
         style={{
           height:20,
           width:20,
           borderColor:'grey',
           borderWidth:0.01, 
           backgroundColor:"#3D3D3D"
         }}  
         ></View>
           </td>
           <td>
             <View
             style={{
               width:5
             }}
             >  
 
             </View>
           </td>
           <td>
           <Text 
           style={{
             color:localStorage.getItem('themecolor5')
           }}
           >#3D3D3D</Text>
           </td>
         </tr>})
            insertMobileThemeColor5({ value: "#FFFFFF", label:<tr
    
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:"#FFFFFF"
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >#FFFFFF</Text>
              </td>
            </tr>})
               insertMobileThemeColor6({ value: "#878787", label:<tr
    
               >
                 <td>
                 <View
               style={{
                 height:20,
                 width:20,
                 borderColor:'grey',
                 borderWidth:0.01, 
                 backgroundColor:"#878787"
               }}  
               ></View>
                 </td>
                 <td>
                   <View
                   style={{
                     width:5
                   }}
                   >  
       
                   </View>
                 </td>
                 <td>
                 <Text 
                 style={{
                   color:localStorage.getItem('themecolor5')
                 }}
                 >#878787</Text>
                 </td>
               </tr>})
               
                        insertMobileThemeType({ value: "Simple", label:<tr
    
                        >
                        
                          <td>
                          <Text 
                          style={{
                            color:localStorage.getItem('themecolor5')
                          }}
                          >Simple</Text>
                          </td>
                        </tr>}) 
                         insertMobileThemeFont({ value: "Inter", label:<tr
    
                         >
                         
                           <td>
                           <Text 
                           style={{
                             color:localStorage.getItem('themecolor5')
                           }}
                           >Inter</Text>
                           </td>
                         </tr>}) 
                           insertMobileThemeSize({ value: "13", label:<tr
     
                           >
                           
                             <td>
                             <Text 
                             style={{
                              fontSize:parseInt("13", 0) + 0, 
                               color:localStorage.getItem('themecolor5')
                             }}
                             >13</Text>
                             </td>
                           </tr>}) 
                         
                                       insertMobileThemeWeight({ value: "normal", label:<tr
    
                                       >
                                       
                                         <td>
                                         <Text 
                                         style={{
                                          fontWeight:'normal',
                                           color:localStorage.getItem('themecolor5')
                                         }}
                                         >normal</Text>
                                         </td>
                                       </tr>}) 
                                      
                              
      
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >DEFAULT</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        width:220,
        backgroundColor:localStorage.getItem('themecolor2'),
      }}
      onClick={()=>{
        getMobileThemesViewAPI()
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >CLEAR</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{
        addMobileThemes() 
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >ADD</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{
       if(RolesID===""){
        toast(
          'Select One',
          toastConfig({
          theme:'dark'
          }) 
          )
       }else{
        UpdateMobileThemes()
       }
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >UPDATE</Text></Button>
      </tr>
      <tr>

      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{

      if(RolesID==="")
      {
      if(localStorage.getItem("allow")==="on"){
      localStorage.setItem('allow', "off");
      toast(
      'Select One',
      toastConfig({
      theme:'dark'
      }) 
      )
       
      setTimeout(() => {
      localStorage.setItem('allow', "on");
      }, 3000);
      }
      }else{
        DeleteMobileThemes()
      }
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >DELETE</Text></Button>
      </tr>
      <View
            style={{
              height: window.innerHeight-473,
            }}
            
            >  
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors} 
      value={insertmobilethemecolor1} 
        onChange={(v)=>{
          insertMobileThemeColor1(v)
        }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 1"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertmobilethemecolor2} 
        onChange={(v)=>{ 
          insertMobileThemeColor2(v)
        }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 2"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content", 

   
     }),
       }}

    >
    
     </Select>
      </tr>


      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertmobilethemecolor3} 
      onChange={(v)=>{ 
        insertMobileThemeColor3(v)
      }}  
   

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 3"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertmobilethemecolor4} 
      onChange={(v)=>{ 
        insertMobileThemeColor4(v)
      }}  
     
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 4"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertmobilethemecolor5} 
      onChange={(v)=>{ 
        insertMobileThemeColor5(v)
      }}  


    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 5"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertmobilethemecolor6} 
      onChange={(v)=>{ 
        insertMobileThemeColor6(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color6"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      </View>
      </table>
      </View> 
      </td>
      <td >
      <View
      style={{
      height: window.innerHeight-180,
   
      }}
      >
      
      
      <table
      style={{

      borderCollapse: 'separate',
      borderSpacing: '0px 4px'
      }}
      >
  
      <View
            style={{
              height: window.innerHeight-473,
            }}
            
            >  
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeType} 
      value={insertmobilethemetype} 
      onChange={(v)=>{   
        insertMobileThemeType(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Type"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }), 
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeFont} 
      value={insertmobilethemefont} 
      onChange={(v)=>{   
        insertMobileThemeFont(v)
      }}  
 
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Font Family"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220, 
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content", 

   
     }),
       }}

    >
    
     </Select>
      </tr>


      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeSize}
      value={insertmobilethemesize} 
      onChange={(v)=>{   
        insertMobileThemeSize(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Size Text"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
    
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeWeight}  
      value={insertmobilethemeweight} 
      onChange={(v)=>{   
        insertMobileThemeWeight(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: { 
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Font Weight"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
   
      </View>
      </table>
      </View> 
      </td>

      </tr>
      </table>
    </View>
    }else if(mythemes==="1"){
      MyUI3 = <View>
      <table
      >
      <tr>

 <td
  style={{
    width:340,

  }}
  >

   <Text
  style={{
    fontWeight:'100', 
    fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
    color:localStorage.getItem('themecolor5'),  
  }}
  >WEB THEMES</Text>

   
  </td>



</tr>

      </table>
       <table

       >
      <tr>
      <td>
      <View
            style={{
              height: window.innerHeight-180,  
              alignItems:'center', 
              //WEB THEMES
            }}

            >  

 {
              JSON.parse(getwebthemeviews).map((str) => {
    

               return (                   
                 <td
                 style={{
                   paddingBottom:10
                 }}
                 >
             
             <Button
             disabled={true}
             style={{ 
               width:160,
               height:160,
             }}
             >
               <View>
               <table>
                 <tr>
                   <td
                   >
                   <View style={{
                           borderColor:'white',
                           borderWidth:3, 
         backgroundColor:str['web_theme_color_1_id'],
         width:160,
         height:160,
         alignItems:'center',
         justifyContent:'center'
               }}> 
                     
                    <View
                   style={{ 
                     height:150,
                     width:150,
                     backgroundColor:str['web_theme_color_2_id'],
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
               height:40, width:40}}
             /> 
       
              
                 <Text style={{ 
                       fontSize:7,
                       fontFamily: 'Cochin',
                       color:str['web_theme_color_5_id'],
                       fontWeight: localStorage.getItem('themefontweight'), 
                 }}>
              A & M ELITE AVIATION   
                 </Text>
         
           
               <View
                   style={{
                     height: 10,
       
                   }}
                 />
                 <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
       
       editable={false}
                     style={
                       { 
                          
                         caretColor:str['web_theme_color_5_id'],
                         outlineStyle: 'none',
                         borderColor:str['web_theme_color_2_id'], 
                         backgroundColor:str['web_theme_color_3_id'],
                         height:20,
                         width:70,
                         borderWidth:2,
                         paddingLeft: 5,
                         
                 paddingRight: 8, 
                 color:str['web_theme_color_5_id'],
                 fontSize:5
                       }
                     }
                     value="email@gmail.com"
                     placeholder="USERNAME"
                     placeholderTextColor={str['web_theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
       
       <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
                secureTextEntry={true}
         editable={false}
                     style={
                       { 
                        caretColor:str['web_theme_color_5_id'],
                        outlineStyle: 'none',
                        borderColor:str['web_theme_color_2_id'], 
                        backgroundColor:str['web_theme_color_3_id'],
                        height:20,
                        width:70,
                        borderWidth:2,
                        paddingLeft: 5,
                         
                        paddingRight: 8, 
                        color:str['web_theme_color_5_id'],
                        fontSize:5
                       }
                     }
       
                     placeholder="PASSWORD"
                     placeholderTextColor={str['web_theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
                 <View style={{
                   height:10
                 }}>
                   
               
                 </View> 
                 <TouchableHighlight 
                 activeOpacity={0.6}
                 underlayColor="#9c9c9c"
                 style={{
                   width:70,
                   borderRadius: 25,
                   height: 15,
                     alignItems: 'center', 
                     backgroundColor: str['web_theme_color_6_id'], 
                     fontWeight:localStorage.getItem("themefontweight"),
                     justifyContent: "center",
                 }}
                 disabled={true}
                 >
                 <Text
                 style={{
                   color:str['web_theme_color_5_id'],
                   fontWeight:localStorage.getItem("themefontweight"),
                   fontSize:5
                 }}
                 >LOGIN</Text>
             </TouchableHighlight>
                   </View>
                 </View>
                   </td>
                 </tr>
               </table>
             </View>
             </Button>
       
             </td>
                       );
                     })}

<View
            style={{
              overflowY:"scroll",  
              height: window.innerHeight-460,
              width:161,
       
            }}

            >  

            {   
       JSON.parse(getwebtheme).map((str) => {
      
   
        return (                   
          <td
          style={{
            paddingBottom:10
          }}
          >
      
      <Button
          onClick={()=>{
            insertWebThemeColor1({ value: str['web_theme_color_1_id'], label:<tr
        
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:str['web_theme_color_1_id']
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >{str['web_theme_color_1_id']}</Text>
              </td>
            </tr>})
       insertWebThemeColor2({ value: str['web_theme_color_2_id'], label:<tr
        
       >
         <td>
         <View
       style={{
         height:20,
         width:20,
         borderColor:'grey',
         borderWidth:0.01, 
         backgroundColor:str['web_theme_color_2_id']
       }}  
       ></View>
         </td>
         <td>
           <View
           style={{
             width:5
           }}
           >  

           </View>
         </td>
         <td>
         <Text 
         style={{
           color:localStorage.getItem('themecolor5')
         }}
         >{str['web_theme_color_2_id']}</Text>
         </td>
       </tr>})
          insertWebThemeColor3({ value: str['web_theme_color_3_id'], label:<tr
        
          >
            <td>
            <View
          style={{
            height:20,
            width:20,
            borderColor:'grey',
            borderWidth:0.01, 
            backgroundColor:str['web_theme_color_3_id']
          }}  
          ></View>
            </td>
            <td>
              <View
              style={{
                width:5
              }}
              >  
  
              </View>
            </td>
            <td>
            <Text 
            style={{
              color:localStorage.getItem('themecolor5')
            }}
            >{str['web_theme_color_3_id']}</Text>
            </td>
          </tr>})
             insertWebThemeColor4({ value: str['web_theme_color_4_id'], label:<tr
        
             >
               <td>
               <View
             style={{
               height:20,
               width:20,
               borderColor:'grey',
               borderWidth:0.01, 
               backgroundColor:str['web_theme_color_4_id']
             }}  
             ></View>
               </td>
               <td>
                 <View
                 style={{
                   width:5
                 }}
                 >  
     
                 </View>
               </td>
               <td>
               <Text 
               style={{
                 color:localStorage.getItem('themecolor5')
               }}
               >{str['web_theme_color_4_id']}</Text>
               </td>
             </tr>})
                insertWebThemeColor5({ value: str['web_theme_color_5_id'], label:<tr
        
                >
                  <td>
                  <View
                style={{
                  height:20,
                  width:20,
                  borderColor:'grey',
                  borderWidth:0.01, 
                  backgroundColor:str['web_theme_color_5_id']
                }}  
                ></View>
                  </td>
                  <td>
                    <View
                    style={{
                      width:5
                    }}
                    >  
        
                    </View>
                  </td>
                  <td>
                  <Text 
                  style={{
                    color:localStorage.getItem('themecolor5')
                  }}
                  >{str['web_theme_color_5_id']}</Text>
                  </td>
                </tr>})
                   insertWebThemeColor6({ value: str['web_theme_color_6_id'], label:<tr
        
                   >
                     <td>
                     <View
                   style={{
                     height:20,
                     width:20,
                     borderColor:'grey',
                     borderWidth:0.01, 
                     backgroundColor:str['web_theme_color_6_id']
                   }}  
                   ></View>
                     </td>
                     <td>
                       <View
                       style={{
                         width:5
                       }}
                       >  
           
                       </View>
                     </td>
                     <td>
                     <Text 
                     style={{
                       color:localStorage.getItem('themecolor5')
                     }}
                     >{str['web_theme_color_6_id']}</Text>
                     </td>
                   </tr>})
                      insertWebThemeColor7({ value: str['web_theme_color_7_id'], label:<tr
        
                      >
                        <td>
                        <View
                      style={{
                        height:20,
                        width:20,
                        borderColor:'grey',
                        borderWidth:0.01, 
                        backgroundColor:str['web_theme_color_7_id']
                      }}  
                      ></View>
                        </td>
                        <td>
                          <View
                          style={{
                            width:5
                          }}
                          >  
              
                          </View>
                        </td>
                        <td>
                        <Text 
                        style={{
                          color:localStorage.getItem('themecolor5')
                        }}
                        >{str['web_theme_color_7_id']}</Text>
                        </td>
                      </tr>})

insertWebThemeType({ value: str['web_theme_type_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_type_id']}</Text>
  </td>
</tr>})

insertWebThemeFont({ value: str['web_theme_font_id'], label:<tr
        
>
 

  <td>
  <Text 
  style={{ 
    fontFamily:str['web_theme_font_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeText({ value: str['web_theme_font_size_text_id'], label:<tr
        
>
 
  <td>
  <Text 
  style={{
    fontSize:parseInt(str['web_theme_font_size_text_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_size_text_id']}</Text>
  </td>
</tr>})  

insertWebThemeSizeTitle({ value: str['web_theme_font_size_title_id'], label:<tr
        
>
 

  <td>
  <Text 
  style={{
    fontSize:parseInt(str['web_theme_font_size_title_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_size_title_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeBigTitle({ value: str['web_theme_font_size_bigtitle_id'], label:<tr
        
>


  <td>
  <Text 
  style={{
    fontSize:parseInt(str['web_theme_font_size_bigtitle_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_size_bigtitle_id']}</Text>
  </td>
</tr>})

insertWebThemeSizeHeader({ value: str['web_theme_font_size_header_id'], label:<tr
        
>

  <td>
  <Text 
  style={{
    fontSize:parseInt(str['web_theme_font_size_header_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_size_header_id']}</Text>
  </td>
</tr>})

insertWebThemeWeight({ value: str['web_theme_font_weight_id'], label:<tr
        
>
  
  <td> 
  <Text 
  style={{
    fontWeight:str['web_theme_font_weight_id'],
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_font_weight_id']}</Text>
  </td>
</tr>})



insertWebThemeIconSize({ value: str['web_theme_icons_size_id'], label:<tr
        
> 
  
  <td>
  <Text 
  style={{
    fontSize:parseInt(str['web_theme_icons_size_id'], 0) + 0, 
    color:localStorage.getItem('themecolor5')
  }}
  >{str['web_theme_icons_size_id']}</Text>
  </td>
</tr>})

            RolesID=str['id']
            insertUse(str['use_id'])
          }}
             style={{ 
               width:160,
               height:160,
             }}
             >
               <View>
               <table>
                 <tr>
                   <td
                   >
                   <View style={{
                           borderColor:'white',
                           borderWidth:0.01, 
         backgroundColor:str['web_theme_color_1_id'],
         width:160,
         height:160,
         alignItems:'center',
         justifyContent:'center'
               }}> 
                     
                    <View
                   style={{ 
                     height:150,
                     width:150,
                     backgroundColor:str['web_theme_color_2_id'],
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
               height:40, width:40}}
             /> 
       
              
                 <Text style={{ 
                       fontSize:7,
                       fontFamily: 'Cochin',
                       color:str['web_theme_color_5_id'],
                       fontWeight: localStorage.getItem('themefontweight'), 
                 }}>
              A & M ELITE AVIATION   
                 </Text>
         
           
               <View
                   style={{
                     height: 10,
       
                   }}
                 />
                 <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
       
       editable={false}
                     style={
                       { 
                          
                         caretColor:str['web_theme_color_5_id'],
                         outlineStyle: 'none',
                         borderColor:str['web_theme_color_2_id'], 
                         backgroundColor:str['web_theme_color_3_id'],
                         height:20,
                         width:70,
                         borderWidth:2,
                         paddingLeft: 5,
                         
                 paddingRight: 8, 
                 color:str['web_theme_color_5_id'],
                 fontSize:5
                       }
                     }
                     value="email@gmail.com"
                     placeholder="USERNAME"
                     placeholderTextColor={str['web_theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
       
       <View style={{
                   height:20
                 }}>
       
       
       
                   <TextInput
                secureTextEntry={true}
         editable={false}
                     style={
                       { 
                        caretColor:str['web_theme_color_5_id'],
                        outlineStyle: 'none',
                        borderColor:str['web_theme_color_2_id'], 
                        backgroundColor:str['web_theme_color_3_id'],
                        height:20,
                        width:70,
                        borderWidth:2,
                        paddingLeft: 5,
                         
                        paddingRight: 8, 
                        color:str['web_theme_color_5_id'],
                        fontSize:5
                       }
                     }
       
                     placeholder="PASSWORD"
                     placeholderTextColor={str['web_theme_color_6_id']}
                     
       
                   /> 
       
                   
                 </View> 
                 <View style={{
                   height:10
                 }}>
                   
               
                 </View> 
                 <TouchableHighlight 
                 activeOpacity={0.6}
                 underlayColor="#9c9c9c"
                 style={{
                   width:70,
                   borderRadius: 25,
                   height: 15,
                     alignItems: 'center', 
                     backgroundColor: str['web_theme_color_6_id'], 
                     fontWeight:localStorage.getItem("themefontweight"),
                     justifyContent: "center",
                 }}
                 disabled={true}
                 >
                 <Text
                 style={{
                   color:str['web_theme_color_5_id'],
                   fontWeight:localStorage.getItem("themefontweight"),
                   fontSize:5
                 }}
                 >LOGIN</Text>
             </TouchableHighlight>
                   </View>
                 </View>
                   </td>
                 </tr>
               </table>
             </View>
             </Button>

      </td>
                );
              })}
            </View>
            </View>
      </td>
      <td>

      </td>
      <View style={{
           flex: 1,
           alignItems: "center",
           height: window.innerHeight-180,  
      }}> 
              
  <View
  style={{
    height:530,
    width:530,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:insertwebthemecolor1.value 
}}
  >
  <View
            style={{ 


            }} 
          />
             <View
            style={{ 
              height:500,
              width:500,
              backgroundColor:insertwebthemecolor2.value,
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
                fontSize:parseInt(insertwebthemesizeheader.value, 0) + 0, 
                color:insertwebthemecolor5.value,
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
            editable={false}
  
              style={
                { 
                   
                  caretColor:insertwebthemecolor5.value,
                  outlineStyle: 'none',
                  borderColor:insertwebthemecolor2.value, 
                  backgroundColor:insertwebthemecolor3.value,
                  height:50,
                  width:350,
                  borderWidth:2,
                  paddingLeft: 12,
                  
          paddingRight: 8,
          color:insertwebthemecolor5.value,
          fontSize:parseInt(insertwebthemesizetext.value, 0) + 0,   
                }
              }
              value="email@gmail.com"
              placeholder="USERNAME"
              placeholderTextColor={parseInt(insertwebthemesizetext.value, 0) + 0}
              
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
   editable={false}
              style={
                {
                  caretColor:insertwebthemecolor5.value,
                  outlineStyle: 'none',
                  borderColor:insertwebthemecolor2.value, 
                  backgroundColor:insertwebthemecolor3.value,
                  height:50,
                  width:350,
                  borderWidth:2,
                  paddingLeft: 12,
                  
          paddingRight: 8,
          color:insertwebthemecolor5.value,
          fontSize:parseInt(insertwebthemesizetext.value, 0) + 0,   
                }
              }
              placeholder="PASSWORD"
              placeholderTextColor={parseInt(insertwebthemesizetext.value, 0) + 0}
     
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
              backgroundColor: insertwebthemecolor6.value, 
              fontWeight:localStorage.getItem("themefontweight"),
              justifyContent: "center",
          }}>
          <Text
          style={{ 
            color:insertwebthemecolor5.value,
            fontWeight:localStorage.getItem("themefontweight"),
            fontSize:parseInt(insertwebthemesizetext.value, 0) + 0,    
          }}
          >LOGIN</Text>
      </TouchableHighlight>
            </View>
  </View>
          </View>
          <td >
      <View
      style={{
      height: window.innerHeight-180,


      }}
      >
      
      
      <table
      style={{

      borderCollapse: 'separate',
      borderSpacing: '0px 4px'
      }}
      >
        <tr>
        <input type="checkbox" 
      onClick={()=>{
      if(insertuse===false){
        insertUse(true) 
      }else{
        insertUse(false)   
      }
       }}
          checked={insertuse}
        style={{
          width:18,
          height:18
        }}
        />
                <Text
                style={{
                  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
                  color:localStorage.getItem('themecolor5')
                }}
                > Use this</Text>
        </tr>
        <tr>
      <Button
      style={{
        width:220,
        backgroundColor:localStorage.getItem('themecolor2'),
      }}
      onClick={()=>{
        insertWebThemeColor1({ value:"#1D3D4C", label:<tr
        
        >
          <td>
          <View
        style={{
          height:20,
          width:20,
          borderColor:'grey',
          borderWidth:0.01, 
          backgroundColor:"#1D3D4C"
        }}  
        ></View>
          </td>
          <td>
            <View
            style={{
              width:5
            }}
            >  

            </View>
          </td>
          <td>
          <Text 
          style={{
            color:localStorage.getItem('themecolor5')
          }}
          >#1D3D4C</Text>
          </td>
        </tr>})
   insertWebThemeColor2({ value: "#1F1F1F", label:<tr
    
   >
     <td>
     <View
   style={{
     height:20,
     width:20,
     borderColor:'grey',
     borderWidth:0.01, 
     backgroundColor:"#1F1F1F"
   }}  
   ></View>
     </td>
     <td>
       <View
       style={{
         width:5
       }}
       >  

       </View>
     </td>
     <td>
     <Text 
     style={{
       color:localStorage.getItem('themecolor5')
     }}
     >#1F1F1F</Text>
     </td>
   </tr>})
      insertWebThemeColor3({ value: "#303030", label:<tr
    
      >
        <td>
        <View
      style={{
        height:20,
        width:20,
        borderColor:'grey',
        borderWidth:0.01, 
        backgroundColor:"#303030"
      }}  
      ></View>
        </td>
        <td>
          <View
          style={{
            width:5
          }}
          >  

          </View>
        </td>
        <td>
        <Text 
        style={{
          color:localStorage.getItem('themecolor5')
        }}
        >#303030</Text>
        </td>
      </tr>})
         insertWebThemeColor4({ value:"#3D3D3D", label:<tr
    
         >
           <td>
           <View
         style={{
           height:20,
           width:20,
           borderColor:'grey',
           borderWidth:0.01, 
           backgroundColor:"#3D3D3D"
         }}  
         ></View>
           </td>
           <td>
             <View
             style={{
               width:5
             }}
             >  
 
             </View>
           </td>
           <td>
           <Text 
           style={{
             color:localStorage.getItem('themecolor5')
           }}
           >#3D3D3D</Text>
           </td>
         </tr>})
            insertWebThemeColor5({ value: "#FFFFFF", label:<tr
    
            >
              <td>
              <View
            style={{
              height:20,
              width:20,
              borderColor:'grey',
              borderWidth:0.01, 
              backgroundColor:"#FFFFFF"
            }}  
            ></View>
              </td>
              <td>
                <View
                style={{
                  width:5
                }}
                >  
    
                </View>
              </td>
              <td>
              <Text 
              style={{
                color:localStorage.getItem('themecolor5')
              }}
              >#FFFFFF</Text>
              </td>
            </tr>})
               insertWebThemeColor6({ value: "#878787", label:<tr
    
               >
                 <td>
                 <View
               style={{
                 height:20,
                 width:20,
                 borderColor:'grey',
                 borderWidth:0.01, 
                 backgroundColor:"#878787"
               }}  
               ></View>
                 </td>
                 <td>
                   <View
                   style={{
                     width:5
                   }}
                   >  
       
                   </View>
                 </td>
                 <td>
                 <Text 
                 style={{
                   color:localStorage.getItem('themecolor5')
                 }}
                 >#878787</Text>
                 </td>
               </tr>})
                  insertWebThemeColor7({ value: "#ff1100", label:<tr
    
                  >
                    <td>
                    <View
                  style={{
                    height:20,
                    width:20,
                    borderColor:'grey',
                    borderWidth:0.01, 
                    backgroundColor:"#ff1100"
                  }}  
                  ></View>
                    </td>
                    <td>
                      <View
                      style={{
                        width:5
                      }}
                      >  
          
                      </View>
                    </td>
                    <td>
                    <Text 
                    style={{
                      color:localStorage.getItem('themecolor5')
                    }}
                    >#ff1100</Text>
                    </td>
                  </tr>}) 
                        insertWebThemeType({ value: "Simple", label:<tr
    
                        >
                        
                          <td>
                          <Text 
                          style={{
                            color:localStorage.getItem('themecolor5')
                          }}
                          >Simple</Text>
                          </td>
                        </tr>}) 
                         insertWebThemeFont({ value: "Inter", label:<tr
    
                         >
                         
                           <td>
                           <Text 
                           style={{
                             color:localStorage.getItem('themecolor5')
                           }}
                           >Inter</Text>
                           </td>
                         </tr>}) 
                           insertWebThemeSizeText({ value: "15", label:<tr
     
                           >
                           
                             <td>
                             <Text 
                             style={{
                              fontSize:parseInt("15", 0) + 0, 
                               color:localStorage.getItem('themecolor5')
                             }}
                             >15</Text>
                             </td>
                           </tr>}) 
                             insertWebThemeSizeTitle({ value: "20", label:<tr
    
                             >
                             
                               <td>
                               <Text 
                               style={{
                                fontSize:parseInt("20", 0) + 0, 
                                 color:localStorage.getItem('themecolor5')
                               }}
                               >20</Text>
                               </td>
                             </tr>}) 
                                 insertWebThemeSizeBigTitle({ value: "50", label:<tr
    
                                 >
                                 
                                   <td>
                                   <Text 
                                   style={{
                                    fontSize:parseInt("50", 0) + 0, 
                                     color:localStorage.getItem('themecolor5')
                                   }}
                                   >50</Text>
                                   </td>
                                 </tr>}) 
                                    insertWebThemeSizeHeader({ value: "30", label:<tr
    
                                    >
                                    
                                      <td>
                                      <Text 
                                      style={{
                                        fontSize:parseInt("30", 0) + 0, 
                                        color:localStorage.getItem('themecolor5')
                                      }}
                                      >30</Text>
                                      </td>
                                    </tr>}) 
                                       insertWebThemeWeight({ value: "normal", label:<tr
    
                                       >
                                       
                                         <td>
                                         <Text 
                                         style={{
                                          fontWeight:'normal',
                                           color:localStorage.getItem('themecolor5')
                                         }}
                                         >normal</Text>
                                         </td>
                                       </tr>}) 
                                            insertWebThemeIconSize({ value: "50", label:<tr
    
                                            >
                                            
                                              <td>
                                              <Text 
                                              style={{
                                                fontSize:parseInt("50", 0) + 0, 
                                                color:localStorage.getItem('themecolor5')
                                              }}
                                              >50</Text>
                                              </td>
                                            </tr>}) 
                              
      
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >DEFAULT</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        width:220,
        backgroundColor:localStorage.getItem('themecolor2'),
      }}
      onClick={()=>{
    
        getWebThemesViewAPI()
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >CLEAR</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{
        addWebThemes()
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >ADD</Text></Button>
      </tr>
      <tr>
      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{
       if(RolesID===""){
        toast(
          'Select One',
          toastConfig({
          theme:'dark'
          }) 
          )
       }else{
        UpdateWebThemes()
       }
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >UPDATE</Text></Button>
      </tr>
      <tr>

      <Button
      style={{
        backgroundColor:localStorage.getItem('themecolor2'),
        width:220,
      }}
      onClick={()=>{

      if(RolesID==="")
      {
      if(localStorage.getItem("allow")==="on"){
      localStorage.setItem('allow', "off");
      toast(
      'Select One',
      toastConfig({
      theme:'dark'
      }) 
      )
       
      setTimeout(() => {
      localStorage.setItem('allow', "on");
      }, 3000);
      }
      }else{
        DeleteWebThemes()
      }
      }}
      ><Text
      style={{
        fontWeight:'bold',
        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
        color:localStorage.getItem('themecolor5'),
      }}
      >DELETE</Text></Button>
      </tr>
      <View
            style={{
              height: window.innerHeight-473,
            }}
            
            >  
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors} 
      value={insertwebthemecolor1} 
        onChange={(v)=>{
          insertWebThemeColor1(v)
        }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 1"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor2} 
        onChange={(v)=>{ 
          insertWebThemeColor2(v)
        }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 2"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content", 

   
     }),
       }}

    >
    
     </Select>
      </tr>


      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor3} 
      onChange={(v)=>{ 
        insertWebThemeColor3(v)
      }}  
   

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 3"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor4} 
      onChange={(v)=>{ 
        insertWebThemeColor4(v)
      }}  
     
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 4"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor5} 
      onChange={(v)=>{ 
        insertWebThemeColor5(v)
      }}  


    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 5"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor6} 
      onChange={(v)=>{ 
        insertWebThemeColor6(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color6"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeColors}
      value={insertwebthemecolor7} 
      onChange={(v)=>{  
        insertWebThemeColor7(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Color 7"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      </View>
      </table>
      </View> 
      </td>
      <td >
      <View
      style={{
      height: window.innerHeight-180,
   
      }}
      >
      
      
      <table
      style={{

      borderCollapse: 'separate',
      borderSpacing: '0px 4px'
      }}
      >
  
      <View
            style={{
              height: window.innerHeight-473,
            }}
            
            >  
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeType} 
      value={insertwebthemetype} 
      onChange={(v)=>{   
        insertWebThemeType(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Type"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeFont} 
      value={insertwebthemefont} 
      onChange={(v)=>{   
        insertWebThemeFont(v)
      }}  
 
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Font Family"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220, 
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content", 

   
     }),
       }}

    >
    
     </Select>
      </tr>


      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeSize}
      value={insertwebthemesizetext} 
      onChange={(v)=>{   
        insertWebThemeSizeText(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Size Text"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeSize}
      value={insertwebthemesizebigtitle} 
      onChange={(v)=>{   
        insertWebThemeSizeBigTitle(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Size Big Title"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeSize}
      value={insertwebthemesizeheader} 
      onChange={(v)=>{   
        insertWebThemeSizeHeader(v)
      }}   

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Size Header"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
      options={getThemeWeight}  
      value={insertwebthemeweight} 
      onChange={(v)=>{   
        insertWebThemeWeight(v)
      }}  

    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: { 
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Font Weight"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    >
    
     </Select>
      </tr>
      <tr
      style={{
        paddingBottom:5
      }}
      >
      <Select
          options={getThemeSize}
      value={insertwebthemeiconsize} 
      onChange={(v)=>{   
        insertWebThemeIconSize(v)
      }}  

    theme={(theme) => ({ 
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: '#6bbfff',  
    
    neutral0: localStorage.getItem("themecolor2"),
    primary: localStorage.getItem("themecolor6"), 
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"), 
    color: 'green', 

    },
    })}
    
    placeholder="Theme Icons Size"  
    placeholderTextColor={localStorage.getItem('themecolor6')}
       styles={{
         control: (base, state) => ({
           ...base,
           width:220,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),

     paddingRight: 8, 
     
         }),
         menu: (base) => ({
          ...base,
          width: "max-content",

   
     }),
       }}

    > 
    
     </Select>
      </tr>
      </View>
      </table>
      </View> 
      </td>

      </tr>
      </table>
    </View>
    }else if(mythemes==="2"){
      MyUI3 = <View>
        <table>
        <tr>

   <td
    style={{
      width:325,

    }}
    >

     <Text
    style={{
      fontWeight:'100', 
      fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
      color:localStorage.getItem('themecolor5'),  
    }}
    >COLOR</Text>

     
    </td>

    
    <td
       style={{
        width:330,
      }}
    >

<Text
style={{
 fontWeight:'100',  
 
 fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
 color:localStorage.getItem('themecolor5'),  
}}
>FONT FAMILY</Text>


</td>
<td
       style={{
        width:320,
      }}
    >

<Text
style={{
 fontWeight:'100',  
 fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
 color:localStorage.getItem('themecolor5'),  

}}
>FONT SIZE</Text>


</td>
<td
       style={{
        width:320,
      }}
    >

<Text
style={{
 fontWeight:'100',  
 fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
 color:localStorage.getItem('themecolor5'),  
}}
>FONT WEIGHT</Text>


</td>
  </tr>

        </table>
         <table>
        <tr>
        <td>
        <View
              style={{
                overflowY:"scroll", 
                height: window.innerHeight-180,
                width:200,
                //COLOR
              }}
              >
              {
         JSON.parse(getthemecolor).map((str) => {
          return (                   
            <td>
        
                              <Button
        
                          
                                      onClick={()=>{ 
                                     insertThemeColor(str['description'])
                                        RolesID = str['id']
                                      }}
                                       
                                      > 
                                        
      <View
          style={{
            backgroundColor:str['description'],
            width:20,
            height:20,
            borderWidth:1,
            borderColor:'grey',
          }}
      >
      </View>
      <View
      style={{
        width:10
      }}
      ></View>
      <Text
                                                      style={{
                                                        fontSize:20,
                                                        color:localStorage.getItem('themecolor5'),                                       
                                                      }}
                                                   >
                                                    {str['description']}
                                                   </Text>
        </Button>
        </td>
                  );
                })}
              </View>
        </td>
        <td >
        <View
        style={{
        height: window.innerHeight-180,
        width:110,
        paddingLeft:10,
  
        }}
        >
        
        
        <table
        style={{
  
        borderCollapse: 'separate',
        borderSpacing: '0px 4px'
        }}
        >
        <tr>
        <Button
        style={{
          width:120,
          backgroundColor:localStorage.getItem('themecolor2'),
        }}
        onClick={()=>{
          insertThemeColor("")
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >CLEAR</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:120,
        }}
        onClick={()=>{
        
        if(insertthemecolor==="")
        {
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
          addColor()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >ADD</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:120,
        }}
        onClick={()=>{
        if(insertthemecolor==="")
        {
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
        UpdateColor()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >UPDATE</Text></Button>
        </tr>
        <tr>
  
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:120,
        }}
        onClick={()=>{

        if(RolesID==="")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        'Select One',
        toastConfig({
        theme:'dark'
        }) 
        )
         
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
          DeleteColor()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >DELETE</Text></Button>
  
        </tr>
        </table>
        
        <View
        style={{
        height:15
        }}
        ></View>

     <tr>
     <td>
     <View
      style={{
        width:20,
        height:20,
        backgroundColor:insertthemecolor,
        borderColor:'grey',
        borderWidth:1
      }}
      >

      </View>
     </td>
  <td>
       <TextInput
              style={
                {
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:90,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,   
          color:localStorage.getItem('themecolor5'),
                }
              }
              value={insertthemecolor}
              placeholder="COLOR"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(v) => {insertThemeColor(v)}}
            /> 
  </td>
     </tr>
        
        </View> 
        </td>
        <td>
        <View
              style={{
                overflowY:"scroll",
                height: window.innerHeight-180,
                width:200,
                //FONT FAMILY
              }}
              >
              {
         JSON.parse(getfontfamily).map((str) => {
          return (                   
            <td>
        
                              <Button
        
                          
                                      onClick={()=>{ 
                                        RolesID = str['id']
                               
                                     insertThemeFontFamily(str['description'])
                                      }}
                                       
                                      > 
                                        
        <View style={{
        
        }}>
        <Text
                                                      style={{
                                                        fontSize:20,
                                                        color:localStorage.getItem('themecolor5'),
                                                        fontFamily:str['description']
                                                      }}
                                                   >
                                                    {str['description']}
                                                   </Text>
        </View>
        </Button>
        </td>
                  );
                })}
              </View>
        </td>
        <td >
        <View
        style={{
        height: window.innerHeight-180,
        paddingLeft:10,
        width:110,
        }}
        > 
        
        
        <table
        style={{
  
        borderCollapse: 'separate',
        borderSpacing: '0px 4px'
        }}
        >
        <tr>
        <Button
        style={{
          width:100,
          backgroundColor:localStorage.getItem('themecolor2'),
        }}
        onClick={()=>{
        insertThemeFontFamily("")
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >CLEAR</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(insertthemefamily==="")
        {
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
        addFontFamily()
        }
        }} 
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >ADD</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
              width:100,
        }}
        onClick={()=>{
        if(insertthemefamily==="")
        {
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
          UpdateFontFamily()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >UPDATE</Text></Button>
        </tr>
        <tr>
  
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(RolesID==="")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        'Select One',
        toastConfig({
        theme:'dark'
        })
        )
        
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
        DeleteFontFamily()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >DELETE</Text></Button>
  
        </tr>
        </table>
        
        <View
        style={{
        height:15
        }}
        ></View>
        <TextInput
              style={
                {
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:120,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,   
          color:localStorage.getItem('themecolor5'),
          fontFamily:insertthemefamily
                }
              }
              value={insertthemefamily}
              placeholder="FONT FAMILY"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(v) => {insertThemeFontFamily(v)}}
            /> 
        
        
        
        
        
        
        </View> 
        </td>
        <td>
        <View
              style={{
                overflowY:"scroll",
                height: window.innerHeight-180,
                width:200, 
                //FONT SIZE
              }}
              >
              { 
         JSON.parse(getfontsize).sort((a, b) => a.description - b.description).map((str) => { 

          return (                   
            <td> 
         
                              <Button
        
                          
                                      onClick={()=>{ 
                                     insertThemeSize(str['description'])
                                        RolesID = str['id']
                                      }}
                                       
                                      > 
                                        
        <View style={{
        
        }}>
        <Text
                                                      style={{
         
                                                        color:localStorage.getItem('themecolor5'),
                                                        fontSize:parseInt(str['description'], 0) + 0, 
                                                      }}
                                                   >
                                                    {str['description']}
                                                   </Text>
        </View>
        </Button>
        </td>
                  );
                })}
              </View>
        </td>
        <td >
        <View
        style={{
        height: window.innerHeight-180,
        paddingLeft:10,
        width:110,
        }}
        >
        
        
        <table
        style={{
  
        borderCollapse: 'separate',
        borderSpacing: '0px 4px'
        }}
        >
        <tr>
        <Button
        style={{
          width:100,
          backgroundColor:localStorage.getItem('themecolor2'),
        }}
        onClick={()=>{
        insertThemeSize("")
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >CLEAR</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(insertthemesize==="")
        {
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
        }else if(insertthemesize==="0")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        "Zero not allowed",
        toastConfig({
        theme:'dark'
        })
        )
        
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
          addFontSize()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >ADD</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
              width:100,
        }}
        onClick={()=>{
        if(insertthemesize==="")
        {
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
        }else if(insertthemesize==="0")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        "Zero not allowed",
        toastConfig({
        theme:'dark'
        })
        )
        
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
          UpdateFontSize()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >UPDATE</Text></Button>
        </tr>
        <tr>
  
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(RolesID==="")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        'Select One',
        toastConfig({
        theme:'dark'
        })
        )
        
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
          DeleteFontSize()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >DELETE</Text></Button>
  
        </tr>
        </table>
        
        <View
        style={{
        height:15
        }}
        ></View>
        <TextInput
              style={
                {
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:120,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,    
          color:localStorage.getItem('themecolor5'),
                }
              }
              value={insertthemesize}
              placeholder="FONT SIZE"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(v) => {insertThemeSize(v)}}
            /> 
        
        
        
        
        
        
        </View> 
        </td>
        <td>
        <View
              style={{
                overflowY:"scroll",
                height: window.innerHeight-180,
                width:200,
                //FONT WEIGHT
              }}
              >
              {
         JSON.parse(getfontweight).map((str) => {
          return (                   
            <td>
        
                              <Button
        
                          
                                      onClick={()=>{  
                                     insertThemeFontWeight(str['description'])
                                        RolesID = str['id']
                                      }}
                                        
                                      > 
                                        
        <View style={{
        
        }}>
        <Text
                                                      style={{
                                                        fontSize:20,
                                                        color:localStorage.getItem('themecolor5'),
                                                        fontWeight:str['description']
                                                      }}
                                                   >
                                                    {str['description']}
                                                   </Text>
        </View>
        </Button>
        </td>
                  );
                })}
              </View>
        </td>
        <td >
        <View
        style={{
        height: window.innerHeight-180,
        paddingLeft:10,
        width:110,
        }}
        >
        
        
        <table
        style={{
  
        borderCollapse: 'separate',
        borderSpacing: '0px 4px'
        }}
        >
        <tr>
        <Button
        style={{
          width:100,
          backgroundColor:localStorage.getItem('themecolor2'),
        }}
        onClick={()=>{
        insertThemeFontWeight("")
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >CLEAR</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(insertthemeweight==="")
        {
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
          addFontWeight()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >ADD</Text></Button>
        </tr>
        <tr>
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
              width:100,
        }}
        onClick={()=>{

        if(insertthemeweight==="")
        {
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

        UpdateFontWeight()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >UPDATE</Text></Button>
        </tr>
        <tr>
  
        <Button
        style={{
          backgroundColor:localStorage.getItem('themecolor2'),
          width:100,
        }}
        onClick={()=>{
        
        if(RolesID==="")
        {
        if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
        toast(
        'Select One',
        toastConfig({
        theme:'dark'
        })
        )
        
        setTimeout(() => {
        localStorage.setItem('allow', "on");
        }, 3000);
        }
        }else{
  DeleteFontWeight()
        }
        }}
        ><Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >DELETE</Text></Button>
  
        </tr>
        </table>
        
        <View
        style={{
        height:15
        }}
        ></View>
        <TextInput
              style={
                {
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:120,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,   
          color:localStorage.getItem('themecolor5'),
                }
              }
              value={insertthemeweight}
              placeholder="FONTWEIGHT"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(v) => {insertThemeFontWeight(v)}}
            /> 
        
        
        
        
        
        
        </View> 
        </td>
        
        </tr>
        </table>
      </View>
    }
    MyUI = <Typography>
    <View
    style={{
      height: window.innerHeight-180,
      width: window.innerWidth-50,
    }}
    >
    <Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
          
        }}
        >THEMES</Text>
<View
style={{
  alignSelf: 'flex-end', 
}}
>
<table
   style={{
    width:100,
   }}
   >
      <td>
    <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          style={{
            
            
          }}onPress={()=>{ 
            setThemes("3") 
            getMobileThemesAPI()
            getMobileThemesViewAPI()
          }}>
          
             <View
                                      style={{
                                      
                          
                                      }}
                                      > 
                                <CiMobile1
                                color={localStorage.getItem('themecolor5')}
                                size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}/> 
                                      <View
                                    style={{
                               
                                    }}
                                    >
                                    </View>
                            
                                      </View>
      </TouchableHighlight>
    </td>
    <td>
    <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          style={{
            
            
          }}onPress={()=>{ 
            setThemes("1")
            getWebThemesAPI()
            getColorAPI()
            getFontFamilyAPI()
            getFontSizeAPI()
            getFontWeightAPI()
          }}>
            
             <View
                                      style={{
                                      
                          
                                      }}
                                      > 
                                <MdWebAsset 
                                color={localStorage.getItem('themecolor5')}
                                size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}/> 
                                      <View
                                    style={{
                               
                                    }}
                                    >
                                    </View>
                            
                                      </View>
      </TouchableHighlight>
    </td>
     <td>
    <TouchableHighlight 
          activeOpacity={0.9}
          underlayColor="#9c9c9c"
          
          style={{
            
            
          }}onPress={()=>{ 
            setThemes("2")
            getColorAPI()
            getFontFamilyAPI() 
            getFontSizeAPI()
            getFontWeightAPI()
          }}>
            
             <View
                                      style={{
                                      
                          
                                      }}
                                      > 
                                <IoColorPaletteSharp
                                color={localStorage.getItem('themecolor5')}
                                size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}/> 
                                      <View
                                    style={{
                               
                                    }}
                                    >
                                    </View>
                            
                                      </View>
      </TouchableHighlight>
    </td>
   </table>
</View>
<View>
  {MyUI3}
  </View>     

    </View>
</Typography>
  }else if(mychooser==="LOGO"){ 
    var MYIMAGES  
    if(images2.length===0){
      MYIMAGES =   <View
      style={{
        height:300, width:300,     
      }} 
        
      >
        <img src={inputlogo} alt=""
      style={{
        height:300, width:300
      }}
      />
      </View>
    }else{
      MYIMAGES =   <img src={images2} alt=""
      style={{
        height:300, width:300}}
      />
    }
    
    MyUI = <Typography>
    <View>
    <Text
        style={{
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >LOGO</Text>
<View
style={{
  height: window.innerHeight-180,
  width: window.innerWidth-50,
  alignItems:'center',
}}
> 
<ReactFileReader fileTypes={[".png"]} base64={true} handleFiles={handleFiles2}>
          {MYIMAGES}
</ReactFileReader>
<View
style={{
  height:20
}}
></View>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),
  width:100,
  height:40
}}
onClick={()=>{
  if(images2.length===0){
    toast(
      'Select Image',
      toastConfig({
     theme:'success'
      })
    )
  }else{
UpdateLogo() 
  }
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
</View>
    </View>
</Typography>
  }









    return ( 
      <Box sx={{ display: 'flex' }}>
    
      <AppBar 
        style={{
          background:localStorage.getItem('themecolor2')
        }}
        > 
        <Toolbar> 
          
        <Typography sx={{ flexGrow: 1 }} type='title'> 
       
        <View
        style={{
     
        }}
        >
      <div className='wholecontainer'>
                              <div className='col1'>
                                  {Menu.slice(0, secondColumnStart).map((str) => {
                              
                         
                                      return (
                                        <td> 
                                  
                                      <Button
            activeOpacity={0.9}
            underlayColor="#9c9c9c"
            style={{
        
            }}onClick={()=>{
            setChooser(str)
         if(str==="USER MANAGEMENT"){
          getUsersAPI()
          getRoles()
         }else if(str==="ADD PLANE"){ 
          getPlaneAPI()
         }else if(str==="ADD DESTINATION"){
          getDestinationOriginAPI()
         }else if(str==="ADD ROLES"){
          getRoles()
         }else if(str==="LOGO"){
          getlogoAPI()
         }else if(str==="FLIGHT LIST"){
          getClient()
         }
         else if(str==="REPORT"){
          getClient()
         }else if(str==="THEMES"){
          insertUse("")  
          getWebThemesAPI()
          getWebThemesViewAPI()
          getColorAPI()
          getFontFamilyAPI()
          getFontSizeAPI()
          getFontWeightAPI()
          getThemeTypeAPI()
         }
            }}>
              
             
                                   
              <Text
          style={
            {
              fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
              color:localStorage.getItem('themecolor5'),
              fontWeight:localStorage.getItem('themefontweight')
            
            }
          }
          >{str}</Text>
          
        </Button>
                              
                                
                                    </td>
                                      )   
                                  })}
                              </div>
                
                         
                          </div>
        </View>
    
   
            </Typography> 
          <Button
          onClick={()=>{
            props.navigation.navigate('Login');
          }}
          >
            <Text
          style={
            {
              color:localStorage.getItem('themecolor5'),
              fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
              fontWeight:localStorage.getItem("themefontweight")
            }
          }
          >LOGOUT</Text></Button> 
          
    
        </Toolbar> 
      
      </AppBar> 
      <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
              {MyUI}
              </Box>
      </Box>
      
  
    );
  } 


var RolesID = "";
var EmailID = "";


  var niag = []
  
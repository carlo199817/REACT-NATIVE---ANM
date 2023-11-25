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
  const [images, setImages] = useState([]);

  const [images2, setImages2] = useState([]);

  const handleFiles = (files) => {
    setImages(files.base64)

  }; 
  const handleFiles2 = (files) => {
    setImages2(files.base64)

  }; 


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
  let  [getusersdata, setUsersData] = useState("[]");   

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
        localStorage.getItem("APIbook"), {
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

  console.log(gs1[i])
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
                    height: window.innerHeight-50,
                    width: window.innerWidth-1200,
                  
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
  height: window.innerHeight-50,

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
    <Button>
    <IoAdd 
      size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}
      color={localStorage.getItem('themecolor5')}
      ></IoAdd>
    </Button>
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
      height: window.innerHeight-50,
alignItems:'left' ,
paddingLeft:50,

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
                                            
                                              alignItems: 'center', 
                                   
                                              justifyContent: "center",
                                          }}
                                       
                                          onClick={()=>{ 
                                            setClientID(str.id)
                                            setAircraft(str.aircraft_id.description)
                                            setOrigin(str.origin_id)
                                            setDestination(str.destination_id)
                                            setOption(str.option_id) 
                                            setTimeDeparture(str.time_departure)
                                            var g = str.passenger_id
                                            var h = []
                                            for(var i=0;i<g.length;i++){
                                              h.push(g[i]['first_name']+" "+g[i]['last_name'])
                                            }
                                            setPassenger(h.join("\n"))
                                            setOverAll(str.final_administrator_id)
                                            setChecklist(JSON.stringify(str.checklist_client))
                                            
                                            setQuestionlist(JSON.stringify(str.question_client_status_id))

                                          }}
                                           
                                          > 
                                            
                                             <View
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
                                                            width:50
                                                            
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
                                                            width:50
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
  width:160
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
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
    fontSize:localStorage.getItem('themefontsize'),   
    color:localStorage.getItem('themecolor5'),
          }
        }
        value={inputplane}
        placeholder="PLANE"
        placeholderTextColor={localStorage.getItem('themecolor6')}
        onChangeText={(role) => {inputPlane(role)}}
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
  fontSize:localStorage.getItem('themefontsize'),   
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
        
<table

      >
<tr>
<td
  style={{
   
  }}
>
<View
    style={{
      overflowY:"scroll",
      height: window.innerHeight-50,
      width: window.innerWidth-1200,
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
      width: 300,
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

  <td >
  <View
style={{
  overflowY:"scroll",

  height: window.innerHeight-50,
  width: window.innerWidth-550,
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
          fontSize:localStorage.getItem('themefontsize'),   
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
  }else if(mychooser==="LOGO"){ 
    var MYIMAGES  
    if(images2.length===0){
      MYIMAGES =   <View
      style={{
        height:500, width:500,
      justifyContent:'center',

      alignItems:'center'
      }} 
        
      >
        <img src={inputlogo} alt=""
      style={{
        height:500, width:500}}
      />
      </View>
    }else{
      MYIMAGES =   <img src={images2} alt=""
      style={{
        height:500, width:500}}
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
alignItems:'center' 
  }} 
  >
 
  <ReactFileReader fileTypes={[".png"]} base64={true} handleFiles={handleFiles2}>
          {MYIMAGES}
</ReactFileReader>
<View
style={{
  height:30 
}}
></View>
<Button
onClick={()=>{
UpdateLogo()
}}
style={{
backgroundColor:localStorage.getItem('themecolor2')

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
  var Menu = ['FLIGHT LIST','USER MANAGEMENT','ADD PLANE','ADD DESTINATION','ADD ROLES','THEMES','LOGO','SWITCH USER']

  var niag = []
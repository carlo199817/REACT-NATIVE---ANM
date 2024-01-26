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

import { BiZoomIn, BiZoomOut } from "react-icons/bi";



export const Allchecklist = props => {

  var Menu
  if(localStorage.getItem('rolesNumber')==="1"){
    Menu = ['FLIGHT LIST','CHECKLIST']
 }else{ 
   Menu =  ['FLIGHT LIST','CHECKLIST','SWITCH USER']
 }
  let  [myquestionid, setQuestionID] = useState("");  
  let  [myquestion, setQuestion] = useState("");  
  let  [myquestiontype, setQuestionType] = useState("");  
  let  [mysinglechoices, setSingleChoices] = useState("");  
  let  [mychoices, setChoices] = useState([]);  
  let  [mychoicesid, setChoicesID] = useState([]);  
  
  let  [getOverAll, setOverAll] = useState("");  
  let  [getClientID, setClientID] = useState("");  

  let  [getAircraft, setAircraft] = useState("");  
  let  [getOrigin, setOrigin] = useState("");  
  let  [getDestination, setDestination] = useState("");  
  let  [getOption, setOption] = useState("");  
  let  [getTimeDeparture, setTimeDeparture] = useState("");  
  let  [getPassenger, setPassenger] = useState("");  

  
  let  [mychooser, setChooser] = useState("FLIGHT LIST"); 
  let  [getallcheckList, setAllcheckList] = useState("");   
  let  [myclient, setClient] = useState("[]");   
  let  [mychecklist, setChecklist] = useState("[]");   
  let  [myquestionlist, setQuestionlist] = useState("[]");    
  let  [mainquestiontype, setMainQuestionType] = useState("[]");


  async function UpdateQuestion(){

    try {
      const response = await fetch(
        localStorage.getItem("APIallmyquestion")+myquestionid+"/", {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        body: JSON.stringify({ 
          question: myquestion,
          all_question_type_id:myquestiontype,
          all_question_type_user_id:localStorage.getItem("MainRoles")
        })
        } 
      );  
      const json = await response.json();
      choicesID=json['id']

      if(response.status==200){ 
        toast(
          'Update',
          toastConfig({
         theme:'success'
          })
        )
             DeleteChoices()
      }
   
    } catch (error) { 
    }
  }

  async function DeleteQuestion(){

    try {
      const response = await fetch(
        localStorage.getItem("APIallmyquestion")+myquestionid+"/", {
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
      setQuestion("")
      setQuestionType("")
      setSingleChoices("")
      setChoices([])
      setTimeout(() => { 
       // getChecklist2()
        localStorage.setItem('allow', "on");
       }, 3000);
        }
      }
 
    } catch (error) { 
    }
  }

  async function DeleteChoices(){
   
    var gs1 = mychoicesid
var h =0
    for(var i=0;i<gs1.length;i++){
  

   try {
      const response = await fetch(
        localStorage.getItem("APIallchoices")+gs1[i]+"/", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
    
        } 
      );  
      h+=1

    } catch (error) { 
    }
      }   
 if(h===gs1.length){
  addChoices()
 }
      
 
  }
  async function addChoices(){
   
    var gsd = mychoices
    var h = 0

    for(var i=0;i<gsd.length;i++){

    
   try {
      const response = await fetch(
        localStorage.getItem("APIallchoices"), {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        body: JSON.stringify({ 
          choices: gsd[i]['label'],
          all_choices_client_status_id:choicesID,
        })
        } 
        
      );  

      if(response.status===201){
        h+=1
      }
    } catch (error) { 
    }
      }   
      if(h===gsd.length){
        choicesID=""
        setQuestion("")
        setQuestionType("")
        setSingleChoices("")
        setChoices([]) 
        setChoicesID([])
      //  getChecklist2()
      }
      
 
  }
async function addQuestion(){

  try {
    const response = await fetch(
      localStorage.getItem("APIallmyquestion"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        question: myquestion,
        all_question_type_id:myquestiontype,
        all_question_type_user_id:localStorage.getItem("MainRoles")
      })
      } 
    );  

    const json = await response.json();
    choicesID=json['id']

    if(response.status==201){ 
      addChoices(); 
      toast(
        'Question Added',
        toastConfig({
       theme:'success'
        })
      )
    }
    return json.movies;   
  } catch (error) { 
  }
}


  async function getQuestionType(){
    try {
      const response = await fetch(
        localStorage.getItem("APIquestiontype"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      setMainQuestionType(JSON.stringify(json))
      return json.movies;   
    } catch (error) { 
    }
  }


  getQuestionType()

  async function getChecklist2(){
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
      
  
      setChecklist(JSON.stringify(json['checklist_client']))
   
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


      if(response.status==200){ 
   
      }
      return json.movies;   
    } catch (error) { 
    }
  }
  async function getClient(){

    try {
      const response = await fetch(
        localStorage.getItem("APIbook5"), {
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
getClient()
  async function getAllchecklist(){

    try {
      const response = await fetch(
        localStorage.getItem("APIallmyquestion"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();

      if(response.status==200){ 
      setAllcheckList(JSON.stringify(json))
      }
      return json.movies;   
    } catch (error) { 
    }
  }
getAllchecklist()

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

const secondColumnStart = Math.ceil( JSON.parse(mainquestiontype).length/ -2);
  var MyUI;
  var setInit;
  var setInit2;
  var DETAILS
  var DETAILS2


  if(mychooser==="SWITCH USER"){
    props.navigation.navigate('Lobby');
  } if(mychooser==="CHECKLIST"){
    MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
      <View
    style={{
      width:500
    }}
    >
      <Text
        style={{
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          fontWeight:'bold',
          color:localStorage.getItem('themecolor5'),
        }}
        >{localStorage.getItem("MainRoles")}</Text>
        </View>
      </td>
      <td>
        <View
        style={{

          width:300
        }}
        >

        </View>
      </td>
      <td>
      <Text
        style={{
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
          color:localStorage.getItem('themecolor5'),
        }}
        >CHECKLIST</Text>
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
      width: window.innerWidth-900,

    }}
  > 
   {
   JSON.parse(getallcheckList).map((str) => {
    var ty = []
    var h = []
    if(str.all_choices_client_status_id!="[]"){
      ty = str.all_choices_client_status_id
    }
    for(var i=0;i<ty.length;i++){ 
      h.push(ty[i]['choices'])
      }  
    
    var STATUS
    if(str.all_question_type_user_id===localStorage.getItem("MainRoles")){
      STATUS =            
      <td>
                      
                        <Button
                           
                                
                                style={{
                                  
                              
                                }}
                             
                                onClick={()=>{ 
                                  setQuestionID(str.id)
                                  setQuestion(str.question)
                                  setQuestionType(str.all_question_type_id)
                                  var fg =str.all_choices_client_status_id
                                  var tyrr = []
                                  var tyra = []
                                  for(var i=0;i<fg.length;i++){ 
                                    tyra.push(fg[i]['id'])
                                    tyrr.push({value:fg[i]['id'],label:fg[i]['choices']})
                                   } 

                                   setChoices(tyrr)
                                   setChoicesID(tyra)
                                   setSingleChoices("")
                                }}
                                 
                                >   
                                <tr>

                               <td
                               
                               >
                             <View
                             
                                 style={
                                  {
                                   width:120
                                  }
                                 }
                             >
                             <Text
                                                    style={{
                                                      fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
                                                      color:localStorage.getItem('themecolor5'),
                                                      fontWeight:localStorage.getItem('themefontweight')
                                                    }}
                                                 >
                                                  {str.all_question_type_id}
                                                 </Text>
                             </View>
                               </td>
                               <td>
                                <View
                                style={
                                 {
                                  width:10
                                 }
                                }></View>
                               </td>
                               <td>
                               <Text
                                                    style={{
                                                      fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
                                                      color:localStorage.getItem('themecolor6'),
                                                      fontWeight:localStorage.getItem('themefontweight')
                                                    }}
                                                 >
                                                  {str.question}
                                                 </Text>
                               </td>
                           
                                </tr>
                            </Button>


                       
      </td>
    }
            return (
              <tr>
                {STATUS}             
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
  width: 500

}}
>
<table
style={{
  width:0,
}}
>
<tr>
<td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

setQuestion("")
setQuestionType("")
setSingleChoices("")
setChoices([])
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
  <View
  style={{
    width:10
  }}
  ></View>
 </td>
 <td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{

  if(myquestiontype===""||myquestion===""){
    toast(
      'Cannot be blank',
      toastConfig({
     theme:'dark'
      })
    )
  }else{
addQuestion()
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
  <View
  style={{
    width:10
  }}
  ></View>
 </td>
 <td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
  if(myquestiontype===""){
    toast(
      'Select Question Type',
      toastConfig({
     theme:'dark'
      })
    )
  }else if(myquestion===""){
    toast(
      "Question shouldn't be blank",
      toastConfig({
     theme:'dark'
      })
    )
  }else{
    UpdateQuestion()
  }
}}
><Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>UPDATE</Text></Button>
 </td> <td>
  <View
  style={{
    width:10
  }}
  ></View>
 </td>
 <td>
<Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
  DeleteQuestion()
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
<Text
style={{
  fontWeight:'bold',
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0,
  color:localStorage.getItem('themecolor5'),
}}
>
  QUESTION TYPE
</Text>
<View
style={{
  height:10
}}
></View>
</td>
<td>



<div className='wholecontainer'
    
    > 
                            <div className='col1'>
                                {JSON.parse(mainquestiontype).slice(0,secondColumnStart).map((str4) => {
             var gs = false
             if(str4.description===myquestiontype){
             gs=true
             }else {
               gs=false
             }
                     
                                    return (
                                      <Text style={{
                                        color:'white',
                                        fontSize:15,
                                        fontWeight:'200',
                                        paddingRight:5
                                      }}>
                                      <input 
                                                    type="radio" 
                                          
                                                    checked={gs}
                                                    onClick={()=>{
                                                      setQuestionType(str4.description)
                                      
                                                    }} 
                                                    style={{
                                                      width:18,
                                                      height:18,
                                                    }}
                                                />   
                                        {str4.description}
                                      </Text>
                                    )   
                                })}
                            </div>
                            <div className='col2'>
                                {JSON.parse(mainquestiontype).slice(secondColumnStart).map((str4) => {
      var gs = false
      if(str4.description===myquestiontype){
      gs=true
      }else {
        gs=false
      }
                     
                                    return (
                                      <Text style={{
                                     
                                        fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,
                                        color:localStorage.getItem('themecolor5'),
                                        fontWeight:'200',
                                        paddingRight:5
                                      }}>
                                      <input 
                                                    type="radio" 
                                          
                                                    checked={gs}
                                                    onClick={()=>{
                                                      setQuestionType(str4.description)
                                      
                                                    }} 
                                                    style={{
                                                      width:18,
                                                      height:18,
                                                    }}
                                                />   
                                        {str4.description}
                                      </Text>
                                    )   
                                })}
                            </div>
                       
                        </div>

</td>
<View
            style={{
              height:10
            }}>
            </View>
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
              value={myquestion}
              placeholder="QUESTION"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(question) => {setQuestion(question)}}
            /> 
</td>
<View
            style={{
              height:5
            }}>
            </View>
<td>
<TextInput
              style={
                {
                  outlineStyle: 'none',
                  borderColor:localStorage.getItem('themecolor2'), 
                  backgroundColor:localStorage.getItem('themecolor3'),
                  height:50,
                  width:200,
                  borderWidth:2, 
                  paddingLeft: 12,
          paddingRight: 8, 
          fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0,   
          color:localStorage.getItem('themecolor5'),
                }
              }
              value={mysinglechoices}
              placeholder="CHOICES"
              placeholderTextColor={localStorage.getItem('themecolor6')}
              onChangeText={(choices) => {setSingleChoices(choices)}}
            /> 
   <td></td>
            <Button
style={{
  backgroundColor:localStorage.getItem('themecolor2'),

}}
onClick={()=>{
  var gdg = mychoices
  if(mysinglechoices===""){
    toast(
      'Cannot be blank',
      toastConfig({
     theme:'failure'
      })
    )
  }else{
    gdg.push({value:mysinglechoices,label:mysinglechoices})
    toast(
      'Choice Add',
      toastConfig({
     theme:'success'
      })
    )
    var fd = []
    var gd = gdg
    for(var i=0;i<gd.length;i++){ 
      fd.push({value:gd[i]['value'],label:gd[i]['label']})
      }  
  setChoices(fd)
setSingleChoices("")
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

<View
            style={{
              height:5
            }}>
            </View>
<td
style={{
width:350
}}
>
<Select
         isMulti
     options={mychoices}
     value={mychoices}
    onChange={(e)=>{
      setChoices(e)
    }}
      />
</td>



            <View
            style={{
              height:30
            }}>
            </View>
       
        
          


</View> 
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
    var STATUS2
    var STATUS4;
    if(localStorage.getItem('MainRoles')===str.checklist_group){

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
    STATUS4 = str.checklist_group
    STATUS2 =  <td>
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
>
YES
</Text>
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
  fontSize:18,
  color:"white",
  fontWeight:'400',
}}
>{STATUS4}</Text></td>
<td>{Status1}</td>
              </tr>


              <tr>
               {STATUS2}
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
      size={40}
      color="white"
      ></FaCheck >
    </Button>
      </td>
  </tr>
</table>


    }
    
      MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
    <View
    style={{
      width:500
    }}
    >
    <Text
        style={{
        
          color:localStorage.getItem('themecolor5'),
          fontWeight:'bold',
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >{localStorage.getItem('MainRoles')}</Text>
    </View>
      </td>
      <td>
        <View
        style={{
          width:180
        }}>

        </View>
      </td>
      <td>
      <View
    style={{
      width:400
    }}
    >
      <Text
        style={{
          color:localStorage.getItem('themecolor5'),
          fontWeight:localStorage.getItem("themefontweight"),
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0, 
        }}
        >{setInit}</Text>
        </View>
      </td>
      <td>
        <View
        style={{
          width:40
        }}>

        </View>
      </td>
      <td>
      <View
    style={{

    }}
    >
      <Text
        style={{
          color:localStorage.getItem('themecolor5'),
          fontWeight:localStorage.getItem("themefontweight"),
          fontSize:parseInt(localStorage.getItem("themefontsizeheader"), 0) + 0,
        }}
        >{setInit2}</Text>
        </View>
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
alignItems:'left' ,


    }}
  >
   {
   JSON.parse(myclient).map((str) => {
    var STATUS;
    var STATUS2
    var fh = str.checklist_client
    for(var i=0;i<fh.length;i++){
      if(localStorage.getItem('MainRoles')===fh[i]['checklist_group']){
     
        if(fh[i]['checklist_status']==="PENDING"){
          STATUS=<Text
          style={{
            color:'yellow',
            fontWeight:localStorage.getItem("themefontweight"),
            fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
          }}
          >
            PENDING
          </Text>
              }else if(fh[i]['checklist_status']==="DECLINED"){
                STATUS=<Text
                style={{
                  color:'red',
                  fontWeight:localStorage.getItem("themefontweight"),
                  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
                }}
                >
                  DECLINED
                </Text>
                    }else if(fh[i]['checklist_status']==="COMPLETED"){
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
                          STATUS2 =              
                          <td>
                         
                       
                                          
                          
                                          
                                            <Button
                                                    activeOpacity={0.9}
                                                    underlayColor="#9c9c9c"
                                                    
                                                    style={{
                                                      
                                                        alignItems: 'center', 
                                             
                                                        justifyContent: "center",
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
      }
    }
  
            return (
              <tr>
                {STATUS2}
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
                                  {Menu.map((str) => {
                                   
                                      return (
                                        <td> 
                                  
                                      <Button
            activeOpacity={0.9}
            underlayColor="#9c9c9c"
            style={{
        
            }}onClick={()=>{
            setChooser(str)
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


var choicesID = "";


  
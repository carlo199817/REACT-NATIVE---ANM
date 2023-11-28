import React, { useState,useRef,useEffect } from "react";
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import { IoAdd } from "react-icons/io5";
import dateFormat from 'dateformat';
import moment from 'moment';
import Select from 'react-select'
import { FaCheck } from "react-icons/fa6";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { timePicker } from "analogue-time-picker";
import "./style.css"
import { IoArrowBack } from "react-icons/io5";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaPlaneDeparture } from "react-icons/fa";
import {  
    View,      
    Text, 
    TouchableHighlight,    
    TextInput
  } from "react-native"; 

import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import { keys } from "@mui/system";
 


export const Client = props => {

var Menu
  if(localStorage.getItem('rolesNumber')==="1"){
     Menu = ['BOOK','MANAGE']
  }else{ 
    Menu = ['BOOK','MANAGE','SWITCH USER']
  }


  let  [mytest, setTest] = useState("");  

  let  [myreview, setReview] = useState(false);  
  let  [mypassengerID, passengerID] = useState("");  
  let  [mynext, setNext] = useState("1");  

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

  
  let  [mychooser, setChooser] = useState("BOOK"); 
  let  [getallcheckList, setAllcheckList] = useState("");   
  let  [myclient, setClient] = useState("[]");   
  let  [mychecklist, setChecklist] = useState("[]");   
  let  [myquestionlist, setQuestionlist] = useState("[]");    
  let  [mainquestiontype, setMainQuestionType] = useState("[]");


  let  [departuredate, setDepatureDate] = useState("DEPARTURE");
  let  [arrivaldate, setArrivalDate] = useState("ARRIVAL");


  let  [getoptiondata, setOptionData] = useState("[]");
  let  [getplanedata, setPlaneData] = useState("[]");
  let  [getdestinationorigindata, setDestinationOriginData] = useState("[]");

  let  [departuretime, setDepatureTime] = useState("00:00");
  let  [arrivaltime, setArrivalTime] = useState("00:00");
  let  [inputoption, inputOption] = useState("One way");
  let  [inputplane, inputPlane] = useState("");
  let  [inputpassenger, inputPassenger] = useState("");
  let  [inputorigin, inputOrigin] = useState("");
  let  [inputdestination, inputDestination] = useState("");
 
  let  [inputgender, inputGender] = useState("");
  let  [inputbirthdate, inputBirthdate] = useState("BIRTHDATE");
  let  [inputage, inputAge] = useState("AGE");
  
  let  [inputtext1, inputText1] = useState("0");
  let  [inputpassengerlist, inputPassengerList] = useState([]);

  let  [officialdeparture, setOfficialDeparture] = useState("");
  let  [officialarrival, setOfficialArrival] = useState("");


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
        DeleteChoices()
        if(localStorage.getItem("allow")==="on"){
          localStorage.setItem('allow', "off");
      toast(
        'Update',
        toastConfig({
       theme:'success'
        })
      )
      setQuestion("")
      setQuestionType("")
      setSingleChoices("")
      setChoices([])
      setTimeout(() => { 
        getChecklist2()
        localStorage.setItem('allow', "on");
       }, 3000);
        }
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
        getChecklist2()
        localStorage.setItem('allow', "on");
       }, 3000);
        }
      }
 
    } catch (error) { 
    }
  }

  async function DeleteChoices(){
   
    var gs1 = mychoicesid

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

    } catch (error) { 
    }
      }   
  addChoices()
      
 
  }
  async function addPassenger(){
   
    var gsd = JSON.parse(inputpassengerlist)
    var h = 0

    for(var i=0;i<gsd.length;i++){

      h+=1
   try {
      const response = await fetch(
        localStorage.getItem("APIpassenger"), {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        body: JSON.stringify({ 
          passenger_id: passengerID,
          first_name:gsd[i]['firstname'],
          last_name:gsd[i]['lastname'],
          suffix:gsd[i]['suffix'],
          gender:gsd[i]['gender'],
          birthdate:gsd[i]['birthdate']
        })
        } 
      );  
      const json = await response.json();

  
    } catch (error) { 
    }
      }   
      if(h===gsd.length){
        inputOption("One way")
        inputPlane("")
        inputPassenger("")
        inputOrigin("")
        inputDestination("")
        setDepatureDate("DEPARTURE")
        setArrivalDate("ARRIVAL")
        setDepatureTime("")
        setArrivalTime("")
        insertdisplayTimeDeparture("")
        insertdisplayTimeArrival("")
        inputPassengerList("") 
      }
      
 
  }

  async function addChoices(){
   
    var gsd = mychoices
    var h = 0

    for(var i=0;i<gsd.length;i++){

      h+=1
   try {
      const response = await fetch(
        localStorage.getItem("APIallchoices"), {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        body: JSON.stringify({ 
          choices: gsd[i]['value'],
          all_choices_client_status_id:choicesID,
        })
        } 
      );  

  
    } catch (error) { 
    }
      }   
      if(h===gsd.length){
        setQuestion("")
        setQuestionType("")
        setSingleChoices("")
        setChoices([])
        getChecklist2()
      }
      
 
  }


  async function addClient(){
 


 if(inputoption==='One way'){
  try {
    const response = await fetch(
      localStorage.getItem("APIbook"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        aircraft_id: inputplane.value,
        origin_id:inputorigin.value,
        destination_id:inputdestination.value,
        option_id:inputoption,
        time_departure:departuredate+" "+departuretime,

      })
      }  
    );  
    const json = await response.json();

  passengerID=json['id']
    if(response.status==201){ 
      addPassenger()
      setNext("4")
      if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
 
        toast(
          'Booking Success',
          toastConfig({
         theme:'success'
          })
        )
    setTimeout(() => { 
     
      localStorage.setItem('allow', "on");
     }, 3000);
      }
    }

  } catch (error) { 
  }
 }else{
  try {
    const response = await fetch(
      localStorage.getItem("APIbook"), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
      }, 
      body: JSON.stringify({ 
        aircraft_id: inputplane.value,
        origin_id:inputorigin.value,
        destination_id:inputdestination.value,
        option_id:inputoption,
        time_departure:departuredate+" "+departuretime,
        time_arrival:arrivaldate+" "+arrivaltime
      })
      }  
    );  
    const json = await response.json();

  passengerID=json['id']
    if(response.status==201){ 
      addPassenger()
      setNext("4")
      if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
 
        toast(
          'Booking Success',
          toastConfig({
         theme:'success'
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
    addChoices();
    if(response.status==201){ 
      
      if(localStorage.getItem("allow")==="on"){
        localStorage.setItem('allow', "off");
    toast(
      'Question Added',
      toastConfig({
     theme:'success'
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
      
  
      setDestinationOriginData(JSON.stringify(json))
   
      return json.movies;   
    } catch (error) { 
    }
  }
  getDestinationOriginAPI()
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
  getPlaneAPI()
  async function getOptionAPI(){
    try {
      const response = await fetch(
        localStorage.getItem("APIoption"), {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokens")}`,
        }, 
        } 
      );  
      const json = await response.json();
      
  
      setOptionData(JSON.stringify(json))
   
      return json.movies;   
    } catch (error) { 
    }
  }
  getOptionAPI()
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

      getClient()
      if(response.status==200){ 
   
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
        localStorage.getItem("APIbook3"), { 
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
  var MyUI2;
  var setInit;
  var setInit2;
  var DETAILS
  var DETAILS2

var departureD = true
var arrivalD = true  
var changeColor

var departureC =<View></View>
var arrivalC = <View></View>
const [date, setDate] = useState(null);
const [date2, setDate2] = useState(null);
const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);
let [showTime1, setShowTime1] = useState();
let [showTime2, setShowTime2] = useState();

var birthdate
birthdate = <table>
<tr>
  <td>
 <Calendar
maxDate={moment().toDate()}  
onChange={item => { 
  
inputBirthdate(dateFormat(item, "yyyy-mm-dd"))
setDate2(item) 


var today = new Date();
var birthDate = new Date(item);  // create a date object directly from `dob1` argument
var age_now = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
{
    age_now--;
}
var y =  JSON.parse(inputpassengerlist)
y[mypassengerID]['age']=age_now  
y[mypassengerID]['birthdate']=dateFormat(item, "yyyy-mm-dd")
inputPassengerList(JSON.stringify(y))  
}}  
date={date2} /> 
  </td>
</tr>
</table>

 let [timedeparture, setTimedeparture] = useState(false);
 let [timearrival, setTimeArrival] = useState(false);

 let [displayTimeDeparture, insertdisplayTimeDeparture] = useState("");
 let [displayTimeArrival, insertdisplayTimeArrival] = useState("");
 var positionM
 var text1 
 var text2

 if(inputtext1==="1"){ 
  text1= <div>
  <Text
style={{
  fontWeight:'300'
}}

>TIME DEPARTURE</Text>
<Button
onClick={()=>{
  setShowTime1(
    timePicker({
      element: document.getElementById("clock1"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 
  setDepatureTime("00:00")
  insertdisplayTimeDeparture(moment("12:00", ["HH:mm"]).format("h:mm A"))
}}
>reset</Button>
</div>

text2= <div>
  <Text
style={{
  fontWeight:'300'
}}

>TIME ARRIVAL</Text>
<Button
onClick={()=>{
  setShowTime2(
    timePicker({
      element: document.getElementById("clock2"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 
  setArrivalTime("12:00")
  insertdisplayTimeArrival(moment("12:00", ["HH:mm"]).format("h:mm A"))

}}
>reset</Button>
</div>
 }else{

  text1 = <div>

</div>

 }
if(inputoption==="One way"){
  positionM = "right bottom"
  changeColor =localStorage.getItem("themecolor6")
  departureD = false
  arrivalD = true
  
  departureC = <table>
    <tr>
      <td>
     <Calendar

  onChange={item => {
    setDepatureDate(dateFormat(item, "yyyy-mm-dd"))
    setDate(item)
    if(inputtext1==="0"){
     inputText1("1")
      setShowTime1(
        timePicker({
          element: document.getElementById("clock1"),
          mode: 12,
          width: "300px", 
          time: { hour: 0, minute: 0 }
        })
      ); 
  
      
    
    
    }
   
   
  }} 
  minDate={moment().toDate()}  
 date={date} /> 
      </td>
      <td> 
        <View
        style={{ 
          width:10
        }} 
        ></View>
      </td> 
      <td>
      {text1}
      <div 
        onClick={()=>{
          setDepatureTime(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("HH:mm"))
          insertdisplayTimeDeparture(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("h:mm A"))
        }}
      id="clock1"></div>

      </td>
    </tr>
  </table>
  arrivalC = <View></View>
}else if(inputoption === "Round trip"){
  positionM = "top left"
  changeColor =localStorage.getItem("themecolor5")
  departureD = false
  arrivalD = false
  departureC =  <table>
  
  <tr>
    <td>
    <DateRangePicker
      minDate={moment().toDate()}   
onChange={item => {

  setState([item.selection])
  setDepatureDate(dateFormat(item.selection.startDate, "yyyy-mm-dd"))
  setArrivalDate(dateFormat(item.selection.endDate, "yyyy-mm-dd"))

if(inputtext1==="0"){
  inputText1("1")
  setShowTime1(
    timePicker({
      element: document.getElementById("clock1"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 
  setShowTime2(
    timePicker({
      element: document.getElementById("clock2"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 
 
 

}


}}
showSelectionPreview={true}
moveRangeOnFirstSelection={false}
months={1}
ranges={state}

direction="horizontal"
/>
    </td>
    <td> 
      <View
      style={{ 
        width:10
      }} 
      ></View>
    </td> 
    <td>
   {text1}
    <div 
    onClick={()=>{
      setDepatureTime(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("HH:mm"))
      insertdisplayTimeDeparture(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("h:mm A"))
    }}
    id="clock1"
    ></div>
    </td>
    <td>
  <tr>
  {text2}

<div id="clock2"
onClick={()=>{
  setArrivalTime(moment(showTime2.getTime().hour+":"+showTime2.getTime().minute, ["HH:mm"]).format("HH:mm"))
  insertdisplayTimeArrival(moment(showTime2.getTime().hour+":"+showTime2.getTime().minute, ["HH:mm"]).format("h:mm A"))

}}
></div>

  </tr>
</td>
  </tr>
</table>



  arrivalC = <table>
  
  <tr>
    <td>
    <DateRangePicker
      minDate={moment().toDate()}  
onChange={item => {

  setState([item.selection])
  setDepatureDate(dateFormat(item.selection.startDate, "yyyy-mm-dd"))
  setArrivalDate(dateFormat(item.selection.endDate, "yyyy-mm-dd"))

if(inputtext1==="0"){
  inputText1("1")
  setShowTime1(
    timePicker({
      element: document.getElementById("clock1"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 
  setShowTime2(
    timePicker({
      element: document.getElementById("clock2"),
      mode: 12,
      width: "300px", 
      time: { hour: 0, minute: 0 }
    })
  ); 


}


}}
showSelectionPreview={true}
moveRangeOnFirstSelection={false}
months={1}
ranges={state}
direction="horizontal"
/>
    </td>
    <td> 
      <View
      style={{ 
        width:10
      }} 
      ></View>
    </td> 
    <td>
   {text1}
    <div 
    onClick={()=>{
      setDepatureTime(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("HH:mm"))
      insertdisplayTimeDeparture(moment(showTime1.getTime().hour+":"+showTime1.getTime().minute, ["HH:mm"]).format("h:mm A"))
    }}
    id="clock1"
    ></div>
    </td>
    <td>
  <tr>
  {text2}

<div id="clock2"
onClick={()=>{
  setArrivalTime(moment(showTime2.getTime().hour+":"+showTime2.getTime().minute, ["HH:mm"]).format("HH:mm"))
  insertdisplayTimeArrival(moment(showTime2.getTime().hour+":"+showTime2.getTime().minute, ["HH:mm"]).format("h:mm A"))

}}
></div>

  </tr>
</td>
  </tr>
</table>

}else{
  changeColor = "grey" 
  departureD = true
  arrivalD = true
  departureC =<View></View>
  arrivalC = <View></View>
}






 if(mychooser==="MANAGE"){
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
      >FLIGHT INFORMATION</Text>
    </td>
    <td>
      <View
      style={{
width:286
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
 }else if(mychooser==="BOOK"){
    
var opt1 = []
var opt = JSON.parse(getplanedata)
for(var i=0;i<opt.length;i++){
opt1.push({value:opt[i]['description'],label:opt[i]['description'],capacity:opt[i]['capacity']})
}

var opt2 = []
var opt3 = JSON.parse(getdestinationorigindata)
for(var i=0;i<opt3.length;i++){
opt2.push({value:opt3[i]['description'],label:opt3[i]['description']})
}

if(mynext==="1"){
  MyUI2=  <View

   style={{

     height: window.innerHeight-110,
     width: window.innerWidth-45,
     flex:1,
     alignItems:'center',

   }}
   >
 <View
style={{
 height:60
}}
></View>
 <Text
 style={{
  fontSize:parseInt(localStorage.getItem("themefontsizebigtitle"), 0) + 0, 
  fontWeight:localStorage.getItem('themefontweight'),
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')
 }}
 >Book a Flight</Text>
   <View
style={{
 height:10
}}
></View>
<View
style={{
width:1000,
alignItems:'center'
}}
>
<Text
 style={{
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem("themecolor5"),
   fontWeight:localStorage.getItem("themefontweight")

 }}
 >Search for A&M ELITE AVIATION and book online. See our routes and available schedules, and discover more about the experience you can look forward to on board.</Text>

</View>
<View

style={{
 height:120
}}
>

</View>

     <table
      style={{
       borderCollapse:'collapse'
     }}
     >


<View
style={{
 backgroundColor:'white'
}}
>

</View>





<table
style={{ 

 borderCollapse:'collapse',

}}
>

{JSON.parse(getoptiondata).map((str4) => {   
 
 var yu = false
 if(inputoption===""){
   yu=false
 }else if(inputoption===str4.description){
   yu=true
 }else if(inputoption===str4.description){
   yu=true
 }
return (
<td
style={
 {
   paddingRight:22.2
 }
}
>
<input 
 type="radio" 

 checked={yu}
 onClick={()=>{
  inputOption(str4.description)
 }} 
 style={{
   width:20,
   height:20,
 }}
/>
<Text> </Text>
 <Text
style={{
fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
color:localStorage.getItem("themecolor5"),

}}
>
{str4.description}
</Text>
</td>

)   
})}
</table>


<View
style={{
 height:15
}}
></View>
          <tr>







           
       <td
       style={{
         borderRadius:5,
       }}
       >
    


    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Select
    options={opt1}
    onChange={(v)=>{
     inputPlane(v)
      opt4 = []
      opt5 = v

     for(var i=0;i<opt5.capacity;i++){
     opt4.push({value:i+1,label:i+1})
     }
     inputPassenger("")
    }}
    value={inputplane}
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: 'white',
    primary: localStorage.getItem("themecolor6"),
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"),
    color: 'green', 
    
    },
    })}
    
    placeholder="PLANE"
       styles={{
         control: (base, state) => ({
           ...base,
           
           height: 100,
           width:404,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 

     
         }),
         
       }}
    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    >
    
     </Select>
    </div>
     
    </td>



    <td>
 <View
 style={{
   width:10
 }}
 ></View>
</td>
<td
       style={{
         borderRadius:5,
       }}
       >
    


    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Select
        options={opt4}
        onChange={(v)=>{
         inputPassenger(v)
         var gj = v.value
         var k = []
         for(var i=0;i<gj;i++){ 
          k.push(
            {
              'firstname':'',
              'lastname':'',
              'suffix':'',
              'birthdate':'Select birthdate',
              'age':'0',
              'gender':''
            }
           )
           }
           inputPassengerList(JSON.stringify(k))
        }}
        value={inputpassenger}
    theme={(theme) => ({
    ...theme,
    borderradius: 0,
    colors: {
    ...theme.colors,
    text: 'green',
    font:'green',
    primary25: 'white',
    primary: localStorage.getItem("themecolor6"),
    neutral80: localStorage.getItem("themecolor5"),
    neutral50: localStorage.getItem("themecolor6"),
    color: 'green', 
    
    },
    })}
    
    placeholder="PASSENGER"
       styles={{
         control: (base, state) => ({
           ...base,
           
           height: 100,
           width:404,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 
     
         }),
         
       }}
    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    >
    
     </Select>
    </div>
     
    </td>

    <td>
 <View
 style={{
   width:10
 }}
 ></View>
</td>
<td>
<div
   style={{
     boxShadow:'0px 0px 500px black',
     borderRadius:5
   }}
   >
   <td
style={{
 borderBottomLeftRadius:5,
 borderTopLeftRadius:5,
 backgroundColor:localStorage.getItem('themecolor3'),
}}
       >
         
    
      <Select
           options={opt2}
           onChange={(v)=>{
            inputOrigin(v)
      
           }}
           value={inputorigin}
theme={(theme) => ({
 ...theme,
 borderradius: 0,
 colors: {
 ...theme.colors,
 text: 'green',
 font:'green',
 primary25: 'white',
 primary: localStorage.getItem("themecolor6"),
 neutral80: localStorage.getItem("themecolor5"),
 neutral50: localStorage.getItem("themecolor6"),
 color: 'green', 

 },
})}

  placeholder="ORIGIN"
       styles={{
         control: (base, state) => ({
           ...base,
           
           height: 100,
           width:200,
     
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 
     fontWeight:localStorage.getItem("themefontweight"),
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     
         }),
         
       }}
 components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
></Select> 
    
           
</td>

<td
style={{
 borderBottomRightRadius:5,
 borderTopRightRadius:5,
 backgroundColor:localStorage.getItem('themecolor3'),
}}
       >
         
    
      <Select
         options={opt2}
         onChange={(v)=>{
          inputDestination(v)
    
         }}
         value={inputdestination}
theme={(theme) => ({
 ...theme,

 colors: {
 ...theme.colors,
 text: 'green',
 font:'green',
 primary25: 'white',
 primary: localStorage.getItem("themecolor6"),
 neutral80: localStorage.getItem("themecolor5"),
 neutral50: localStorage.getItem("themecolor6"),
 color: 'green', 

 },
})}

  placeholder="DESTINATION"
       styles={{
         control: (base, state) => ({
           ...base,
           height: 100,
           width:200,

           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 
     fontWeight:localStorage.getItem("themefontweight"),
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     
         }),
         
       }}
 components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
></Select> 
   
   <View>
     
     </View>  
           
</td>

   </div>
</td>

      
       </tr>   
       
     </table>
<View
style={
 {
   height:15
 }
}
></View>
     <table
      style={{
       borderCollapse:'collapse'
     }}
     >


<View
style={{
 backgroundColor:'white'
}}
>

</View>






          <tr>


          <td>
<div
   style={{
     boxShadow:'0px 0px 500px black',
     borderRadius:5
   }}
   >
   <td
style={{
 borderBottomLeftRadius:5,
 borderTopLeftRadius:5,
 backgroundColor:localStorage.getItem('themecolor3'),
}}
       >
    
     <View
        onStartShouldSetResponder={()=>{
       
         if(inputoption==="Round trip"){
         //  setTimedeparture(true)
         }else{
           if(inputoption==="One way"){
           //  setTimedeparture(true)
           }
         }
        }}
     >

<Popup
onClose={()=>{
  inputText1("0")
}}
        disabled={false}
contentStyle={{width:'max-content'}}
trigger={
  <View>
         <Select
         menuIsOpen={false}
         isDisabled={false}
      isSearchable={false}
     // options={[{value:'',label: departureC}]}
      value={[{value:'',label:departuredate+" "+displayTimeDeparture}]}
      
theme={(theme) => ({
 ...theme,
 colors: {
 ...theme.colors,
   text: 'green',
   font:'green',
   primary25: 'white',
   primary50:'white',
   primary: localStorage.getItem("themecolor6"),
   neutral80: localStorage.getItem("themecolor5"),
   neutral50: localStorage.getItem("themecolor6"),
   color: 'green', 
 },
})}
onChange={()=>{

}}
  placeholder="DEPARTURE"
       styles={{
         control: (base, state) => ({
           ...base,

           height: 100,
           width:200,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 
     
         }),
         menu: (base) => ({
           ...base,
           width: "max-content",
           
    
      }),
       }}  
       
        maxMenuHeight="max-content"
        menuPlacement="auto"
        closeMenuOnSelect={false}

 components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
></Select> 
  </View> 
} position={positionM}>
    <div>{departureC}</div>
  </Popup>


     </View>
           
</td>

<td
style={{
 borderBottomRightRadius:5,
 borderTopRightRadius:5,
 backgroundColor:localStorage.getItem('themecolor3'),
}}
       >
         
      
      <View
      onStartShouldSetResponder={()=>{
       if(inputoption==="Round trip"){
     //   setTimeArrival(true)
       }
      }}
      >
        
        <Popup
        onClose={()=>{
          inputText1("0")
        }}
        disabled={arrivalD}
        contentStyle={
          {
            width:'max-content'
          }
        }
        trigger={
          <View>
              <Select

menuIsOpen={false}
//isDisabled={arrivalD}
      isSearchable={false}
    //  options={[{value:'',label:arrivalC}]}
      value={[{value:'',label:arrivaldate+" "+displayTimeArrival}]}
   
theme={(theme) => ({
 ...theme,

 colors: {
 ...theme.colors,
   text: 'green',
   font:'green',
   primary25: 'white',
   primary50:'white',
   primary: localStorage.getItem("themecolor6"),
   neutral80: changeColor,
   neutral50: localStorage.getItem("themecolor6"),
   color: 'green', 

 },
})}

  placeholder="ARRIVAL"
       styles={{
         control: (base, state) => ({
           ...base,
           
           height: 100,
           width:200,
           fontWeight:localStorage.getItem("themefontweight"),
           fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
           outlineStyle: 'none',
           border: 0,
           boxShadow: 'none',
           backgroundColor:localStorage.getItem('themecolor3'),
           paddingLeft: 20,
     paddingRight: 8, 
     
         }),
         menu: (base) => ({
           ...base,
           width: "max-content",
           minWidth: "100%",
      }),
      menuPortal: (base) => ({
       ...base,
       zIndex: 9999,
     }),
   
         
       }} 
       menuPlacement="auto"
       maxMenuHeight= "max-content"
        closeMenuOnSelect={false}
 components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
></Select> 
          </View>
        } position="top left">
    <div>{arrivalC}</div>
  </Popup>
       
    
      </View>
   
   <View>
     
     </View>        
</td>

   </div>
</td>



    <td>
 <View
 style={{
   width:10
 }}
 ></View>
</td>
<td
       style={{
         borderRadius:5,
       }}
       >
    


    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Button
    style={{
     height: 100,
     width:404,
     fontWeight:localStorage.getItem("themefontweight"),
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     backgroundColor:localStorage.getItem('themecolor4'),
     color:localStorage.getItem('themecolor5')
    }}
    onClick={()=>{
     if(inputoption!=""){
       if(inputplane===""){
         toast(
           'Select plane',
           toastConfig({
          theme:'dark'
           })
         )
       }else if(inputpassenger===""){
         toast(
           'Select head count',
           toastConfig({
          theme:'dark'
           })
         )
       }else if(inputorigin===""){
         toast(
           'Select Origin',
           toastConfig({
          theme:'dark' 
           })
         )
       }else if(inputdestination===""){
         toast(
           'Select Destination',
           toastConfig({
          theme:'dark'
           })
         )
       }else if(inputdestination.value===inputorigin.value){
         toast(
           'Same path is not allowed',
           toastConfig({
          theme:'dark'
           }) 
         )
       }else if(departuredate==="DEPARTURE"){
        toast(
          'Select Date',
          toastConfig({
         theme:'dark'
          })
        )
      }else{
        setNext("2")
       }
     
     }else{
       toast(
         'Please select trip',
         toastConfig({
        theme:'dark'
         })
       )
     }
     
    }}
    >
     NEXT
    </Button>
    </div>
     
    </td>

    <td>
 <View
 style={{
   width:10
 }}
 ></View>
</td>
<td
       style={{
         borderRadius:5,
       }}
       >
    


    <div
        style={{

       }}
    >
    <View
    style={{
     height: 100,
     width:404,


    }}
    >

    </View>
    </div>
     
    </td>

      
       </tr>




       <tr>
         <View
         style={{
           height:15
         }}
         ></View>
       </tr>

       
       <tr>
    
     



       </tr>
  
       
     </table>
     </View>
}else if(mynext==="2"){



  var j = [] 
var gj = inputpassenger.value
for(var i=0;i<gj;i++){ 
  j.push(i)

  }  
 



  MyUI2=<View
  style={{
  
    width: window.innerWidth-45,
  }}
  >
 <View
 style={{
  height:70,
  width:70
 }}
 >
 <Button
 onClick={()=>{
  setNext("1")
 }}
 >
   <IoArrowBack
    color={localStorage.getItem('themecolor5')}
    size={parseInt(localStorage.getItem("themeiconssize"), 0) + 0}
    />
   </Button>
 </View>
    <View
  style={{
    height: window.innerHeight-110,
    width: window.innerWidth-45,
    flex:1,
    alignItems:'center',

  }}
  >
 <Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizebigtitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')
 }}
 >Passenger List</Text>
   <View
style={{
 height:10
}}
></View>
<View
style={{
width:1000,
alignItems:'center'
}}
>
<Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   fontFamily:'Lucida Sans', 
   color:localStorage.getItem('themecolor5'),

 }}
 >Make sure set the birthdate to identify the validity of age, make it easier to determine what adult stages prefer, and make some promo about kids and below</Text>

</View>
<View
style={{
 height:30
}}
></View>


{JSON.parse(inputpassengerlist).map((str5,index) => {
var genderrequired 
var lastnamerequired 
var firstnamerequired 
var birthdaterequired
if(str5.birthdate==="Select birthdate"){
  birthdaterequired  = <Text
  style={{
    fontWeight:localStorage.getItem("themefontweight"),
    fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
    color:localStorage.getItem('themecolor7')
  }} 
  >this field is required*</Text>
  }else{
    birthdaterequired= <Text
    style={{
      color:"red"
    }}
    > </Text>
  }

if(str5.firstname===""){
  firstnamerequired  = <Text
  style={{
    fontWeight:localStorage.getItem("themefontweight"),
    fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
    color:localStorage.getItem('themecolor7')
  }}
  >this field is required*</Text>
  }else{
    firstnamerequired = <Text
    style={{
      color:"red"
    }}
    > </Text>
  }

if(str5.lastname===""){
lastnamerequired  = <Text
style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
  color:localStorage.getItem('themecolor7')
}}
>this field is required*</Text>
}else{
  lastnamerequired = <Text
  style={{
    color:"red"
  }}
  > </Text>
}


var female =false
var male =false 
 if(str5.gender==="Male"){
  male=true
  female=false
  genderrequired = <Text
  style={{
    color:"red"
  }}
  ></Text>
  }else if(str5.gender==="Female"){
  female=true
  male=false 
  genderrequired = <Text
  style={{
    color:"red"
  }}
  ></Text>
  }else{
    female=false
    male=false
    genderrequired = <Text
    style={{
      fontWeight:localStorage.getItem("themefontweight"),
      fontSize:parseInt(localStorage.getItem("themefontsizetext"), 0) + 0, 
      color:localStorage.getItem('themecolor7')
    }}
    >this field is required*</Text>
  }

return (
<table
style={{
  paddingBottom:50
}}
>

<table
style={{ 

 borderCollapse:'collapse',

}}
>
<td
style={
 {
   paddingRight:22.2
 } 
} 
>
<input 
 type="checkbox" 
 checked={male}
 onClick={()=>{
  var y =  JSON.parse(inputpassengerlist)
  y[index]['gender']="Male"
  inputPassengerList(JSON.stringify(y)) 

 }} 
 style={{
   width:20,
   height:20,
 }}
/>
<Text> </Text>
 <Text
style={{

  fontWeight:localStorage.getItem("themefontweight"),
    fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
    color:localStorage.getItem('themecolor5')

}}
>
Male
</Text>
</td>
<td
style={
 {
   paddingRight:22.2
 } 
} 
> 
<input 
 type="checkbox" 
 checked={female}
 onClick={()=>{
  var y =  JSON.parse(inputpassengerlist)
  y[index]['gender']="Female" 
  inputPassengerList(JSON.stringify(y)) 
 }} 
 style={{
   width:20,
   height:20,
 }}
/>
<Text> </Text>
 <Text
style={{

  fontWeight:localStorage.getItem("themefontweight"),
    fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
    color:localStorage.getItem('themecolor5')

}}
>
Female
</Text>
</td>
</table>

{genderrequired}




<View
style={{
 height:5
}}
></View>
<tr>
  <td>
   
    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
 
    <TextInput
      placeholder="LASTNAME"
      placeholderTextColor="grey"
      onChangeText={(v)=>{
        var y =  JSON.parse(inputpassengerlist)
        y[index]['lastname']=v
        inputPassengerList(JSON.stringify(y)) 
      }}
      value={str5.lastname}
      style={{
        height: 100,
        width:404,
        fontWeight:localStorage.getItem("themefontweight"),
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
        color:localStorage.getItem('themecolor5'),
        outlineStyle: 'none',
        border: 0,
        boxShadow: 'none',
        backgroundColor:localStorage.getItem('themecolor3'),
        paddingLeft: 20,
  paddingRight: 8, 


      }}
      ></TextInput>
    
      </div>
     {lastnamerequired}

       </td>
    <td>
    <View
      style={{
        width:10
      }}
      ></View>
    </td>
       <td>
    
    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
   
    <TextInput
      placeholder="FIRSTNAME"
      value={str5.firstname}
      onChangeText={(v)=>{
        var y =  JSON.parse(inputpassengerlist)
        y[index]['firstname']=v
        inputPassengerList(JSON.stringify(y)) 
      }}
      placeholderTextColor="grey"
      style={{
        height: 100,
        width:404,
        fontWeight:localStorage.getItem("themefontweight"),
        fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
        color:localStorage.getItem('themecolor5'),
        outlineStyle: 'none',
        border: 0,
        boxShadow: 'none',
        backgroundColor:localStorage.getItem('themecolor3'),
        paddingLeft: 20,
  paddingRight: 8, 


      }}
      ></TextInput>
    
      </div>
      {firstnamerequired}

       </td>
       <td>
    <View
      style={{
        width:10
      }}
      ></View>
    </td>
    <td>
    
    <div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
   
    <TextInput
      placeholder="SUFFIX"
      value={str5.suffix}
      onChangeText={(v)=>{
        var y =  JSON.parse(inputpassengerlist)
        y[index]['suffix']=v
        inputPassengerList(JSON.stringify(y)) 
      }}
      placeholderTextColor="grey"
      style={{
        height: 100,
        width:404,

        outlineStyle: 'none',
        border: 0,
        boxShadow: 'none',
        backgroundColor:localStorage.getItem('themecolor3'),
        paddingLeft: 20,
  paddingRight: 8, 

  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem('themecolor5'),
      }}
      ></TextInput>
    
      </div>
      <Text
      style={{
        color:"grey"
      }}
      >(optional)</Text>
    
       </td>
    </tr>
<tr>
  <td>
<div
   style={{
     boxShadow:'0px 0px 500px black',
     backgroundColor:localStorage.getItem('themecolor3'),
   }}
   >
 
 <td
      style={{
       backgroundColor:localStorage.getItem('themecolor3'),
      }}
             >
          
           <View
            
              onStartShouldSetResponder={()=>{
      passengerID(index)
              }} 
           >
            <Popup 

contentStyle={{ width: 'max-content'}}
trigger={
<View>
<Select
           menuIsOpen={false}
            isSearchable={false}

            value={[{value:'',label:str5.birthdate}]}
            
      theme={(theme) => ({
       ...theme,
       colors: {
       ...theme.colors,
         text: 'green',
         font:'green',
         primary25: 'white',
         primary50:'white',
         primary: localStorage.getItem("themecolor6"),
         neutral80: localStorage.getItem("themecolor5"),
         neutral50: localStorage.getItem("themecolor6"), 
         color: 'green', 
       },
      })}
      onChange={()=>{
      
      }}
        placeholder="BIRTHDATE"
             styles={{
               control: (base, state) => ({
                 ...base,
      
                 height: 100,
                 width:197,
                 fontSize:20,
                 outlineStyle: 'none',
                 border: 0,
                 boxShadow: 'none',
                 backgroundColor:localStorage.getItem('themecolor3'),
                 paddingLeft: 20,
           paddingRight: 8, 
           fontWeight:'500',
           
               }),
               menu: (base) => ({
                 ...base,
                 width: "max-content",
                 
            }),
             }}  
             
              maxMenuHeight="max-content"
              menuPlacement="auto"
              closeMenuOnSelect={false}
      
       components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
      ></Select> 
</View>
} position="top left">
<div>{birthdate}</div>
</Popup>
          
          
           </View>
        
                 
      </td>

   

<td
style={{
 borderBottomRightRadius:5,
 borderTopRightRadius:5,
 backgroundColor:localStorage.getItem('themecolor3'),
}}
       >
         
        
      <View
     style={{  
      justifyContent:'center',
      alignItems:'center',
      width:197,
     }}
      >
       
   <Text
   style={{
    fontSize:20,
    color:'white'
   }}
   >{"Age: "+str5.age}</Text>
      </View>
   
   <View>
     
     </View>        
</td>

   </div>
{birthdaterequired}
      
</td>


</tr>
    
  </table>
)   
})}

<div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Button
    style={{
     height: 100,
     width:404,
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     backgroundColor:localStorage.getItem('themecolor4'),
     color:'white'
    }}
    onClick={()=>{
      var count = 0
    var gjg = JSON.parse(inputpassengerlist)
    for(var i=0;i<gjg.length;i++){ 
      if(gjg[i]['lastname']===""||
      gjg[i]['firstname']===""||
      gjg[i]['gender']===""||
      gjg[i]['birthdate']==="Select birthdate"){
        count = 1
      }
      }  
if(count===1){
  toast(
    'Some field are required*',
    toastConfig({
   theme:'failure'
    })
  )
}else{
setNext("3")
}
    }}
    >
     REVIEW
    </Button>
    </div>
  </View>
  <View
    style={{
      height:100
    }}
    />
  </View>
}else if(mynext==="3"){
if(inputoption==="One way"){
  MyUI2=<View
  style={{
  
    width: window.innerWidth-45,
  }}
  >
 <View
 style={{
  height:70,
  width:70
 }}
 >
 <Button
 onClick={()=>{
  setNext("2")
 }}
 >
   <IoArrowBack
    color={localStorage.getItem('themecolor5')}
    size={localStorage.getItem('themeiconssize')}
    />
   </Button>
 </View>
    <View
  style={{
    height: window.innerHeight-110,
    width: window.innerWidth-45,
    flex:1,


  }}
  >


<View
style={{

alignItems:'center'
}}
>
<Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizebigtitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')
 }}
 >Review</Text>
    <View
style={{
 height:10
}}
></View>
<Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')

 }}
 >Before proceed makesure all information are listed correctly, before proceed to the submission</Text>

</View>



<View
style={{
 height:30
}}
></View>

<View
style={{
  alignItems:'center'
  }}
>
{JSON.parse('["1"]').map((str) => { 
  var odp =[]
var gp = JSON.parse(inputpassengerlist)     
for(var i=0;i<gp.length;i++){ 
  odp.push(gp[i]['firstname']+" "+gp[i]['lastname'])
  }  


return (
<div>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:"200"
  }}
>{inputplane.value}</Text>
</td>
<td>
  <View
  style={{
    width:10
  }}>

  </View>
</td>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>{"("+inputplane.capacity+")"}</Text>

</td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>PAX</Text>
</td>
<td>
  <View
  style={{
    width:10
  }}>

  </View>
</td>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>{"  "+inputpassenger.value+""}</Text>

</td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>{inputorigin.value}</Text>
<Text>    </Text>
<FaPlaneDeparture 
color="white"
/>
<Text>    </Text>
<Text
style={{
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>{inputdestination.value}</Text>
</td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>DEPARTURE : </Text>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'200'
  }}
>{departuredate+" "+displayTimeDeparture}</Text>
</td>
</tr>
<tr>
  <td>
    <View
    style={{
      height:10
    }}>
      
    </View>
  </td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),
  fontWeight:'500'
  }}
>PASSENGER :</Text>
</td>
</tr>
<tr>
  <td>
  <View
  style={{
    paddingLeft:10
  }}
  >
  <Text
  style={{

    fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
    color:localStorage.getItem("themecolor5"),
    fontWeight:'200'
    }}
  >{odp.join("\n")}</Text>
    </View>
  </td>
</tr>
</div>
)   
})}
</View>

<View
style={{
 height:30
}}
></View>





  </View>

<View
style={{

  alignItems:'center'
  }}
>
<td
style={
 {
   paddingRight:22.2
 } 
} 
>
<input 
 type="checkbox" 
 checked={myreview}
 onClick={()=>{
if(myreview===false){
  setReview(true)
}else{
  setReview(false)
}
 }} 
 style={{
   width:20,
   height:20,
 }}
/>
<Text> </Text>
 <Text
style={{
  fontWeight:localStorage.getItem('themefontweight'),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
  color:localStorage.getItem("themecolor5"),

}}
>
I review all information listed here and its all correct
</Text>
</td>
<View
style={{
  height:15
}}
>

</View>
<div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Button
    style={{
     height: 100,
     width:404,
     backgroundColor:localStorage.getItem('themecolor4'),
     fontWeight:localStorage.getItem('themefontweight'),
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     color:localStorage.getItem("themecolor5"),
    }}
    onClick={()=>{
      if(myreview===false){
        toast(
          'Check confirmation after review',
          toastConfig({
         theme:'dark'
          })
        )
      }else{
    addClient()
      }
    }}
    >
     SUBMIT
    </Button>
    </div>
</View>
  <View
    style={{
      height:100
    }}
    />
  </View>
}else{
  MyUI2=<View
  style={{
  
    width: window.innerWidth-45,
  }}
  >
 <View
 style={{
  height:70,
  width:70
 }}
 >
 <Button
 onClick={()=>{
  setNext("2")
 }}
 >
   <IoArrowBack
   color={localStorage.getItem('themecolor5')}
   size={localStorage.getItem('themeiconssize')}
    />
   </Button>
 </View>
    <View
  style={{
    height: window.innerHeight-110,
    width: window.innerWidth-45,
    flex:1,


  }}
  >


<View
style={{

alignItems:'center'
}}
>
<Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizebigtitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')
 }}
 >Review</Text>
    <View
style={{
 height:10
}}
></View>
<Text
 style={{
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
   color:localStorage.getItem('themecolor5')

 }}
 >Before proceed makesure all information are listed correctly, before proceed to the submission</Text>

</View>



<View
style={{
 height:30
}}
></View>

<View
style={{
  alignItems:'center'
  }}
>
{JSON.parse('["1"]').map((str) => { 
  var odp =[]
var gp = JSON.parse(inputpassengerlist)     
for(var i=0;i<gp.length;i++){ 
  odp.push(gp[i]['firstname']+" "+gp[i]['lastname'])
  }  


return (
<div>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{inputplane.value}</Text>
</td>
<td>
  <View
  style={{
    width:10
  }}>

  </View>
</td>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{"("+inputplane.capacity+")"}</Text>

</td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>PAX</Text>
</td>
<td>
  <View
  style={{
    width:10
  }}>

  </View>
</td>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{"  "+inputpassenger.value+""}</Text>

</td>
</tr>
<tr>
<td>
<Text
style={{
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{inputorigin.value}</Text>
<Text>    </Text>
<FaPlaneDeparture 
color="white"
/>
<Text>    </Text>
<Text
style={{

  fontSize:20,
  color:"white",
  fontWeight:'200'
  }}
>{inputdestination.value}</Text>
</td>
</tr>
<table>
<tr>
<td>
<Text
style={{
  paddingRight:80,
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>DEPARTURE : </Text>
</td>
<td>
  <Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{departuredate+" "+displayTimeDeparture}</Text>
</td>
</tr>
</table>
<table>
<tr>
<td>
<Text
style={{
  paddingRight:112,
  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>ARRIVAL : </Text>
</td>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'200'
  }}
>{arrivaldate+" "+displayTimeArrival}</Text>
</td>
</tr>
</table>
<tr>
  <td>
    <View
    style={{
      height:10
    }}>
      
    </View>
  </td>
</tr>
<tr>
<td>
<Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
  fontWeight:'500'
  }}
>PASSENGER :</Text>
</td>
</tr>
<tr>
  <td>
  <View
  style={{
    paddingLeft:10
  }}
  >
  <Text
  style={{

    fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
    color:localStorage.getItem('themecolor5'),
    fontWeight:'200'
    }}
  >{odp.join("\n")}</Text>
    </View>
  </td>
</tr>
</div>
)   
})}
</View>

<View
style={{
 height:30
}}
></View>





  </View>

<View
style={{

  alignItems:'center'
  }}
>
<td
style={
 {
   paddingRight:22.2
 } 
} 
>
<input 
 type="checkbox" 
 checked={myreview}
 onClick={()=>{
if(myreview===false){
  setReview(true)
}else{
  setReview(false)
}
 }} 
 style={{
   width:20,
   height:20,
 }}
/>
<Text> </Text>
 <Text
style={{

  fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
   color:localStorage.getItem('themecolor5'),
   fontWeight:localStorage.getItem('themefontweight')

}}
>
I review all information listed here and its all correct
</Text>
</td>
<View
style={{
  height:15
}}
>

</View>
<div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Button
    style={{
     height: 100,
     width:404,
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     color:localStorage.getItem('themecolor5'),
     fontWeight:localStorage.getItem('themefontweight'),
     backgroundColor:localStorage.getItem('themecolor4'),
    }}
    onClick={()=>{
      if(myreview===false){
        toast(
          'Check confirmation after review',
          toastConfig({
         theme:'dark'
          })
        )
      }else{
    addClient()
      }
    }}
    >
     SUBMIT
    </Button>
    </div>
</View>
  <View
    style={{
      height:100
    }}
    />
  </View>
}
}else if(mynext==="4"){
  MyUI2=<View
  style={{
  
    width: window.innerWidth-45,
  }}
  >

    <View
  style={{
    height: window.innerHeight-110,
    width: window.innerWidth-45,
    flex:1,


  }}
  >


<View
style={{
 height:200
}}
></View>

<View
style={{

alignItems:'center'
}}
>
<Text
 style={{
  color:localStorage.getItem('themecolor5'),
  fontWeight:localStorage.getItem("themefontweight"),
  fontSize:parseInt(localStorage.getItem("themefontsizebigtitle"), 0) + 0, 
   fontFamily:'Lucida Sans',
 
 }}
 >Thank you for flight with us...</Text>
    <View
style={{
 height:10
}}
></View>

</View>



<View
style={{
 height:30
}}
></View>






  </View>

<View
style={{

  alignItems:'center'
  }}
>


<div
        style={{
         boxShadow:'0px 0px 500px black',
         borderRadius:5
       }}
    >
    <Button
    style={{
     height: 100,
     width:404,
     color:localStorage.getItem('themecolor5'),
     fontWeight:localStorage.getItem("themefontweight"),
     fontSize:parseInt(localStorage.getItem("themefontsizetitle"), 0) + 0, 
     backgroundColor:localStorage.getItem('themecolor4'),
    }}
    onClick={()=>{
      setNext("1")
    }}
    >
     BACK
    </Button>
    </div>
</View>
  <View
    style={{
      height:100
    }}
    />
  </View>
}

  
    MyUI = <Typography>
  {MyUI2}
      </Typography>

  } else if(mychooser==="SWITCH USER"){
    props.navigation.navigate('Lobby');
  } if(mychooser==="CHECKLIST"){
    MyUI = <Typography>
    <View>

    <tbody>
    <tr>
      <td>
      <Text
        style={{
          fontSize:30,
          fontWeight:'bold',
          color:localStorage.getItem('themecolor5'),
        }}
        >{localStorage.getItem("MainRoles")+" CHECKLIST"}</Text>
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
                                    tyrr.push({value:fg[i]['choices'],label:fg[i]['choices']})
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
                                                      fontSize:20,
                                                      color:localStorage.getItem('themecolor5'),
                                        
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
                                                      fontSize:18,
                                                      color:'grey',
                                      
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
  width: window.innerWidth-1300,

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
backgroundColor:'white'

}}
onClick={()=>{
setQuestion("")
setQuestionType("")
setSingleChoices("")
setChoices([])
}}
><Text
style={{
fontWeight:'bold'
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
backgroundColor:'white'

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
fontWeight:'bold'
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
backgroundColor:'white'

}}
onClick={()=>{
UpdateQuestion()
}}
><Text
style={{
fontWeight:'bold'
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
backgroundColor:'white'

}}
onClick={()=>{
  DeleteQuestion()
}}
><Text
style={{
fontWeight:'bold'
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
  color:'white',
fontSize:20
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
          fontSize:localStorage.getItem('themefontsize'),   
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
          fontSize:localStorage.getItem('themefontsize'),   
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
backgroundColor:'white'

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
      fd.push({value:gd[i]['value'],label:gd[i]['value']})
      }  
  setChoices(fd)
setSingleChoices("")
  }
}}
><Text
style={{
fontWeight:'bold'
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
     ptions={mychoices}
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
                    height: window.innerHeight-50,
                    width: window.innerWidth-1200,
                  
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
        fontSize:18,
        fontWeight:'400',
        color:'yellow'
      }}
      >{str.checklist_status}</Text>
    }  if(str.checklist_status==="DECLINED"){
      Status1 =  <Text
      style={{
        fontSize:18,
        fontWeight:'400',
        color:'red'
      }}
      >{str.checklist_status}</Text>
    } if(str.checklist_status==="COMPLETED"){
      Status1 =  <Text
      style={{
        fontSize:18,
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
fontSize:20,
color:"white",

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
fontSize:20,
color:"white",

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
fontSize:20,
color:"grey",

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
fontSize:24,
fontWeight:'200',
color:"white",
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
fontSize:18,
color:"white",
fontWeight:'400',
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
fontSize:18,
color:"white",
fontWeight:'400',
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
fontSize:18,
color:"white",
fontWeight:'400',
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
fontSize:18,
color:"white",
fontWeight:'400',
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
fontSize:24,
fontWeight:'200',
color:"white",
}}
>{"PASSENGER"}</Text>
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
fontSize:18,
color:"white",
fontWeight:'400',  
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
fontSize:24,
fontWeight:'200',
color:"white",
}}
>{"OVERALL STATUS :"}</Text>
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
fontSize:18,
color:"white",
fontWeight:'400',  
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
      size={40}
      color="white"
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
      <Text
        style={{
          fontSize:30,
          fontWeight:'bold',
          color:localStorage.getItem('themecolor5'),
        }}
        >{localStorage.getItem('MainRoles')}</Text>
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
          fontSize:25,

          color:localStorage.getItem('themecolor5'),
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
          fontSize:25,
          color:localStorage.getItem('themecolor5'),
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
    var STATUS2
    var fh = str.checklist_client
    for(var i=0;i<fh.length;i++){
      if(localStorage.getItem('MainRoles')===fh[i]['checklist_group']){
     
        if(fh[i]['checklist_status']==="PENDING"){
          STATUS=<Text
          style={{
            color:'yellow'
          }}
          >
            PENDING
          </Text>
              }else if(fh[i]['checklist_status']==="DECLINED"){
                STATUS=<Text
                style={{
                  color:'red'
                }}
                >
                  DECLINED
                </Text>
                    }else if(fh[i]['checklist_status']==="COMPLETED"){
                      STATUS=<Text
                      style={{
                        color:'cyan'
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
                                                                          fontSize:20,
                                                                          color:localStorage.getItem('themecolor5'),
                                                        
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
                                                                          fontSize:20,
                                                                          color:localStorage.getItem('themecolor5'),
                                                            
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
                                                                          fontSize:20,
                                                                          color:localStorage.getItem('themecolor5'),
                                                            
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
            if(str==="MANAGE"){
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


var choicesID = "";
  
  var count = 0

var opt4
var opt5 


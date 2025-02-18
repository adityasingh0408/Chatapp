import React, { useEffect } from "react";
import Messages from "./messages";
import Inputmessage from "./messageinput";
import { IoChatbox } from "react-icons/io5";
import useconversation from "../../../zustand/getconversations";
import { useAuthContext } from "../../../context/authcontext";

const Messagecontainer = ()=>{
  const { selectedconversation, setselectedconversation } = useconversation();
  useEffect(()=>{
    return()=> setselectedconversation(null);
  },[setselectedconversation]);
return (
    <div className=" md:min-w-[450px] flex flex-col ">
        {!selectedconversation ? (<Nochatselected/>):( <>
        <div className="bg-gray-500 px-4 py-2">
           <span className="label-text">  </span>
           <span className=" font-bold">{selectedconversation.fullname}</span>
        </div>

        <Messages/>
        <Inputmessage/>
        </>)}
       
         </div>

)
}
export default Messagecontainer;

const Nochatselected = ()=>{
  const {authuser}= useAuthContext()
    return(
      <>
      <div className=" flex  flex-col justify-center items-center h-full w-full text-center ">
     <div className=" flex flex-col items-center text-center font-semibold text-gray-200 px-4 gap-2  ">
        <p> 👋 Welcome {authuser.fullname} ❄️ </p>
        <p> Select a chat to start messaging</p>
        <IoChatbox size={30} />


      </div>
      </div>
      </>
    )
  }

  /*
  CODE FOR MESSAGE CONTAINER
  import React from "react";
import Messages from "./messages";
import Inputmessage from "./messageinput";
import { IoChatbox } from "react-icons/io5";

const Messagecontainer = ()=>{
    const nochatselected=true;
return (
    <div className=" md:min-w-[450px] flex flex-col ">
        {nochatselected ? (<Nochatselected/>):( <>
        <div className="bg-gray-500 px-4 py-2">
           <span className="label-text"> To: </span>
           <span className=" font-bold">Aadi</span>
        </div>

        <Messages/>
        <Inputmessage/>
        </>)}
       
         </div>

)
}
export default Messagecontainer;

const Nochatselected = ()=>{
    return(
      <>
      <div className=" flex  flex-col justify-center items-center h-full w-full text-center ">
     <div className=" flex flex-col items-center text-center font-semibold text-gray-200 px-4 gap-2  ">
        <p> 👋 Welcome aditya ❄️ </p>
        <p> Select a chat to start messaging</p>
        <IoChatbox size={30} />


      </div>
      </div>
      </>
    )
  }*/
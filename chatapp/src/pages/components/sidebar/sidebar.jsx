import React from "react";
import SearchInput from "./searchinput";
import Conversation from "./conversation";
import Conversations from "./conversations";
import Logout from "./logout";


const sidebar=()=>{

    return(
        <div className='border-r border-slate-500 p-4 flex flex-col'>
    < div>
      <SearchInput/>
     
          <Conversations />

     <Logout/>
   </div>
   </div>
    )
}
export default sidebar;

/*
CODE FOR SIDEBAR
import React from "react";
import SearchInput from "./searchinput";
import Conversation from "./conversation";
import Conversations from "./conversations";
import Logout from "./logout";


const sidebar=()=>{

    return(
        <div className='flex flex-col  w-80 mx-auto '>
    <div className="  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
      <SearchInput/>
    <Conversations/>
     <Logout/>
   </div>
   </div>
    )
}
export default sidebar;*/ 
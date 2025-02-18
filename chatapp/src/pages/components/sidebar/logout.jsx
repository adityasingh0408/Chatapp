import React from "react";
import { TbLogout2 } from "react-icons/tb";
import uselogout from "../../../hooks/uselogout";
const Logout =()=>{
    const{logout} =uselogout();
    return(
<>

<div >
      <TbLogout2 size={30} className=" w-10 cursor-pointer" onClick={logout}/>
    </div>

</>)
}
export default Logout

/*
CODE FOR LOGOUT 
import React from "react";
import { TbLogout2 } from "react-icons/tb";
const Logout =()=>{
    return(
<>

<div >
      <TbLogout2 size={30} className=" w-10 cursor-pointer" />
    </div>

</>)
}
export default Logout*/
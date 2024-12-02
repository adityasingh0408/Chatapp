import React from "react";
import { IoIosSend } from "react-icons/io";
const Inputmessage = ()=>{
    return(
    <div className="p-1 flex w-full items-center space  ">
        <input  type="text"
        placeholder="Type your message..."
        className="flex-1 input rounded-xl bg-transparent border-black bg-gray-700"
        />
        <button type="submit" className="btn bg-transparent"><IoIosSend size={20} /></button>
    
       
    </div>)
}
export default  Inputmessage;

/*
  CODE FOR MESSAGEINPUT
import React from "react";
import { IoIosSend } from "react-icons/io";
const Inputmessage = ()=>{
    return(
    <div className="p-1 flex w-full items-center space  ">
        <input  type="text"
        placeholder="Type your message..."
        className="flex-1 input rounded-xl bg-transparent border-black bg-gray-700"
        />
        <button type="submit" className="btn bg-transparent"><IoIosSend size={20} /></button>
    
       
    </div>)
}
export default  Inputmessage;*/
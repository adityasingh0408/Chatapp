import React from "react";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../../hooks/usesendmessages";

const Inputmessage = ()=>{
    const [message, setMessage] = useState("");
    const { sendMessage, loading } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };
    
    return(
        <form onSubmit={handleSubmit}>
    <div className="p-1 flex w-full items-center space  ">
        <input  type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
        className="flex-1 input rounded-xl bg-transparent border-black bg-gray-700"
        />
        <button type="submit" className="btn bg-transparent" disabled ={loading}><IoIosSend size={20} /> {loading? "sending" : "send"}</button>
       
    </div>
        </form>)
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
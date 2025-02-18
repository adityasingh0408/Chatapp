import React from "react";
import useconversation from "../../../zustand/getconversations";
import { useSocketContext } from "../../../context/socketcontext";
const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedconversation, setselectedconversation } = useconversation();
  const { onlineusers } = useSocketContext();

  console.log("Online users list:", onlineusers);
  console.log("Checking online status for:", conversation._id);

  const isOnline = Array.isArray(onlineusers) && onlineusers?.includes(conversation._id);
  //Array.isArray(onlineusers) &&
	const isSelected = selectedconversation?._id === conversation._id;
	
    return (
        <>
           <div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
      onClick={() => {
        console.log("Selecting conversation:", conversation);
        setselectedconversation(conversation);
      }}
			>
               <div className={`avatar ${isOnline ? "online" : "offline"}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilepicture } alt="Profile" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullname}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1" />}
        </>
    );
};

export default Conversation;



/*  
 CODE FOR CONVERSATION
import React from "react";

const conversation =()=>{
    return (

        <>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor pointer">  
        <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

<div className=" flex flex-col flex-1">
<div className="flex gap-3 justify-between"> 
    <p className="font-bold text-gray-200">Khushi</p>
    <span className="text-xl">😍</span>
</div>
</div>
        </div>

        <div className="divider my-0 py-0 h-1"/>
        </>
    )
}
export default conversation*/
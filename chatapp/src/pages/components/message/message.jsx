import React from "react";
import { useAuthContext } from "../../../context/authcontext";
import useConversation from "../../../zustand/getconversations";

const Message = ({ message }) => {
  const { authuser } = useAuthContext();
  const { selectedconversation } = useConversation();

  // Debugging logs
  console.log("authuser:", authuser);
  console.log("selectedconversation:", selectedconversation);
  console.log("message object:", message);
  console.log("message.senderid:", message?.senderid);

  // Ensure message and authuser are valid
  if (!message || !authuser) {
    console.error("Invalid data:", { message, authuser });
    return <div className="text-center text-red-500">Error: Invalid data</div>;
  }

  const fromMe =
    String(authuser._id) === String(message.senderid); // Compare IDs as strings
  console.log("fromMe:", fromMe); // Ensure this is logged

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe
    ? authuser?.profilepicture || "/default-user.png"
    : selectedconversation?.profilepicture || "/default-user.png";

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile" src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message?.message || "No message content available"}
      </div>
      <div className="chat-footer opacity-50 text-xs">
        {message?.createdAt
          ? new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "No time available"}
      </div>
    </div>
  );
};

export default Message;



/*
   CODE FOR MESSAGE
import React from "react";

const Message =()=>{
    return (
        <>
        <div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>

</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">I hate you!</div>
</div>
        </>
    )
}
export default Message

*/
import React, { useEffect, useRef } from "react";
import Message from "./message";
import useGetMessages from "../../../hooks/usegetmessages";
import MessageSkeleton from "../skeletons/skeletons";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null); // Ref to track the last message

  // Auto-scroll to the last message when `messages` change
  useEffect(() => {
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    },100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto space-y-4">
      {/* Render messages */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null} // Attach ref to the last message
          >
            <Message message={message} />
          </div>
        ))}

       {/* Render skeletons while loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Display fallback message if no messages */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;


/*
 CODE FOR MESSAGES
import React from "react";
import Message from "./message";

const Messages = () =>{
   return( 
        
        
        <div className="px-4 flex-1 overflow-auto space-y-4">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    
    
    )
}
export default Messages*/
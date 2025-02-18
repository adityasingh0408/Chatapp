import React from "react";
import Conversation from "./conversation";
import usegetconversations from "../../../hooks/usegetconversations";
import { getrandomemoji } from "../../../utils/emoji";

const Conversations = () => {
    const { loading, conversations } = usegetconversations();

    console.log("conversations", conversations);

    return (
        <div className="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
            {conversations.map((conversation, idx) => (
                // Missing return fixed here by using a parenthesis or explicit return
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getrandomemoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </div>
    );
};

export default Conversations;


/*
 CODE FOR CONVERSATIONS
import React from "react";

import Conversation from "./conversation";

const conversations = ()=>{
    return(
    <>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    </>
    )
}
export default conversations*/
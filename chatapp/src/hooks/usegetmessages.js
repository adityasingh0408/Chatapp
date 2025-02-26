import React, { useEffect, useState } from "react";
import useconversation from "../zustand/getconversations";
import toast from "react-hot-toast";

const usegetmessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedconversation } = useconversation();

  useEffect(() => {
    //const controller = new AbortController(); // Initialize AbortController
    //const signal = controller.signal;

    const getmessages = async () => {
      // Clear messages and skip API call if no valid conversation is selected
      if (!selectedconversation?._id) {
        setMessages([]); // Reset messages
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://chatapp-ljub.onrender.com/api/message/${selectedconversation._id}`,
          {
            method: "GET",
            credentials: "include",
           // signal, // Pass the abort signal to cancel the request if needed
          }
        );

        if (!res.ok) {
          // Handle 404 or other HTTP errors
          if (res.status === 404) {
            setMessages([]); // Reset messages for non-existing conversations
            return; // Exit gracefully without showing toast
          }
          throw new Error("Failed to fetch messages");
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("An error occurred:", error);
        if (selectedconversation?._id) {
          toast.error(error.message || "An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    // Fetch messages only when a conversation is selected
    getmessages();

    // Clean up on component unmount or dependency change
    //return () => {
    //  controller.abort();
    //};
  }, [selectedconversation?._id, setMessages]);

  return { messages, loading };
};

export default usegetmessages;

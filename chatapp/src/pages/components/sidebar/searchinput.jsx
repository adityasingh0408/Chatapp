import React from "react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../../zustand/getconversations";
import useGetConversations from "../../../hooks/usegetconversations";
import toast from "react-hot-toast";



const SearchInput = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();
  
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      toast.error("search term atleast 3 characters long.")
    }
    const conversation = conversations.find((c) => c.fullname?.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  }
  return (
<>
    <form onSubmit={handlesubmit} className="flex items-center justify-center p-3 min-w-80 mx-auto">
      
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="input input-disabled cursor-pointer rounded-full bg-slate-900 input-primary w-full max-w-xs mr-2"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
        
        {/* Search Icon */}
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
      </form>
    

    <div className="divider my-0 py-0 h-1"/>
    </>
  );
};

export default SearchInput;

/*
CODE FOR SEARCHINPUT
import React from "react";
import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
<>
    <div className="flex items-center justify-center p-3 min-w-80 mx-auto">
      
        
      
        <input
          type="text"
          placeholder="Search"
          className="input input-disabled cursor-pointer rounded-full bg-slate-900 input-primary w-full max-w-xs mr-2"
        />
        
    
        <FcSearch size={60} className="cursor-pointer" />
      </div>
    

    <div className="divider my-0 py-0 h-1"/>
    </>
  );
};

export default SearchInput;*/
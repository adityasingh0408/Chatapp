import React from "react";
import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
<>
    <div className="flex items-center justify-center p-3 min-w-80 mx-auto">
      
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="input input-disabled cursor-pointer rounded-full bg-slate-900 input-primary w-full max-w-xs mr-2"
        />
        
        {/* Search Icon */}
        <FcSearch size={60} className="cursor-pointer" />
      </div>
    

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
import React from 'react';

const CheckGender = ({ oncheckboxchange, selectedgender }) => {
  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="form-control flex-shrink">
        <label className="label cursor-pointer flex items-center justify-center">
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-primary"
            checked={selectedgender === "male"}
            onChange={() => oncheckboxchange("male")}
          />
          <span className="label-text ml-2">Male</span>
        </label>
      </div>

      <div className="form-control flex-shrink">
        <label className="label cursor-pointer flex items-center justify-center">
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-primary"
            checked={selectedgender === "female"}
            onChange={() => oncheckboxchange("female")}
          />
          <span className="label-text ml-2">Female</span>
        </label>
      </div>
    </div>
  );
};

export default CheckGender;


/*
code for checkgender
import React from 'react';

const CheckGender = () => {
  return (
    <div className='flex items-center justify-center min-w-96 mx-auto'>
      <div className="form-control flex-shrink">
        <label className="label cursor-pointer flex items-center justify-center">
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-primary"
          />
          <span className="label-text ml-2">Male</span>
        </label>
      </div>

      <div className="form-control flex-shrink">
        <label className="label cursor-pointer flex items-center justify-center">
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-primary"
          />
          <span className="label-text ml-2">Female</span>
        </label>
      </div>
    </div>
  );
};

export default CheckGender;
 */
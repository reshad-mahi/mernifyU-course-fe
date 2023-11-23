import React from 'react';

const CustomInput = ({ register, question }) => {
  return (
    <input
      className="body-large mb-0  flex h-10 w-full rounded-md border border-input bg-[#F6F2F7] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#78767A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-[#C8C5CA] disabled:cursor-not-allowed disabled:opacity-50 "
      placeholder="Type here"
      type="text"
      {...register(question.Variable)}
    />
  );
};

export default CustomInput;

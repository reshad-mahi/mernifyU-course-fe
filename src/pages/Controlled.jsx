import React, { useState } from 'react';

const Controlled = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-[20px] justify-center ">
      <form onSubmit={handleSubmit}>
        <label className="mr-2">
          Name:
          <input
            className="border mx-3"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button className="border border-2 px-4" type="submit" value="Submit">
          submit
        </button>
      </form>
      <img src="/images/controlled.png" alt="" />
    </div>
  );
};

export default Controlled;

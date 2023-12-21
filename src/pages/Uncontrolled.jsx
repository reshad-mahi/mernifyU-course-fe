import React, { useRef } from 'react';

const Uncontrolled = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="mr-2">
        Name:
        <input className="border mx-3" type="text" ref={inputRef} />
      </label>
      <button className="border border-2 px-4" type="submit" value="Submit">
        submit
      </button>
    </form>
  );
};

export default Uncontrolled;

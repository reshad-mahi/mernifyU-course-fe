import React, { useRef } from 'react';

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>hello</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;

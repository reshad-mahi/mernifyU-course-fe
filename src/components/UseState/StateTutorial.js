import React from 'react';

const StateTutorial = () => {
  let count = 0;
  const increaseCount = () => {
    count = count + 1;
  };
  return (
    <div>
      <button onClick={increaseCount}>Click</button>
      <h2>{count}</h2>
    </div>
  );
};

export default StateTutorial;

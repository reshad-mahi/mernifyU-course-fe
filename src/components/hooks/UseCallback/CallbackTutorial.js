import axios from 'axios';
import { useCallback, useState } from 'react';
import Child from './Child';

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Yo, pls toggle the button!');

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {' '}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}

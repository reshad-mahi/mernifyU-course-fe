import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="grid grid-cols-6 w-full px-10">
      <div className="">
        <div className="flex gap-2 flex-col mt-40">
          <Link to="state " className="p-2 border-input border-2 ">
            useState
          </Link>
          <Link to="effect" className="p-2 border-input border-2 ">
            useEffect
          </Link>
          <Link to="layout" className="p-2 border-input border-2 ">
            Layout
          </Link>
          <Link to="memo" className="p-2 border-input border-2 ">
            Memo
          </Link>
          <Link to="reducer" className="p-2 border-input border-2 ">
            Reduder
          </Link>
          <Link to="ref" className="p-2 border-input border-2 ">
            Ref
          </Link>

          <Link to="form" className="p-2 border-input border-2 ">
            Custom Form
          </Link>
        </div>
      </div>
      <div className="col-span-5 flex flex-col h-100 justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

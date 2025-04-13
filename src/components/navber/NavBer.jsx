import React from "react";

const NavBer = () => {
  return (
    <div>
      <div className="shadow-sm navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl btn btn-ghost">Contract-Page</a>
        </div>
        <div className="flex justify-between">
            <div className="flex-none gap-2">
                <button className="btn btn-ghost btn-sm rounded-btn">Home</button>
                <button className="btn btn-ghost btn-sm rounded-btn">About</button>
                <button className="btn btn-ghost btn-sm rounded-btn">Contact</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavBer;

import React from "react";
import { useNavigate } from "react-router-dom";

function Direction() {

  return (
    <div className="font-bold text-[15px] flex justify-between items-center gap-4 w-[16rem]">
      <div>
        <a href="/explore">Explore</a>
      </div>
      <div>
        <a href="/create">Create</a>
      </div>
      <div>
        <a href="/profile">My Assets</a>
      </div>
    </div>
  );
}

export default Direction;

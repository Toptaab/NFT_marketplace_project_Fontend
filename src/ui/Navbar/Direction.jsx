import React from "react";


function Direction() {
  const userId = localStorage.getItem('userId')

  return (
    <div className="font-bold text-[15px] flex justify-between items-center gap-4 w-[16rem]">
      <div>
        <a href="/explore">Explore</a>
      </div>
      <div>
        <a href="/create">Create</a>
      </div>
      <div>
        <a href={`/profile/${userId}`}>My Assets</a>
      </div>
    </div>
  );
}

export default Direction;

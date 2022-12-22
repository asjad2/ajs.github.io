import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Games = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="flex container  bg-[#7ff0ce]">
      <Sidebar open={open} setOpen={setOpen}/>
      <Outlet />
    </div>
  );
};

export default Games;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Games = () => {
  const [open, setOpen] = useState(true);
  const [video,setVideo]=useState(false);
  return (
    <div className="flex container bg-[#7ff0ce]">
      <Sidebar open={open} setOpen={setOpen} video={video} setVideo={setVideo}/>
      
      <div className={`${video ? '': 'hidden'} mx-auto my-auto space-y-4 `}>
        <h1 className="text-center font-bold text-2xl">Backend Explained</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yXWw0_UfSFg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Outlet />
    </div>
  );
};

export default Games;

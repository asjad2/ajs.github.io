import { useState, useEffect } from "react";
import { getMessages, deleteMessages } from "../Service/api";

function Testimonials(props) {
  const [getMessage, setgetMessage] = useState([]);

  const showMessages = async () => {
    const result = await getMessages();
    setgetMessage(result.data);
  };

  useEffect(() => {
    showMessages();
  }, [getMessage]);

  return (
    <div className={`w-full bg-${props.bgcolor} text-${props.txtcolor} text-black p-8`}>
      <h1 className={`font-bold text-2xl text-center`}>Testimonials</h1>
      <div className=" p-5 shadow-lg rounded-2xl space-y-4 shadow-[#33BD94]">
        {getMessage.map((info, id) => {
          return (
            <div className=" flex flex-col h-fit w-3/6">
            
                <h3 className="text-sm">Name: {`${info.FullName}`}</h3>
                <h3 className="text-sm">{`${info.Email}`}</h3>
                <h3 className="">{`${info.Message}`}</h3>
              
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Testimonials;

import { getMembers } from "../Service/api";
import { useState, useEffect } from "react";

const MemberCard = (props) => {
  const [members, SetMembers] = useState([]);
  console.log(members);
  const showMessages = async () => {
    const result = await getMembers();
    SetMembers(result.data);
  };
  useEffect(() => {
    showMessages();
  }, []);
  return (
    <div className={`w-full bg-${props.bgcolor} f text-black p-8`}>
      <h1 className={`text-center font-bold text-2xl text-${props.txtcolor}`}>
        Your Profile
      </h1>
      <div className="mx-auto bg-[#7ff0ce] w-fit p-5 shadow-lg rounded-2xl space-y-4  shadow-[#33BD94]">
        <div className="flex flex-row gap-4">
          <h2 className="flex flex-row">Username:</h2>
          <h3>{`${members.UserName}`} </h3>
        </div>
        <div className="flex flex-row">
          {" "}
          <h2>Name:</h2>
          <h3>{`${members.FullName}`} </h3>
        </div>
        <div className="flex flex-row">
          {" "}
          <h2>Email:</h2>
          <h3>{`${members.Email}`} </h3>
        </div>
        <div className="flex flex-row">
          {" "}
          <h2>Phone Number:</h2>
          <h3>{`${members.PhoneNumber}`} </h3>
        </div>
        <div className="flex flex-row gap-4">
          <h2 className="rounded-3xl text-white w-fit h-fit p-2 bg-gradient-to-l from-[#000000] to-[#33BD94] active:from-[#063527]">
            Forgotten Password
          </h2>
          <h2 className="rounded-3xl text-white w-fit h-fit p-2 bg-gradient-to-l from-[#000000] to-[#33BD94] active:from-[#063527]">
            Delete my account
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

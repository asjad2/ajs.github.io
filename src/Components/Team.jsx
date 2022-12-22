import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const Team = ({ item }) => {
  const { profile, title, designation} = item;
  return (
    <section className="text-black  body-font ">
      <div className=" px-5 py-2 mb-8 " >
        <div className="p-2 bg-[#7ff0ce]  shadow-lg shadow-[#7ff0ce] rounded-xl">
          <div className=" flex  flex-col text-center items-center rounded-lg  w-[100%]  h-40 " >
            <img
              alt="team"
              className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={profile}
            />
            <div className="flex-grow">
              <h2 className=" title-font font-medium">{title}</h2>
              <p className="">{designation}</p>
             
              <div className="flex flex-row justify-center space-x-3 mt-2">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsGithub />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

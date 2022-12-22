import Teamcard from "../Components/Team";
import TeamData from "../Data/TeamData";
const About = (props) => {
  return (
    <div className={`bg-${props.bgcolor} text-${props.txtcolor} h-screen w-screen`} >
      <div className=" text-black px-5 py-4 ">
        <div className="flex flex-col text-center w-full mb-20 ">
          <h1 className="text-2xl font-medium title-font mb-4  tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our Young and Creative Minds
          </p>
        </div>
      </div>
      <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 lg:grid-flow-row md:grid-cols-2 md:grid-flow-row grid-flow-row  gap-4" >
        {TeamData.map((item) => (
          <Teamcard
            key={item.id}
            item={item}
            profile={item.profile}
            title={item.title}
            designation={item.designation}
            about={item.about}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default About;

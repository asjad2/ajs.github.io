import yourhero from "./../Images/Superhero/Yourhero.svg";
import otherhero from "./../Images/Superhero/Otherhero.svg";
import { useEffect, useState } from "react";

const Superhero = () => {
  let [mainHero, setmainHero] = useState("");
  let [powerstats, setpowerStats] = useState([]);
  let [work, setwork] = useState([]);
  let [biography, setbiography] = useState([]);
  let [appearance, setappearance] = useState([]);
  let [connections, setconnections] = useState([]);
  let [heroimage, setheroimage] = useState(otherhero);
  let [stats, setStats] = useState([]);
  const baseurl = "https://www.superheroapi.com/api.php/";
  const token = "3652971824930496";
  const searchsuperhero = async () => {
    if(mainHero !==""){
    try {
    const response = await fetch(`${baseurl}/${token}/search/${mainHero}`);
    const json = await response.json();
    const hero = json.results[0];
    setStats(hero);
    setpowerStats(hero.powerstats);
    setbiography(hero.biography);
    setwork(hero.work);
    setappearance(hero.appearance);
    setconnections(hero.connections);
    setheroimage(hero.image.url);
    }
    catch {
      alert (`Information of ${mainHero} is not present. Try some other Superhero`)
    }}
  };
  const handlemainhero = (e) => {
    setmainHero(e.currentTarget.value);
  };

  useEffect(() => {
    submitValues();
  }, []);

  const submitValues = () => {
    searchsuperhero();
  };
  return (
    <div className="flex flex-col mx-auto space-y-4 mb-8 mt-8  items-center">
      <h1 className="text-center text-3xl font-bold">Super Hero Game</h1>
      <h2 className="text-center text-lg font-bold">
        You can find out about all the information related to your Super Heroes
      </h2>
      <h2 className="text-center text-md font-semibold">
        If nothing shows up then info of that Superhero is not present at the
        moment{" "}
      </h2>
      <div className="flex flex-col lg:flex-row space-x-3 s">
        <div className=" w-72">
          <img src={yourhero} alt="Your Hero" className="w-36 h-36 mx-auto" />
          <input
            type="text"
            className="rounded-3xl w-72 p-1"
            placeholder="Enter Your Favorite Super Hero Name"
            onChange={handlemainhero}
            value={mainHero}
          />
        </div>
        <div className=" space-y-2 w-72">
          <img src={heroimage} alt="Hero" className="w-36 h-36 mx-auto" />

          <h1 className="text-xl font-bold ">Hero:{stats.name}</h1>
        </div>
      </div>
      <button
        className="flex bg-green-200 text-md font-bold rounded-xl w-fit h-fit p-2 "
        onClick={submitValues}
      >
        Submit
      </button>

      <div className="grid lg:grid-flow-row lg:grid-cols-2 gap-x-24 gap-y-8 mx-auto ">
        <div className="bg-[#c3f8e7] rounded-3xl w-96 h-96 space-y-2 p-6 shadow-lg shadow-[#7ff0ce] ">
          <h1 className="text-xl font-bold">Powerstats of {stats.name}</h1>
          {Object.keys(powerstats).map((currentStat) => {
            return (
              <div>
                <div className="flex flex-col space-y-2 text-base ">
                  <h2 className="flex">
                    <h2 className="font-bold">{currentStat}:</h2>{" "}
                    {stats.powerstats[currentStat]}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#c3f8e7] rounded-3xl w-96 h-96 space-y-2 p-6 shadow-lg shadow-[#7ff0ce] ">
          <h1 className="text-xl font-bold">Biography of {stats.name}</h1>
          {Object.keys(biography).map((currentStat) => {
            return (
              <div>
                <div className="flex flex-col space-y-2 text-base ">
                  <h2 className="flex">
                    <h2 className="font-bold">{currentStat}:</h2>{" "}
                    {`
                      ${stats.biography[currentStat]}`}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#c3f8e7] rounded-3xl w-96 h-96 space-y-2 p-6 shadow-lg shadow-[#7ff0ce] ">
          <h1 className="text-xl font-bold">Appearance of {stats.name}</h1>
          {Object.keys(appearance).map((currentStat) => {
            return (
              <div>
                <div className="flex flex-col space-y-2 text-base ">
                  <h2 className="flex">
                    <h2 className="font-bold">{currentStat}:</h2>{" "}
                    {stats.appearance[currentStat]}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#c3f8e7] rounded-3xl w-96 h-96 space-y-2 p-6 shadow-lg shadow-[#7ff0ce] ">
          <h1 className="text-xl font-bold">Occupation of {stats.name}</h1>
          {Object.keys(work).map((currentStat) => {
            return (
              <div>
                <div className="flex flex-col space-y-2 text-base ">
                  <h2>
                    <h2 className="font-bold flex">{currentStat}:</h2>
                    {stats.work[currentStat]}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#c3f8e7] rounded-3xl w-96 h-96 space-y-2 p-6 shadow-lg shadow-[#7ff0ce] ">
          <h1 className="text-xl font-bold">Powerstats of {stats.name}</h1>
          {Object.keys(connections).map((currentStat) => {
            return (
              <div>
                <div className="flex flex-col space-y-2 text-base ">
                  <h2 className="flex">
                    <h2 className="font-bold">{currentStat}:</h2>{" "}
                    {stats.connections[currentStat]}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Superhero;

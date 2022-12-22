import React, { useState} from "react";
import Scissors1 from "./../Images/RPS/Scissors1.svg";
import Rock1 from "./../Images/RPS/Rock1.svg";
import Paper1 from "./../Images/RPS/Paper1.svg";


const RPS = () => {
  
  let [computerChoice, setcomputeChoice] = useState("");
  let [playerChoice, setplayerChoice] = useState("");
  let [playerName, setplayerName] = useState("");
  let [gameState, setgameState] = useState(true);
  let [totalPlayerScore, settotalPlayerScore] = useState(0);
  let [totalComputerScore, settotalComputerScore] = useState(0);
  let [result, setResult] = useState("Lets see who Gonna Win!!!");
  let [counter,setCounter]=useState(0)

  function getComputerChoice() {
    const array = { Rock: "Rock", Paper: "Paper", Scissors: "Scissors" };
    const keys = Object.keys(array);
    let computerChoice = keys[Math.floor(Math.random() * 3)];
    return computerChoice;
  }

  function getResult(playerChoice, computerChoice) {
    let ss = { pscore: 0, cscore: 0 };
    if (playerChoice === computerChoice) {
      ss["pscore"] = 0;
      ss["cscore"] = 0;
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      ss["pscore"] = 1;
      ss["cscore"] = -1;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      ss["pscore"] = 1;
      ss["cscore"] = -1;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      ss["pscore"] = 1;
      ss["cscore"] = -1;
    } else {
      ss["pscore"] = -1;
      ss["cscore"] = 1;
    }
    return ss;
  }

  function onClickRPS(playerChoice) {
   const computerChoice=getComputerChoice()
    setcomputeChoice(computerChoice);
    const score = getResult(playerChoice, computerChoice);
    console.log(playerChoice,'RPS player choice')
    console.log(computerChoice,' RPS computer choice')
    settotalPlayerScore(totalPlayerScore + score["pscore"]);
    settotalComputerScore(totalComputerScore + score["cscore"]);
    showResult(score,computerChoice,playerChoice);
  }
  function showResult(score,computerChoice,playerChoice) {
  
if(counter<=5){
    if (score["pscore"] === -1 && score["cscore"]===1) {
      setResult(`${playerName} Loose`);
    } else if (score["pscore"] === 0 && score["cscore"]===0) {
      setResult("Match Tied");
    } else {
      setResult(`${playerName} Won`);
    }
  }
  else if(counter>5){
    endGame()
    setCounter(counter=0)
  }
  }
  const handleClick = (e) => {
    if (playerName === "") {
      endGame(totalComputerScore, totalPlayerScore, result, playerName);
      alert("Invalid USer! Please Enter your Nickname");
      setgameState(false);
    } else {
      setplayerChoice(e.currentTarget.id);
      onClickRPS(playerChoice);
      setCounter(counter= counter+1)
    }
  };
  function endGame() {
    setgameState(false);
    if (gameState === false) {
      settotalPlayerScore((totalPlayerScore = 0));
      settotalComputerScore((totalComputerScore = 0));
      setResult((result = "Press Your Choice"));
      setgameState(true);
      setplayerName((playerName = ""));
    }
  }

  function palyernamee(e) {
    setplayerName(e.currentTarget.value);
  }

  return (
    <div className="mx-auto my-auto justify-center h-[100%] space-x-8 bg-[#7ff0ce]">
      <div className="container">
      <div className="flex flex-col items-center p-4 space-y-4 ">
        <h1 className="text-3xl font-extrabold">Rock Paper Scissors</h1>
        <h1 className="text-3xl font-extrabold">This is best of 5</h1>
        <input
          className="rounded-xl p-2 text-center "
          type="text"
          id={playerName}
          value={playerName}
          placeholder="Enter your Nickname"
          onChange={palyernamee}
        />
      </div>
      <img src="cimgURL" alt="" />
      <div className="">
        <div className="flex flex-row justify-center space-x-4 ">
          <div id="Rock" className="rpsButton" onClick={handleClick}>
            <img
              src={Rock1}
              alt=""
              className="lg:w-24 lg:h-24 w-16 h-16 p-1 lg:p-4 bg-white rounded-full"
            />
          </div>
          <div id="Paper" className="rpsButton" onClick={handleClick}>
            <img
              src={Paper1}
              alt="/"
              className="lg:w-24 lg:h-24 w-16 h-16 p-1 lg:p-4 bg-white rounded-full"
            />
          </div>
          <div id="Scissors" className="rpsButton" onClick={handleClick}>
            <img
              src={Scissors1}
              alt="/"
              className="lg:w-24 lg:h-24 w-16 h-16 p-1 lg:p-4 bg-white rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-4 mx-auto space-y-4">
          <h1 className="text-xl font-bold">{playerName} VS AJ </h1>
          <div className="space-x-5 flex flex-row text-lg font-bold">
            <h2>{playerName}'s :{playerChoice}</h2>
            <h2>VS</h2>
            <h2> AJ'S : {computerChoice}</h2>   
          </div>
          <h1 className="text-xl font-bold">{result}</h1>
          <div className="space-x-5 flex flex-row text-lg font-bold">
            <h2>{playerName}'s Score :{totalPlayerScore}</h2>
            <h2> AJ's Score : {totalComputerScore}</h2>   
          </div>
          <button
            onClick={endGame}
            className="bg-black mt-2 text-white font-bold p-4 rounded-xl mb-4"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default RPS;

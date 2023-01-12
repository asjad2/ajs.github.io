import { useState } from "react";
const Weather = () => {
  let [city, setCity] = useState("");
  let [data, setData] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "36d38ac964mshd81f9bcdb98954dp1ed40fjsnf7713a4fa830",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const weatherapi = () => {
    return fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err);
        alert("API not Working");
      });
  };
  const submitCity = () => {
    if (city !== "") {
      weatherapi();
    } else {
      alert("Enter city Name");
    }
  };
  const cityName = (e) => {
    setCity(e.currentTarget.value);
  };
  console.log(data);
  return (
    <div className="  flex flex-col mx-auto  text-black">z
      <div className="flex item-center mx-auto p-4  text-lg  space-x-3">
        <input
          type="text"
          onChange={cityName}
          className=" p-2  bg-white rounded-2xl  font-bold "
          placeholder="Your City:"
        />

        <button
          onClick={submitCity}
          className="rounded-3xl p-2 text-lg  bg-[#33BD94]"
        >
          Submit
        </button>
      </div>
      <div className="font-bold text-2xl  space-y-4 text-center ">
        <h1>
          City:
          <h2 className="font-semibold text-xl">{city}</h2>
        </h1>
        <h2 className="font-bold text-3xl">Weather Report</h2>

        <div className="grid grid-flow-row grid-cols-5 gap-8">
          {Object.keys(data).map((weatherdata) => {
            return (
              <div className="">
                <h2 className="font-bold text-2xl ">
                  {weatherdata}:{" "}
                  <h2 className="font-semibold text-xl">{data[weatherdata]}</h2>
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Weather;

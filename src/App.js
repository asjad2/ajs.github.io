import Landingpage from "./Pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Blogs from "./Pages/Blogs";
import Weather from "./Components/Weather";
import Signup from "./Pages/Signup";
import Page404 from "./Pages/Page404";
import Games from "./Pages/Games";
import RPS from "./Components/RPS";
import Superhero from "./Components/Superhero";
import { useState } from "react";
import Testimonials from "./Components/Testimonials";
import Login from "./Pages/Login";
import MemberCard from "./Components/MemberCard";
function App() {
  const [bgcolor, setbgcolor] = useState("white");
  const [txtcolor, settxtcolor] = useState("black");
  const [headtxtcolor, setheadtxtcolor] = useState("white");
  const [letterCounter, setletterCounter] = useState(0);
  const [wordCounter, setwordCounter] = useState(0);
  const [auth, setAuth] = useState(false);

  const authentication = (value) => {
    setAuth(value);
  };

  return (
    <div className={`flex flex-col items-center bg-${bgcolor}`}>
      <Navbar
        bgcolor={bgcolor}
        setheadtxtcolor={setheadtxtcolor}
        headtxtcolor={headtxtcolor}
        setbgcolor={setbgcolor}
        txtcolor={txtcolor}
        settxtcolor={settxtcolor}
        auth={auth}
      />
      <Routes>
        <Route
          exact
          path="portfolio"
          element={
            <Landingpage
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
              wordCounter={wordCounter}
              setwordCounter={setwordCounter}
              letterCounter={letterCounter}
              setletterCounter={setletterCounter}
            />
          }
        ></Route>
        <Route
          exact
          path="/pricing"
          element={
            <Pricing
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
            />
          }
        ></Route>
        <Route
          exact
          path="blog"
          element={
            auth ? (
              <Blogs
                bgcolor={bgcolor}
                txtcolor={txtcolor}
                headtxtcolor={headtxtcolor}
              />
            ) : (
              <Login
                bgcolor={bgcolor}
                txtcolor={txtcolor}
                headtxtcolor={headtxtcolor}
                authentication={authentication}
              />
            )
          }
        ></Route>
        <Route
          exact
          path="portfolio/signup"
          element={
            <Signup
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
            />
          }
        ></Route>
        <Route
          exact
          path="portfolio/login"
          element={
            <Login
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
              authentication={authentication}
            />
          }
        ></Route>
        <Route
          exact
          path="portfolio/projects"
          element={
            <Games
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
            />
          }
        >
          <Route exact path="weather" element={<Weather />}></Route>
          <Route exact path="rps" element={<RPS />}></Route>
          <Route exact path="superhero" element={<Superhero />}></Route>
        </Route>
     

        <Route
          exact
          path="*"
          element={
            <Page404
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
            />
          }
        ></Route>
        <Route
          exact
          path="/portfolio/profile"
          element={
            <MemberCard
              bgcolor={bgcolor}
              txtcolor={txtcolor}
              headtxtcolor={headtxtcolor}
            />
          }
        ></Route>
      </Routes>
      <Footer className="flex  absolute bottom-0 left-0" />
    </div>
  );
}

export default App;

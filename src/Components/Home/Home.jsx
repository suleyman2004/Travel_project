import React, { useEffect } from "react";
import "./Home.css";
import back from "../../image/background-image.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Main from "../Main/Main";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function Search(){
    alert("doesn't work backend.Please use another search")
  }
  return (
    <div>
      <section className="home">
        <div className="overlay"></div>
        <img src={back} alt="Awaza" />

        <div className="homeContent container">
          <div className="textDiv">
            <h1 className="homeTitle" data-aos="fade-up">
              Awaza awaits you
            </h1>
            <br />
            <br />
            <span className="smallText" data-aos="fade-up">
              Explore the most insightful views of Awaza in Turkmenistan
            </span>
          </div>
          <form>
            <div className="cardDiv grid" data-aos="fade-up">
              <div className="destinationInput">
                <label htmlFor="location">Search your destination:</label>
                <div className="flex">
                  <select
                    id="location"
                    className="input"
                    name="location"
                    style={{ width: "100%" }}
                  >
                    <option value="Mary city">Mary city</option>
                    <option value="Ashgabat city">Ashgabat city</option>
                    <option value="Lebap city">Lebap city</option>
                    <option value="Balkan city">Balkan city</option>
                    <option value="Dashoguz city">Dashoguz city</option>
                  </select>
                </div>
              </div>
              <div className="dateInput">
                <label htmlFor="first_name">Hotel name:</label>
                <div className="input flex">
                  <input type="text" id="first_name" name="first_name" />
                </div>
              </div>

              <div className="priceInput">
                <div className="label_total flex">
                  <label htmlFor="room">Room</label>
                </div>
                <div className="input flex">
                  <input type="number" id="room" name="room" min="1" max="4" />
                </div>
              </div>

              <div className="flex">
                <button type="button" className="searchOptions" onClick={Search}>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Main />
    </div>
  );
};

export default Home;

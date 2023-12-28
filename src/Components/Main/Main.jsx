import React, { useEffect, useState } from "react";
import "./Main.css";
import data from "../inventory.mjs";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { TextField } from "@mui/material";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [filterText, setFilterText] = useState("");
  const filteredItems = data.filter(
    (item) =>
      item.first_name.toLocaleLowerCase().includes(filterText) ||
      item.fees.toLocaleLowerCase().includes(filterText) ||
      item.location.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : data;

  return (
    <section className="main container section">
      <div className="secTitle" data-aos="fade-right">
        <div className="search">
        <TextField
          id="filled-search"
          className="search_button"
          label="Search field"
          type="search"
          variant="filled"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
        </div>
        {!filteredItems.length && (
          <div className="empty_search" style={{marginTop:"35px",fontSize:"20px"}}>There are no items to display adjust your filter criteria</div>
        )}
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {itemsToDisplay.map((item) => (
          <div className="singleDestination" data-aos="fade-up" key={item.id}>
            <div className="imageDiv" style={{ width: "100%" }}>
              <img src={item.img} alt={item.first_name} />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{item.first_name}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{item.location}</span>
              </span>

              <div className="fees flex">
                <h5>{item.fees}</h5>
              </div>

              <div className="desc">
                <p>{item.description}</p>
              </div>

              <button className="btn flex">
                Details <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;

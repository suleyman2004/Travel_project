import React, { useEffect } from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import back from "../../image/background-image.svg";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../image/logo.svg";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const m = 5;

  return (
    <section className="footer">
      <div className="imgDiv">
        <img src={back} alt="" />
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter email address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <span className="logo flex">
                <img src={logo} alt="" />
              </span>
            </div>

            <div className="footerParagraph" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quod laborum ullam unde voluptates mollitia repudiandae ab
              explicabo ducimus non, similique, sequi id doloribus in earum
              rerum. Blanditiis, dolore sunt.
            </div>

            <div className="footerSocials" data-aos="fade-up">
              <div className="right" style={{ float: "right" }}>
                <h3>Follow us:</h3>
                <div className="flex">
                  <AiOutlineTwitter className="icon" />
                  <AiFillYoutube className="icon" />
                  <AiFillInstagram className="icon" />
                  <FaTripadvisor className="icon" />
                </div>
              </div>
              <div className="left" style={{ float: "left" }}>
                <h3>Contact us:</h3>
                <span>Tel:+993 12 345678</span> <br />
                <span> Fax: +993 12 393939</span> <br />
                <span> Email:awaza@gmail.com </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

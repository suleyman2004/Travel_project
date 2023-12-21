import React, { useState } from 'react';
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import logo from "../../image/logo.svg"
import {  useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigator=useNavigate();
    function changePage(path){
        navigator(path);
    }
    const [active, setActive] = useState("navBar")
    const showNav = () => {
        setActive("navBar activeNavbar")
    }
    const removeNavbar = () => {
        setActive("navBar")
    }


    return (
        <section className='navbarSection' >
            <header className="header flex">
                <div className='logoDiv'>
                    <span className='logo flex' >
                        <img src={logo}  alt="" />
                    </span>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <button onClick={()=>changePage("/")} className='navLink'>Home</button>
                        </li>


                        <li className="navItem">
                            <button onClick={()=>changePage("/How_we_work")} className='navLink'>How we work</button>
                        </li>


                        <li className="navItem">
                            <button onClick={()=> changePage('/Contact_us')} className='navLink'>Contact us</button>
                        </li>
                        <button className='btn' onClick={()=>changePage("/sign-up")}>
                            <a>Sign up</a>
                        </button>



                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>
                <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className="icon" />
                </div>

            </header>

        </section>
    );
}

export default Navbar;

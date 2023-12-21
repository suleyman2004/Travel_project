import React, { useEffect } from 'react';
import "./Main.css"
import data from '../inventory';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos';
import "aos/dist/aos.css";
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
 
    return (
        <section className='main container section'>
            <div className="secTitle" data-aos="fade-right">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {data.map(({ id, first_name, fees, img, location, description }) => {
                    return (
                        <div className="singleDestination" data-aos="fade-up" key={id}>

                            <div className="imageDiv" style={{ width: "100%" }}>
                                <img src={img} alt={first_name} />
                            </div>


                            <div className="cardInfo">
                                <h4 className="destTitle">
                                    {first_name}
                                </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon' />
                                    <span className='name'>{location}</span>
                                </span>

                                <div className="fees flex">
                                    <h5>{fees}</h5>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>


                                <button className='btn flex'>
                                    Details <HiOutlineClipboardCheck className='icon' />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>



        </section>
    );
}

export default Main;

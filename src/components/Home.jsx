import React from 'react';
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='Home' id='Home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Empowering Tomorrow, Today.</p>
                </main>
            </div>

            <div className='Home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Welcome to TechyStar Solutions, where innovation converges with expertise to bring you cutting-edge IT solutions that propel your business into the future. At TechyStar, we believe in the power of technology to transform and optimize operations, enhance user experiences, and drive business success.</p>
                </div>
            </div>

            <div className="Home3" id='about'>
                <div>

                    <h1>Who we are?</h1>
                    <p>At the heart of TechyStar is a team of passionate and skilled professionals dedicated to providing tailored IT solutions. We understand that every business is unique, and our mission is to align technology with your specific needs, ensuring seamless integration and maximum impact.</p>
                </div>
            </div>

            <div className="Home4" id='brand'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{
                            animationDelay:"0.1s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
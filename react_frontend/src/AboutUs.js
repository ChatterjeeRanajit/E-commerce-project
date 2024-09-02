import React from 'react';
import './Style.css';
import {Link} from "react-router-dom";
import MyPhoto from "./Components/Assets/myPhoto.jpg";
import Das from "./Components/Assets/das.jpeg"
import Shoheli from "./Components/Assets/shoheli.jpeg";
import Surangana from "./Components/Assets/Surangana.jpeg";
import Avishek from "./Components/Assets/Avishek.jpeg";
const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <h1>About Us</h1>
                <p>
                    Welcome to our company! We are dedicated to delivering the best services to our customers. Our team is passionate and committed to achieving excellence in all that we do.
                </p>
                <p>
                    Our mission is to provide high-quality solutions that meet the needs of our clients. We believe in innovation, integrity, and customer satisfaction.
                </p>
                <p>
                    Thank you for choosing us. We look forward to working with you!
                </p>
                <div className="team-photos">
                    <img src={MyPhoto} alt="Team member 1" />
            <img src={Shoheli} alt="Team member 2" />
                    <img src={Das} alt="Team member 3" />
                    <img src={Surangana} alt="Team member 4" />
                    <img src={Avishek} alt="Team member 5" />
                </div>
            </div>
           <a href="/" className="button home">Home</a>
        </div>
    );
}

export default AboutUs;
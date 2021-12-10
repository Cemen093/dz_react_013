import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <> 
            <h2>About Page</h2> 
            <Link to="/">Home</Link>
        </>
    );
};

export default About;

// npm install --save react-router-dom@4.2.2
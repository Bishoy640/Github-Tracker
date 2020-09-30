import React from 'react';
import './nav.css';

const nav = () => {
    return (
        <div className="nav">

            <h1 style={{ flexGrow: "20" }} className="title">Github Tracker</h1>
            <div style={{ flexGrow: "10" }} className="navitems">
            <button  className="home button">Home</button>
            <button className="about button">About</button>
            </div>


         </div>
    )

};

export default nav
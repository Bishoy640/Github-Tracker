import React from 'react';
import './searchbar.css';
import Nav from './nav'



const searchbar = (props) => {

    return (
        <div>
            <Nav />
            <div className="searchbar">

                <form className="example" onSubmit={props.submit} >
                    <input type="text" placeholder="Search.." onChange={props.change} required></input>
                    <button className="searchbutton" type="submit"><i className="fa fa-search"></i></button>
                </form>

            </div>
            <div className="warning">
                <p className="warningText">Please enter the username</p>

            </div>

        </div>
    )

};

export default searchbar
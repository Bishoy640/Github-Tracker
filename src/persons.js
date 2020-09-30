import React from 'react';
import './persons.css';


const persons = (props) => {
    return (
        <div className="persons">
            <div className="outerDarkPart">
                <div className="inside">
                    <img src={props.imageURL} alt="ProfilePic" className="image" key={props.id} ></img>
                    <h4>{props.name}</h4>

                    <div className="firstVal"><a className="white" href={props.personURL}>
                        <p><span className="bg"></span><span className="base"></span><span className="text">VISIT PAGE</span></p></a>
                        
                    </div>

                </div>
            </div>
        </div>

    )

};

export default persons
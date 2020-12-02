import React from 'react'
import kuva from '../images/videoss.png'
import './Ux.css';


function Ux() {
    return (
        <div className="ux">
            <div className="ux-container">
                <div className="ux-wrapper">
                    
                    <img className="ux-img" src={kuva} />
                    <div className="ux-txt">
                        <p>My journey with ux design have been bipolar. Somedays is love it and in the next day i'll swear I'm not doing anything related to ux ever again. Still at the end of the day, I love it. </p>

                        <p>I've been working in ux-team for the past year and I've been part of many awesome projects in my previous work. We did user survey research from where we gathered data for user personas and it was heart warming to see _my own_ work used in real world. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Ux

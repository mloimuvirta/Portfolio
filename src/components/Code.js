import React from 'react'
import kuva from '../images/videoss.png'
import './Code.css';

function Code() {
    return (
       
        <div className="code">
             {/*TODO: Set css layout. Font.  */}
            <div className="code-container">
                <div className="code-wrapper">
                    
                    <img className="code-img" src={kuva} />
                    {/** TODO: Set text */}
                    <div className="code-txt">
                        <h1>FRONTEND DEVELOPMENT</h1>
                        <p>My dream job would definately be a ux-minded frontend-developer. This site is one of my latest and i'm still working on it. </p>

                        <p>Projects in my studies have usually been teamwork so unfortunately there is not much to show. In the future I will show the whole wide wolrd all the awesome things I've done. Be patient.</p>

                        <p>For now I'm focusing on the frontend but I'll never say never to fullstack. First I'll be the badass frontend person and later fullstack-wizard as they say. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Code

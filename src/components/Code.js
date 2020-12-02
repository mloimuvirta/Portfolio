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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula nibh, eu congue urna. Mauris et pretium quam, quis lobortis sem. Phasellus non arcu leo. Sed ultricies eu nunc a ullamcorper. Fusce eu dui posuere tellus auctor cursus et at arcu. Morbi interdum scelerisque odio vitae aliquam. Ut ac rutrum urna.</p>

                        <p>Nunc sit amet ultricies est. Aliquam in dui accumsan, sodales lacus vel, commodo mi. Nulla et lorem eu erat fringilla lacinia id sit amet nisl. Nam purus lectus, dapibus vel augue at, tempor semper ipsum. Vestibulum facilisis nec nulla eu congue. Suspendisse finibus sapien nec nisl molestie dignissim. Praesent tellus neque, egestas nec orci a, malesuada consequat lorem. Nullam venenatis interdum elit, sit amet rutrum quam dignissim ut. Phasellus non erat orci.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Code

import React from 'react'
import "./about.scss"
function About() {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="container">
                <div className="top">
                    <img src='assets/profilepic.png' alt='' />
                </div>
                <div className="middle">
                    <div className="description">
                        I have been always fascinated about programming and problem solving. 
                        That was the key motivation that created interest towards building quality
                         software applications and innovative solution to the complex business problems.
                          I personally believe in continuous learning, as there is always room for improvement. I always been thrilled in seeking space and opportunity that would utilize my knowledge and add value in building my career in different ways.
                    </div>
                </div>
                <div className="bottom">
                <button type='submit'>My CV</button>
                </div>
            </div>
        </div>
    )
}

export default About

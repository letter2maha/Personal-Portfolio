import React, { useState } from 'react'
import './education.scss'
import HistoryIcon from '@material-ui/icons/History';
import SchoolIcon from '@material-ui/icons/School';


function Education() {

    const [isCardItemActive, setIsCardItemActive] = useState(1);

    return <div className="education" id='qualifications'>
        <h1> Qualifications </h1>
        <div className='qualifications' >

            <div className="cardHead">

                <div className={"cardItem " + (isCardItemActive === 1 && 'active')}
                    onClick={() => { setIsCardItemActive(1) }}><HistoryIcon className='icon' /> {" "}Work History</div>
                <div className={"cardItem " + (isCardItemActive === 2 && 'active')}
                    onClick={() => { setIsCardItemActive(2) }}
                >
                    <SchoolIcon className='icon' /> Education</div>
                </div>
                
            <div className="cardDetails">
                {isCardItemActive === 1 ?
                    <div className="experience-container">

                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>Programmer Analyst (React JS Developer)</span>
                                <div className="heading-date">2019 - 2020</div>
                            </div>

                            <div className="sub-heading"> Cognizant</div>
                        </div>
                        <div className="description">
                            <ul>
                                <li>Experience in all phases of software development life cycle (SDLC).</li>
                                <li>Worked in building multipage dynamic application using React Hooks and Router.</li>
                                <li>Built a full stack application using React JS, Spring and MySQL for our client to audit the Automation JOB run.</li>
                                <li>Hands on experience in major design framework like Material-UI, React-Strap, Bootstrap and Flex box.</li>

                            </ul>
                        </div>

                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>Programmer Analyst (Automation Enginner)</span>
                                <div className="heading-date">2018 - 2019</div>
                            </div>

                            <div className="sub-heading"> Cognizant</div>
                        </div>
                        <div className="description">
                            
                            <ul>
                                <li>Identified test scenarios, estimated test efforts and created test plans to achieve 99% in software quality.</li>
                                <li>Developed a Hybrid Cucumber Framework from the scratch to make the functional validation in easily readable and understandable format.</li>
                                <li>Understanding the bottlenecks in the team and finding\implementing its workable solutions after POC’s.</li>

                            </ul>
                        </div>
                       
                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>QA Enginner</span>
                                <div className="heading-date">2016 - 2018</div>
                            </div>

                            <div className="sub-heading">Nimble Wireless</div>
                        </div>
                        <div className="description">
                            
                            <ul>
                                <li>Worked collaboratively with QA, development and Business groups to complete comprehensive testing.</li>
                                <li>Built scripts on top of Jenkins for auto scheduling our automation jobs.</li>
                               
                            </ul>
                        </div>

                    </div> : null}
                {isCardItemActive === 2 ?
                    <div className="experience-container">

                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>MSc - Computing & Information Systems</span>
                                <div className="heading-date">2020 - 2021</div>
                            </div>

                            <div className="sub-heading"> Liverpool John Moores University</div>
                        </div>
                        <br/>

                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>B.E - Computer Science</span>
                                <div className="heading-date">2012 - 2016</div>
                            </div>

                            <div className="sub-heading"> Mepco Schlenk Engineering College</div>
                        </div>
                        <br/>
                        <div className="resume-heading">
                            <div className="main-heading">
                                <span>HSC Vocational</span>
                                <div className="heading-date">2011 - 2012</div>
                            </div>

                            <div className="sub-heading"> Counian Matriculation</div>
                        </div>
                        <br/>

                    </div> : null}

            </div>
        </div>
    </div>
}
export default Education

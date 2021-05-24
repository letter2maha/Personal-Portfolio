import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import { FaJava, FaHtml5, FaCss3Alt,FaFileCode } from 'react-icons/fa';
import { DiJavascript1 ,DiReact,DiJira} from 'react-icons/di';
import { SiPowershell, SiSpring, SiJenkins,SiAmazonaws,SiGithub } from 'react-icons/si';
import {MdColorLens} from 'react-icons/md'
import SettingsIcon from '@material-ui/icons/Settings';
import ToysIcon from '@material-ui/icons/Toys';
import './skills.scss'

function Skills() {
    const data = [{
        id: 1,
        title: "Framework",
        titleIcon: <SettingsIcon />,
        skills: ["React JS", "Spring", "Cucumber BDD", "Hybrid Selenium Framework"],
        skillsLogo: [<DiReact size="2em" />, <SiSpring size="2em" />, <MdColorLens size="2em" />,
        <FaFileCode size="2em" />]
    },

    {
        id: 2,
        title: "Programming Skills",
        titleIcon: <CodeIcon />,
        skills: ["Core Java", "HTML", "CSS", "Javascript", "Shell Script"],
        skillsLogo: [<FaJava size="2em" />, <FaHtml5 size="2em" />, <FaCss3Alt size="2em" />,
        <DiJavascript1 size="2em" />, <SiPowershell size="2em" />],
        featured: true
    },

    {
        id: 3,
        title: "Tools & CICD",
        titleIcon: <ToysIcon />,
        skills: ["Jenkins", "JIRA", "Github", "AWS"],
        skillsLogo: [<SiJenkins size="2em" />, <DiJira size="2em" />,
        <SiGithub size="2em" />, <SiAmazonaws size="2em" />]
    }

    ];

    const items = (d) => {
        var rows = [];
        var i;
        console.log("length"+ d.skills.length);
        for (i = 0; i < d.skills.length; i++) {
            rows.push(
            <div className="items">

                <div className="right">{d.skills[i]}</div>
                <div className="left">{d.skillsLogo[i]}</div>

            </div>)
        }
        return rows;
    }

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
  
                {data.map((d) => (
                    <div className= {d.featured ? "card featured": "card"}>
                        <div className="top">
                            <div className="icon">{d.titleIcon}</div>
                            <div>{d.title}</div>
                        </div>
                        <div className="bottom">

                        {items(d)}


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills

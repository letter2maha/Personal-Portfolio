import React from 'react'
import './projects.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import DevicesIcon from '@material-ui/icons/Devices';

function Projects() {
  const data = [{

    id: 1,
    projectTitle: "Tesla Clone",
    img:"/assets/tesla.png",
    description: "This is a Tesla Clone project. "+
    "Here i've build the front end using react js and i've used the concept of redux store to manage the data "+
    "and react-styled components for designing.",
    gitlink:"https://github.com/letter2maha/tesla-clone"

  },

  {
    id: 2,
    projectTitle: "Personal Portfolio",
    img:"/assets/portfolio.png",
    description: "This is my portfolio website. I've used React JS along with Saas to the build this portfolio."
    +"In addition to that I've added emailJs to send message from the contact form. ",

  },

  {
    id: 3,
    projectTitle: "Contact Book",
    img:"/assets/ContactBook.png",
    description: "Contact book is one of my mini project during my masters and it is a full stack application. For this I have used MySql as my DB, Java spring as my API and React as my Front-end "
    +"I used AWS for hosting database, service and front-end.",
    gitLink:"https://github.com/letter2maha/phonebook",
    liveLink:"http://contactbook-s3.s3-website.us-east-2.amazonaws.com/",
  }

]
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>

      {data.map((d) => (
        <div className="container">
          <div className="project">

            <div className="left">
              <img src={d.img} alt="" />
            </div>
            <div className="right">
              <div className="title">
                <h1>{d.projectTitle}</h1>
              </div>
              <div className="description">{d.description}</div>
              <div className="sourceLink">
                <div className="source"><GitHubIcon/></div>
                <div className="source"><DevicesIcon/></div>
              </div>
            </div>

          </div>
        </div>))}
    </div>
  )
}

export default Projects

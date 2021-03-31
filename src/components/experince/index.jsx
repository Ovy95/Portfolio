import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./index.css"
import items from "./experince"

const experince = [
  {id:"recAGJfiU4CeaV0HL",
    order:3,
    title:"Freelance Developer",
    dates:"April 2021 - Present",
   duties:["Currently working on a CV project to help build skills using chosen tech stack. The task is to build a React and Redux-based UI that visualizes London postcodes from a GeoJSON file. After completion, this will be added to my projects section.","A group project is to follow which will take place around the middle of April. This will further develop my skills of being able to work using agile methodologies.","We will then be able to complete tickets to get used to the code base used here at UniRoomy."],
    company:"UniRoomy"
  },
  { id:"recIL6mJNfWObonls",
    order:2,
    title:"Freelance Developer",
    dates:"March 2021 - Present",
    duties:["A group project I joined through Makers. This is to further grow my React skills. Having joined late into the project I have been able to adapt quickly and complete tickets that have been assigned in the first month."
    ,
    "Developing my skills of being able to work in a team by working using agile methodologies."
    ,
    "Having joined two working projects this will allow me to grow better time management skills and communication skills being able to organise and divide up my time accordingly"
    ,
    "Acknowledge app will be deployed to TestFlight soon allowing for feedback of the app to make further improvements. More information in the projects section"
    ],
    company:"Acknowledge"
  },
  { id:"recIL6mJNfWObonls",
    order:2,
    title:"Where I started my Journey becoming a developer",
    dates:"January 2020 - April 2020",
    duties:["Emulating a commercial tech environment, our small teams used pairing, stand-ups, retros, CI/CD and code-reviews to collaborate effectively and deliver features efficiently in short agile sprints. "
    ,
    "Gained knowledge of core OOP principles to write SOLID code, following strict conventions and TDD process."
    ,
    "Utilised Jest, Enzyme, Rspec, Jasmine to write isolated unit tests and meaningful end to end feature tests."	],
    company:"Makers"
  }
]
const experience = [items]


export function Experince(props){



  const [jobs, setJobs] = useState(experince)
  const [value, setValue] = useState(0)



  // console.log(experince[0]["company"])





  // const { company, dates, duties, title } = jobs[value]
  let { company, dates, duties, title } = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container-experince">
          
          {experince.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}



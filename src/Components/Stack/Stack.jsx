import { useState } from "react"
import html from "../../assets/icons/html5-original.svg"
import css from "../../assets/icons/css3-original.svg"
import js from "../../assets/icons/javascript-original.svg"
import tailwind from "../../assets/icons/tailwindcss-plain.svg"
import react from "../../assets/icons/react-original.svg"
import node from "../../assets/icons/nodejs.svg"
import express from "../../assets/icons/Express.svg"
import mongo from "../../assets/icons/mongodb.svg"
import python from "../../assets/icons/python.svg"
import bootstrap from "../../assets/icons/bootstrap.svg"
import ai from "../../assets/icons/ai.svg"
import sql from "../../assets/icons/sql.svg"


import SingleStack from "../SingleStack/SingleStack"
import "./Stack.css"

function Stack() {
    const [stack, setStack] = useState([{name : "HTML", icon : html},
      {name : "CSS", icon : css},
      {name : "JavaScript", icon : js},
      {name: "Tailwind CSS", icon : tailwind},
      {name : "ReactJS", icon : react},
      {name : "NodeJS", icon : node},
      {name : "ExpressJS", icon : express},
      {name : "MongoDB", icon : mongo},
      {name : "SQL", icon : sql},
      {name : "AI & ML", icon : ai},
      {name : "Bootstrap", icon : bootstrap},
      {name : "Python", icon : python},
    ])

    const mappedStack = stack.map(({icon, name}) => {
        return <SingleStack key={name} icon={icon} name ={name} />
    })
  return (
    <section className="stack">
        <div className="stack-inner">
              <h1 id="stack">TECH STACK</h1>

        <div className="stack-container">
        {mappedStack}
        </div>
        </div>
      
    </section>
  )
}

export default Stack
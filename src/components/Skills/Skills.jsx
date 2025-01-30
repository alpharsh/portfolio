import React from 'react'
import './skills.css'
import { skills } from "../../data";
import SkillCard from '../../ui/Skillcard/SkillCard';

function Skills() {
  return (
    <section id="skill">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">My Skills</h2>
        </div>
        <div className="skill__container">
          {skills.map((list, index) => (
            <SkillCard key={index} {...list} /> //from here understand the spread operator
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
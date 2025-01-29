import React from "react";
import "./about.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

function About() {
  return (
    <section id="about" className="">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="skill__group" key={index}>
                  {skill.data.map((list, key) => (
                    <div className="blur__overlay skill" key={key}>
                      <div className="skill__logo">
                        <img src={list.logo} alt="" />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <div className="shine">About Me</div>
          <h1 className="title">
            I am <span className="color__primary">Harsh Tripathi</span>
          </h1>
          <div className="text__muted description">
            I am a dedicated and versatile software developer with over 3 years
            of experience specializing in full-stack web development and
            creating scalable, user-friendly applications. Proficient in React,
            Node.js, and MongoDB, I have successfully delivered projects,
            including a freelancing hospital management app and an eCommerce
            platform with PayPal integration. My contributions to open-source
            programs like Hacktoberfest and Girlscript Summer of Code highlight
            my passion for collaboration and innovation.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

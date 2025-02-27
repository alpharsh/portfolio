import React from "react";
import "./about.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

function About() {
  return (
    <section id="about" className="!mx-3">
      <div className="!pt-1 !md:pt-9 !pb-0 !md:pb-6 !gap-10 card section__wrapper">
        <Hole />
        <div className="column left-column">
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
          <h1 className="title text-2xl">
            I am <span className="color__primary">Harsh Tripathi</span>
          </h1>
          <div className="text__muted description">
            I am a dedicated and versatile software developer with over a year
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

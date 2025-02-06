import React, { useEffect, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./facts.css";
import Odometer from "react-odometerjs";

function Facts() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => { 
    const timeoutID = setTimeout(() => {
        setExperience(5);
        setProjects(20);
        setClients(24);
    }, 1000)

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <div className="title">+</div>
        </div>
        <p className="label">Years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <div className="title">+</div>
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <div className="title">+</div>
        </div>
        <p className="label">Satisfied Clients</p>
      </div>
    </div>
  );
}

export default Facts;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { schoolLogo, unitedLogo } from "../../assets";

function Education() {
  return (
    <section id="edu" className=" text-white py-10">
      <div className="section__wrapper !pl-0 !pr-0">
        <div className="section__header">
          <h2 className="shine">Education</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#1a1a2e",
              color: "#fff",
              boxShadow: "var(--border-shadow), 0 0 30px rgba(var(--color-primary-rgb), .03)",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1a1a2e" }}
            date="2022 - 2026"
            iconStyle={{ background: "#0f3460", color: "#fff" }}
            icon={<img src={unitedLogo} alt="United Logo" className="w-full h-full rounded-full" />}
          >
            <h3 className="text-xl font-semibold text-blue-300">
              Bachelor's of Technology (CSE)
            </h3>
            <h4 className="text-md font-medium text-gray-300">
              United College of Engineering & Research, Prayagraj
            </h4>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              earum consectetur et error nam doloremque unde voluptatibus
              incidunt reprehenderit assumenda.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2021"
            iconStyle={{ background: "#0f3460", color: "#fff" }}
            icon={<img src={schoolLogo} alt="School Logo" className="w-full h-full rounded-full" />}
            contentStyle={{
              background: "#1a1a2e",
              color: "#fff",
              boxShadow: "var(--border-shadow), 0 0 30px rgba(var(--color-primary-rgb), .03)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-300">
              Intermediate, Science
            </h3>
            <h4 className="text-md font-medium text-gray-300">
              Green Fields Academy, Prayagraj
            </h4>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quisquam labore doloremque dolorum rerum voluptas!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { cbsLogo, gdgLogo } from "../../assets";

function Experience() {
  return (
    <section id="experience" className=" text-white py-10">
      <div className="section__wrapper !pl-0 !pr-0 !overflow-hidden">
        <div className="section__header">
          <h2 className="shine">Experience</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#212121",
              color: "#fff",
              boxShadow:
                "var(--border-shadow), 0 0 30px rgba(var(--color-primary-rgb), .03)",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1a1a2e" }}
            date="July 2024 - Present"
            iconStyle={{ background: "#0f3460", color: "#fff" }}
            icon={
              <img
                src={cbsLogo}
                alt="United Logo"
                className="w-full h-full rounded-full"
              />
            }
          >
            <h3 className="text-xl font-semibold text-blue-300">
              Full-Stack Developer (Intern)
            </h3>
            <h4 className="text-md font-medium text-gray-300">
              Curious Business Solutions, Bengaluru
            </h4>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              earum consectetur et error nam doloremque unde voluptatibus
              incidunt reprehenderit assumenda.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2023 - Jan 2025"
            iconStyle={{ background: "#0f3460", color: "#fff" }}
            icon={
              <img
                src={gdgLogo}
                alt="School Logo"
                className="w-full h-full rounded-full"
              />
            }
            contentStyle={{
              background: "#212121",
              color: "#fff",
              boxShadow:
                "var(--border-shadow), 0 0 30px rgba(var(--color-primary-rgb), .03)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-300">
              Core Team Member
            </h3>
            <h4 className="text-md font-medium text-gray-300">
              Google Developer Group, Prayagraj
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

export default Experience;

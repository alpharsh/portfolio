import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({
  title,
  category,
  image,
  description,
  stacks,
  demoLink,
}) {
  return (
    <div className="card project__card relative shadow-[var(--card-primary-shadow)] clip-polygon">
      <div className="bg-[var(--color-ui-2)] clip-polygon">
        <div className="h-[200px] bg-[var(--color-ui-2)] cursor-pointer relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt=""
            className="transition-all duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="!mt-3 relative">
        {/* Project Info */}
        <div>
          <div>
            <h3 className="text-[15px]">{title}</h3>
            <p className="text__muted text-xs">{category}</p>
          </div>
        </div>
        {/* Description */}
        <p className="text__muted text-sm overflow-hidden !my-3">
          {description}
        </p>

        {/* Stacks */}
        <div className="flex items-center justify-between mb-4 !mr-7">
          <div className="flex items-center gap-2">
            {stacks.map((stack, index) => (
              <div
                className="!p-[5px] w-[30px] h-[30px] bg-[rgba(var(--color-primary-rgb),0.2)] shadow-[var(--card-primary-shadow)] rounded-[5px] transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer clip-polygon"
                key={index}
              >
                <img src={stack.logo} className="object-contain " alt="" />
              </div>
            ))}
          </div>
          {/* Demo Link */}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition flex  gap-2"
            >
              <HiOutlineExternalLink className="text-2xl  hover:text-blue-400 opacity-60" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

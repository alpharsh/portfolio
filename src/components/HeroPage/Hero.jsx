import React from "react";
import "./hero.css";
import HeaderTitle from "../../ui/HeaderTitle";
import Codeblock from "../../ui/CodeBlock/Codeblock";
import { profile1, profile2 } from "../../assets";
import Facts from "../../ui/Facts/Facts";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
const developer = {
  firstName: "Harsh",
  lastName: "Tripathi",
  address: "Prayagraj, India",
  hobby: repeat = () => {
  //eat()
  //sleep()
  //code()
  //repeat()
 }
}
`;

function Hero() {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile2} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <Codeblock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              Passionate Web Developer crafting seamless digital experiences
              with modern technologies. Turning ideas into responsive,
              user-friendly designs one line of code at a time.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

import React from "react";
import "./contact.css";
import { contactInfo } from "../../data";
import Pyramid from "../../ui/Pyramid";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk about <span className="shine">Great Project!</span>{" "}
              together
            </h3>
            <div className="contact__options">
              {contactInfo.map((contact, index) => (
                <article className="option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a href={contact.link} target="_blank" className="flex__center btn">
                      <span className="btn__shine text">Message</span>
                      <div
                        className="icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form>
            <input
              type="text"
              placeholder="Your Full Name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
            ></textarea>
            <button type="button" className="btn flex__center submit__btn">
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

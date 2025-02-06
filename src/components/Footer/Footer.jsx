import React from "react";
import "./footer.css";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";

function Footer() {
  return (
    <>
      <footer>
        <div className="!pb-0 section__wrapper">
          <SocialHandles />
          <div className="copyright">
            <p className="text__muted">
              Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text__muted">Build with ❤️ by</p>
          </div>
        </div>
      </footer>

      {/* Text with 30% bottom cropping */}
      <div className="relative overflow-hidden">
        <h1 className="text-[100px] md:text-[200px] !font-[900] leading-tight bg-[#333333] text-transparent text-center opacity-40 bg-clip-text transform translate-y-[35%]">
          Harsh <span className="hidden md:inline-block">Tripathi</span>
        </h1>
      </div>
    </>
  );
}

export default Footer;

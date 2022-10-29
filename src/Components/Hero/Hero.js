import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../About/About";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  return (
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>

            <h1>Hi, I'm Bhrugu Prasad</h1>
            <h5>I'm a Full Stack Web Developer</h5>
            <p style={{ fontWeight: "500" }}>  who enjoys coding and solving problems.As an aspiring Full Stack Web
            developer, I like the impact it creates on the world. <br></br>One
            of my strongest skills is creativity and it helps me a lot in web
            designs. I have created various end to end website clone using{" "}
            <strong>MERN stack</strong></p>
            
            <div className="download">
              <Link
                to="/files/Bhrugu.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Download Resume
              </Link>
            </div>
            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="Remy Sharp"
              src="/images/avatar.jpg"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default Hero;

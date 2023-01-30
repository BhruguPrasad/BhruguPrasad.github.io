import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const [isPage, setIsPage] = useState("hero");
  return (
    <div className="navMain">
      <div
        onClick={() => {
          setIsPage("hero");
        }}
        style={isPage === "hero" ? { color: "black" } : null}
      >
        <Link to="/">Bhrugu Prasad </Link>
      </div>
      <div>
      <div
          onClick={() => {
            setIsPage("home");
          }}
          style={isPage === "home" ? { color: "black" } : null}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}
        >
          <Link to="/">About</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
          <Link to="/projects">Projects</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "black" } : null}
        >
          <Link to="/skills">Skills</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("contact");
          }}
          style={isPage === "contact" ? { color: "black" } : null}
        >
          <Link to="/about-me">Contact</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("resume");
          }}
          style={isPage === "resume" ? { color: "black" } : null}
        >
         {/* <Link
              to="/files/Bhrugu.pdf"
              target="_blank"
              download
              > */}
                {/* Resume */}
          <a download href="https://drive.google.com/file/d/1swAoYOJ_ZLSxnQ2i4MFlm086g4MwhlGM/view" target="_blank">Resume</a>
              {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

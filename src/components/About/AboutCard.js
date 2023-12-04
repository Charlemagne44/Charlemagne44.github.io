import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCamera, AiFillGithub } from "react-icons/ai";
import { IoTelescope } from "react-icons/io5";
import { GiHandSaw, GiSawClaw } from "react-icons/gi";
import { MdRowing } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Collin Hay </span>
            from <span className="purple"> Boston, Massachusetts.</span>
            <br /> I am a full time backend software engineer for HPC and edge
            servers. I have a bachelors degree in Computer Science from the
            University of Delaware.
            <br />
            I am highly enthusiastic about developing and training!
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <AiFillGithub /> Developing
            </li>
            <li className="about-activity">
              <AiFillCamera /> Photography
            </li>
            <li className="about-activity">
              <GiHandSaw /> Woodworking
            </li>
            <li className="about-activity">
              <IoTelescope /> Astronomy
            </li>
            <li className="about-activity">
              <MdRowing /> Rowing
            </li>
            <li className="about-activity">
              <FaRunning /> Running
            </li>
            <li className="about-activity">
              <GiWeightLiftingUp /> Lifting
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

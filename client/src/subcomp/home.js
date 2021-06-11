import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import profile from "../images/profile.jpg";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/github.png"
import Link from '@material-ui/core/Link';

import "../App.css";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  maxWidth: 450,
  margin: "1vh auto",
  // style: { width: '5rem', height: '5rem' },
};

export default function Home() {
  const [fade, setFade] = useState(true);
  const counter = useRef(0);
  const [index, setIndex] = useState(0);
  const descriptionArray = [
    "SFU Business",
    "Aspiring Software Developer",
    "BCIT Co-op",
    "Voted Best Developer By My Mom",
  ];

  useEffect(() => {
    const looper = setInterval(() => {
      counter.current++;
      if (counter.current === descriptionArray.length) {
        counter.current = 0;
      }
      setIndex(counter.current);
    }, 2000);
    return () => {
      clearInterval(looper);
      //   setFade(false)
    };
  }, [index]);

  return (
    <>
      <Avatar src={profile} alt="profilePic" id="profile" />
      <Typography className="title" align="center" variant="h3">
        Raymond Wong
      </Typography>
      <Typography variant="h6" component="h3" align="center">
        {descriptionArray[index]}
      </Typography>
      <div id="linkContainer">
        <a href="https://www.linkedin.com/in/rwong97/" target="\_blank" className="linkResize">
          <Avatar variant="square" src={linkedin} alt="linkedin" className="iconButton" id="linkedin"/>
        </a>
        <a href="https://github.com/ray165" target="\_blank" className="linkResize">
          <Avatar  src={github} alt="github" className="iconButton" id="github"/>
        </a>
      </div>
      <Typography variant="h6" component="h4" align="center" id='portfolio'>
        portfolio
      </Typography>
      <Box className="card" align="center" borderRadius="5%" {...defaultProps}>
        <div className="cardContent">
          <Typography><a href="http://ec2-34-211-120-230.us-west-2.compute.amazonaws.com:8001/">Wecycle (Fullstack App)</a></Typography>
          <Typography>
            <p>
              A recycling app connecting community members to help others pick
              up their recycles.
            </p>
            <p>Built with:</p>
            <ul>
              <li>JavaScript and React (MERN Stack) </li>
              <li>MongoDB </li>
              <li>Hosted with AWS and EC2</li>
            </ul>
          </Typography>
        </div>
      </Box>
      <Box className="card" align="center" borderRadius="5%" {...defaultProps}>
        <div className="cardContent">
          <Typography><a href="https://streamlinedapi.web.app/main.html">Streamlined (Fullstack App)</a></Typography>
          <Typography>
            <p>
              A project mangement app to track progress. Breaks down a project into tasks and users can leave comments like Trello. 
            </p>
            <p>Built with:</p>
            <ul>
              <li>JavaScript and Bootstrap </li>
              <li>FireStore databse </li>
              <li>Hosted with Firebase</li>
            </ul>
          </Typography>
        </div>
      </Box>
      <Box className="card" align="center" borderRadius="5%" {...defaultProps}>
        <div className="cardContent">
          <Typography><a href="https://github.com/ray165/Ravberry">Hackathon: Hack The Break</a></Typography>
          <Typography>
            <p>
              Watermarking app for pictures. I built the front-end with Bootstrap and allowed for user input such as checkboxes and image upload. The data is sent to the back end which is handled with Python and Flask.
            </p>
            <p>Built with:</p>
            <ul>
              <li>HTML/ CSS </li>
              <li>Bootstrap</li>
            </ul>
          </Typography>
        </div>
      </Box>
    </>
  );
}

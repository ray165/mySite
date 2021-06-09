import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import profile from "../images/profile.jpg";
import linkedin from "../images/linkedin-icon.png";
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
      <a href="https://www.linkedin.com/in/rwong97/" target="\_blank" id="linkResize">
        <Avatar variant="square" src={linkedin} alt="linkedin" id="linkedin"/>
      </a>
      <Box className="card" align="center" borderRadius="5%" {...defaultProps}>
        <div className="cardContent">
          <Typography>Wecycle (Fullstack App)</Typography>
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
      <Box className="card" borderRadius="5%" {...defaultProps}>
        <div className="cardContent">
          <Typography>Wecycle (Fullstack App)</Typography>
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
    </>
  );
}

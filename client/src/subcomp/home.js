import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import '../App.css'


const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  maxWidth: 450,
  // style: { width: '5rem', height: '5rem' },
};


export default function Home() {
  const [fade, setFade] = useState(true);
  const counter = useRef(0);
  const [index, setIndex] = useState(0);
  const descriptionArray = ["SFU Business", "Aspiring Software Developer", "BCIT Co-op", "Voted Best Developer By My Mom"]

  useEffect(() => {
      
      const looper = setInterval(() => {
          counter.current++
          if (counter.current === descriptionArray.length) {
            counter.current = 0
          }
          setIndex(counter.current)
      }, 2000)
      return () => {
          clearInterval(looper)
        //   setFade(false)
      }
  }, [index])

  return (
    <>
      <Typography className="title" variant="h2" component="h1">
        Raymond Wong
      </Typography>
      <Typography >
        {descriptionArray[index]}
      </Typography>
      <Box borderRadius="5%" {...defaultProps}>
        <Typography >Wecycle (Fullstack App)</Typography>
        <Typography>
          <p>
            A recycling app connecting community members to help others pick up their recycles.
          </p>
          <p>Built with:</p>
          <ul>
            <li>JavaScript and React (MERN Stack) </li>
            <li>MongoDB </li>
            <li>Hosted with AWS and EC2</li>
          </ul>
        </Typography>
      </Box>
      <Box borderRadius="5%" {...defaultProps}>
        <Typography >Wecycle (Fullstack App)</Typography>
        <Typography>
          <p>
            A recycling app connecting community members to help others pick up their recycles.
          </p>
          <p>Built with:</p>
          <ul>
            <li>JavaScript and React (MERN Stack) </li>
            <li>MongoDB </li>
            <li>Hosted with AWS and EC2</li>
          </ul>
        </Typography>
      </Box>

    </>
  );
}

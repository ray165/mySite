import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import './App.css'

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

    </>
  );
}

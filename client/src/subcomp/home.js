import React, { useState, useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const [fade, setFade] = useState(true)
    const text = useRef('')
    

    useEffect(() => {
        var descriptionArray = ["SFU Business", "Aspiring Software Developer", "BCIT Programming", "Voted Best Developer By My Mom"]
        let counter = 0

        const looper = setInterval(function(){
            text.current = descriptionArray[counter]
            counter++;
            if (counter === descriptionArray.length) {
                counter = 0;
            }
        }, 3500)
        return () => {
            clearInterval(looper)
            setFade(false)
        }
    }, [fade])

    return(
        <>
            <Typography variant="h2" component="h1">Raymond Wong</Typography>
            <Typography>{text.current}</Typography>
        </>
    )
}
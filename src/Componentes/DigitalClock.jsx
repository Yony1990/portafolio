import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}`
    }

    const padZero = (number) => {
        return (number < 10 ? '0' : '') + number;
    }


  return (
    <>
      
        <span>{formatTime()}</span>
      
    </>
  )
}

export default DigitalClock
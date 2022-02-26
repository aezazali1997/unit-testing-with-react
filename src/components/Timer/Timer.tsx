
import React,{useState} from 'react'
import './Timer.css'
import {TimerButton} from '../TimerButton/TimerButton'
let myInterval:ReturnType<typeof setTimeout>;
export const Timer = () => {
  const [minutes,setMinutes]=useState(25);
  const [seconds,setSeconds]=useState(0);
  const [isOn,setIsOn]=useState(false);
  const startTimer = ()=>{
  if (isOn === true) {
      return;
    }
    myInterval = setInterval(() => {
        console.log(
          "minutes",minutes,"seconds",seconds
        );
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1)
          setSeconds(59);
        }
      }
    }, 1000);
   setIsOn(true)
  }
  const stopTimer = () => {
   
   clearInterval(myInterval)
   setIsOn(false);

  }
  const resetTimer = () => {
    stopTimer();
    setMinutes(25);
    setSeconds(0);

  }
  
  return (
    <div className='timer-container'>
    <div className="time-display">
    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
    <div className="timer-button-container">
    <TimerButton buttonAction={startTimer} buttonValue={"Start"} />
    <TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
    <TimerButton  buttonAction={resetTimer} buttonValue={"Reset"}/>
    </div>
    </div>
  )
}
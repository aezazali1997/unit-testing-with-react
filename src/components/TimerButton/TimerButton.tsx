import React from 'react'
import './TimerButton.css'
type Props = {
  buttonAction:()=>void,
  buttonValue:string,
}
export const TimerButton:React.FC<Props> = ({buttonAction,buttonValue}) => {
  return (
    <div className='button-container' onClick={()=>buttonAction()}>
    <p className="button-value">{buttonValue}</p>
    </div>
  )
}

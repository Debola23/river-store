import {  useEffect, useRef, useState } from 'react'
import Style from './Timer.module.css'


export const Timer = () => {

  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")

  let interval = useRef();

  const startTimer = () => {
    
    const countdownDate = new Date("May 20 2025 00:00:00 ").getTime();
    
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days =Math.floor(distance / (1000 *60 * 60 *24));
      const hours =Math.floor((distance % (1000 *60 * 60 *24) / (1000 *60 *60)));
      const minutes =Math.floor((distance % (1000 *60 * 60)) / (1000 *60));
      const seconds =Math.floor((distance % (1000 *60 )) / 1000);

      if (distance < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    },1000)
  }
  
  useEffect(() => {
    startTimer();
      return() => {
        clearInterval(interval.current);
      }
  })
 

  return (
    
    <div className={Style.Timer}>
      <section className={Style.cdI}>
        <div className={Style.bar}></div>
        <div className={Style.barD}>Shop now</div>
      </section>
      <div className={Style.timeBox}>
        <div className={Style.cd}>Flash Sales</div>
        <section className={Style.cdBox}>
          <div className={Style.cb}>
            <p>{timerDays}</p>
            <span className={Style.word}>Days</span>
          </div>
          <span>:</span>
          <div className={Style.cb}>
            <p>{timerHours}</p>
            <span className={Style.word}>Hours</span>
          </div>
          <span>:</span>
          <div className={Style.cb}>
            <p>{timerMinutes}</p>
            <span className={Style.word}>Minutes</span>
          </div>
          <span>:</span>
          <div className={Style.cb}>
            <p>{timerSeconds}</p>
            <span className={Style.word}>Seconds</span>
          </div>
        </section>
      </div>
  </div>

    
  )
}


import React ,{ useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function DigitalClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  function formatTime() {
    let getHours = time.getHours();
    const getMinutes = time.getMinutes();
    const getSeconds = time.getSeconds();
    const meridiem = getHours >= 12 ? 'PM' : 'AM';

    getHours = getHours % 12 || 12;

    return `${padZero(getHours)}:${padZero(getMinutes)}:${padZero(getSeconds)} ${meridiem}`
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  return (
    <div className="clock-cantainer">
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock

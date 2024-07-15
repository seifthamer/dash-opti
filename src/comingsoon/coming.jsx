import React, { useState, useEffect } from 'react';
import './coming.css';
import Saly from '../image/Saly.png';



const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();

  let timeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
      seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
    };
  }

  return timeLeft;
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft('2024-01-21'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft('2024-01-21'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="coming-soon">
      <div className="content">
        <div className="left">
          <h6>COMING SOON</h6>
          <p>We are going to<br /> launch our website <br />very soon. Stay tuned</p>

        <div className="countdown">
  <div className="time-unit days">
    <span>{timeLeft.days}</span>
    <span className="label">Days</span>
  </div>

  <div className="time-unit hours">
    <span>{timeLeft.hours}</span>
    <span className="label">Hours</span>
  </div>

  <div className="time-unit minutes">
    <span>{timeLeft.minutes}</span>
    <span className="label">Mins</span>
  </div>

  <div className="time-unit seconds">
    <span>{timeLeft.seconds}</span>
    <span className="label">Sec</span>
  </div>
</div>
        </div>

        <div className="right">
          <img className='saly' src={Saly} alt="1" />
          <div className="card">
            <h2>Get notified when we launch</h2>
            <form className="notify-form">
              <input type="email" placeholder="Email address" required />
              <button type="submit">Notify Me</button>
            </form>
            <p className="disclaimer">*Don't worry we will not spam you 😊</p>
          </div>
        </div>
      </div>






    </section>











  );
};

export default ComingSoon;

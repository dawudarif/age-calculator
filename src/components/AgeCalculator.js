import { useEffect, useState } from 'react';

const AgeCalculator = ({ birth, clear }) => {
  const [age, setAge] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [days, setDays] = useState(0);

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    const diffTime = today - birthDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const years = diffDays / 365.25;
    const seconds = Math.floor(diffTime / 1000);
    setSeconds(seconds);
    const minutes = Math.floor(seconds / 60);
    setMinutes(minutes);
    const hours = Math.floor(minutes / 60);
    setHours(hours);
    const days = Math.floor(hours / 24);
    setDays(days);
    return years.toFixed(9);
  };

  useEffect(() => {
    if (birth !== 0) {
      const interval = setInterval(() => {
        const formattedAge = calculateAge(birth);
        setAge(formattedAge);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [birth]);

  if (seconds === 0) return null;

  return (
    <section className='age-parent flex'>
      <div className='parent'>
        <h6 onDoubleClick={() => (clear ? clear(0) : {})}>age</h6>
        <h1 className='age'> {age}</h1>
      </div>
      <div className='parent'>
        <h6>seconds</h6>
        <h1>{seconds}</h1>
      </div>
      <div className='parent'>
        <h6>minutes</h6>
        <h1>{minutes}</h1>
      </div>
      <div className='parent'>
        <h6>hours</h6>
        <h1>{hours}</h1>
      </div>
      <div className='parent '>
        <h6>days</h6>
        <h1>{days}</h1>
      </div>
    </section>
  );
};

export default AgeCalculator;

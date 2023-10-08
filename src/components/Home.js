import React, { useState } from 'react';
import AgeCalculator from './AgeCalculator';

const Home = () => {
  const [birth, setBirth] = useState(0);
  const [ageCounter, setAgeCounter] = useState(false);

  return (
    <>
      {ageCounter ? (
        <section className='main-parent flex'>
          <AgeCalculator birth={birth} clear={setAgeCounter} />
        </section>
      ) : (
        <section className='input flex'>
          <input
            type='date'
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <button className='check' onClick={() => setAgeCounter(true)}>
            check
          </button>
        </section>
      )}
    </>
  );
};

export default Home;

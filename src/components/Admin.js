import React from 'react';
import AgeCalculator from './AgeCalculator';

const Admin = () => {
  return (
    <section className='main-parent flex'>
      <AgeCalculator birth={'2003-03-12'} />
    </section>
  );
};

export default Admin;

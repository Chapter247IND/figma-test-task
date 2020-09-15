import React, { useEffect } from 'react';
import email from '../../../assets/img/done.png';
import '../index.css';

const Done = (props) => {
  useEffect(() => {
    let number = props.infoData.numValue;
    delete props.infoData.expYear;
    delete props.infoData.expMonth;
    delete props.infoData.numValue;

    const data = {
      ...props.infoData,
      number,
    };
    localStorage.setItem('data', JSON.stringify(data));
    // eslint-disable-next-line
  }, []);
  return (
    <div className={'email-section'}>
      <h2 className={'email-title'}>Done Yeah</h2>
      <h6 className={'email-sub-title'}> You’re done here!</h6>
      <div className='email-img'>
        <img src={email} alt={'email'} />
      </div>
    </div>
    
  );
};

export default Done;

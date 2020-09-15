import React from 'react';
import email from '../../../assets/img/emailVerification.svg';
import { Button } from 'react-bootstrap';

import '../index.css';
import EmailVerification from './emailVerification';

const EmailSent = (props) => {
  const [isSubmit, setisSubmit] = React.useState(false);

  const { handleStepper } = props;
  return (
    <>
      {!isSubmit ? (
        <>
          <div className={'email-section'}>
            <h2 className={'email-title'}>Done</h2>
            <h6 className={'email-sub-title'}>Its Done</h6>
            <p className={'email-msg-text'}>
              Form is completed! <span>Please find your entry soon</span>
            </p>
            <div className='email-img'>
              <img src={email} alt={'email'} />
            </div>
            <p className={'thankyou-text'}>Thank You!</p>
            <Button
              variant='link'
              className='btn-theme'
              onClick={() => setisSubmit(true)}
            >
              Continue
            </Button>
          </div>
        </>
      ) : (
        <EmailVerification handleStepper={() => handleStepper('email')} />
      )}
    </>
  );
};

export default EmailSent;

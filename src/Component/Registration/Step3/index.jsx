import React from 'react';
import { Form } from 'react-bootstrap';
// import { AppRoutes } from '../../../config';
import { Link } from 'react-router-dom';
// import UserContext from '../../../routes/index';
const Step3Component = (props) => {
  const { handleSelectChange, infoData } = props;
  const { duration } = infoData;
  return (
    <>
      <Form className='resgistration-form'>
        <div className='form-header'>
          <h2 className='form-title'>
            <span>Select the Duration</span>
          </h2>
        </div>
        <Form.Group controlId='formBasicEmail'>
          {/* <Form.Label>Email Address</Form.Label> */}
          <Form.Control
            as='select'
            value={duration}
            onChange={handleSelectChange}
            name='duration'
          >
            <option value={'Daily'}>{'Daily'} </option>;
            <option value={'Weekly'}>{'Weekly'} </option>;
            <option value={'Monthly'}>{'Monthly'} </option>;
          </Form.Control>
        </Form.Group>
        <p className='daily-text'>
          Please select one one from these to check your cyccle of the
          recurecnce.
        </p>
        <Link
          to='/RegistrationChild'
          className='theme-link'
          onClick={() => props.history.push('/RegistrationChild')}
        >
          Questions?
        </Link>
      </Form>
      <div className='right-box'>
        <div className='daily-rectangle'>
          <div className='daily-head'>{duration}</div>
          <div className='daily-list'>
            <span>Water:</span>
            <span>1L</span>
          </div>
          <div className='daily-list'>
            <span>Honey:</span>
            <span>200ml</span>
          </div>
          <div className='daily-list total'>
            <span>Total:</span>
            <span>1.2L</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step3Component;

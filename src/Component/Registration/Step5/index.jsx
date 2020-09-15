import React from 'react';
import { Form } from 'react-bootstrap';
// import MaskedInput from 'react-maskedinput';
// import CountryWithCode from '../../../Common/CountryWithCode.json';
import '../index.css';

const Step5Component = (props) => {
  const { error, handleChange } = props;
  const { password, email ,name} = props.infoData;
  return (
    
      
      <Form className='resgistration-form'>
        <div className='form-header'>
          <h2 className='form-title'>
            <span>Just on the Show</span>
          </h2>
        </div>
        <Form.Group controlId='formBasicNumber'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            name='name'
            readOnly
            value={name}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            readOnly
            value={email}
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            name='password'
            className={error && error.password ? 'is-invalid' : ''}
            value={password}
            onChange={handleChange}
          />
          {error && error.password ? (
            <span className='error-text'>{error.password}</span>
          ) : null}
        </Form.Group>
      </Form>
    
  );
};
export default Step5Component;

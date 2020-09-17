import React from 'react';
import { Form } from 'react-bootstrap';
import MaskedInput from 'react-maskedinput';
import CountryWithCode from '../../../Common/CountryWithCode.json';
import '../index.css';

const Step1Component = (props) => {
  const { handleSelectChange, error, handleChange } = props;
  const { country, /* countryCode ,*/ numValue, name } = props.infoData;
  return (
    <Form className='resgistration-form'>
      <div className='form-header'>
        <h2 className='form-title'>
          <span>Contact Title</span>
        </h2>
        <p className='form-subtitle'>This is Sub Registration form</p>
      </div>
      <Form.Group controlId='formBasicNumber'>
        <Form.Label>Country</Form.Label>
        <Form.Control
          as='select'
          value={country}
          name='country'
          onChange={handleSelectChange}
        >
          {CountryWithCode.map((list, i) => {
            return (
              <option value={list.name} key={i}>
                {list.name}{' '}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='formBasicNumber'>
        <Form.Label>Number</Form.Label>
        <MaskedInput
          mask='1-1111-1111'
          name='numValue'
          placeholder='0-0000-0000'
          size='9'
          value={numValue}
          className={
            error && error.numValue ? 'form-control is-invalid' : 'form-control'
          }
          onChange={handleChange}
        />
        {error && error.numValue ? (
          <span className='error-text'>{error.numValue}</span>
        ) : null}
      </Form.Group>

      {numValue.replace(/-/g, '').replace(/_/g, '').length > 0 &&
      !error.numValue ? (
        <Form.Group controlId='formBasicNumber'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            name='name'
            // readOnly
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
      ) : null}
    </Form>
  );
};
export default Step1Component;

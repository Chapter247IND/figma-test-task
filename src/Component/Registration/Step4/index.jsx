import React, { useState } from 'react';
import { Form, Col, Row, Alert } from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
import * as classnames from 'classnames';
import '../index.css';
import infoicon from '../../../assets/img/info-icon.svg';

const Step4Component = (props) => {
  const { handleChange, error, handleExpireDate } = props;
  const { cardNumber, cvv, expireDate, duration, name, promo } = props.infoData;
  const { expireMonthError, expireYearError } = error;
  const [show, setShow] = useState(true);
  const [showPromo, setShowPromo] = useState(false);
  return (
    <>
      <Form className='resgistration-form'>
        <div className='form-header'>
          <h2 className='form-title'>
            <span>Method Prefer</span>
          </h2>
        </div>

        <Form.Group controlId='formBasicNumber'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            readOnly
            placeholder={'Joe Doe'}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Número de tarjeta</Form.Label>
          <MaskedInput
            id='basic-url'
            aria-describedby='basic-addon3'
            mask={[
              /[0-9]/,
              /\d/,
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            className={classnames('form-control is-visa', {
              'is-invalid': error.cardNumber,
            })}
            placeholder='Enter card number'
            value={cardNumber}
            name='cardNumber'
            onChange={handleChange}
          />
          {error.cardNumber ? (
            <span className='error-text'>{error.cardNumber} </span>
          ) : null}
        </Form.Group>

        <Row>
          <Col md='6'>
            <Form.Group controlId='formBasicNumber'>
              <Form.Label> Fecha de expiración </Form.Label>
              <MaskedInput
                mask={[/[0-9]/, /\d/, '/', /\d/, /\d/]}
                className={classnames('form-control', {
                  'is-invalid':
                    error.expireDate || expireYearError || expireMonthError,
                })}
                placeholder='mm/aa'
                id='expireDate'
                name='expireDate'
                value={expireDate}
                onChange={handleExpireDate}
              />
              {error.expireDate ? (
                <span className='error-text'>{error.expireDate} </span>
              ) : null}
              {error.expireYearError ? (
                <span className='error-text'>{error.expireYearError} </span>
              ) : null}
              {error.expireMonthError ? (
                <span className='error-text'>{error.expireMonthError} </span>
              ) : null}
            </Form.Group>
          </Col>
          <Col md='6'>
            <Form.Group>
              <Form.Label htmlFor='cvv'>
                {' '}
                CVV
                <span className='info-img'>
                  <img src={infoicon} alt='info icon' />
                </span>
              </Form.Label>
              <div className={'input-block'}>
                <MaskedInput
                  mask={[/[0-9]/, /\d/, /\d/]}
                  className={classnames('form-control', {
                    'is-invalid': error.cvv,
                  })}
                  placeholder='Enter CVV'
                  id='cvv'
                  name='cvv'
                  value={cvv}
                  onChange={handleChange}
                />

                {error && error.cvv ? (
                  <span className='error-text'>{error.cvv} </span>
                ) : null}
              </div>
            </Form.Group>
          </Col>
          {showPromo ? (
            <Col md='6'>
              <Form.Group>
                <Form.Label>Promo code</Form.Label>
                <Form.Control
                  type='text'
                  value={promo}
                  name={'promo'}
                  onChange={handleChange}
                  placeholder={'PROMO 24'}
                />
              </Form.Group>
            </Col>
          ) : null}
        </Row>
        {!showPromo ? (
          <div>
            <span className='theme-link' onClick={() => setShowPromo(true)}>
              PROMO?
            </span>
          </div>
        ) : null}
      </Form>

      <div className='right-box stp4-box'>
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
        {error &&
        (error.cvv ||
          error.expireDate ||
          error.expireYearError ||
          error.expireMonthError ||
          error.cardNumber) ? (
          <Alert
            show={show}
            variant='danger'
            onClose={() => setShow(false)}
            dismissible
            className='custom-alert-box'
          >
            <> Please resolve the error</>
          </Alert>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default Step4Component;

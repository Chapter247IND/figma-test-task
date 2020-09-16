import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import addIcon from '../../../assets/img/add.svg';
import user from '../../../assets/img/perfil.svg';
import { Link } from 'react-router-dom';
const Step3Component = (props) => {
  useEffect(() => {
    const data = {
      ...props.infoData,
    };
    localStorage.setItem('contactData', JSON.stringify(data));
    // eslint-disable-next-line
  }, []);
  const { infoData } = props;
  // console.log('durationduration', duration);
  return (
    <>
      <Form className='resgistration-form'>
        <div className='form-header'>
          <h2 className='form-title'>
            <span>Confirmation the Details</span>
          </h2>
          <p className='form-subtitle'>
            This is Sub Registration form and if you want to add more Click to
            the Add more
          </p>
        </div>
        <Row>
          <img src={user} alt='user' />
          &nbsp;
          {infoData.name}
        </Row>
        <Row>
          <Link to='/RegistrationformChild'>
            <img src={addIcon} alt='add' />
            &nbsp; Add More
          </Link>
        </Row>
      </Form>
    </>
  );
};
export default Step3Component;

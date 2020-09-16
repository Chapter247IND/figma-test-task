import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import addIcon from '../../../assets/img/add.svg';
import user from '../../../assets/img/perfil.svg';
const Step3Component = (props) => {
  useEffect(() => {
    let prevData = JSON.parse(localStorage.getItem('contactData'));
    console.log('prevData343434', prevData);
    // if(prevData)
    let data = [];
    if (prevData) {
      data = [prevData, props.infoData];
    } else {
      data = [props.infoData];
    }
    localStorage.setItem('contactData', JSON.stringify(data));
    // eslint-disable-next-line
  }, []);
  const { infoData, setcurrentStep, setinfoData } = props;
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
        <Row className = "mt-2 cursor-pointer" >
          <span
            onClick={() => {
              setcurrentStep(0);
              setinfoData({
                numValue: '985476238',
                name: 'Joe Doe',
                email: '',
                contact: '',
                country: 'India',
              });
            }}
          >
            {/* // set step 0 */}
            <img src={addIcon} alt='add' />
            &nbsp; Add More
          </span>
        </Row>
      </Form>
    </>
  );
};
export default Step3Component;

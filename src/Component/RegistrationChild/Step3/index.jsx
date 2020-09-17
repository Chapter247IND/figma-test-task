import React from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import addIcon from '../../../assets/img/add.svg';
import user from '../../../assets/img/perfil.svg';
const Step3Component = (props) => {
  const [prevData, setprevData] = React.useState([]);

  useEffect(() => {
    let prevData = JSON.parse(localStorage.getItem('contactData'));
    let prevList = [props.infoData];
    console.log('prevData343434', prevData);
    if (prevData && prevData.length) {
      prevData.map((key) => {
        return prevList.push(key);
      });
    }
    setprevData(prevList);
    let data = [];
    let number = props.infoData.numValue;
    delete props.infoData.numValue;
    if (prevData) {
      data = [prevData, { ...props.infoData, number }];
    } else {
      data = [props.infoData];
    }

    if (data && data.length) {
      localStorage.setItem('contactData', JSON.stringify(data));
    }
    // eslint-disable-next-line
  }, []);
  const { setcurrentStep, setinfoData } = props;
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
        {prevData && prevData.length
          ? prevData.map((list) => {
              return (
                <div className='user-list '>
                  {' '}
                  <img src={user} alt='user' />
                  {list.name}
                </div>
              );
            })
          : null}
        <div className='mt-4 cursor-pointer user-list '>
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
            <img src={addIcon} alt='add' />
            Add More
          </span>
        </div>
      </Form>
    </>
  );
};
export default Step3Component;

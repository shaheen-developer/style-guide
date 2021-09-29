import React from 'react';
import { Typography, Button, Input, Form, DatePicker, TimePicker, Select, Cascader, InputNumber,Checkbox } from 'antd';

import { Typography1 } from './Typography1';
import {
  CaretRightOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import SBheader from './SBheader';
const { Title, Text } = Typography;
/***************************form  */
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
/***end */
export const General = () => {
  return (
    <div className='home'>
      <h1>Team</h1>
    </div>
  );
};


export const TypographyRS = () => {
  return (
    <>
      <Typography1 />
    </>
  );
};

export const ButtonRC = () => {
  return (
    <>
      <SBheader sbtitle="Button" />
      <div className="container">
        <div className="center">
          <Button type="primary">
            Primary Button
          </Button>
          <Button>Default Button</Button>
        </div>

      </div>
    </>
  );
};
export const Icons = () => {
  return (
    <>
      <SBheader sbtitle="Icon" />
      <div className="container">
        <div className="center">
          <CaretRightOutlined />
        </div>
      </div>
    </>
  );
};
export const InputRC = () => {
  return (
    <>
  <SBheader sbtitle="Input" />    
    <div className="container">
        <div className="center">
          <Form {...formItemLayout}>
          <Form.Item>
              <Input placeholder="Basic usage" />
            </Form.Item>
            <label style={{fontSize:10}}>LABEL</label> 
            <Form.Item>
              <Input placeholder="Basic usage" />
            </Form.Item>
            <label style={{fontSize:10}}>LABEL</label>
            <Form.Item  hasFeedback validateStatus="success">
              <Input placeholder="Success" id="success" />
            </Form.Item>
            <label style={{fontSize:10}}>LABEL</label>
            <Form.Item hasFeedback validateStatus="warning">
              <Input placeholder="Warning" id="warning2" />
            </Form.Item>
            <label style={{fontSize:10}}>LABEL</label>
            <Form.Item
              hasFeedback
              validateStatus="error"
            >
              <Input placeholder="unavailable choice" id="error2" />
              <label style={{fontSize:10}}>Should be combination of numbers & alphabets</label>
            </Form.Item>
          </Form>

        </div>

      </div>
    </>
  );
};

export const CheckboxRC =()=>{
  return (
    <>
      <SBheader sbtitle="Checkbox" />
      <div className="container">
        <div className="center">
        <Checkbox /> <label>Checkbox</label><Checkbox indeterminate/> Indeterminate <Checkbox />Checkbox Selected
      
        <Checkbox defaultChecked disabled /> <label>Default Checkbox</label>
        </div>
      </div>
    </>
  );
}
//export default General;
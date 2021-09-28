import React,{useState} from 'react';
import { Input, Radio, Space, DatePicker, Modal, Table, Pagination, Tabs, Alert, Avatar,Button } from 'antd';
import SBheader from './SBheader';


const { TextArea } = Input;
const { RangePicker } = DatePicker;
const format = 'HH:mm';


export const ReactComponent = () => {
  return (
    <div className='reports'>
      <h1>sfsf</h1>
    </div>
  );
};


export const TextboxRC = () => {
  return (
    <>
      <SBheader sbtitle="Checkbox" />
      <div className="container">
        <div className="center">
          <TextArea rows={4} cols={55} />
          <br /><br />
          <label style={{ fontSize: 10 }}>LABEL </label>
          <TextArea rows={4} cols={55} />
        </div>
      </div>
    </>
  );
}
export const RadioButtons = () => {
  return (
    <>
      <SBheader sbtitle="Checkbox" />
      <div className="container">
        <div className="center">
          <label style={{ fontSize: 12 }}>Radio Button</label><br />
          <Radio.Group  >
            <Space direction="vertical">
              <Radio checked >Option A</Radio>
              <Radio value={1}>Option B</Radio>
              <Radio value={2}>Option C</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
    </>
  );
}
export const SelectRC = () => {
  return (
    <>
      <SBheader sbtitle="Select" />
      <div className="container">
        <div className="center">
          <label style={{ fontSize: 12 }}>Radio Button</label><br />
          <Radio.Group  >
            <Space direction="vertical">
              <Radio checked >Option A</Radio>
              <Radio value={1}>Option B</Radio>
              <Radio value={2}>Option C</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
    </>
  );
}
export const DatepickerRC = () => {
  return (
    <>
      <SBheader sbtitle="Date Picker" />
      <div className="container">
        <div className="center">
          <label style={{ fontSize: 12 }}>Date picker</label><br />
          <Space direction="vertical">

            <DatePicker />
            <label style={{ fontSize: 12 }}>Range  picker</label>
            <RangePicker showTime format={format} />

          </Space>
        </div>
      </div>
    </>
  );
}
export const ModalRC = () => {

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    
    <>
      <SBheader sbtitle="Modal" />
      <div className="container">
        <div className="center">
          <Button type="primary" onClick={showModal}>
          This is a modal dialog
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
    </>
  );
}
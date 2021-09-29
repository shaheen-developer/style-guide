import React, { useState } from 'react';
import { Input, Radio, Space, DatePicker, Modal, Table, Pagination, Tabs, Alert, Avatar, Button, Image, Menu, Dropdown, Switch, Divider, Card, Empty, Result, Typography, Tag, notification, Upload, message,Tooltip } from 'antd';
import { DrawerProps } from 'antd/es/drawer';


import { DownOutlined, MailOutlined, CloseCircleOutlined, InboxOutlined } from '@ant-design/icons';
import SBheader from './SBheader';
import TableRCComponent from './TableRCComponent';
import DrawerRCComponent from './DrawerRCComponent';
import StepRCComponent from './StepRCComponent';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Paragraph, Text } = Typography;
const { Dragger } = Upload;

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
            Click Me
          </Button>
          <Modal title="This is modal dialog" visible={isModalVisible} okText="Submit" onOk={handleOk} onCancel={handleCancel}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque veniam excepturi quae, labore repellat, minima dolore praesentium culpa blanditiis rerum amet architecto, laudantium voluptates accusamus debitis consequuntur hic explicabo!</p>
          </Modal>
        </div>
      </div>
    </>
  );
}
export const TableRC = () => {
  return (
    <>
      <SBheader sbtitle="Table" />
      <div className="container">
        <div className="center">
          <TableRCComponent />
        </div>
      </div>
    </>
  );
}

export const PaginationRC = () => {

  return (
    <>
      <SBheader sbtitle="Pagination" />
      <div className="container">
        <div className="center">
          <Pagination showQuickJumper defaultCurrent={1} total={50} />
          <br />
        </div>
      </div>
    </>
  );
}
export const TabsRC = () => {

  return (
    <>
      <SBheader sbtitle="Tabs" />
      <div className="container">
        <div className="center">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export const AlertRC = () => {
  return (
    <>
      <SBheader sbtitle="Pagination" />
      <div className="container">
        <div className="center">
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
          />
          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
            closable
          />
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </div></div>
    </>
  );
}
export const AvatarRC = () => {

  return (
    <>
      <SBheader sbtitle="Tabs" />
      <div className="container">
        <div className="center">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>

        </div>
      </div>
    </>
  );
}
export const DropdownRC = () => {

  const menu = (
    <Menu >
      <Menu.Item key="1" >
        menu4 1st menu item
      </Menu.Item>
      <Menu.Item key="2" >
        menu42nd menu item
      </Menu.Item>
      <Menu.Item key="3" >
        menu4 3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <SBheader sbtitle="Tabs" />
      <div className="container">
        <div className="center">

          <Space wrap>

            <Dropdown overlay={menu}>
              <Button type="primary">
                Button <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>
      </div>
    </>
  );
}
export const MenuRC = () => {
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  const changeMode = value => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <SBheader sbtitle="Menu" />
      <div className="container">
        <div className="center">

          <Divider type="vertical" />

          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={mode}
            theme={theme}
          >
            <Menu.Item key="1" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="3" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="5" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>

          </Menu>
        </div></div>
    </>
  );
}
export const CardRC = () => {

  return (
    <>
      <SBheader sbtitle="Cards" />
      <div className="container">
        <div className="center">
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    </>
  );
}
export const EmptystateRC = () => {

  return (
    <>
      <SBheader sbtitle="Empty State" />
      <div className="container">
        <div className="center">
          <Empty description={<span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur, asperiores
          </span>} />
        </div>
      </div>
    </>
  );
}
export const DrawerRC = () => {

  return (
    <>
      <SBheader sbtitle="Drawer" />
      <div className="container">
        <div className="center">
          <DrawerRCComponent />
        </div>
      </div>
    </>
  );
}
export const FeedbackRC = () => {

  return (
    <>
      <SBheader sbtitle="Feedback" />
      <div className="feddback-container">
        <div className="feedback-container1" >
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[]}

          /></div>
        <div className="feedback-container2">
          <Result
            status="error"
            title="Something went wrong. please try again"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            ]}
          />

        </div>
      </div>


    </>
  );
}
export const TagRC = () => {

  return (
    <>
      <SBheader sbtitle="Tags" />
      <div className="container">
        <div className="center">
          <Tag>Tag 1</Tag>
          <Tag>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
          </Tag>
          <Tag closable >
            Tag 2
          </Tag>
        </div>
      </div>
    </>
  );
}
export const StepRC = () => {

  return (
    <>
      <SBheader sbtitle="Tags" />
      <div className="container">
        <div className="center">
          <StepRCComponent />
        </div>
      </div>
    </>
  );
}
export const ToastAlertRC = () => {
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the message of the notification',
    });
  };
  return (
    <>
      <SBheader sbtitle="Tags" />
      <div className="container">
        <div className="center">
          <Space>
            <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
            <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
            <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
            <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
          </Space>
        </div>
      </div>
    </>
  );
}
export const UploadRC = () => {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <>
      <SBheader sbtitle="Tags" />
      <div className="container">
        
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>
        
      </div>
    </>
  );
}
export const TooltipRC = () => {

  return (
    <>
      <SBheader sbtitle="Tags" />
      <div className="container">
        <div className="center">
        <Tooltip title="prompt text">
    <span>Hover me to view.</span>
  </Tooltip >
        </div>
      </div>
    </>
  );
}
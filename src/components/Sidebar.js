
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, Breadcrumb } from 'antd';


import { Menu } from 'antd';
import VscodeSnippet from '../pages/VscodeSnippet';
import {TypographyRS,ButtonRC,Icons,InputRC,CheckboxRC} from '../pages/General';
import {TextboxRC,RadioButtons,DatepickerRC,ModalRC} from '../pages/ReactComponent';
import {Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Sidebar() {
  const handleClick =()=>{
    //
  }
  return (
    <>
      <Router>
      <Layout>
        <Sider >
        <br/> 
        <div className="sbLogo">
        <img src={require('../images/Sb-as-ranlogo.png').default} /></div>  
       
            <Menu
        onClick={handleClick}
        style={{ width: 229,padding:0}}
        mode="inline"
      > 
      
        <Menu.Item key="/vscodesnippets" > <Link to ="/vscodesnippets" >VScodeSnippets</Link></Menu.Item>
      
        <SubMenu key="gen" title="General">
          <Menu.Item key="/typography"> <Link to ="/general/typographyrs" >Typography</Link></Menu.Item>
          <Menu.Item key="/buttons"><Link to ="/general/buttons" >Buttons</Link></Menu.Item>
          <Menu.Item key="/icons"><Link to ="/general/icons" >Icons</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="rc" title="React Components">
          <Menu.Item key="/input"><Link to ="/reactcomponent/input" >Input</Link></Menu.Item>
          <Menu.Item key="/checkbox"><Link to ="/reactcomponent/checkbox">Checkbox</Link></Menu.Item>
          <Menu.Item key="/text"><Link to="/reactcomponent/textbox">Textbox</Link></Menu.Item>
          <Menu.Item key="/radionbuttons"><Link to="/reactcomponent/radiobuttons">RadioButtons</Link></Menu.Item>
          <Menu.Item key="/select"><Link to="/reactcomponent/select">Select</Link></Menu.Item>
          <Menu.Item key="/multiple select"><Link to="/reactcomponent/radiobuttons">Mulitple Select</Link></Menu.Item>
          <Menu.Item key="/datepicker"><Link to="/reactcomponent/datepicker">Datepicker</Link></Menu.Item>
          <Menu.Item key="/modal"><Link to="/reactcomponent/modal">Modal</Link></Menu.Item>
        </SubMenu>
      </Menu>
      
          </Sider>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
          <Switch>
                    <Route path='/vscodesnippets' exact component={VscodeSnippet} />
                    <Route path='/general/typographyrs' exact component={TypographyRS} />
                    <Route path='/general/buttons' exact component={ButtonRC} />
                    <Route path='/general/icons' exact component={Icons} />

                    <Route path='/reactcomponent/input' exact component={InputRC} />
                    
                    <Route path='/reactcomponent/checkbox' exact component={CheckboxRC} />
                    
                    <Route path='/reactcomponent/textbox' exact component={TextboxRC} />
                    <Route path='/reactcomponent/radiobuttons' exact component={RadioButtons} />
                    <Route path='/reactcomponent/datepicker' exact component={DatepickerRC} />
                    <Route path='/reactcomponent/modal' exact component={ModalRC} />
                    <Route path='/reactcomponent/icons' exact component={InputRC} />
                    <Route path='/reactcomponent/icons' exact component={InputRC} />
                    <Route path='/reactcomponent/icons' exact component={InputRC} />
                    <Route path='/reactcomponent/icons' exact component={InputRC} />
                </Switch>
          </Content>
        </Layout>
      </Layout>
      </Router>
    </>
  )
}

export default Sidebar;

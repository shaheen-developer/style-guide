
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, Breadcrumb } from 'antd';


import { Menu } from 'antd';
import VscodeSnippet from '../pages/VscodeSnippet';
import {TypographyRS,ButtonRC,Icons,InputRC,CheckboxRC} from '../pages/General';
import {TextboxRC,RadioButtons,DatepickerRC,ModalRC,TableRC,PaginationRC,TabsRC, AlertRC,AvatarRC,DropdownRC,MenuRC,CardRC,EmptystateRC,DrawerRC,FeedbackRC,TagRC,StepRC,ToastAlertRC,UploadRC,TooltipRC } from '../pages/ReactComponent';
import {Link } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Menu.Item key="/table"><Link to="/reactcomponent/table">Table</Link></Menu.Item>
          <Menu.Item key="/pagination"><Link to="/reactcomponent/pagination">Pagination</Link></Menu.Item>
          <Menu.Item key="/tabs"><Link to="/reactcomponent/tabs">Tabs</Link></Menu.Item>
          <Menu.Item key="/alerts"><Link to="/reactcomponent/alerts">Alert</Link></Menu.Item>
          <Menu.Item key="/avatar"><Link to="/reactcomponent/avatar">Avatar</Link></Menu.Item>
          <Menu.Item key="/dropdown"><Link to="/reactcomponent/dropdown">Dropdown</Link></Menu.Item>
          <Menu.Item key="/menu"><Link to="/reactcomponent/menu">Menu</Link></Menu.Item>
          <Menu.Item key="/card"><Link to="/reactcomponent/card">Card</Link></Menu.Item>
          <Menu.Item key="/emptystate"><Link to="/reactcomponent/emptystate">Empty State</Link></Menu.Item>
          <Menu.Item key="/drawer"><Link to="/reactcomponent/drawer">Drawer</Link></Menu.Item>
          <Menu.Item key="/feedback"><Link to="/reactcomponent/feedback">Feedback</Link></Menu.Item>
          <Menu.Item key="/tag"><Link to="/reactcomponent/tag">Tags</Link></Menu.Item>
          <Menu.Item key="/steps"><Link to="/reactcomponent/steps">Steps</Link></Menu.Item>
          <Menu.Item key="/toastalert"><Link to="/reactcomponent/toastalert">Toast Alert</Link></Menu.Item>
          <Menu.Item key="/upload"><Link to="/reactcomponent/upload">Upload</Link></Menu.Item>
          <Menu.Item key="/tooltip"><Link to="/reactcomponent/tooltip">TooltipRC</Link></Menu.Item>


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
                    <Route path='/reactcomponent/table' exact component={TableRC} />
                    <Route path='/reactcomponent/pagination' exact component={PaginationRC} />
                    <Route path='/reactcomponent/tabs' exact component={TabsRC} />
                    <Route path='/reactcomponent/alerts' exact component={AlertRC} />
                    <Route path='/reactcomponent/avatar' exact component={AvatarRC} />
                    <Route path='/reactcomponent/dropdown' exact component={DropdownRC} />
                    <Route path='/reactcomponent/menu' exact component={MenuRC} />
                    <Route path='/reactcomponent/card' exact component={CardRC} />
                    <Route path='/reactcomponent/emptystate' exact component={EmptystateRC} />
                    <Route path='/reactcomponent/drawer' exact component={DrawerRC} />
                    <Route path='/reactcomponent/feedback' exact component={FeedbackRC} />
                    <Route path='/reactcomponent/menu' exact component={MenuRC} />
                    <Route path='/reactcomponent/tag' exact component={TagRC} />
                    <Route path='/reactcomponent/steps' exact component={StepRC} />
                    <Route path='/reactcomponent/toastalert' exact component={ToastAlertRC} />
                    <Route path='/reactcomponent/upload' exact component={UploadRC} />
                    <Route path='/reactcomponent/tooltip' exact component={TooltipRC} />

                </Switch>
          </Content>
        </Layout>
      </Layout>
      </Router>
    </>
  )
}

export default Sidebar;

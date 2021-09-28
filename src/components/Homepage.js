import React from 'react'
import { Layout, Typography, Button } from 'antd';
import {
    CaretRightOutlined,
    ArrowRightOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import { useNavigate, Link, useHistory } from 'react-router-dom'
import Sidebar from './Sidebar';
const { Header, Footer, Sider, Content } = Layout;

const { Title, Text } = Typography;

export default function Homepage() {
    let history = useHistory();
    function handleClick() {
        history.push("/sidebar");
    }
    return (
        <>
            <center>
                <Layout className="homediv">

                    <Content>
                        <img src={require('../images/Sb-as-ranlogo.png').default} /><small>v.10 </small>
                        <br /><br />
                        <Title style={{ fontSize: 50, fontWeight: 400 }}>UX - StyleGuide</Title>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum obcaecati rem nulla laudantium amet quae explicabo natus in ducimus at? Temporibus alias excepturi soluta laboriosam. Quae corrupti consequuntur quia similique.
                        <br /><br />
                        <Button type="primary" size="normal" icon={<DownloadOutlined />} style={{ background: "#7db745" }}>
                            Download Snippets
                        </Button>&nbsp;

                        <Button >React Components <ArrowRightOutlined /></Button>
                    </Content>

                </Layout>


            </center></>
    )
}

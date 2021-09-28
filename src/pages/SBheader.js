import React from 'react';
import { Typography, Button } from 'antd';
import {
    CaretRightOutlined,
    DownloadOutlined,
  } from '@ant-design/icons';
  const { Title,Text } = Typography;

function SBheader(props) {
    return (
        <div>
            <div className="control-label"> 
      <Title level={2} style={{fontSize:35,fontWeight:400}}>{props.sbtitle}
     </Title></div>
    [ <div  className="click">     
    <Button type="primary" size ="normal" icon={<DownloadOutlined /> }  style={{ background: "#7db745"}}> 
          Download Snippets
        </Button></div>]
    <br/> <br/> <br/> 
        </div>
    );
}

export default SBheader;

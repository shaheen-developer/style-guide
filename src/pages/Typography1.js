import React from 'react';
import { Typography } from 'antd';

const { Title,Text } = Typography;

export const Typography1 = () => {
  return (
    <div>
      <Title level={3}>Typography
</Title>
      <Title style={{fontSize:50,fontWeight:400}}>Main Heading</Title>
      <Title level={2} style={{fontSize:35,fontWeight:400}}>Level 1 Title</Title>
      <Title level={3}  style={{fontSize:30,fontWeight:400}}>Level 2 Title</Title>
      <Title level={4} style={{fontSize:25,fontWeight:400}}>Level 3 Title</Title>
      <Title style={{fontSize:20,fontWeight:600,fontFamily:'Libre Baskerville,serif'}}>
        Headline</Title>
    
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum obcaecati rem nulla laudantium amet quae explicabo natus in ducimus at? Temporibus alias excepturi soluta laboriosam. Quae corrupti consequuntur quia similique.   <br/><br/>
      Callout <br/><br/>
      <footnote>This is a footnote.</footnote>
      <br/><br/>
      Level 1 Caption
      <br/><br/>
      <small>Level 2 Caption</small>
      <br/><br/>
    <label>LABEL</label>
    <br/><br/><br/>
    <Title style={{fontSize:17,fontFamily:'Libre Baskerville,serif'}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum obcaecati rem nulla laudantium amet quae explicabo natus in ducimus at? Temporibus alias excepturi soluta laboriosam. Quae corrupti consequuntur quia similique. 
</Title>
      </div>

      
  );
}


//export default Typography1;

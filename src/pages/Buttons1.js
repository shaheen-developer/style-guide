import React from 'react';
import styled from 'styled-components';

const Content = styled.p`

`;

const ButtonFilled = styled.button`
  background-color: #7db745;
  color: white;
  font-size: 15px;
  cursor: pointer;
  height:3em;
  width:13em;
 margin-left:0em;
margin-top:14em;
`;
const ButtonBlank = styled.button`
  font-size: 15px;
  cursor: pointer;
  height:3em;
  width:13em;
    margin-left:1em;
`;

export const Buttons1 = () => {
    return(
        <>
        <div className="contents_buttons">
        <ButtonFilled>
       Primary Button
</ButtonFilled>   
<ButtonBlank>
       Primary Button
</ButtonBlank>     
         </div>

        </>
    );
}
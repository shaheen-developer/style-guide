import React from 'react';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';

const Arrow = styled.button`
border: solid 3px grey;
margin-top:190px;
`;
const ButtonDownload = styled.button`
  background-color: #7db745;
  color: white;
  font-size: 15px;
  border-radius: 15px;
  cursor: pointer;
  height:3em;
  width:13em;

`;
export const Icons1 = () => {
    return(
        <>
        
        <div className="contents_icons">
            <Arrow>
             <AiIcons.AiOutlineCaretRight />  
             </Arrow>
          </div>
          
        </>
    );
}
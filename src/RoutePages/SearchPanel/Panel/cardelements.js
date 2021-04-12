import styled from 'styled-components'
import {Link as linkR} from 'react-router-dom'


export const Cardlink = styled.div`



width: 100%;
    height: 50px;
    background: linear-gradient(to right,#93a5cf,#e4efe9);
    color:black;

    border-radius: 8px;

cursor: pointer;
 
text-decoration:none;

display:flex;
justify-content:center;
align-items:center;


  &:hover{
      background:lightblue;

  }





`

export const P1 = styled(linkR)`
text-decoration:none;
color:black;

`
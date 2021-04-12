import styled from 'styled-components'
import {Link as linkS} from 'react-scroll'

import { VscChromeClose} from "react-icons/vsc";


export const SidebarCont=styled.aside`



    position:fixed;
background:whitesmoke;

width:100%;
height:100%;
display:grid;
align-items:center;
top:0;
transition :   0.3s ease-in-out;

opacity: ${({isOpen})=>(isOpen ? '100' : '0')

};
top: ${({isOpen})=>(isOpen ? '0' : '-100')

 };

z-index: ${({isOpen})=>(isOpen ? '999' : '-100')

};






`


export const CloseIcon = styled(VscChromeClose)`

z-index: ${({isOpen})=>(isOpen ? '999' : '-100')

};



color: black;


`


export const Icon = styled.div`

position:absolute;
top:1.2rem;
right:1.2rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  

`

export const Menu= styled.ul`
height:50%;
color:black;
display:flex;
flex-direction:column;
justify-content:space-around;

align-items:center;
text-align:center;




`


export const SidebarLink = styled(linkS)`

font-size:1.9rem;
text-decoration:none;
list-style:none;
   transition : all  0.2s ease-in-out;


   cursor: pointer;

color:rgb(163, 211, 91);;





&:hover{
    color: pink;
    transition : all  0.2s ease-in-out;
    

}
`
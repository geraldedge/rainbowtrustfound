import styled from 'styled-components'
import {Link as linkS} from 'react-scroll'
import {Link as linkR} from 'react-router-dom'

import { VscChromeClose} from "react-icons/vsc";


export const SidebarCont1=styled.aside`



    position:fixed;
background:whitesmoke;

width:100%;
height:100%;
display:grid;
align-items:center;
top:0;
transition :   0.3s ease-in-out;

opacity: ${({sidebarOpen})=>(sidebarOpen ? '100%' : '0')

};
top: ${({sidebarOpen})=>(sidebarOpen? '0' : '-100')

 };

z-index: ${({sidebarOpen})=>(sidebarOpen ? '999' : '-100')

};






`


export const CloseIcon1 = styled(VscChromeClose)`

z-index: ${({sidebarOpen})=>(sidebarOpen ? '999' : '-100')

};



color: black;


`


export const Icon1 = styled.div`

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

export const Menu1= styled.ul`
height:50%;
color:black;
display:flex;
flex-direction:column;
justify-content:space-around;

align-items:center;
text-align:center;




`


export const SidebarLink1 = styled(linkS)`

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


export const SidebarLink2 = styled(linkR)`

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
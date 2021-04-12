import styled  from 'styled-components'
import { FaBars} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Navlink = styled(LinkR)`

list-style:none;
padding:0px 44px;

text-decoration:none;
color:black;
&:hover{
    color: rgb(0,0,0,0.4);
    transition : all  0.2s ease-in-out;
    

}


`


export const NavlinkR = styled(LinkS)`

list-style:none;
padding:0px 44px;

text-decoration:none;
color:black;
&:hover{
    color: rgb(0,0,0,0.4);
    transition : all  0.2s ease-in-out;
    

}


`



export const Plink = styled(LinkR)`

list-style:none;
padding:0px 44px;
text-decoration:none;
color:black;

&:hover{
    color: rgb(0,0,0,0.4);
    transition : all  0.2s ease-in-out;
    

}


`

export const H2 = styled(LinkR)`
margin-top:12px;
text-decoration:none;
color: black;
font-size:1.9rem;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    color:black;
    position: absolute;
    top:-0.3rem;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;







}



`


export const Search = styled.div`





`

export const SIcon = styled(BsSearch)`

font-size:1.8rem;
color:black;

`
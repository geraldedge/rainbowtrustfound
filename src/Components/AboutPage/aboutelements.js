import styled from 'styled-components'

import {AiOutlineMinus} from 'react-icons/ai'

import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'

import{Link as LinkR} from 'react-router-dom'


export const AboutContainer = styled.div`
height:770px;
display:flex;

justify-content:center;

flex-direction:column;
align-items:center;
z-index:1;


@media screen and (max-width:768px){

  max-width:768px;

}






`



export const PicBg = styled.div`




`

export const Pic = styled.img`





  width: 20%;

  top:5rem;
  left: 10rem;
  position:absolute;
  z-index:1;


  @media screen and (max-width:768px) {
    width: 20%;

top:5rem;
left: 10rem;
position:absolute;
z-index:-401;


  }

  
  
`;




export const Title = styled.div`

width:940px;
height:180px;



margin-top:-42vh;

margin-bottom:20px;


@media screen and (max-width:768px){



max-width:500px;
margin-top:-8vh;

}

@media screen and (max-width:768px){



max-width:100%;

}

@media screen and (max-width:375px) {

max-width:100%;
}


`


export const BigText = styled.h1`


font-size:2rem;
letter-spacing:0.1rem;


@media screen and (max-width:768px){

  font-size:1rem;
  
}

`

export const Top = styled.div`

display:flex;
justify-content:center;



`

export const Hr = styled(AiOutlineMinus)`

font-size:2rem;
`




export const Q1 = styled(ImQuotesLeft)`

font-size:2rem;






`

export const Q2 = styled(ImQuotesRight)`

font-size:2rem;



`


export const Middle = styled.div`


display:flex;
justify-content:center;


@media screen and (max-width:768px){
text-align:center;
max-width:768px;

  
}
`

export const Bottom = styled.div`

display:flex;
justify-content:center;



`


export const RTF = styled.p`





`















export const Statement = styled.div`
text-align:center;

`

export const Text = styled.div`

margin-left:30px;
font-size:1.8rem;
margin-right:30px;
color:black;


`

export const AboutButton=styled(LinkR)`
border-radius: 50px;
white-space:nowrap;
background: black;
padding: 16px 74px;
color:whitesmoke;
border:solid 2px black;
font-size:18px;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    color:black;
    background:white;

    
    transition : all  0.2s ease-in-out;

  
  } 
   @media screen and (max-width:768px) {
    border-radius: 50px;
   
white-space:nowrap;
background: black;
padding: 16px 74px;
color:whitesmoke;
border:solid 2px black;
font-size:18px;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    color:black;
    background:white;

    
    transition : all  0.2s ease-in-out;

  
  } 

     
   }
  
  
  `


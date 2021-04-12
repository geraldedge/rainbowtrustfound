import styled from'styled-components'
import {GiSelfLove,GiMoneyStack,GiPayMoney,GiReceiveMoney} from 'react-icons/gi'

import {AiFillBank} from 'react-icons/ai'
import {BiDonateHeart} from 'react-icons/bi'
import {ImPhone} from 'react-icons/im'




export const DonateContainer = styled.div`


height:500px;
background:black;
margin-top:190px;

@media screen and (max-width:768px){
    height:800px;
}

`


export const Heading = styled.div`

margin-top:211px;
width:100%;

height:80px;
display:flex;
justify-content:center;
align-items:flex-end;

margin-bottom:50px;

&:hover{
    color:teal
}


`



export const Text = styled.h1`



font-size:3rem;

color:white;

transition:all 0.3s ease-in;

&:hover{
    color:teal
}

`


export const Love = styled(GiSelfLove)`


font-size:3rem;
color:white;

transition:all 0.3s ease-in;

&:hover{
    color:teal
}



`

export const Boxes = styled.div`




display:grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-auto-rows: minmax(300px,300px);

    justify-content: center;
    margin:auto;
  align-content: center;
width:50%;



@media screen and (max-width:1024px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}

@media screen and (max-width:1057px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}

@media screen and (max-width:1159px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}



@media screen and (max-width:768px) {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

`


export const Box = styled.div`

background:transparent;
/*background:#008080;*/

text-align:center;



@media screen and (max-width:768px){
 

   
}


`



export const Top = styled.div`




text-align:center;


display:flex;
flex-direction:row-reverse;
justify-content:center;
margin-top:14px;


`


export const Middle = styled.div`


margin-top:14px;

text-align:center;


@media screen and (max-width:768px){
    text-align:none;
    font-size:1rem;
}



`

export const Middle1 = styled.div`


margin-top:14px;

text-align:center;


@media screen and (max-width:768px){
 
    font-size:1rem;
   
}



`







export const Box1 = styled.div`


background: transparent;

@media screen and (max-width:768px){
   

   
}



`




export const Headline = styled.h1`
color:teal;
/*color : #2a2d31;
color : #2a2d31;
*/
font-size:1.4rem;


`


export const Logo= styled(AiFillBank)`
color:teal;

font-size:1.6rem;



`




export const Head = styled.div`

text-align:center;


display:flex;
flex-direction:row;
justify-content:center;
margin-top:14px;

@media screen and (max-width:375px){
 
 
}

`

export const Phone= styled(ImPhone)`

color : teal;
font-size:1.6rem;

@media screen and (max-width:375px){

 
}


`


export const Cash= styled(GiMoneyStack)`

color : teal;
font-size:1.6rem;
@media screen and (max-width:375px){
    
 
}



`


export const Momo= styled.h1`

color : teal;
font-size:1.4rem;
@media screen and (max-width:375px){
    margin-right:27px;
 
}

@media screen and (max-width:411px){
    margin-right:32px;
 
}



`


export const Giving = styled(GiPayMoney)`


font-size:4.9rem;
right:0;
position:absolute;
color:teal;
margin-top:19px;
`



export const Footer = styled.div`

background:black;
    height: 80px;;
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-end;
    align-items:flex-start;

`



export const Receive = styled(GiReceiveMoney)`


font-size:4.3rem;
color:teal;

`

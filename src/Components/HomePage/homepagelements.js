import styled from 'styled-components'
import '../Navbar/nav.css'

import { GiSelfLove} from "react-icons/gi"

export const HomePageContainer = styled.div`
background:white;
height:800px;
display:grid;
align-items:center;



@media screen and (max-width:768px){
  display:flex;
 margin-bottom:10px;


  
}

@media screen and (max-width:320px) {
  margin-bottom:332px;
}

@media screen and (max-width:375px) {
  margin-bottom:282px;
  
}

@media screen and (max-width:411px) {

  margin-bottom:222px;
  
}


@media screen and (max-width:1024px) {

margin-bottom:272px;

}



`

export const Content = styled.div`
z-index:8;
height:600px;
display:grid ;

grid-template-columns:1fr 1fr;
grid-template-rows: 450px;

@media screen and (max-width:768px){
  display:flex;
  justify-content:center;
 margin-top:-1vh;
 width:1900%;
left:0;


 

  
}

@media screen and (max-width:375px) and (max-height:812px) {

max-width:100%;

margin-left:-13px;
}




`

export const MainText = styled.div`

margin-top:55px;
text-align:center;




`

export const Pic = styled.div`



margin-top:1px;

height: 100%;
 display:flex;
 align-items:center;








`

export const Img = styled.img`





  width: 70%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;

  @media screen and (max-width:768px){
    
 
    display:none;
      
   
  }
`;




export const Big = styled.h1`
font-size:3rem;

color:black;

letter-spacing:0.1rem;
margin-top:50px;

font-family: 'Poppins', sans-serif;
cursor: pointer;



`

export const Small = styled.p`

color:rgb(163, 211, 91);
font-size:2rem;
padding-top:30px;
margin-left:18px;

@media screen and (max-width:768px){
  margin-left:1px;
}




`


export const Modal = styled.div`
background: pink;
width:650px;
height:550px;

  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({isModal})=>(
      isModal  ? '10' : '-999'

  )};



`
export const Head = styled.div`

display:block;
margin-top:15px;
width:50%;
margin:auto;

justify-content:center;
display:flex;

`

export const Label = styled.h1`

color:black;

`

export const Heart = styled(GiSelfLove)`

margin-top:15px;



`


export const Body=styled.div`

width:100%;

height:100%;
display:flex;
justify-content:center;
flex-direction:column-reverse;
align-items:center;


`


export const C19 =styled.img`

width: 70%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;





`


export const Text=styled.p`

color:black;
font-size:1.8rem;
margin-top:-12vh;
letter-spacing:0.2rem;



`

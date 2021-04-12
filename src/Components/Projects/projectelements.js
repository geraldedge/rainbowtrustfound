import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ProjectContainer  = styled.div`
margin-top:-14vh;

height:100%;


@media screen and (max-width:768px){
    
    margin-top:250px;
}

@media screen and (max-width:375px) {

margin-top:500px;
}

@media screen and (max-width:414px) {

margin-top:500px;
}


@media screen and (max-width:360px) {

    margin-top:500px;
}

@media screen and (max-width:320px) {
    margin-top:600px;
}






`



export const Banner = styled.div`

height:100px;

display:flex;
align-items:center;
margin-top:39px;

`



export const Tag= styled.div`

height:60px;
width:200px;
border-radius:8px;
color: white;
background:black;
margin-left:15px;
display:flex;
align-items:center;
justify-content:center;
transition: all 2s ease-in-out;

&:hover{
    background:white;
    color:black;
    border:solid 1px black;
}
`



export const H1 = styled.h1`


`



export const Project = styled.div`


display:grid;


column-gap: 20px;
  row-gap: 20px;
width:80%;
margin:auto;
justify-content: center;
  align-content: center;


margin-top:-3vh;


grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-auto-rows: minmax(600px,600px);


@media screen and (max-width:768px){
    width:50%;
}
`





export const RTF1 = styled.div`
border:solid 2px black;
border-radius:9px;

margin-top:30px;
margin-bottom:30px;

display:flex;
align-items:center;
flex-direction:column;
text-align:center;



transition:all 0.3s ease;

&:hover{
    color:white;
    background:black;
}
`




export const Img1= styled.img`

height:230px;
width:100%;
margin-bottom:10px;
border-radius:9px;


`


export const Text = styled.p`
font-size:1.2rem;



`





export const Btn = styled.div`

height:80px;
width:100%;
display:flex;
justify-content:center;


`


export const Button = styled(LinkR)`

display:flex;
justify-content:center;
align-items:center;
height:60px;
width:200px;
padding: 16px 74px;
background:black;
color:white;
border-radius: 50px;
border:solid 2px black;
font-size:21px;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    color:black;
    background:white;

    
    transition : all  0.2s ease-in-out;

}

`
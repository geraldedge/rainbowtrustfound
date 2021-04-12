import styled from 'styled-components'
import {ImLocation2,ImPhone} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'




export const ContactContainer = styled.div`

height:220px;
background:black;



`


export const Top = styled.div`

height:180px;

display:flex;

@media screen and (max-width:768px){
    flex-direction:column;
}
`



export const Location = styled.div`


flex:2;
display:flex;
align-items:center;
justify-content:center;

@media screen and (max-width:768px){
    flex:1;

    justify-content:flex-start;
}


`

export const LocIcon = styled(ImLocation2)`

font-size:1.5rem;
color:white;

@media screen and (max-width:768px){
    font-size:1.5rem;
}

`

export const LocText = styled.h1`

font-size:1rem;
color:white;


@media screen and (max-width:768px){
    font-size:1rem;
}
`



export const Number = styled.div`


flex:1;

display:flex;
align-items:center;
justify-content:flex-start;





`


export const NumIcon= styled(ImPhone)`

font-size:1.5rem;
color:whitesmoke;

@media screen and (max-width:768px){
    font-size:1.5rem;
}

`

export const NumText = styled.h1`

font-size:1.1rem;
color:white;
@media screen and (max-width:768px){
    font-size:1rem;
}
`





export const Mail = styled.div`

flex:1;

display:flex;
align-items:center;
justify-content:flex-start;








`

export const MailIcon= styled(HiOutlineMail)`


color:white;
font-size:1.5rem;

@media screen and (max-width:768px){
    font-size:1.5rem;
}
`

export const MailText = styled.h1`


font-size:1rem;
color:white;

@media screen and (max-width:768px){
    font-size:1rem;
}
`



export const Middle = styled.div``


export const Instagram = styled.div`



flex:1;

display:flex;
align-items:flex-start;
justify-content:center;

@media screen and (max-width:768px){
    justify-content:flex-start;
}




`

export const InstaIcon= styled(GrInstagram)`

color:white;
font-size:1.5rem;
@media screen and (max-width:768px){
    font-size:1.5rem;
}

`

export const InstaText = styled.h1`

font-size:1rem;
color:white;
@media screen and (max-width:768px){
    font-size:1rem;
}
`






















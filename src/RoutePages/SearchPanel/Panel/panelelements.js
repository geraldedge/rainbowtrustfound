import styled from 'styled-components'
import { BiExit } from 'react-icons/bi'



export const PanelContainer = styled.div`




   position:fixed;
   background:linear-gradient(to right,#93a5cf,#e4efe9);

width:50%;
height:80%;


transition :   0.3s ease-in-out;

opacity: ${({searchOpen})=>(searchOpen? '100%' : '0')

};
right: ${({searchOpen})=>(searchOpen? '0' : '-100%')

 };

z-index: ${({searchOpen})=>(searchOpen ? '992' : '-110')


};


border-radius:8px;




@media screen and (max-width:768px){
    display:none;
}


`



export const X = styled.div`
margin-top:50px;
width:100%;
height:50px;

display:flex;
justify-content:center;

margin-bottom:50px;

`


export const XIcon = styled(BiExit)`

font-size:3rem;
cursor: pointer;

`
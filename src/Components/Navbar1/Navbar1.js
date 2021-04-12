import React , {useState,useEffect} from 'react'

import {Navlink,MobileIcon,Plink,H2,NavlinkR,Search,SIcon} from './navelements1'
import { FaBars } from "react-icons/fa";
import './nav1.css'

const Navbar1 = ({togle,TriggerSearch}) => {

let c ='/'
    const [navbar, setNavbar] = useState(false)

const change =  ()=>{
    if(window.scrollY>=60){
        setNavbar(true)
    }
    else{
        setNavbar(false)

    }
 
}

window.addEventListener('scroll',change)



    return (
        <>
        <header>

            <div className={navbar?'h1container active': 'h1container'}>

            <div className="lcont">

            <H2 to="/">RTF</H2>


                </div>

         <MobileIcon onClick={togle}  >
             <FaBars/>
         </MobileIcon>


               <div className="ucontainer">

                <ul>
    <Navlink to={c}>Home</Navlink>
    <Navlink to='/projects'>Projects</Navlink>
    <NavlinkR to='donate' smooth={true} duration={500} spy={true} offset={-70} >Donate</NavlinkR>
  


            </ul>




                </div>

                <div className="last">
            
                    <SIcon onClick={TriggerSearch}/>
           

                </div>








            </div>

          



        </header>
            
        </>
    )
}


export default Navbar1;
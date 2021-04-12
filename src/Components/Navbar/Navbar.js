import React from 'react'
import {Navlink,MobileIcon,Plink,H2} from './navelements'
import { FaBars } from "react-icons/fa";
import './nav.css'

const Navbar = ({toggle}) => {
    return (
        <>
        <header>

            <div className="hcontainer">

            <div className="lcont">

            <H2 to="/">RTF</H2>


                </div>

         <MobileIcon onClick={toggle}  >
             <FaBars/>
         </MobileIcon>


               <div className="ucontainer">

                <ul>
    <Navlink to='about' smooth={true} duration={500} spy={true} offset={-70}>About</Navlink>
    <Navlink to='projects' smooth={true} duration={500} spy={true} offset={-70}>Projects</Navlink>
    <Navlink to='donate' smooth={true} duration={500} spy={true} offset={-70} >Donate</Navlink>
  


            </ul>




                </div>

                <div className="last">
                <Navlink to='contacts' smooth={true} duration={500} spy={true} offset={-10} >Contact Us</Navlink>

                </div>








            </div>

          



        </header>
            
        </>
    )
}


export default Navbar;
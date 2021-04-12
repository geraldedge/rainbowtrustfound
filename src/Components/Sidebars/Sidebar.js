import React from 'react'

import {SidebarCont,Icon,CloseIcon,SidebarLink,Menu} from './sidebarelements'




const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarCont isOpen={isOpen} >
            <Icon onClick={toggle}>

                <CloseIcon isOpen={isOpen}/>


            </Icon>

            <Menu>
                <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>


About
                </SidebarLink>
                <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} offset={-50}>


Projects
                </SidebarLink>

                <SidebarLink to="donate" onClick={toggle} smooth={true} duration={500} spy={true} offset={-50}>


Donate
                </SidebarLink>
                <SidebarLink to="contacts" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>


Contact Us
                </SidebarLink>





            </Menu>

            




            
        </SidebarCont>
    )
}


export default Sidebar
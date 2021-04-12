import React from 'react'

import {SidebarCont1,Icon1,CloseIcon1,SidebarLink1,Menu1,SidebarLink2} from './sidebarelementsOther'




const SidebarOther = ({togle,sidebarOpen}) => {
    return (
        <SidebarCont1 sidebarOpen={sidebarOpen} >
            <Icon1 onClick={togle}>

                <CloseIcon1 sidebarOpen={sidebarOpen}/>


            </Icon1>

            <Menu1>
                <SidebarLink2 to="/" onClick={togle} >


Home
                </SidebarLink2>
                <SidebarLink2 to="/" onClick={togle}>


Projects
                </SidebarLink2>

                <SidebarLink1 to="donate" onClick={togle}  smooth={true} spy={true} duration={500} offset={-60}>


Donate
                </SidebarLink1>
                <SidebarLink1 to="contacts" onClick={togle}  smooth={true} spy={true} duration={500} offset={-60}>


Contact Us
                </SidebarLink1>





            </Menu1>

            




            
        </SidebarCont1>
    )
}


export default SidebarOther
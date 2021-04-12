import React,{useState} from 'react'
import  About  from './AboutPage/AboutInfo'
import { Contact } from '../Components/ContactPage/Contact'
import Navbar1 from '../Components/Navbar1/Navbar1'
import SidebarOther from '../Components/OtherSidebar/SidebarOther'
import Panel from './SearchPanel/Panel/Panel'
import ScrollToTop from '../Components/ScrollToTop'



const All = () => {

const [searchOpen,setSearch] = useState(false)
const [sidebarOpen,setShow] = useState(false)

const TriggerSearch=()=>{

setSearch(!searchOpen)

}

const togle=()=>{
    setShow(!sidebarOpen)

}


    return (
        <>
            <SidebarOther togle={togle} sidebarOpen={sidebarOpen}/>
          <Navbar1 togle={togle}  TriggerSearch={TriggerSearch}  />
      <Panel searchOpen={searchOpen} TriggerSearch={TriggerSearch}/>
    
        <About/>
        
            
        </>
    )
}

export default All

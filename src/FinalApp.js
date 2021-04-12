import React ,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebars/Sidebar'
import AboutInfo from './RoutePages/AboutPage/AboutInfo'
import {pic} from '../src/Components/Data'
import All from './RoutePages/All'

export const FinalApp = () => {

    
    return (

<>
        <Router basename={process.env.PUBLIC_URL}>
            

         

            <Switch>

                <Route path="/" exact component={App}/>
                <Route path="/aboutinfo" exact component={All} />
             

            



            </Switch>






        </Router>

</>
      
    )
}

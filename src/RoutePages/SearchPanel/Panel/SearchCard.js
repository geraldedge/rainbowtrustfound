import './searchboxelements.css'
import {Cardlink,P1} from './cardelements'
import  './searchboxelements.css'

const SearchCard = (props)=>{


return(
<div className="CardContainer">


    <Cardlink >
<P1 className="p" to={props.path}>{props.name}</P1>
    </Cardlink>
    <br></br>
    

    
  
  

   
   




</div>




)


}



export default SearchCard
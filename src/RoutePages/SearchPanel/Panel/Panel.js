import React,{Component} from 'react'
import {PanelContainer,X,XIcon} from './panelelements'
import SearchBox from './SearchBox'
import './searchboxelements.css'
import SearchCard from './SearchCard'
import Cardslot from './Cardslot'
class Panel extends Component {

    constructor(){
        super()
        this.state={

            headlines:[
                {
       
                  "title": "RTF donates books to Holy child School in Sakumono",
                  "path": "/"

                },
                {
       
                  "title": "RTF initiates library program for kids at Nungua",
                  "path": "/"

                },
                {
       
                  "title": "Book Aid - RTF partnership",
                  "path": "/"

                },
                {
       
                  "title": "RTF initiates Mobile Library Project in Abomasu",
                  "path": "/"

                },
                {
       
                  "title": "RTF launches Otumfuor Foundation partnership Project in Kumasi",
                  "path": "/"

                }
             
    
                
                
                
                
                ]
,


            searchfield:''


        }

        this.change=this.change.bind(this)

    }

    change(event){




        this.setState({
            searchfield:event.target.value
        })


    }



render(){

    const searchlist = this.state.headlines.filter((i)=>{

        return i.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(searchlist)


return (
    <>
    <PanelContainer searchOpen={this.props.searchOpen}>
<X>
<SearchBox change={this.change}/>

</X>



<div className="div">

    <Cardslot searchlist={searchlist} searchfield={this.state.searchfield}/>



</div>







    </PanelContainer>




    </>






)


}






}


export default Panel

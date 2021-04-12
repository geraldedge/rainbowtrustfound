
import React from 'react'
import SearchCard from './SearchCard'
import Empty from './Empty'
import Empty1 from './Empty1'

const Cardslot = ({searchlist, searchfield}) => {

    let c = searchlist.map((g,i)=>{

        return <SearchCard name ={searchlist[i].title } path={searchlist[i].path}/>
    })

    if(searchfield!=""){
        c= c
    }

    else{
        c=<Empty1/>
    }

    if(c!=""){
        c =c 
    }

    else{

        c= <Empty/>
    }

    

    return (
        <>

        {c}

            
        </>
    )
}

export default Cardslot

import React from 'react'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import {Headline,Rainbow,Headline1,Rainbow1,Top
,Middle,Head,Text,About,Intro,Vision,VisionText


} from './aboutinfoelements'
import './aboutinfo.css'
import {pic} from '../../Components/Data'
import { Contact } from '../../Components/ContactPage/Contact'
import { Donate } from '../../Components/Donate/Donate'
import ScrollToTop from '../../Components/ScrollToTop'

const AboutInfo = ({TriggerSearch}) => {
let c="Mission: To build capacities of the youth through effective resource mobilization for education, training, and skills development by effectively partnering with government agencies, civil society organizations, communities, and other stakeholders."

    return (
        <>

<ScrollToTop/>

<body className="body">
                
    


        <Middle>
            <Intro>

            <Head className="Head">
        About Rainbow Trust Foundation

    </Head>



            </Intro>
 


    <About>
        <Text className="text">Rainbow Trust Foundation (RTF) is a Non-Governmental Organisation which seeks to aid underprivileged communities and schools with the necessary academic materials and tools to enable them to give their best to the community and country at large. The organisation strongly believes that the mind contains a lot of capabilities. The ability of the mind to explore and store useful information which is mostly underused due to lack of resources is common in most parts of our country, Ghana.<br/><br/>
        

From preschool through to higher education, there has been the lack of academic materials either to share amongst or to even send a child home with one to broaden their knowledge and therefore the only time one mostly gets access to these books is just in school and afterwards the child has to find a way to get answers to questions they are presented with when growing up.

Research has indicated the difficulty in students in higher education to research or read extensively about a lot of things which shows a lot in their presentation of solutions and ideas concerning matters of importance. <br/> <br/>We strongly believe all these stems from the lack of academic resources and the passion we did not get from the beginning due to lack of materials to arouse the enthusiasm in us.

The Organisation was established in the year 2015 out of the passion Ms Joyce Ampofo developed, during her teaching years at Klagon, a sub-urban community in the Tema Metropolis. Ms Ampofo had to find means to provide academic materials and sometimes even sponsor the fees of some of these underprivileged students to enable them stay in school and receive education.</Text>


<Vision>
    <VisionText className="vision">
    <em>{c.toUpperCase()}</em>


    </VisionText>
</Vision>




 


    </About>

    
    
</Middle>


<Donate/>
<Contact/>






        </body>
  
       






       
        </>
    )
}

export default AboutInfo

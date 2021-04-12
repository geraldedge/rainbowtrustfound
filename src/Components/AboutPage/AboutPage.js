import React from 'react'
import {AboutContainer,Pic,PicBg,Title,Text,Statement,BigText,Hr,Top,Bottom,
    Q1,Q2,Middle,RTF,AboutButton} from './aboutelements'

    import './about.css'

const AboutPage = ({img2}) => {
    return (
        <>
        <AboutContainer >
            <PicBg>
                <Pic src={img2}/>
            </PicBg>
           

            <Title id="about">
                <Top>
                <Hr></Hr>
                <Q1></Q1>
                <Q2></Q2>
                <Hr></Hr>

                </Top>

                <Middle>

                <BigText className="bigtext">
                A world where everyone has access to books that will enrich, improve and change their lives.

                   </BigText>
   


                </Middle>
              

                <Bottom>

                <Hr></Hr>
                <RTF className="rtf">rainbow trust</RTF>
                <Hr></Hr>



                </Bottom>

                


            </Title>

            <Statement>
                <Text className="manu">
                    Rainbow Trust Foundation (RTF) is a Non-Governmental Organisation which seeks to aid underprivileged communities and schools with the necessary academic materials and tools to enable them to give their best to the community and country at large. The organisation strongly believes that the mind contains a lot of capabilities. The ability of the mind to explore and store useful information which is mostly underused due to lack of resources is common in most parts of our country, Ghana..<br></br> <br></br> 


 

              



                </Text>.<br></br> <br></br> <br></br>

            

                <AboutButton to="aboutinfo">

Learn More




</AboutButton>

           

               


            </Statement>
       




         
      

            










        </AboutContainer>
            
        </>
    )
}

export default AboutPage

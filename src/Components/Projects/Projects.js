import React from 'react'
import { ProjectContainer,Banner,Tag,Project,RTF3,RTF1,RTF2,H1,Img1,Text,T,Btn,Button} from './projectelements'
import './projects.css'


export const Projects = ({img5,img6,img7}) => {
    return (
        <>
        <ProjectContainer id="projects">
            <Banner>
                <Tag>
                    <H1>
                        Projects

                    </H1>


                </Tag>

                

            </Banner>

         

            <Project>
                <RTF1>

                    <Img1 src={img5}/>
                    <Text className="tit">
                        <strong> Rainbow Trust foundation and Book Aid International to implement implement Books To Go Project. The key objectives is to establish a library book resource with an organized collection of English and local language books that are accessible to learners and teachers at the school.

                        </strong>
                   
                    </Text>






                </RTF1>
                <RTF1>

                    <Img1 src={img6}/>
                    <Text className="tit">
                        <strong> These books Will go a long way to help our children and the youth. On weekends some of the youth involve in evil acts like loitering around, gambling etc , we are bringing mobile library project to engage them during weekends in the Atiwa District. We want to promote literacy and also instil the love of reading in them. 

                        </strong>
                   
                    </Text>






                </RTF1>
                <RTF1>

                    <Img1 src={img7}/>
                    <Text className="tit">
                        <strong> The Rainbow Trust Foundation has partnered with Rotary International Tema-Sakumono District to organise a reading clinic to promote literacy and to inspire children to develop reading habits.

                        </strong>
                   
                    </Text>






                </RTF1>
            

            </Project>



            

          
            <Btn>
                <Button>Explore</Button>
            </Btn>
        
            

        </ProjectContainer>
            
        </>
    )
}

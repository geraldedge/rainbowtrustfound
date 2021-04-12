import React from 'react'
import {HomePageContainer,Content,MainText,Pic,Img,Big,Small,Head,Label,Heart 
,C19,Body,Text} from './homepagelements'
import './home.css'
import{Icon,CloseIcon} from '../Sidebars/sidebarelements'


export const HomePage = ({img,isModal,toggle1,img3}) => {
    return (
        <>
        <HomePageContainer id='/about'>
            
    <Head>
              

                      



                </Head>


                
                
        
            <Content>
                <MainText>
                    <Big className="big">

                        Rainbow Trust Foundation

                    </Big>
                    <Small className="small">
                        A reading child is a winning child.



                    </Small>
                    

                </MainText>

                <Pic>
                <Img  className="pic" src={img}/>


                    </Pic>
                





            </Content>

        </HomePageContainer>
            
        </>
    )
}

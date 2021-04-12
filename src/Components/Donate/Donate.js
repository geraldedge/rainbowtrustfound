import React from 'react'
import {DonateContainer,Heading,Box,Boxes,Text,Love,Box1,Headline,Logo,Top,Giving,Middle,Head,Phone,Cash,Momo,Footer,Receive
,Middle1} from './donatelements'
import './donate.css'
import {AiFillBank} from 'react-icons/ai'


export const Donate = () => {
    return (
        <>
        <DonateContainer id='donate'>

            <Heading>

                <Text>
                    <span className="head"> Donate</span>
                   

                </Text>
                <Love/>
                <Giving/>





            </Heading>


            <Boxes>
                <Box>
                  
                    <Top>
                    <Headline>
                  BANK
                    </Headline>
                    <Logo/>
                    </Top>

                    <Middle>
                  <p><span className="money">Bank: Bank of Africa</span></p>  
                  <p><span className="money">Bank Name: Rainbow Trust Foundation</span></p>  
                  <p><span className="money">Account Number: 0004341780009</span></p>  
                  <p><span className="money">SWIFT CODE: AMMAGHAC</span></p>  
                  <p><span className="money">Branch: Abossey-Okai</span></p>  
                  <p><span className="money">ACCRA - GHANA</span></p>  
 
                 



                    </Middle>

                </Box>

                <Box1>
                <Top>
                    <Headline>
                  MOBILE 
                    </Headline>
                    <Phone/>
                    </Top>

                    <Middle1>
                        <p className="money">Vodafone : 0500233667</p>
                        <p className="money">MTN : 0543773523</p>

                    </Middle1>


               
                  
                   
                    
                </Box1>

              

            </Boxes>



<Footer>
    <Receive/>

</Footer>















        </DonateContainer>


















            
        </>
    )
}

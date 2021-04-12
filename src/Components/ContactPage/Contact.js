import React from 'react'
import {ContactContainer,Name,Bottom,Location,Mail,Number,Top,Instagram,LocIcon,LocText,NumText,NumIcon
,MailIcon,MailText,InstaText,InstaIcon
} from './contactelements'

import'./contact.css'

export const Contact = () => {
    return (
        <>
        <ContactContainer  id="contacts">
            
            <Top>

                <Location>
                    <LocIcon/> 
                    <LocText className="c">
                    House Number 17 Okpelor Street,Nmai Dzorn AdMA.

                    </LocText>

                </Location>

                <Number>

                <NumIcon/> 
                    <NumText className="c">
                    ‭+233 26 196 3565‬
                        
                    </NumText>


                </Number>

                <Mail>

                <MailIcon/> 
                    <MailText className="c">
                        rainbowtrustfound@gmail.com
                        
                    </MailText>



                </Mail>

                </Top>

                <Instagram>

                <InstaIcon/> 
                    <InstaText className="c">
                        rainbowtrustfoundgh
                        
                    </InstaText>

                </Instagram>


  

        </ContactContainer>


        </>
            
       
    )
}

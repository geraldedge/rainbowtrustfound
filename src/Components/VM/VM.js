import React from 'react'
import{VMcontainer,Vision,Mission,Visionsmall,Visiontext,Missionsmall,Missiontext} from './vmelements.js';

export const VM = () => {
    return (
        <>
        <VMcontainer>

            <Vision>
                <Visiontext>
                    Vision

                </Visiontext>
                <Visionsmall>
                ‘A world where everyone has access to books that will enrich, improve and change their lives’

                </Visionsmall>

            </Vision>

            <Mission>

            <Missiontext>

                Mission

            </Missiontext>
            <Missionsmall>
            To provide books, resources and training to support an environment in which reading for pleasure, study and lifelong learning can flourish.


    
            </Missionsmall>      

            </Mission>

        
        </VMcontainer>
            
        </>
    )
}



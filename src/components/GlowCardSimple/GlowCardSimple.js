import React from 'react'
import styles from './GlowCardSimple.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import Heading from '../Heading/Heading'

/*
Usage:
<GlowCardSimple props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCardSimple({ props }) {
    return (

        <FadeInSection>
            <AnimatedCard weight={0.05}>
                <div className={styles.bg}>
                    <div className={styles.box}>
                        <div className={`${styles.content}`}>
                            <div className={styles.glowCardContent}>
                                <div style={{ textAlign: 'center' }}>
                                    <Heading text={props.title} fontSize="30px" />
                                </div>



                                {props.content === undefined
                                ? (props.list === undefined) 
                                    ? (props.contact === undefined) 
                                        ? props.rounds.roundDetails.map((round,index)=>
                                            <p key={index + 1} className={styles.glowCardName}>{round.title} -<span style={{color:'#ff65bd'}}>{round.description}</span></p>
                                        )
                                        : props.contact.map((person, index) =>
                                            <p key={index + 1} className={styles.glowCardName}>{person.name} -<i class="fa fa-phone"></i><span style={{color:'#ff65bd'}}>{person.mobile}</span></p>
                                        )
                                    : props.list.map((item, index) =>
                                            <p key={index + 1} className={styles.dateTime}>{item}</p>
                                    )
                                : <p className={styles.glowCardText}><span style={{color:'#ff65bd'}}>{props.content}</span></p>}
                            </div>

                        </div>
                    </div>
                </div>
            </AnimatedCard>
        </FadeInSection>

    )
}

export default GlowCardSimple

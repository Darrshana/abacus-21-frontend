import React, { Component } from 'react'
import styles from "./Homepage.module.css"

//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'

class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.divRef1 = React.createRef()
        this.divRef2 = React.createRef()
        this.divRef3 = React.createRef()
        this.divRef4 = React.createRef()

        this.getScroll = this.getScroll.bind(this)
    }

    componentDidMount() {
        // console.log(this.divRef1)
        // console.log(this.divRef2)
        // console.log(this.divRef3)
        // console.log(this.divRef4)
    }

    getScroll() {
        console.log(document)
    }





    render() {
        return (
            <>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'blue' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    <NeonButton text={"Boom Button"} href={"/events"} color={"#9D00FF"} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    <NeonButton text={"Boom Button"} href={"/about-us"} color={"#26a0da"} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'pink' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    {/* <NeonButton text={"Boom Button"} href={"/workshops"} color={"red"}/>   */}
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!</div>
                </div>
            </>

        )
    }
}

export default Homepage

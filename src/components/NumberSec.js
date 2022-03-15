import React, { Component } from 'react'
import fornumbers1 from '../assets/fornumbers1.png'
import fornumbers2 from '../assets/fornumbers2.png'
import fornumbers3 from '../assets/fornumbers3.png'
import fornumbers4 from '../assets/fornumbers4.png'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';
import './NumberSec.scss'
class NumberSec extends Component {   
    render(){
        return (
            <div className='numbers_sec'>
                <div className='wrapper'>
                    <div className='intro'>
                    <h2>Loyihalar raqamlarda</h2></div>
                    <div className='roww'>
                        <div className='col1'>
                            <img alt="" src={fornumbers1} />
                            <h4><CountUp 
                                start={1}
                                end={250}
                                duration={1.5}
                                separator=" "
                                decimals=""
                                decimal=""
                                >
                                 {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h4>
                            <h5>Total energy</h5>
                        </div>
                        <div className='col1'>
                            <img alt="" src={fornumbers2} />
                            <h4><CountUp 
                                start={1}
                                end={1254}
                                duration={1.5}
                                separator=" "
                                decimals=""
                                decimal=""
                                >
                                 {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h4>
                            <h5>Investment activities</h5>
                        </div>
                        <div className='col1'>
                            <img alt="" src={fornumbers3} />
                            <h4><CountUp 
                                start={1}
                                end={3215}
                                duration={1.5}
                                separator=" "
                                decimals=""
                                decimal=""
                                >
                                 {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h4>
                            <h5>HPS</h5>
                        </div>
                        <div className='col1'>
                            <img alt="" src={fornumbers4} />
                            <h4><CountUp 
                                start={1}
                                end={1487}
                                duration={1.5}
                                separator=" "
                                decimals=""
                                decimal=""
                                >
                                 {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h4>
                            <h5>Construction & Modernization</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberSec

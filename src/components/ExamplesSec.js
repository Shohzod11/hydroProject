import React, { Component } from 'react'
import './ExamplesSec.scss'
import $ from 'jquery'
import { findDOMNode } from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

class ExamplesSec extends Component {

    handleShow1 = () => {
        const el1 = findDOMNode(this.refs.project1);
        const el2 = findDOMNode(this.refs.project2);
        const el3 = findDOMNode(this.refs.project3);
        const el4 = findDOMNode(this.refs.project4);
        const el5 = findDOMNode(this.refs.project5);

        const hr1 = findDOMNode(this.refs.hr1);
        const hr2 = findDOMNode(this.refs.hr2);
        const hr3 = findDOMNode(this.refs.hr3);
        const hr4 = findDOMNode(this.refs.hr4);
        const hr5 = findDOMNode(this.refs.hr5);

        $(hr1).show(500)
        $(hr2).hide()
        $(hr3).hide()
        $(hr4).hide()
        $(hr5).hide()
        $(el1).show(500)
        $(el2).hide()
        $(el3).hide()
        $(el4).hide()
        $(el5).hide()
    }
    
    handleShow2 = () => {
        const el1 = findDOMNode(this.refs.project1);
        const el2 = findDOMNode(this.refs.project2);
        const el3 = findDOMNode(this.refs.project3);
        const el4 = findDOMNode(this.refs.project4);
        const el5 = findDOMNode(this.refs.project5);

        const hr1 = findDOMNode(this.refs.hr1);
        const hr2 = findDOMNode(this.refs.hr2);
        const hr3 = findDOMNode(this.refs.hr3);
        const hr4 = findDOMNode(this.refs.hr4);
        const hr5 = findDOMNode(this.refs.hr5);

        $(hr1).hide()
        $(hr2).show(500)
        $(hr3).hide()
        $(hr4).hide()
        $(hr5).hide()
        $(el2).show(500)
        $(el1).hide()
        $(el3).hide()
        $(el4).hide()
        $(el5).hide()
    }
    
    handleShow3 = () => {
        const el1 = findDOMNode(this.refs.project1);
        const el2 = findDOMNode(this.refs.project2);
        const el3 = findDOMNode(this.refs.project3);
        const el4 = findDOMNode(this.refs.project4);
        const el5 = findDOMNode(this.refs.project5);

        const hr1 = findDOMNode(this.refs.hr1);
        const hr2 = findDOMNode(this.refs.hr2);
        const hr3 = findDOMNode(this.refs.hr3);
        const hr4 = findDOMNode(this.refs.hr4);
        const hr5 = findDOMNode(this.refs.hr5);

        $(hr3).show(500)
        $(hr2).hide()
        $(hr1).hide()
        $(hr4).hide()
        $(hr5).hide()
        $(el3).show(500)
        $(el2).hide()
        $(el1).hide()
        $(el4).hide()
        $(el5).hide()
    }
    
    handleShow4 = () => {
        const el1 = findDOMNode(this.refs.project1);
        const el2 = findDOMNode(this.refs.project2);
        const el3 = findDOMNode(this.refs.project3);
        const el4 = findDOMNode(this.refs.project4);
        const el5 = findDOMNode(this.refs.project5);

        const hr1 = findDOMNode(this.refs.hr1);
        const hr2 = findDOMNode(this.refs.hr2);
        const hr3 = findDOMNode(this.refs.hr3);
        const hr4 = findDOMNode(this.refs.hr4);
        const hr5 = findDOMNode(this.refs.hr5);

        $(hr4).show(500)
        $(hr2).hide()
        $(hr3).hide()
        $(hr1).hide()
        $(hr5).hide()
        $(el4).show(500)
        $(el2).hide()
        $(el3).hide()
        $(el1).hide()
        $(el5).hide()
    }
    
    handleShow5 = () => {
        const el1 = findDOMNode(this.refs.project1);
        const el2 = findDOMNode(this.refs.project2);
        const el3 = findDOMNode(this.refs.project3);
        const el4 = findDOMNode(this.refs.project4);
        const el5 = findDOMNode(this.refs.project5);

        const hr1 = findDOMNode(this.refs.hr1);
        const hr2 = findDOMNode(this.refs.hr2);
        const hr3 = findDOMNode(this.refs.hr3);
        const hr4 = findDOMNode(this.refs.hr4);
        const hr5 = findDOMNode(this.refs.hr5);

        $(hr5).show(500)
        $(hr2).hide()
        $(hr3).hide()
        $(hr4).hide()
        $(hr1).hide()
        $(el5).show(500)
        $(el2).hide()
        $(el3).hide()
        $(el4).hide()
        $(el1).hide()
    }
    
    
    render(){
        return (
            <div className='examples_sec'>
                <div className='bContainer'>
                
                        <div className='wrapper'>
                            <div className='left_box'>   
                            <div className='head'>
                                <h2>Bizning ishlarimiz siz uchun</h2>
                            </div>            
                            <ul>
                                <li className='active'><hr ref="hr1"></hr><button onClick={this.handleShow1}>Hydropower Capabilities</button></li>
                                <li><hr ref="hr2"></hr><button onClick={this.handleShow2}>Hydropower Capabilities</button></li>
                                <li><hr ref="hr3"></hr><button onClick={this.handleShow3}>Hydropower Capabilities</button></li>
                                <li><hr ref="hr4"></hr><button onClick={this.handleShow4}>Hydropower Capabilities</button></li>
                                <li><hr ref="hr5"></hr><button onClick={this.handleShow5}>Hydropower Capabilities</button></li>
                            </ul>
                            <a href="/iqtisodiy">Ko'proq <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </a>
                            </div>
                            <div className='right_box'>
                                <div className='wrapper'>
                                    <ul>
                                    <li className='active'><img  ref="project1" src={project1} / ></li>
                                    <li><img  ref="project2" src={project2} / > </li>    
                                    <li><img  ref="project3" src={project3} / > </li>    
                                    <li><img  ref="project4" src={project4} / > </li>   
                                    <li><img  ref="project5" src={project5} / > </li>
                                    </ul>   
                                </div> 
                            </div>
                        </div>
                    </div>
            </div>
        )
}
}

export default ExamplesSec

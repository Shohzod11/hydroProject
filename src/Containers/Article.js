import React from "react";
import './article.scss';
import ActivitiesHeader from './ActivitiesHeader'
import image1 from "../images/Rectangle_18.jpg"
import image2 from "../images/Rectangle_23.jpg"
import image3 from "../images/Rectangle_24.jpg"
import image4 from "../images/Rectangle_25.jpg"
import image5 from "../assets/activitiesHeaderFoto3.jpg"
import AOS from "aos";
import { Image } from "antd";

export default class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: props.data,
        isOpen: false,
      };
    }
  
    componentDidMount() {
        if(!this.state.isOpen){
            AOS.init()
            this.setState({isOpen: true})
        }
    }
    render(){
        return (
            <>
                <ActivitiesHeader type={"Maqola"}/>
                <div className="article">
                    <div className="header_text">Jarayondagi loyihalar</div>
                    <p>
                        Gracon is providing and installing a new rotary phase converter, a new 480volt 125amp panelboard, and intercepting existing conduits that are connecting to a new panel.  In addition the project consists of replacing conduit connections for new valve actuators, replacing conductors to valves, supplying and replacing three disconnects feeding power to the dam, and providing and installing a new conduit and power conductors for new hoist inside the intake tower.<br /><br />
                        Gracon partnered with  United States Bureau of Reclamation to replace aging portable water lines that service the Visitor Center at Hoover Dam among many other facilities at the top of the dam. Gracon replaced the existing steel lines with stainless steel piping.  Access to some sections of the 2,500’ long line is challenging. Because the stainless steel pipe is welded, Gracon  ensured the welding procedures protected both the government’s and our personnel from exposure to Hexavalent Chromium, especially in the tunnel portion of the work. A portion of the line being replaced had electrical lines attached to the supports in which Gracon’s electrical division supported the work by installing replacement conduits and junction boxes.<br /><br />
                        Gracon is providing and installing a new rotary phase converter, a new 480volt 125amp panelboard, and intercepting existing conduits that are connecting to a new panel.  In addition the project consists of replacing conduit connections for new valve actuators, replacing conductors to valves, supplying and replacing three disconnects feeding power to the dam, and providing and installing a new conduit and power conductors for new hoist inside the intake tower. <br /><br />
                        Gracon partnered with  United States Bureau of Reclamation to replace aging portable water lines that service the Visitor Center at Hoover Dam among many other facilities at the top of the dam. Gracon replaced the existing steel lines with stainless steel piping.  Access to some sections of the 2,500’ long line is challenging. Because the stainless steel pipe is welded, Gracon  ensured the welding procedures protected both the government’s and our personnel from exposure to Hexavalent Chromium, especially in the tunnel portion of the work. A portion of the line being replaced had electrical lines attached to the supports in which Gracon’s electrical division supported the work by installing replacement conduits and junction boxes.
                    </p>
                    <span>Projects on images</span>
                    <Image alt="" data-aos="fade-up" data-aos-once='true' data-aos-duration="1500" className="header_galery" src={image5} />
                    <div className="galery">
                        <Image alt=""  data-aos="fade-up" data-aos-once='true' data-aos-duration="1500"  src={image1} />
                        <Image alt=""  data-aos="fade-up" data-aos-once='true' data-aos-duration="1500"  src={image2}  />
                        <Image alt=""  data-aos="fade-up" data-aos-once='true' data-aos-duration="1500" src={image3}  />
                        <Image alt=""  data-aos="fade-up" data-aos-once='true' data-aos-duration="1500" src={image4}  />
                    </div>
                </div>
            </>
        )
    }
}
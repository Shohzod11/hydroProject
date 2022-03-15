import React from "react";
import "./activitiesCard.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Image } from "antd";

class ActivitiesCard extends React.Component {
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

   
  
    render() {
        const data = this.state.data;
        return (
            <>
                <div className="_card">
                    <div className="text">
                        <div className="date">
                            <div />
                            <span>{data.date.startDate}</span><br />
                            <span>{data.date.finishDate}</span>
                        </div>
                        <div  data-aos="fade-up" data-aos-once='true' 
                            data-aos-duration="1500" className="about">
                            <b>{data.headText}</b>
                            <p>{data.text}</p>
                            <span><Link to="/activitiesPage/article">see more</Link></span>
                        </div>
                    </div>
                    <div className="image">
                        {data.images.map(item =><Image key={item.img}  data-aos="zoom-in" data-aos-once='true' src={item.img} />)}
                    </div>
                </div>
            </>
        )
    }
  }

export  default ActivitiesCard;
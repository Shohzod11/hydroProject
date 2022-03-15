import React from "react"
import "./activitiesType.scss"
import ActivitiesCard from "./ActivitiesCard"
import image1 from "../images/Rectangle_18.jpg"
import image2 from "../images/Rectangle_23.jpg"
import image3 from "../images/Rectangle_24.jpg"
import image4 from "../images/Rectangle_25.jpg"
import ActivitiesHeader from "./ActivitiesHeader"

const data = {
    headText: "Blung'ur suv ombori",
    text: "Replaced two outdated control panels for the service gates with two new stainless steel control panels.  Additional control conduit and conductors were installed to expand the control to include two emergency gates that were originally only operated by a hand pump.  Two electrically actuated valves were replaced, and two valves were added to control the hydraulic control of the emergency gates.",
    link: "#",
    date: {
        startDate: "9 Mart 2021",
        finishDate: "20 Yanvar 2022",
    },
    images: [{img: image1}, {img: image2}, {img: image3}, {img: image4}],
} 


function activitiesFuture (props) {
    if(props.type === "Yakunlar"){
        return ( 
            <>
                <ActivitiesHeader type={"Yakunlar"} />
                <div className="activities_line">
                    <div className="line"></div>
                    <h2>Yakunlangan loyihalar</h2>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                </div>
            </>
        )
    } 
    else if(props.type === "Hozirda"){
        return (
            <>
                <ActivitiesHeader type={"Hozirda"}/>
                <div className="activities_line">
                    <div className="line"></div>
                    <h2>Jarayondagi loyihalar</h2>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                </div>
            </>
        )
    }
    else if(props.type === "Kelgusida"){
        return (
            <>
                <ActivitiesHeader type={"Kelgusida"}/>
                <div className="activities_line">
                    <div className="line"></div>
                    <h2>Kelgusidagi loyihalar</h2>
                    <ActivitiesCard data={data}/>
                </div>
            </>
        )
    }
    else{
        return (
            <> 
                <ActivitiesHeader type={"Barchasi"}/>
                <div className="activities_line">
                    <div className="line" />
                    <h2>Yakunlangan loyihalar</h2>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                    <h2>Jarayondagi loyihalar</h2>
                    <ActivitiesCard data={data}/>
                    <ActivitiesCard data={data}/>
                    <h2>Kelgusidagi loyihalar</h2>
                    <ActivitiesCard data={data}/>
                </div>

            </>    
        )
    }
}

export default activitiesFuture
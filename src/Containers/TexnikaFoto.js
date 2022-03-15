import React, { useEffect, useState } from "react";
import "./texnikaFoto.scss"
import {texnika_API} from "./data";
import TexnikaModal from "./TexnikaModal";
import Aos from "aos";

export default function TexnikaFoto () {
    const [state, setState] = useState(texnika_API);
    const [type, setType] = useState("first");
    const [texnikaModal,  setTexnikaModal] = useState({
        isActive: false,
        id: 0,
    })

    useEffect(() => Aos.init())

    const changeTypeMenu = (type) => {
        setType(type);
    }

    return (
        <>
            <div className="texnika_foto" id="texnik">
                <div className="texnika_menu">
                    <span onClick={() => changeTypeMenu("all")}
                          className={`${type === "all" ? "active" : null}`}>All Machines</span>
                    <span onClick={() => changeTypeMenu("first")}
                          className={`${type === "first" ? "active" : null}`}>First Category Name</span>
                    <span onClick={() => changeTypeMenu("second")}
                          className={`${type === "second" ? "active" : null}`}>Second Category Name</span>
                    <span onClick={() => changeTypeMenu("third")} 
                          className={`${type === "third" ? "active" : null}`}>Third Category Name</span>
                </div>
                <div className="texnika_galery">            
                    <div className={`machine_cards ${(type === "first") || (type === "all") ? "active" : null}`}>
                       {state.map((item) => {
                            if(item.type !== "first"){
                                return null;
                            }
                            return(
                                <div className="machine_card_min" key={item.id} onClick={() => setTexnikaModal({isActive: true, id: item.id})}>
                                    <img alt="" src={item.img} data-aos="fade-down" data-aos-duration="1000" data-aos-once='true' />
                                    <div>
                                        <span>{item.name}</span>
                                        <span>{item.amount}</span>
                                    </div>
                                </div>  
                            )
                        })}   
                    </div>

                    <div className={`machine_cards ${(type === "second") || (type === "all") ? "active" : null}`}>
                        {state.map((item) => {
                            if(item.type !== "second"){
                                return null;
                            }
                            return(
                                <div className="machine_card_min" key={item.id} onClick={() => setTexnikaModal({isActive: true, id: item.id})}>
                                    <img alt="" src={item.img} data-aos="fade-down" data-aos-duration="1000" data-aos-once='true' />
                                    <div>
                                        <span>{item.name}</span>
                                        <span>{item.amount}</span>
                                    </div>
                                </div>  
                            )
                        })}   
                    </div>

                    <div className={`machine_cards ${(type === "third") || (type === "all") ? "active" : null}`}>
                        {state.map((item) => {
                            if(item.type !== "third"){
                                return null;
                            }
                            return(
                                <div className="machine_card_min" key={item.id} onClick={() => setTexnikaModal({isActive: true, id: item.id})}>
                                    <img alt="" src={item.img} data-aos="fade-down" data-aos-duration="1000" data-aos-once='true' />
                                    <div>
                                        <span>{item.name}</span>
                                        <span>{item.amount}</span>
                                    </div>
                                </div>  
                            )
                        })}   
                    </div>
                </div>
            </div>
            <TexnikaModal data={state} texnikaModal={texnikaModal} setTexnikaModal={setTexnikaModal}/>
        </>
    )
}
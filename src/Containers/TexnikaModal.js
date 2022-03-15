import React from "react";
import "./texnikaModal.scss"
import { GrClose } from "react-icons/gr"

export default function TexnikaModal ({data, texnikaModal, setTexnikaModal}) {
    console.log(data, texnikaModal, setTexnikaModal)
    return(
        <>
            <div className="modal_container" style={{"display": `${texnikaModal.isActive ? "block" : "none"}`}}>
                <div className="texnika_card">
                    <div onClick={() => setTexnikaModal({isActive: false, id: 0})} className="texnika_exit">
                        <GrClose />
                    </div>
                    <div className="texnika_img">
                        <img alt="" src={data[texnikaModal.id].img}></img>
                    </div>
                    <div className="texnika_about">
                        <span className="header_about">{data[texnikaModal.id].name}</span>
                        <p><b>Parametr name:</b> Malum qilamizki, xabarimiz shu xaqdaki!</p>
                        <p><b>Parametr name:</b> Malum qilamizki, xabarimiz shu xaqdaki!</p>
                        <p><b>Parametr name:</b> Malum qilamizki, xabarimiz shu xaqdaki!</p>
                        <p><b>Parametr name:</b> Malum qilamizki, xabarimiz shu xaqdaki!</p>
                        <p><b>Parametr name:</b> Malum qilamizki, xabarimiz shu xaqdaki!</p>
                        <span className="amount">Amount of Machine: {data[texnikaModal.id].amount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
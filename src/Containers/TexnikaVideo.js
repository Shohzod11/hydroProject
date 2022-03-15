import React from "react";
import "./texnikaVideo.scss"

export default function texnikaVideo (){
    return(
        <>
            <div className="texnika_video" id="video">
                <div className="video_header">Videolar</div>
                <div className="videos">
                    <div><iframe src="https://www.youtube.com/embed/e1ZksgIRWlY" title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>
                    <div><iframe src="https://www.youtube.com/embed/0ouw614eSug" title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>
                    <div><iframe src="https://www.youtube.com/embed/35SmFCO9p90" title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>
                    <div><iframe src="https://www.youtube.com/embed/apF4LtaxkZc" title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import './Chart.css'
import Chart1 from './Chart1';

function Chart() {

    return (
        <div className='chartet' id='chartet'>
            <h3>Yillik ko'rsatgichlar</h3>
            <div className='chart'>
                <div className='chart_text'>
                    <p>Audience reach</p>
                    <p>31/01/2020 - 06/02/2020</p>
                </div>
                <Chart1 /> 
            </div>
        </div>
    )
}

export default Chart;

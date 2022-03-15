import React from 'react';
import './Shartnomalar.css';
import Shart1 from '../../images/shartnomalar1.png';
import Shart2 from '../../images/shartnomalar2.png';
import Shart3 from '../../images/shartnomalar3.png';
import Shart4 from '../../images/shartnomalar4.png';

function Shartnomalar() {
  return (
    <div className='shartnomalar' id='malumotlar'>
        <div className='h1'><h1>Shartnomalar</h1></div>
        <div className='shartnomalar_card'>
            <div className='card'>
                <img src={Shart1} />
                <section>
                    
                    <h4>Shartnoma mavzusi</h4>
                    <h5>12/11/2021</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
            <div className='card'>
                <img src={Shart2} />
                <section>
                    <h4>Shartnoma mavzusi</h4>
                    <h5>12/11/2021</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
            <div className='card'>
                <img src={Shart3} />
                <section>
                    <h4>Shartnoma mavzusi</h4>
                    <h5>12/11/2021</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
            <div className='card'>
                <img src={Shart4} />
                <section>
                    <h4>Shartnoma mavzusi</h4>
                    <h5>12/11/2021</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
        </div>
    </div>
 )
}

export default Shartnomalar;

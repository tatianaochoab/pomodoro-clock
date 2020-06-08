import React from 'react';
import arriba from '../images/arriba.png';
import abajo from '../images/abajo.png'


const ControlOne = ({ breakLength, sessionLength, breakDecrement, breakIncrement, sessionDecrement, sessionIncrement }) => {

    return (
        <section className='control-1'>
            <article className='art-break'>
                <h3 id='break-label'>Break Length</h3>
                <div id='break-length'>{breakLength}</div>
                <div className='div-btn'>
                    <button id='break-increment' className='btn' onClick={breakIncrement}><img src={arriba} alt='icon' /></button>
                    <button id='break-decrement' className='btn' onClick={breakDecrement}><img src={abajo} alt='icon' /></button>
                </div>
            </article>
            <article className='art-sess'>
                <h3 id='session-label'>Session Length</h3>
                <div id='session-length'>{sessionLength}</div>
                <div className='div-btn'>
                    <button id='session-increment' className='btn' onClick={sessionIncrement}><img src={arriba} alt='icon' /></button>
                    <button id='session-decrement' className='btn' onClick={sessionDecrement}><img src={abajo} alt='icon' /></button>
                </div>
            </article>
        </section>
    )
}

export default ControlOne;
import React from 'react';
import play from '../images/play.png';
import pause from '../images/pausa.png';
import reset from '../images/reset.png';

let ControlTwo = ({ controlReset, startStop }) => {
    return (
        <section className='control-2'>
            <article className='art-start'>
                <button id='start_stop' className='btn' onClick={startStop}><img src={play} alt='icon' /><img src={pause} /></button>
            </article>
            <article className='art-reset'>
                <button id='reset' className='btn' onClick={controlReset}><img src={reset} alt='icon' /></button>
            </article>
        </section>
    )
}

export default ControlTwo;
import React from 'react';

let Timer = ({ timer, display }) => {
    return (
        <section className='timer'>
            <article>
                <div id='timer-label'>{display}</div>
            </article>
            <article>
                <div id='time-left'>{timer}</div>
            </article>
            <audio id="beep" preload="auto" src="https://goo.gl/65cBl1"></audio>
        </section>
    )
}

export default Timer;
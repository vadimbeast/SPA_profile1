import React from 'react';
import soccerBall from './../../../assets/images/soccerBall.gif';
import p from './Preloader.module.css';


let Preloader = () => {
    return <div className={ p.preloader }>
        <img src={ soccerBall }/>
    </div>
}

export default Preloader;
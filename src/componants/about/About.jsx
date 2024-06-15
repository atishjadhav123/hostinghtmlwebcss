import React, { useState } from 'react'
import './About.css'

const About = ({ setPlayState }) => {
    return <>
        <div className="about">
            <div className="about-left">
                <img src="src/assets/campus3.jpg" alt="" className='about-img' />
                <img src="src/assets/play.svg" alt="" className='play-icon'
                    onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERCITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas aliquid molestias eos assumenda in culpa explicabo dolorum voluptatibus cupiditate. Eaque soluta sit maxime eligendi possimus! Esse fuga ipsam sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas aliquid molestias eos assumenda in culpa explicabo dolorum voluptatibus cupiditate. Eaque soluta sit maxime eligendi possimus! Esse fuga ipsam sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas aliquid molestias eos assumenda in culpa explicabo dolorum voluptatibus cupiditate. Eaque soluta sit maxime eligendi possimus! Esse fuga ipsam sit.</p>
            </div>
        </div>
    </>
}

export default About
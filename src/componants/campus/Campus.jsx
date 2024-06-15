import React from 'react'
import './Campus.css'

const Campus = () => {
    return <>
        <div className="campus">
            <div className="gallery">
                <img src="src/assets/campus1.jpg" alt="" />
                <img src="src/assets/campus2.jpg" alt="" />
                <img src="src/assets/campus3.jpg" alt="" />
                <img src="src/assets/campus4.jpg" alt="" />
            </div>
            <button className='btn dark-btn'>See more img <img src="src/assets/arrow-right.svg" alt="" /></button>
        </div>
    </>
}

export default Campus
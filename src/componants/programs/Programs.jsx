import React from 'react'
import './Programs.css'

const Programs = () => {
    return <>
        <div className="programs">
            <div className='program'>
                <img src="src/assets/logo21.jpg" alt="" />
                <div className="caption">
                    <img src="src/assets/program1.svg" alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src="src/assets/logo24.jpg" alt="" />
                <div className="caption">
                    <img src="src/assets/program2.svg" alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src="src/assets/logo23.jpg" alt="" />
                <div className="caption">
                    <img src="src/assets/program3.svg" alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    </>
}

export default Programs
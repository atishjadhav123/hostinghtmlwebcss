import React, { useRef } from 'react'
import './Testimonials.css'
const Testimonials = () => {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return <>
        <div className="testimonials">
            <img src="src/assets/arrow-right.svg" alt="" className='next-btn'
                onClick={slideForward} />
            <img src="src/assets/arrow-left.svg" alt="" className='back-btn'
                onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="src/assets/logo1.jpg" alt="" className='imgslider' />
                                <div>
                                    <h3>William Jaction1</h3>
                                    <span>Endustry USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas placeat tempora, voluptates, aut doloribus ea dolore nobis debitis similique perferendis delectus et accusantium beatae reprehenderit aliquam, quos error quas!   s x s d</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="src/assets/logo.5.jpg" alt="" className='imgslider' />
                                <div>
                                    <h3>William Jaction2</h3>
                                    <span>Endustry USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas placeat tempora, voluptates, aut doloribus ea dolore nobis debitis similique perferendis delectus et accusantium beatae reprehenderit aliquam, quos error quas!   s x s d</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="src/assets/logo1.jpg" alt="" className='imgslider' />
                                <div>7.jpg
                                    <h3>William Jaction3</h3>
                                    <span>Endustry USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas placeat tempora, voluptates, aut doloribus ea dolore nobis debitis similique perferendis delectus et accusantium beatae reprehenderit aliquam, quos error quas!   s x s d</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="src/assets/logo1.jpg" alt="" className='imgslider' />
                                <div>
                                    <h3>William Jaction4</h3>
                                    <span>Endustry USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas placeat tempora, voluptates, aut doloribus ea dolore nobis debitis similique perferendis delectus et accusantium beatae reprehenderit aliquam, quos error quas!   s x s d</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Testimonials
import React, { useState } from 'react'
import Navbar from './componants/navbar/Navbar'
import Hero from './componants/hero/Hero'
import Programs from './componants/programs/Programs'
import Title from './componants/title/Title'
import About from './componants/about/About'
import Campus from './componants/campus/Campus'
import Testimonials from './componants/Testimonials/Testimonials'
import { Contact } from './componants/contact/Contact'
import Footer from './componants/footer/Footer'
import VideoPlayer from './componants/videoplayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return <>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle='Our Program' title='What we Offer' />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Campus photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student says' />
      <Testimonials />
      <Title subTitle='Contact us' title='Get In Touch' />
      <Contact />
      <Title subTitle='Footer us' title='Footer Section' />
      <Footer />
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
  </>
}

export default App
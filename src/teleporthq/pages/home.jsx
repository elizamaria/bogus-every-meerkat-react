import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bogus Every Meerkat</title>
        <meta property="og:title" content="Bogus Every Meerkat" />
      </Helmet>
      <div>
        <DangerousHTML html={`<h1>Aaaa</h1>`}></DangerousHTML>
      </div>
      <Player
        src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
        autoplay
        speed="1"
        background="transparent"
        className="home-lottie-node"
      ></Player>
    </div>
  )
}

export default Home

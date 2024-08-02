import React, { useState } from 'react'
import About from '../../components/About/About'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import './Home.css'

const Home = () => {

  const [category, setCategory] = useState("All");
  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <AppDownload /> */}
      <About setPlayState={setPlayState} />
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default Home

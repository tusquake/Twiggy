import React, { useRef } from 'react';
import { assets } from '../../assets/assets';
import './VideoPlayer.css';

const VideoPlayer = ({ playState, setPlayState }) => {


  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}
      onClick={closePlayer}>
      <video src={assets.about_vid} autoPlay muted controls loop></video>
    </div >
  )
}

export default VideoPlayer

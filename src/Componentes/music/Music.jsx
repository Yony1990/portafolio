import { useState } from 'react'
import React from 'react'
import musics from './Datas/data';
import "./css/general.css"
import Card from './Card';
import List from './List';

const Music = ({ musicShow: {musicReproduction, setMusicReproduction} }) => {
    const [musicNumber, setMusicNumber] = useState(0)
    const [open, setOpen] = useState(false)
      
    return (
      <div className={musicReproduction ? "container" : "musicOut"}>
  
        <main className='main-music'>
          {/* <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div> */}
          <img className='blur-img' src={musics[musicNumber].thumbnail} alt="" />
          <Card props={{musicNumber, setMusicNumber, open, setOpen, setMusicReproduction}} />
          <List props={{open, setOpen, musicNumber, setMusicNumber}} />
        </main>
        
      </div>
    )
}

export default Music

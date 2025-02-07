import React, { useEffect, useState } from 'react'
import './css/list.css'
import musics from './Datas/data/index.js';
import { timer } from './utils/timer.js';

const List = ({props: {open, setOpen, musicNumber, setMusicNumber}}) => {
  return (
    <div className={`listMusic ${open ? 'show' : ''}`}>

      <img className='blur-img' src={musics[musicNumber].thumbnail} alt="" />

      <div className="headerMusic">
        <div>
            <i className="material-icons">
                queue_music
            </i>
            <span>Play List</span>
            
        </div>
        <i className="material-icons" onClick={() => setOpen(!open)}>
            close
        </i>
      </div>

      <ul>
        {
            musics.map((music, index) => (
                <li key={music.id} 
                    onClick={() => {
                        setMusicNumber(index)
                        
                    }}
                   className={`${musicNumber === index ? 'playing' : ''}`}
                >
                    <div className="row">
                        <span>{music.title}</span>
                        <p>{music.artist}</p>
                    </div>
                    <Duration music={music} />
                    
                </li>
            ))
        }
      </ul>
      
    </div>
  )
}

export default List

const Duration = ({music}) => {

    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = new Audio(music.src);
        audio.onloadedmetadata = () => {
            if(audio.readyState > 0) {
                setDuration(audio.duration)
            }
        }
    }, [music])

    return (
        <span className='duration'>{timer(duration)}</span>
    )
}
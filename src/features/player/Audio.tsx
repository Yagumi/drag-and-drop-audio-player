import React, { useRef, useEffect } from 'react'

import track from './1.mp3';

export const Audio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    console.log(audioRef)
    const audio = document.querySelector('audio') as HTMLAudioElement;
    audio.play();
   }
   
 

  return (
    <div>
      <audio ref={audioRef} src={track}></audio>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useAppDispatch } from '../../app/hooks';

import track from '../../songs/1.mp3';

import { togglePlayPause } from './playerSlice';
import { selectPlayList } from '../drag-and-drop/dragAndDropSlice';

import { Range } from './Range';

export const Player = () => {
  const dispatch = useAppDispatch();
  const songsList = useAppSelector(selectPlayList)

  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackTime, setTrackTime] = useState<number>();
  const [currentTime, setCurrentTime] = useState<number>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [track, setTrack] = useState<string>()

  const PlayPause = () => {
    setIsPlaying(state => !state)
    dispatch(togglePlayPause(audioRef));

    console.dir(audioRef.current?.duration)
    setTrackTime(audioRef.current?.duration);
    console.dir(audioRef.current?.currentTime)
    setCurrentTime(audioRef.current?.currentTime);
  }

  useEffect(() => {
    setTrack(songsList[0]?.url)
  },[songsList])

  return (
    <div>
      <div>
        <audio ref={audioRef} src={track}></audio>
      </div>
      {/* <Range max={trackTime} value={currentTime} /> */}
      <button>Prev</button>
      <button onClick={PlayPause}>
        {
          isPlaying ? "Pause" : "Play" 
        }
      </button>
      <button>Next</button>
    </div>
  )
}

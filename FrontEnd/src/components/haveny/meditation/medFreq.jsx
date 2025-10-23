import React, { useEffect, useState, useRef } from "react";
import style from "./medFreq.module.css";
import ChatNavBar from "../../navBar-Footer/chatNavBar";
import CopyRight from "../../../assets/copyRight";
import { useLocation } from "react-router-dom";
import { Play, Pause, Volume2 } from "lucide-react"; // Icons for buttons

export default function MedFreq() {
  const { state } = useLocation();
  const { item } = state || {}; 

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [frequency, setFrequency] = useState('');
  const [audio, setAudio] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume (1 = 100%)
  
  const audioRef = useRef(null);

  useEffect(() => {
    if (item) {
      console.log("Title:", item.path);
      setTitle(item.title || 'No Title');
      setSubTitle(item.description || 'No Description');
      setAudio(item.link || '');
      setFrequency(item.frequency.substring(0, 6));
    }
  }, [item]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    setVolume(volumeValue);
    audioRef.current.volume = volumeValue;
  };

  return (
    <div className={style.main}>
      <div className={style.medFocus}>
        <div className={style.navBar}>
          <ChatNavBar title={frequency} Heading={frequency} />
        </div>
        <div className={style.medFreq}>
          <div className={style.frequencyMain}>
            <div className={style.freq3DModel}>
              {/* 3D Model Placeholder */}
            </div>
            <div className={style.freqControl}>
              <button 
                className={style.freqPlayBtn} 
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause size={30} /> : <Play size={30} />}
              </button>
              <div className={style.freqVolume}>
                <Volume2 size={30} />
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume} 
                  onChange={handleVolumeChange} 
                  className={style.volumeSlider} 
                />
              </div>
            </div>
            <div className={style.freqTitle}>
              <h1>{title}</h1>
            </div>
            <div className={style.subHead}>
              <h3>{subTitle}</h3>
            </div>
            <audio ref={audioRef} src={audio} preload="auto" />
          </div>
        </div>
        <div className={style.copy}>
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

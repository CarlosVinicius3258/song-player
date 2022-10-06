import React, { useState, useRef } from 'react';
import TimeLine from '../../inputs/TimeLine/TimeLine';
import styles from './AudioPlayer.module.css';
// import { Container } from './styles';

const AudioPlayer = (props: { song: any }) => {
  const [sliderSize, setSliderSize] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const audioRef: any = useRef(null);

  if (isPlaying) {
    console.log('Songs', props.song);
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }

  const onCanPlay = () => {
    setCanPlay(true);
  };
  return (
    <div className={styles['player-container']}>
      <div className={styles['button-container']}>
        <button disabled={!canPlay} onClick={() => setIsPlaying(!isPlaying)} className={styles['player-button']}>
          {isPlaying ? `\u2759\u2759` : '\u25B8'}
        </button>
      </div>

      <div className={styles['player-timeline']}>
        <TimeLine sliderSize={sliderSize} onChangeSize={setSliderSize} />
      </div>
      <audio
        onTimeUpdate={(e) => setSliderSize(Math.floor(e.currentTarget.currentTime))}
        ref={audioRef}
        src={props?.song?.path}
        controls
        className={styles['audio']}
      />
    </div>
  );
};

export default AudioPlayer;

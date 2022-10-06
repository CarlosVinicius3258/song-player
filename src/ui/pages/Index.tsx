import React, { useState } from 'react';
import AudioPlayer from '../../components/data-display/AudioPlayer/AudioPlayer';
import MusicList from '../../components/data-display/MusicList/MusicList';
import TimeLine from '../../components/inputs/TimeLine/TimeLine';
import styles from './Index.module.css';
// import { Container } from './styles';

const songs = [
  {
    id: 1,
    name: 'abc',
    artist: '123',
    duration: 95,
  },
  {
    id: 2,
    name: 'def',
    artist: '456',
    duration: 80,
  },
  {
    id: 3,
    name: 'ghi',
    artist: '789',
    duration: 149,
  },
  {
    id: 4,
    name: 'jkl',
    artist: '101112',
    duration: 100,
  },
];
const Index: React.FC = () => {
  const [sliderSize, setSliderSize] = useState(0);
  return (
    <>
      <MusicList onSelect={() => console.log('Cliquei')} songs={songs} selectedMusic={songs[0]} />

      <div className={styles['player-container']}>
        <AudioPlayer />
        <TimeLine sliderSize={sliderSize} onChangeSize={setSliderSize} />
      </div>
    </>
  );
};

export default Index;

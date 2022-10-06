import React, { useState } from 'react';
import AudioPlayer from '../../components/data-display/AudioPlayer/AudioPlayer';
import MusicList from '../../components/data-display/MusicList/MusicList';

const songs = [
  {
    id: 1,
    name: 'Time is now',
    artist: 'Independent Music Licensing Collective (IMLC)',
    duration: 95,
    path: '../../../src/assets/songs/Time is Now.mp3',
  },
  {
    id: 2,
    name: 'Crooked Putin Clown',
    artist: 'John Lopker',
    duration: 80,
    path: '../../../src/assets/songs/Crooked Putin Clown.mp3',
  },
  {
    id: 3,
    name: '11 vampire hunter',
    artist: 'kaleidoplasm',
    duration: 149,
    path: 'https://freemusicarchive.org/track/saving-babys-party/download/',
  },
  {
    id: 4,
    name: 'Awake But Dreaming',
    artist: 'Ketsa',
    duration: 100,
    path: '../../../src/assets/songs/Awake But Dreaming.mp3',
  },
];
const Index: React.FC = () => {
  const [selectedMusic, setSelectedMusic] = useState({});
  return (
    <>
      <MusicList onSelect={setSelectedMusic} songs={songs} selectedMusic={selectedMusic} />
      <AudioPlayer song={selectedMusic} />
    </>
  );
};

export default Index;

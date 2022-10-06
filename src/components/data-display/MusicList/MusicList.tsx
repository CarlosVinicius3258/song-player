import React from 'react';
import { TimeService } from '../../../data/services/TimeService';
import styles from './MusicList.module.css';

const MusicList = (props: { selectedMusic: any; songs: any; onSelect: any }) => {
  console.log('Songs ', props.songs);
  const isSelected = (music: any) => {
    return props.selectedMusic === music ? styles['selected'] : '';
  };
  return (
    <ul className={styles['music-list']}>
      {props.songs.map((music: any) => {
        return (
          <li
            onClick={() => props.onSelect(music)}
            className={[styles['music-list-item'], isSelected(music)].join(' ')}>
            <div className={styles['information']}>
              <span className={styles['title']}>{music.name}</span>
              <span className={styles['artist']}>{music.artist}</span>
              <span className={styles['duration']}>{TimeService.timeDisplay(music.duration)}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MusicList;

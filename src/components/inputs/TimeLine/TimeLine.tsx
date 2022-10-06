import React from 'react';
import styles from './TimeLine.module.css';
// import { Container } from './styles';

const TimeLine = (props: { sliderSize: number; onChangeSize: any }) => {
  return (
    <div className={styles['timeline-container']}>
      <div className={styles['timeline-line']} style={{ '--width': `${props.sliderSize}%` } as any} />
      <input
        type='range'
        className={styles['timeline-slider']}
        onChange={(e) => {
          props.onChangeSize(e.target.value);
        }}
      />
    </div>
  );
};

export default TimeLine;

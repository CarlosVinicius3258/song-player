import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Index from './ui/pages/Index';
import styles from './App.module.css';
import TimeLine from './components/inputs/TimeLine/TimeLine';

function App() {
  return (
    <div className='App'>
      <header className={styles['header']}>
        <h1>
          Treina<span>Music</span>
        </h1>
      </header>
      <Index />
    </div>
  );
}

export default App;

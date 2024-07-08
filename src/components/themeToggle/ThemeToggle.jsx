'use client';

import React, { useContext } from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  const ballStyle = theme === 'dark' ? { transform: 'translateX(18px)' } : {};

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/assets/sun-solid.svg" width={14} height={14} alt="l" />
      <div className={styles.ball} style={ballStyle}></div>
      <Image src="/assets/moon-solid.svg" width={14} height={14} alt="d" />
    </div>
  );
};

export default ThemeToggle;

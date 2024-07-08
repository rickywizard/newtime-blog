'use client';

import React, { useState } from 'react';
import styles from './writepage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function WritePage() {
  
  const [open, setOpen] = useState(false);
  
  const [value, setValue] = useState('');
  
  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Judul" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            className={styles.plus}
            src="/assets/plus-solid.svg"
            alt="+"
            width={16}
            height={16}
            priority
          />
        </button>
        
          <div className={`${styles.add} ${open ? styles.show: ''}`}>
            <button className={styles.addButton}>
              <Image
                src="/assets/image.png"
                alt="img"
                width={16}
                height={16}
                priority
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/assets/external.png"
                alt="ext"
                width={16}
                height={16}
                priority
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/assets/video.png"
                alt="vid"
                width={16}
                height={16}
                priority
              />
            </button>
          </div>
        
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Ceritakan kisahmu..."
        />
      </div>
      <div className={styles.publish}>
        Publish
      </div>
    </div>
  );
}

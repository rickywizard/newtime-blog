'use client';

import React, { useState } from 'react';
import styles from './writepage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loader from '@/components/loader/Loader';

export default function WritePage() {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState(null);

  const [value, setValue] = useState('');

  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'unauthenticated') {
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

        <div className={`${styles.add} ${open ? styles.show : styles.hide}`}>
          <input
            type="file"
            id="image"
            onChange={(e) => e.target.files[0]}
            style={{ display: 'none' }}
          />
          <button className={styles.addButton}>
            <label className={styles.point} htmlFor="image">
              <Image
                src="/assets/image.svg"
                alt="img"
                width={16}
                height={16}
                priority
              />
            </label>
          </button>
          <button className={styles.addButton}>
            <Image
              src="/assets/upload.svg"
              alt="ext"
              width={16}
              height={16}
              priority
            />
          </button>
          <button className={styles.addButton}>
            <Image
              src="/assets/video.svg"
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
      <div className={styles.publish}>Publish</div>
    </div>
  );
}

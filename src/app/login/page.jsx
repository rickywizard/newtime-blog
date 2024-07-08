'use client';

import React from 'react';
import styles from './login.module.css';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader/Loader';

export default function LoginPage() {
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
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          <Image
            src="/assets/google.png"
            alt=""
            width={30}
            height={30}
            className={styles.image}
          />
          <span>Sign in with Google</span>
        </div>
        <div className={styles.socialButton}>
          <Image
            src="/assets/github.png"
            alt=""
            width={30}
            height={30}
            className={styles.image}
          />
          <span>Sign in with Github</span>
        </div>
        <div className={styles.socialButton}>
          <Image
            src="/assets/facebook.png"
            alt=""
            width={30}
            height={30}
            className={styles.image}
          />
          <span>Sign in with Facebook</span>
        </div>
      </div>
    </div>
  );
}

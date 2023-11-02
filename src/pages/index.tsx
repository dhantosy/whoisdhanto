import Head from 'next/head'
import Image from 'next/image'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhanto Santika Yudha | Front End Engineer</title>
        <meta name='title' content='Dhanto Santika Yudha | Front End Engineer' />
        <meta name='description' content='Front End Engineer' />
        <meta name='keyword' content='Front End Developer, Front End Engineer, UX Engineer, UX Developer, Website Developer, Wordpress Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className='glitch'>
          <div className='glitch-elm' />
          <div className='glitch-elm' />
          <div className='glitch-elm' />
          <div className='glitch-elm' />
          <div className='glitch-elm' />
        </div>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div className={styles.center}>
          <div>
            
              <MouseParallaxChild factorX={0.2} factorY={0.4}>
                <Image
                  className={styles.logo}
                  src='/assets/images/logo-base.png'
                  alt='Dhanto Santika Yudha'
                  width={800}
                  height={363}
                  priority
                  style={{ objectFit: 'contain' }}
                />
                <MouseParallaxChild factorX={0.25} factorY={0.45}>
                  <Image
                    src='/assets/images/logo-layer.png'
                    alt='Dhanto Santika Yudha'
                    width={800}
                    height={363}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </MouseParallaxChild>
              </MouseParallaxChild>
          </div>
        </div>
        </MouseParallaxContainer>
      </main>
    </>
  )
}

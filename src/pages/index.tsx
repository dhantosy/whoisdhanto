/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from '@/styles/Home.module.css'
import { useCallback, useState } from 'react';

export default function Home() {
  const [bgState, setBgState] = useState(() => ('/assets/images/background-1.jpg'));

  const nextWord = (function () {
    const bgData = [
      '/assets/images/background-2.jpg',
      '/assets/images/background-3.jpg',
      '/assets/images/background-4.jpg',
      '/assets/images/background-5.jpg',
      '/assets/images/background-1.jpg',
    ];

    let count = -1;
    return function () {
      return bgData[++count % bgData.length];
    }
  }());

  const handleMobileMenuClick = useCallback(() => {
    setBgState(nextWord());
  }, []);

  return (
    <>
      <Head>
        <title>Dhanto Santika Yudha | Front End Engineer</title>
        <meta name='title' content='Dhanto Santika Yudha | Front End Engineer' />
        <meta name='description' content='Front End Engineer and UX Developer' />
        <meta name='keyword' content='Front End Developer, Front End Engineer, UX Engineer, UX Developer, Website Developer, Wordpress Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicons/favicon.ico' />

        <meta property='og:title' content='Dhanto Santika Yudha | Front End Engineer' />
        <meta property='og:description' content='Front End Engineer and UX Developer' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://whoisdhanto.com/' />
        <meta property='og:image' content='/assets/images/banner-fb.jpg' />

        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <main className={styles.main}>
        <div className='glitch'>
          {Array.apply(null, Array(5)).map((_, i) => {
            return (
              <div
                key={i}
                className='glitch-elm'
                style={{
                  'backgroundImage': `url(${bgState})`
                }}
              />
            )
          })}
        </div>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
          <div className={styles.center}>
            <div className={styles.logoWrapper} onClick={handleMobileMenuClick}>
                <MouseParallaxChild factorX={0.4} factorY={0.4}>
                  <Image
                    className={styles.logo}
                    src='/assets/images/logo-base.png'
                    alt='Dhanto Santika Yudha'
                    width={800}
                    height={363}
                    sizes={`100vw, 33vw`}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                  <MouseParallaxChild factorX={0.1} factorY={0.1}>
                    <Image
                      className={styles.logoLayer}
                      src='/assets/images/logo-layer.png'
                      alt='Dhanto Santika Yudha'
                      width={800}
                      height={363}
                      sizes={`100vw, 33vw`}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </MouseParallaxChild>
                </MouseParallaxChild>
            </div>
            <section className={styles.socials}>
              <Link
                href='https://www.linkedin.com/in/dhantosy/'
                target='_blank'
                aria-label='linkedin'
              >
                <div className={`glitch-social ${styles.socialItem}`}>
                  <div className={styles.icon}>
                    <FaLinkedin />
                  </div>
                  <div className={styles.iconShadow}>
                    <FaLinkedin />
                  </div>
                </div>
              </Link>
              <Link
                href='https://github.com/dhantosy'
                target='_blank'
                aria-label='github'
              >
                <div className={`glitch-social ${styles.socialItem}`}>
                  <div className={styles.icon}>
                    <FaGithub />
                  </div>
                  <div className={styles.iconShadow}>
                    <FaGithub />
                  </div>
                </div>
              </Link>
            </section>
          </div>
        </MouseParallaxContainer>
      </main>
    </>
  )
}

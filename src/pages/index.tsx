import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { FaGithub, FaLinkedin, FaDesktop, FaArrowRight, FaTimes } from 'react-icons/fa'

import styles from '@/styles/Home.module.css'
import { useCallback, useState } from 'react';

export default function Home() {
  const [bgState, setBgState] = useState(() => ('/assets/images/background-1.jpg'));
  const [isProjectShown, setIsProjectShown] = useState(false);

  const nextImage = (function () {
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

  const handleLogoClick = useCallback(() => {
    setBgState(nextImage());
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className={isProjectShown ? `${styles.projectWrapper} ${styles.show}` : styles.projectWrapper}>
          <div className={styles.projectClose} onClick={() => setIsProjectShown(false)}>
            <FaTimes size={40} />
          </div>
          <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className={styles.projectParallax}>
            <div className={styles.projectInner}>
              <div className={styles.projectLogo} onClick={handleLogoClick}>
                <MouseParallaxChild factorX={0.4} factorY={0.4}>
                  <Image
                    className={styles.projectImage}
                    src='/assets/images/freelance-logo.png'
                    alt='freelance image'
                    sizes={`100vw, 33vw`}
                    priority
                    width={800}
                    height={250}
                    style={{ objectFit: 'contain' }}
                  />
                </MouseParallaxChild>
              </div>
              <div>
                <div className={styles.projectItem}>
                  <div>
                    <h3>Sightsea Expeditions</h3>
                    <p>UI/UX, Front End Development, Content Creation</p>
                  </div>
                  <div className={styles.projectLink}>
                    <a href="https://www.sightseaexpeditions.com/" target='_blank'>
                      <div>View Site</div>
                      <div className={styles.projectIcon}><FaArrowRight /></div>
                    </a>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <div>
                    <h3>Trip by the Sea</h3>
                    <p>UI/UX, Front End Development, Content Creation</p>
                  </div>
                  <div className={styles.projectLink}>
                    <a href="https://www.tripbythesea.com/" target='_blank'>
                      <div>View Site</div>
                      <div className={styles.projectIcon}><FaArrowRight /></div>
                    </a>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <div>
                    <h3>Joga Yoga Training</h3>
                    <p>UI/UX, Front End Development</p>
                  </div>
                  <div className={styles.projectLink}>
                    <a href="https://jogayogatraining-dhanto-santikas-projects.vercel.app/" target='_blank'>
                      <div>View Site</div>
                      <div className={styles.projectIcon}><FaArrowRight /></div>
                    </a>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <div>
                    <h3>Bali Stingray Diver</h3>
                    <p>UI/UX, Front End Development</p>
                  </div>
                  <div className={styles.projectLink}>
                    <a href="https://www.balistingraydiver.com/" target='_blank'>
                      <div>View Site</div>
                      <div className={styles.projectIcon}><FaArrowRight /></div>
                    </a>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <div>
                    <h3>DCI Indonesia</h3>
                    <p>Front End Development</p>
                  </div>
                  <div className={styles.projectLink}>
                    <a href="https://dci-indonesia.com/" target='_blank'>
                      <div>View Site</div>
                      <div className={styles.projectIcon}><FaArrowRight /></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MouseParallaxContainer>
        </div>
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
          <div className={isProjectShown ? `${styles.center} ${styles.down}` : styles.center}>
            <div className={styles.logoWrapper} onClick={handleLogoClick}>
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
              <div
                onClick={() => setIsProjectShown(true)}
                aria-label='projects'
                className={styles.socialItemWrapper}
              >
                <div className={`glitch-social ${styles.socialItem}`}>
                  <div className={styles.socialIcon}>
                    <div className={styles.icon}>
                      <FaDesktop />
                    </div>
                    <div className={styles.iconShadow}>
                      <FaDesktop />
                    </div>
                  </div>
                  <div className={styles.socialText}>Projects</div>
                </div>
              </div>
              <Link
                href='https://www.linkedin.com/in/dhantosy/'
                target='_blank'
                aria-label='linkedin'
                className={styles.socialItemWrapper}
              >
                <div className={`glitch-social ${styles.socialItem}`}>
                  <div className={styles.socialIcon}>
                    <div className={styles.icon}>
                      <FaLinkedin />
                    </div>
                    <div className={styles.iconShadow}>
                      <FaLinkedin />
                    </div>
                  </div>
                  <div className={styles.socialText}>LinkedIn</div>
                </div>
              </Link>
              <Link
                href='https://github.com/dhantosy'
                target='_blank'
                aria-label='github'
                className={styles.socialItemWrapper}
              >
                <div className={`glitch-social ${styles.socialItem}`}>
                  <div className={styles.socialIcon}>
                    <div className={styles.icon}>
                      <FaGithub />
                    </div>
                    <div className={styles.iconShadow}>
                      <FaGithub />
                    </div>
                  </div>
                  <div className={styles.socialText}>Github</div>
                </div>
              </Link>
            </section>
          </div>
        </MouseParallaxContainer>
      </main>
    </>
  )
}

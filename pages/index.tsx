import React from 'react';
import EinzigartigeTechnologie from '@/components/Einzigartige Technologie'
import Intro from '@/components/Intro'
import Head from 'next/head'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const circleRef1 = React.useRef<any>();
  const circleRef2 = React.useRef<any>();
  const circleRef3 = React.useRef<any>();
  const circleRef4 = React.useRef<any>();
  const circleRef5 = React.useRef<any>();
  React.useEffect(() => {
    gsap.to( circleRef1.current, { 
        scale: 2, 
        opacity: 0, 
        transformOrigin: "50% 50%", 
        scrollTrigger: {
          scrub: true,
          trigger: circleRef1.current,
          start: 0,
          end: 700,
          // toggleActions: 'play none none reverse'
      } }, 
      
    );

    gsap.to( [circleRef2.current, circleRef3.current], { 
        scale: 0, 
        opacity: 0, 
        transformOrigin: "50% 50%", 
        scrollTrigger: {
          scrub: true,
          trigger: circleRef2.current,
          start: 0,
          end: 700,
          // toggleActions: 'play none none reverse'
      } }, 
      
    );

    gsap.to( [circleRef4.current, circleRef5.current], { 
      y: -200, 
      opacity: 0, 
      transformOrigin: "50% 50%", 
      scrollTrigger: {
        scrub: true,
        trigger: circleRef4.current,
        start: 0,
        end: 700,
        // toggleActions: 'play none none reverse'
    } }, 
    
  );
  }, [])
  return (
    <>
      <Head>
        <title>AIR ZEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container relative mx-auto main-wrapper">
        <svg viewBox="0 0 1242 1918" fill="none" className="fixed w-9/12 xl:w-4/5 -z-50 right-[-70px]">
          <path ref={circleRef4} opacity="0.33" d="M50.0812 505.846C55.2567 793.408 335.109 1004.06 627.722 1105.88C920.334 1207.71 1234.95 1463.84 1242.99 1910.91C1245.57 2054.91 1245.77 -40.6493 1242.99 -196C1013.21 -74.341 900.231 -29.3399 594.437 -24.1822C288.643 -19.0244 44.9057 218.284 50.0812 505.846Z" fill="url(#paint0_linear_0_2675)"/>
          <circle opacity="0.7" cx="511.73" cy="500.732" r="346.322" fill="url(#paint1_radial_0_2675)" ref={circleRef1}/>
          <circle opacity="0.3" cx="512.406" cy="500.274" r="362.358" stroke="#7BB690" ref={circleRef2}/>
          <path ref={circleRef5} opacity="0.6" d="M1023.68 500.224C1023.68 782.288 794.632 1010.95 512.088 1010.95C229.545 1010.95 0.499512 782.288 0.499512 500.224C0.499512 218.16 229.545 -10.5 512.088 -10.5C794.632 -10.5 1023.68 218.16 1023.68 500.224Z" stroke="url(#paint2_radial_0_2675)"/>
          <circle ref={circleRef3} opacity="0.7" cx="511.828" cy="500.377" r="259.285" transform="rotate(-120 511.828 500.377)" fill="url(#paint3_radial_0_2675)"/>
          <defs>
          <linearGradient id="paint0_linear_0_2675" x1="278.213" y1="484.928" x2="1245.06" y2="536.717" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#7BB690" stopOpacity={0}/>
          </linearGradient>
          <radialGradient id="paint1_radial_0_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(463.028 316.749) rotate(68.4205) scale(713.575)">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#7BB690" stopOpacity={0}/>
          </radialGradient>
          <radialGradient id="paint2_radial_0_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(938.541 322.031) rotate(143.707) scale(1014.19 1015.91)">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#7BB690" stopOpacity={0}/>
          </radialGradient>
          <radialGradient id="paint3_radial_0_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(475.366 362.632) rotate(68.4205) scale(534.239)">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#7BB690" stopOpacity={0}/>
          </radialGradient>
          </defs>
        </svg>
        {/* <img src="/images/intro air zen background.svg" className="absolute -z-50 right-[-140px]" /> */}
        <Intro />
        <EinzigartigeTechnologie />
      </div>
    </>
  )
}

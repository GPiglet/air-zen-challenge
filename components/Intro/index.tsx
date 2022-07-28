import React from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type DescWithStarIconProps = {content: string, className: string};
const  DescWithStarIcon = ({content, className}: DescWithStarIconProps) => {
  return (
    <div className={`flex items-start ${className}`}>
      <img src="/images/icon-star.svg" width={57}/>
      <div className="font-light italic text-lg tracking-widest m-[8px]">{content}</div>
    </div>
  )
}

const Intro = () => {
  const ref1 = React.useRef<any>();
  const ref2 = React.useRef<any>();
  const ref3 = React.useRef<any>();
  const ref4 = React.useRef<any>();
  const ref5 = React.useRef<any>();
  React.useEffect(() => {    
    ref4.current.style.height = ref3.current.offsetHeight + 'px';
    gsap.to( ref5.current, { 
      opacity: 0, 
      scrollTrigger: {
        scrub: true,
        trigger: ref5.current,
        start: 0,
        end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
    
    );
    
    gsap.to( [ref1.current, ref2.current], { 
      y: -100, 
      opacity: 0, 
      transformOrigin: "50% 50%", 
      scrollTrigger: {
        scrub: true,
        trigger: ref1.current,
        start: 0,
        end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
      
    );
  }, []);
  return (
    <>
      <div ref={ref3} className="fixed grid grid-cols-1 md:grid-cols-12 gap-4 xl:ml-[120px]">
        <div className="col-start-2 col-end-4 mt-[50px] xl:mt-[100px]">
          <img src="/logo.svg" />
        </div>
        <div ref={ref1} className="col-start-2 md:col-end-7 xl:col-end-6 space-y-4 mt-[90px] xl:mt-[150px]">
          <h1 className="text-4xl uppercase font-black leading-[44px] intro-title-text">Smart Wifi<br/> for Smart People</h1>
          <div className="font-light text-lg leading-[30px] tracking-widest">
            <p>Das Leben ist zu kurz für schlechtes WIFI.</p>
            <p>AirZen bietet Highend-Netzwerk-Technologien für einen entspannteren Alltag und Arbeitswelt.</p>
            <p>Und das außergewöhnlich einfach, sicher und zuverlässig.</p>
          </div>
        </div>
        <div ref={ref5} className="col-span-3 mt-[60px]">
          <img src="/images/air zen.png" className="ml-[30px] xl:ml-[5px] xl:ml-0 w-9/12 xl:w-auto" />
        </div>
        <div ref={ref2} className="col-span-3 xl:col-span-4">
          <DescWithStarIcon content="Europäische, unabhängige Hard- und Software" className="ml-[93px] mt-[115px]" />
          <DescWithStarIcon content="übersteigt alle gängigen Sicherheitszertifizierungen" className="ml-[35px] mt-[150px]" />
        </div>
        
      </div>
      <div ref={ref4} />

    </>
  )

};

export default Intro;
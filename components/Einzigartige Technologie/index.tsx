import React from 'react';
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type MenuType = {
  title: string,
  href: string,
  className: string,
  active: boolean,
}
type MenuItemProps = {menu: MenuType};
const MenuItem = ({menu} : MenuItemProps) => {
  return (
    <div className={`${menu.active ? '' : 'font-light '}text-xl tracking-widest relative ${menu.className}`}>
      <Link href={menu.href}>{menu.title}</Link>
    </div>
  )
}

const EinzigartigeTechnologie = () => {
  const ref1 = React.useRef<any>();
  const ref2 = React.useRef<any>();
  const ref3 = React.useRef<any>();
  const ref4 = React.useRef<any>();

  React.useEffect(() => {
    // gsap.to(ref3.current, {opacity:0});
    // gsap.to(ref1.current, {opacity:0});
    gsap.to( ref2.current, { 
      top: 150,
      opacity: 1, 
      scrollTrigger: {
        scrub: true,
        trigger: ref1.current,
        start: 100,
        // end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
    
    );

    gsap.fromTo( ref1.current, {opacity:0}, { 
      top: 200,
      opacity: 1, 
      scrollTrigger: {
        scrub: true,
        trigger: ref1.current,
        start: 400,
        end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
    
    );

    gsap.fromTo( ref3.current, {opacity:0}, { 
      opacity: 1, 
      scrollTrigger: {
        scrub: true,
        trigger: ref3.current,
        start: 400,
        end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
    
    );

    gsap.to( [ref3.current.children[0].children[0], ref3.current.children[0].children[1], ref3.current.children[0].children[2], ref3.current.children[0].children[3]], { 
      top: 0,
      scrollTrigger: {
        scrub: true,
        trigger: ref3.current,
        start: 400,
        end: 700,
        // toggleActions: 'play none none reverse'
      } }, 
    
    );
  }, [])
  const menus = [
    {
      title: 'Lösungen',
      href: '/',
      className: 'top-[60px]',
      active: true,
    },

    {
      title: 'Über Uns',
      href: '/',
      className: 'top-[40px]',
      active: false,
    },

    {
      title: 'REFERENZEN',
      href: '/',
      className: 'top-[20px]',
      active: false,
    },

    {
      title: 'KONTAKT',
      href: '/',
      active: false,
    }
  ]
  return (
    <>
      <div ref={ref3} className="fixed flex justify-center w-full left-0 top-[115px]">
        <div className="flex gap-20 ml-[100px]">
          {menus.map((menu, i) => {
            return <MenuItem key={i} menu={menu} />
          })}
        </div>
      </div>
      <div ref={ref2} className="fixed w-full left-0 text-center mt-[100px]">
        <h1 className="text-4xl uppercase font-black leading-[44px]">Einzigartige Technologie.</h1>
        <p ref={ref1} className="text-2xl leading-[44px]">Unzählige Einsatzmöglichkeiten. Finden Sie Ihre:</p>
      </div>
      <div className='h-[1500px]' />
    </>
  )
}

export default EinzigartigeTechnologie;
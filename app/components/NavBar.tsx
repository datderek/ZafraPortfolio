'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface NavBarProps {
  isSticky: boolean,
  backgroundColor: string
}

export default function NavBar({isSticky, backgroundColor}: NavBarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsAtTop(currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos]);


  return (
    <nav className={`flex justify-between items-center fixed top-0 left-0 w-screen h-16 z-50 ${isAtTop ? "px-10 py-20" : "px-10 py-8"} gap-4 text-black ${backgroundColor} transition-all duration-300`}>
      <Link href="/"><Image src='/zafraportfolio/logo.svg' alt='Derrick Zafra Logo' width={0} height={0} className={`w-auto h-14 md:h-16 ${isSticky ? "" : "animate-dropAndFadeIn"}`}/></Link>
      <button className={`md:hidden shrink-0 h-6 ${isSticky ? "" : "animate-dropAndFadeIn"}`}>
        <Image src='/zafraportfolio/menu.svg' alt='Menu icon' width={0} height={0} className={`w-auto h-full md:hidden shrink-0 ${isSticky ? "" : "animate-dropAndFadeIn"}`}/>
      </button>
      <div className={`${isSticky ? "" : "animate-dropAndFadeIn"} hidden md:flex flex-[0_1_35%] gap-8 justify-between items-center text-3xl font-['Yantramanav', 'sans-serif'] font-bold tracking-tighter`}>
        <Link href='/portraits' className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>galleries</Link>
        <Link href='/about' className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>about</Link>
        <Link href='/contact' className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>contact</Link>
      </div>
    </nav>
  );
}
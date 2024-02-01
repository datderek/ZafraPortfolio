'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavBarProps {
  isSticky: boolean,
  backgroundColor: string
}

export default function NavBar({isSticky, backgroundColor}: NavBarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  if (isSticky) {
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
  }

  return (
    <nav className={`flex justify-between items-center fixed top-0 left-0 w-full h-16 ${isAtTop ? "px-10 py-20" : "px-10 py-8"} gap-4 text-black ${backgroundColor} transition-all duration-300`}>
      <Link href="/"><img className={`h-12 md:h-16 ${isSticky ? "" : "animate-dropAndFadeIn"}`} src='/zafraportfolio/logo.svg'/></Link>
      <button className={`md:hidden shrink-0 h-3/4 ${isSticky ? "" : "animate-dropAndFadeIn"}`}>
        <img src='/zafraportfolio/menu.svg' className={'h-full'}/>
      </button>
      <div className={`${isSticky ? "" : "animate-dropAndFadeIn"} hidden md:flex flex-[0_1_35%] gap-8 justify-between items-center text-3xl font-['Yantramanav', 'sans-serif'] font-bold tracking-tighter`}>
        <Link href='/portraits' className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>galleries</Link>
        <a className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>about</a>
        <a className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>contact</a>
      </div>
    </nav>
  );
}
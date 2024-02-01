'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

interface ImageProps {
  filePath: string;
}

export default function Picture({filePath}: ImageProps) {
    const ref = useRef<HTMLImageElement>(null);
    const [isVisible, setVisible] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current!);
        }
      })
  
      observer.observe(ref.current!);
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <Image ref={ref} src={filePath} alt={`File ${filePath}`} width={0} height={0} className={`w-full mb-4 ${isVisible ? "animate-slideUpAndFadeIn": ""}`}/>
    );
  }
  
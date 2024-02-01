'use client'
import { useEffect, useRef, useState } from 'react';

interface ImageProps {
  filePath: string;
}

export default function Image({filePath}: ImageProps) {
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
      <img ref={ref} src={filePath} className={`w-full mb-4 ${isVisible ? "animate-slideUpAndFadeIn": ""}`}/>
    )
  }
  
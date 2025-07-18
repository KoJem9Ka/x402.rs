import { Header } from '@/features/header/Header';
import { Section1Hero } from '@/features/landing/sections/Section1Hero';
import { Section2WhyX402 } from '@/features/landing/sections/Section2WhyX402';
import { Section3WhatYouGet } from '@/features/landing/sections/Section3WhatYouGet';
import { Section4StayInLoop } from '@/features/landing/sections/Section4StayInLoop';
import { Footer } from '@/features/header/Footer';
import { DotsGridBackground } from '@/shared/ui/background/DotsGridBackground';
import { AnimatedDotsBackground } from '@/shared/ui/background/AnimatedDotsBackground';
import { GradientBackground } from '@/shared/ui/background/GradientBackground';


export default function Home() {
  return (
    <div className='grow relative z-0'>
      <AnimatedDotsBackground className='fixed -z-10' />
      <DotsGridBackground />
      <GradientBackground />

      <Header />

      <Section1Hero />
      <Section2WhyX402 />
      <Section3WhatYouGet className='mt-24' />
      <Section4StayInLoop className='mt-24' />

      <Footer className='mt-24' />
    </div>
  );
}

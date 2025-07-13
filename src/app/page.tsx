import { Header } from '@/features/header/Header';
import { Section1Hero } from '@/features/landing/sections/Section1Hero';
import { Section2WhyX402 } from '@/features/landing/sections/Section2WhyX402';
import { AnimatedDotsBackground } from '@/shared/ui/background/AnimatedDotsBackground';
import { DotsGridBackground } from '@/shared/ui/background/DotsGridBackground';
import { Section3WhatYouGet } from '@/features/landing/sections/Section3WhatYouGet';
import { CurlWithMoneyCard } from '@/features/landing/CodeBlocks/CurlWithMoneyCard';
import { NeonBackground } from '@/shared/ui/background/NeonBackground';
import { Section4StayInLoop } from '@/features/landing/sections/Section4StayInLoop';
import { Footer } from '@/features/landing/sections/Footer';


export default function Home() {
  return (
    <div className='grow relative z-0'>
      <AnimatedDotsBackground className='fixed -z-10' />
      <DotsGridBackground />
      <NeonBackground />

      <Header />

      <Section1Hero curlWithMoneySSRSlot={
        <CurlWithMoneyCard className='mt-8 max-sm:text-[10px]' />
      } />
      <Section2WhyX402 />
      <Section3WhatYouGet className='mt-24' />
      <Section4StayInLoop className='mt-24' />

      <Footer className='mt-24' />
    </div>
  );
}

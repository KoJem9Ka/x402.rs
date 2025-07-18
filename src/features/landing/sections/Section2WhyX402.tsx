'use client';
import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/features/landing/SectionHeading';
import { CardHeader } from '@heroui/card';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { CARD_WIDE } from '@/shared/ui/heroui/Card';
import { EldoraCard } from '@/shared/ui/EldoraCard';
import { motion } from 'framer-motion';
import { useMeasure } from '@heroui/use-measure';
import { PaperWithBloom } from '@/shared/ui/PaperWithBloom';


const cards = [{
  title: 'curl with money',
  icon: Icon.Terminal,
  iconBg: Icon.Bolt,
  text1: 'Built around standard HTTP, x402 enables users to pay for resources via API',
  text2: 'Each request includes a signed payment. Verification and on-chain settlement happen behind the scenes: no registration, emails, OAuth, or complex signatures involved',
}, {
  title: 'Built for the AI-enhanced world',
  icon: Icon.Sparkle,
  iconBg: Icon.BlackHole,
  text1: 'x402 protocol enables LLMs, agents, and backend systems to exchange value without logins or lengthy pre-approvals',
  text2: 'Autonomous systems can now pay for APIs, compute, or content. There’s no session negotiation or authentication flow. Just a signed payment embedded in the call',
}, {
  title: 'Verifiable and Interoperable',
  icon: Icon.ShieldStar,
  iconBg: Icon.Chain,
  text1: 'x402 payments require no gas fees, yet land on chain just fine',
  text2: 'x402 payments don’t require token approvals or on-chain signatures. They’re portable across wallets, chains, languages and clients: send in JS, receive in Go, settle in Rust, on any chain',
}];

export function Section2WhyX402() {
  return (
    <Container>
      <SectionHeading>Why x402?</SectionHeading>

      <div className='grid lg:grid-cols-3 gap-6'>
        {cards.map((card) => <SmoothCard key={card.title} card={card} />)}
      </div>
    </Container>
  );
}

function SmoothCard({ card }: { card: typeof cards[0] }) {
  const [ref, { height }] = useMeasure();

  return (
    <EldoraCard
      key={card.title}
      classNames={CARD_WIDE}
    >
      <CardHeader className='gap-3 px-6 text-xl items-center font-bold tracking-tight text-balance'>
        <PaperWithBloom className='p-2'>
          <Iconify icon={card.icon} />
        </PaperWithBloom>

        <span>{card.title}</span>

        <Iconify icon={Icon.ArrowDown} className='ml-auto group-hover/card:-scale-y-100 pointer-coarse:group-focus/card:-scale-y-100 transition' />
      </CardHeader>

      <motion.div
        animate={{ height: height || 'auto' }} layout className='m-6 mt-2 relative overflow-hidden'>
        <p ref={ref}>
          <span className='group-hover/card:hidden pointer-coarse:group-focus/card:hidden'>{card.text1}</span>
          <span className='hidden group-hover/card:inline pointer-coarse:group-focus/card:inline'>{card.text2}</span>
        </p>
      </motion.div>
    </EldoraCard>
  );
}

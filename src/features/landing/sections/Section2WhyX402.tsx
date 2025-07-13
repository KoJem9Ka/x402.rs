import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/features/landing/SectionHeading';
import { CardBody, CardHeader } from '@heroui/card';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { CARD_WIDE } from '@/shared/ui/heroui/Card';
import { EldoraCard } from '@/shared/ui/EldoraCard';


const cards = [{
  title: 'curl with money',
  icon: Icon.Terminal,
  iconBg: Icon.Bolt,
  text1: 'Built around standard HTTP, x402 enables users to pay for resources via API.',
  text2: 'Each request includes a signed payment. Verification and on-chain settlement happen behind the scenes: no registration, emails, OAuth, or complex signatures involved.',
}, {
  title: 'Built for the AI-enhanced world',
  icon: Icon.Sparkle,
  iconBg: Icon.BlackHole,
  text1: 'x402 protocol enables LLMs, agents, and backend systems to exchange value without logins or lengthy pre-approvals.',
  text2: 'Autonomous systems can now pay for APIs, compute, or content. There’s no session negotiation or authentication flow. Just a signed payment embedded in the call.',
}, {
  title: 'Verifiable and Interoperable',
  icon: Icon.ShieldStar,
  iconBg: Icon.Chain,
  text1: 'x402 payments require no gas fees, yet land on chain just fine.',
  text2: 'x402 payments don’t require token approvals or on-chain signatures. They’re portable across wallets, chains, languages and clients: send in JS, receive in Go, settle in Rust, on any chain.',
}];


export function Section2WhyX402() {
  return (
    <Container>
      <SectionHeading>
        {'Why '}
        <span className='neon-text'>x402</span>
        ?
      </SectionHeading>

      <div className='grid lg:grid-cols-3 gap-6'>
        {cards.map((card) => (
          <EldoraCard key={card.title} classNames={CARD_WIDE}>
            <Iconify
              className='absolute left-4/5 -translate-x-1/2 top-3/5 -translate-y-1/2 size-64 text-foreground-100 group-hover/card:text-background dark:group-hover/card:text-foreground-200/50 transition'
              icon={card.iconBg}
            />

            <CardHeader className='gap-3 px-6 text-xl items-center font-bold tracking-tight'>
              <span className='flex p-1 bg-foreground-200 rounded-small'>
                <Iconify icon={card.icon} />
              </span>

              <span>{card.title}</span>
            </CardHeader>

            <CardBody as='ul' className='list-disc pl-12 justify-around'>
              <li className='font-semibold'>{card.text1}</li>
              <li>{card.text2}</li>
            </CardBody>
          </EldoraCard>
        ))}
      </div>
    </Container>
  );
}

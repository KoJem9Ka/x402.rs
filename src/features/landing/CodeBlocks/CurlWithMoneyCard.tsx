import { Card, CardBody, CardHeader } from '@heroui/card';
import { codeShellToHtml } from '@/shared/utils/code-to-html';
import { MacOSWindowButtons } from '@/shared/ui/MacOSWindowButtons';
import { Divider } from '@heroui/divider';
import { cn } from '@/shared/utils/cn';
import { CARD_BASE } from '@/shared/ui/heroui/Card';


export function CurlWithMoneyCard({ className }: { className?: string }) {
  const out = codeShellToHtml(`
curl -H "X-Payment: eyJ0eXAiOiJKV1QiLCJhbGc..." \\
     -X POST https://api.example.com/generate \\
     -d '{"prompt": "Hello, AI!"}'
  `.trim());

  return (
    <Card classNames={CARD_BASE} className={cn(className)}>
      <CardHeader className='relative'>
        <MacOSWindowButtons className='absolute top-1/2 -translate-y-1/2' />
        <span className='mx-auto flex items-center gap-3 text-xl font-bold tracking-tight'>
          {/*<Iconify className='' icon={Icon.Terminal} />*/}
          <span>curl with money</span>
        </span>
      </CardHeader>

      <Divider />

      <CardBody dangerouslySetInnerHTML={{ __html: out }} />
    </Card>
  );
}

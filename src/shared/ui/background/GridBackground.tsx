export function GridBackground() {
  return (
    <div className='absolute -z-10 inset-0 bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] [background-attachment:fixed] bg-[size:24px_24px]' />
    // <div className='bg-[linear-gradient(to_right,hsl(var(--heroui-divider)/.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--heroui-divider)/.15)_1px,transparent_1px)] ~[background-attachment:fixed] bg-[size:24px_24px]' />
  );
}

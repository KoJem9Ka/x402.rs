export function GradientBackground() {
  return (
    // <div className='fixed inset-0 -bg-linear-40/hsl dark:-bg-linear-15 from-blue-100 to-pink-100 via-background dark:from-blue-900 dark:to-pink-900 -z-20' />
    <div className='fixed inset-0 -bg-linear-40/hsl dark:-bg-linear-15 from-foreground-200 to-foreground-200 via-background dark:from-foreground-200 dark:to-foreground-200 -z-20' />
  );
}

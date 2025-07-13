'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/navbar';
import { useRef, useState } from 'react';
import { ROUTES } from '@/shared/backbone/ROUTES';
import { ThemeDropdown } from '@/features/theme/ThemeDropdown';
import Link from 'next/link';
import { useHeaderHeightEngine } from '@/features/header/useHeaderHeight';
import { IconX402Logo } from '@/shared/ui/icons/IconX402Logo';


export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  useHeaderHeightEngine(headerRef);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar ref={headerRef} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link href={ROUTES.HOME} className='flex items-center gap-1 text-xl font-bold'>
            <IconX402Logo className='size-8' />
            x402.rs
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='center' className='max-sm:hidden'>
        {menuItems.map((link) => (
          <NavbarItem key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeDropdown />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full' href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  { href: ROUTES.HOME, label: 'Tools' },
  { href: ROUTES.HOME, label: 'Docs' },
  { href: ROUTES.HOME, label: 'Newsletter' },
];

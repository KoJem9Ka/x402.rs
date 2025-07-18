'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from '@heroui/navbar';
import { useRef } from 'react';
import { ROUTES } from '@/shared/backbone/ROUTES';
import { ThemeDropdown } from '@/features/theme/ThemeDropdown';
import NextLink from 'next/link';
import { useHeaderHeightEngine } from '@/features/header/useHeaderHeight';
import { IconX402Logo } from '@/shared/ui/icons/IconX402Logo';
import { navScroll } from '@/features/header/nav-scroll';


export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  useHeaderHeightEngine(headerRef);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar ref={headerRef}/* onMenuOpenChange={setIsMenuOpen}*/>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <NextLink href={ROUTES.Home} className='flex items-center gap-1 text-xl font-bold'>
            <IconX402Logo className='size-8' />
            x402.rs
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end' className='~max-sm:hidden'>
        {menuItems.map((link) => (
          <NavbarItem key={link.label}>
            <NextLink onClickCapture={navScroll} href={link.href}>{link.label}</NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='center'>
        <NavbarItem>
          <ThemeDropdown />
        </NavbarItem>

        {/*<NavbarMenuToggle*/}
        {/*  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}*/}
        {/*  className='sm:hidden'*/}
        {/*/>*/}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextLink onClickCapture={navScroll} className='w-full' href={item.href}>
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  // { href: ROUTES.HOME, label: 'Tools' },
  // { href: ROUTES.HOME, label: 'Docs' },
  { href: ROUTES.HomeStayInTheLoop, label: 'Newsletter', isRoute: true },
];

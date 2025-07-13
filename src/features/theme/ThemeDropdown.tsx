'use client';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { useThemeStore } from '@/features/theme/theme.store';
import { ThemeEnum } from '@/shared/types/theme';
import { Button } from '@heroui/button';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';

export function ThemeDropdown() {
  const theme = useThemeStore(state => state.theme);
  const isDark = useThemeStore(state => state.isDark);
  const setTheme = useThemeStore(state => state.setTheme);


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size='sm' variant='light'>
          <Iconify icon={isDark ? Icon.ThemeDark : Icon.ThemeLight} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectionMode='single'
        disallowEmptySelection
        selectedKeys={[theme]}
        onSelectionChange={([next]) => setTheme(next as never)}
      >
        <DropdownItem startContent={<Iconify className='size-4' icon={Icon.ThemeAuto} />} key={ThemeEnum.System}>
          System
        </DropdownItem>
        <DropdownItem startContent={<Iconify className='size-4' icon={Icon.ThemeLight} />} key={ThemeEnum.Light}>
          Light
        </DropdownItem>
        <DropdownItem startContent={<Iconify className='size-4' icon={Icon.ThemeDark} />} key={ThemeEnum.Dark}>
          Dark
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

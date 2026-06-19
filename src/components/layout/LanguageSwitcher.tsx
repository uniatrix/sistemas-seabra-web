'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'gap-2 rounded-full px-3',
            'bg-secondary border border-border',
            'hover:bg-secondary hover:border-border',
            'text-muted-foreground hover:text-foreground',
            'transition-all duration-300'
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="uppercase text-xs font-medium tracking-wider">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-popover backdrop-blur-2xl border-border shadow-lg p-1.5 min-w-[140px]"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'rounded-md px-3 py-2 cursor-pointer transition-all duration-200',
              'text-foreground/90 hover:text-foreground hover:bg-secondary',
              locale === loc && 'bg-secondary text-foreground'
            )}
          >
            <span className="mr-2.5 text-base">
              {loc === 'pt' ? '🇧🇷' : loc === 'es' ? '🇪🇸' : '🇺🇸'}
            </span>
            <span className="text-sm">{localeNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

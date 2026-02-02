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
            'bg-white/[0.03] border border-white/[0.08]',
            'hover:bg-white/[0.08] hover:border-white/[0.15]',
            'text-white/70 hover:text-white',
            'transition-all duration-300'
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="uppercase text-xs font-medium tracking-wider">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black/90 backdrop-blur-2xl border-white/[0.1] p-1.5 min-w-[140px]"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'rounded-md px-3 py-2 cursor-pointer transition-all duration-200',
              'text-white/70 hover:text-white hover:bg-white/[0.08]',
              locale === loc && 'bg-white/[0.06] text-white'
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

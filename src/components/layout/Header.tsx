'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const solutions = [
  { href: '/solucoes/bovinos/leite', key: 'cattleDairy' },
  { href: '/solucoes/bovinos/corte', key: 'cattleBeef' },
  { href: '/solucoes/caprinos/leite', key: 'goatDairy' },
  { href: '/solucoes/caprinos/corte', key: 'goatBeef' },
  { href: '/solucoes/ovinos/leite', key: 'sheepDairy' },
  { href: '/solucoes/ovinos/corte', key: 'sheepBeef' },
  { href: '/servicos', key: 'webDev' },
] as const;

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();

  const navItems = [
    { href: '/#about', label: t('header.about') },
    { href: '/cases', label: t('header.cases') },
    { href: '/blog', label: t('header.blog') },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split('#')[1];
      if (!hash) return;

      // If already on home page, just scroll
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `#${hash}`);
        }
      } else {
        // Navigate to home, then scroll after load
        e.preventDefault();
        router.push(`/#${hash}`);
        // Allow time for navigation, then scroll
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    },
    [pathname, router]
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-2xl border-b border-gray-200 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Seabra Solutions"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold text-gray-900 tracking-tight hidden sm:block">
            Seabra Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.href.includes('#') ? (e: React.MouseEvent<HTMLAnchorElement>) => handleHashClick(e, item.href) : undefined}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                'hover:bg-gray-100 hover:text-gray-900',
                isActive(item.href) ? 'text-gray-900' : 'text-gray-500'
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                  'hover:bg-gray-100 hover:text-gray-900',
                  pathname.includes('/solucoes') || pathname.includes('/servicos')
                    ? 'text-gray-900'
                    : 'text-gray-500'
                )}
              >
                {t('header.solutions')}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64 bg-white backdrop-blur-2xl border-gray-200 shadow-lg p-2"
            >
              {solutions.map((solution) => (
                <DropdownMenuItem key={solution.href} asChild>
                  <Link
                    href={solution.href}
                    className="w-full cursor-pointer rounded-lg px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                  >
                    {t(`segments.${solution.key}`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                'hover:bg-gray-100 hover:text-gray-900',
                isActive(item.href) ? 'text-gray-900' : 'text-gray-500'
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-200 mx-2" />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Contact Button */}
          <Link href="/contato" className="ml-2">
            <Button
              className={cn(
                'rounded-full px-6 font-medium transition-all duration-300',
                'bg-primary text-white hover:bg-blue-600',
                'shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
                'hover:-translate-y-0.5'
              )}
            >
              {t('header.contact')}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200"
              >
                <Menu className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-white border-gray-200 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="p-6 border-b border-gray-200">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <div className="relative w-10 h-10">
                      <Image
                        src="/images/logo.png"
                        alt="Seabra Solutions"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Seabra Solutions
                    </span>
                  </Link>
                </div>

                {/* Mobile Nav */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {navItems.slice(0, 1).map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        onClick={item.href.includes('#') ? (e: React.MouseEvent<HTMLAnchorElement>) => {
                          setIsOpen(false);
                          handleHashClick(e, item.href);
                        } : undefined}
                        className="block text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Solutions in Mobile */}
                  <div className="space-y-3">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {t('header.solutions')}
                    </span>
                    <div className="space-y-1">
                      {solutions.map((solution) => (
                        <SheetClose asChild key={solution.href}>
                          <Link
                            href={solution.href}
                            className="block py-2 px-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                          >
                            {t(`segments.${solution.key}`)}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  {navItems.slice(1).map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-200">
                  <SheetClose asChild>
                    <Link href="/contato">
                      <Button className="w-full rounded-full bg-primary text-white hover:bg-blue-600 font-medium">
                        {t('header.contact')}
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

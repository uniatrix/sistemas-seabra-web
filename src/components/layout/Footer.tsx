'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const solutions = [
  { href: '/solucoes/bovinos/leite', key: 'cattleDairy' },
  { href: '/solucoes/bovinos/corte', key: 'cattleBeef' },
  { href: '/solucoes/caprinos/leite', key: 'goatDairy' },
  { href: '/solucoes/caprinos/corte', key: 'goatBeef' },
  { href: '/solucoes/ovinos/leite', key: 'sheepDairy' },
  { href: '/solucoes/ovinos/corte', key: 'sheepBeef' },
  { href: '/servicos', key: 'webDev' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Seabra Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-gray-900 tracking-tight">
                Seabra Solutions
              </span>
            </Link>

            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center',
                    'h-10 w-10 rounded-xl',
                    'bg-gray-100 border border-gray-200',
                    'text-gray-500 hover:text-gray-900',
                    'hover:bg-gray-200 hover:border-gray-300',
                    'transition-all duration-300'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-3">
            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.solutions')}
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.href}>
                    <Link
                      href={solution.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                    >
                      {t(`segments.${solution.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.company')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#about"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {t('footer.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.contact')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:felipeseabracl@gmail.com"
                    className="flex items-start gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
                  >
                    <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>felipeseabracl@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5521999366784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
                  >
                    <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>+55 21 99936-6784</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Brasil</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <Separator className="my-12 bg-gray-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Seabra Solutions. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

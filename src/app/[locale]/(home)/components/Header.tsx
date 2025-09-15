import { Menu } from 'lucide-react';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import ModeToggle from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

type HeaderItem = {
  title: string;
  href: string;
};

const navItems: HeaderItem[] = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Stack',
    href: '#',
  },
  {
    title: 'Blog',
    href: '#',
  },
  {
    title: 'Experience',
    href: '#',
  },
  {
    title: 'Projects',
    href: '#',
  },
  {
    title: 'Awards',
    href: '#',
  },
];

export default function Header() {
  return (
    <header className="sticky top-5 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl">
        <nav className="border rounded-md flex h-20 items-center gap-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-1 px-4">

          {/* Desktop */}
          <Link href="/" className="inline-flex flex-1 items-center gap-2">
            <span className="color-primary-text text-2xl font-bold tracking-tight">khaphong.io.vn</span>
          </Link>
          <div className="hidden gap-2 lg:inline-flex">
            {navItems.map((item: HeaderItem) => (
              <Button key={item.title} asChild variant="ghost">
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
          <div className="inline-flex flex-1 justify-end gap-2">
            <div className="hidden lg:block">
              <LocaleSwitcher />
            </div>
            <ModeToggle />
          </div>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild className="ml-auto lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[90%] max-w-sm flex-col px-6 py-6">
              <SheetTitle>
                <Link href="#" className="inline-flex items-center gap-2">
                  <span className="color-primary-text text-2xl font-bold tracking-tight">khaphong.io.vn</span>
                </Link>
              </SheetTitle>
              <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
                {navItems.map((item: HeaderItem) => (
                  <Button key={item.title} asChild className="justify-start text-base" variant="ghost">
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                ))}
              </nav>
              <div className="mt-auto grid gap-2">
                <Button variant="outline" asChild>
                  <Link href="#">Log in</Link>
                </Button>
                <Button asChild>
                  <Link href="#">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

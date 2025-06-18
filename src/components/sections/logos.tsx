'use client';

import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    name: 'Poolside',
    src: '/images/logos/new-logos/pooliside.png',
    width: 200,
    height: 60,
    href: '#',
  },
  {
    name: 'Logo 4',
    src: '/images/logos/new-logos/4.png',
    width: 200,
    height: 60,
    href: '#',
  },
  {
    name: 'Bio News',
    src: '/images/logos/new-logos/bionews.png',
    width: 200,
    height: 60,
    href: '#',
  },
  {
    name: 'Logo 5',
    src: '/images/logos/new-logos/5.png',
    width: 200,
    height: 60,
    href: '#',
  },
  {
    name: 'Logo 3',
    src: '/images/logos/new-logos/3.png',
    width: 200,
    height: 60,
    href: '#',
  },
  {
    name: 'Logo 1',
    src: '/images/logos/new-logos/1.png',
    width: 200,
    height: 60,
    href: '#',
  },
];

export default function Logos() {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Building focus and community for remote workers.
          <br />
          <span className="text-muted-foreground">
            From ADHD entrepreneurs to freelancers and consultants.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

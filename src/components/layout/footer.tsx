import Link from 'next/link';

import { Instagram, Linkedin, Slack } from 'lucide-react';

import { Button } from '@/components/ui/button';

const navigation = [
  {
    title: 'Product',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Feature1', href: '/#feature1' },
      { name: 'Feature2', href: '/#feature2' },
      { name: 'Feature3', href: '/#feature3' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Service',
    links: [
      { name: 'Terms of service', href: '/terms' },
      { name: 'Privacy policy', href: '/privacy' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/loopremotecoworking' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/loop-remote/' },
  { icon: Slack, href: 'https://loopremote.slack.com/' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-primary">
        <div className="border-sand-600 mx-auto flex max-w-[95vw] flex-col items-center border-b py-10 text-center md:py-14 lg:py-20">
          <h2 className="max-w-[800px] text-5xl leading-none font-semibold tracking-tight text-balance lg:text-6xl">
            Your new remote work team awaits.{' '}
            <span style={{ color: '#e24d20' }}>Close the loop.</span>
          </h2>
          <Button asChild variant="secondary" size="lg" className="mt-9">
            <Link href="/waitlist">Join the waitlist</Link>
          </Button>
        </div>

        {/* Navigation Section */}
        {/* <nav className="border-sand-600/50 mx-auto max-w-[95vw] border-b py-6">
          <div className="container flex flex-wrap gap-x-32 gap-y-20 md:justify-end md:gap-y-24 lg:gap-y-32">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 font-medium lg:text-lg">{section.title}</h3>
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-muted-foreground lg:text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav> */}

        {/* Bottom Section */}
        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium">
              © {new Date().getFullYear()} Close The Loop -{' '}
              <Link
                href="https://closetheloop.community"
                className="underline transition-opacity hover:opacity-80"
                target="_blank"
              >
                Remote Co-Working Community
              </Link>
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  aria-label={link.href}
                  key={link.href}
                  href={link.href}
                  className="hover:text-muted-foreground"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

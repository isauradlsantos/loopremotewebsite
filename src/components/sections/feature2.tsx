import Image from 'next/image';

import { Card, CardContent, CardHeader } from '../ui/card';

import { cn } from '@/lib/utils';

type FadeDirection = 'right' | 'bottom' | 'top';

type ItemType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className: string;
  };
  fade: FadeDirection[];
};

const ITEMS: ItemType[] = [
  {
    title: 'Structured daily rituals.',
    description:
      'Monday activation calls, async SCRUM check-ins, and Friday team building activities keep you connected and accountable.',
    image: {
      src: '/images/homepage/resource-allocation/cycle-37.webp',
      alt: 'Daily ritual structure showing weekly accountability flow',
      className: 'lg:translate-x-20 translate-x-6 md:translate-x-10',
    },
    fade: ['right'],
  },
  {
    title: 'Curated peer clusters.',
    description: 'Work alongside inspiring, high-performing professionals matched to your work style and goals.',
    image: {
      src: '/images/homepage/resource-allocation/triage.webp',
      alt: 'Peer matching interface showing complementary skill connections',
      className: 'lg:translate-x-20 translate-x-6 md:translate-x-10',
    },
    fade: ['right', 'bottom'],
  },
  {
    title: 'ADHD-friendly structure.',
    description:
      'Executive function scaffolds designed specifically for neurodivergent remote professionals.',
    image: {
      src: '/images/homepage/resource-allocation/access-controls.webp',
      alt: 'Structured interface showing ADHD-friendly features and accommodations',
      className: 'translate-x-6 md:translate-x-10 pb-6 object-left-bottom',
    },
    fade: ['right', 'top'],
  },
  {
    title: 'Body-doubling sessions.',
    description:
      'Timed focus work with virtual coworkers using proven techniques to improve concentration and reduce isolation.',
    image: {
      src: '/images/homepage/resource-allocation/task-chat.webp',
      alt: 'Virtual focus session showing participants working together',
      className: 'px-6 mt-4 object-contain',
    },
    fade: [],
  },
  {
    title: 'Systems coaching.',
    description:
      'Monthly group sessions and quarterly 1-on-1 coaching to optimize your personal productivity systems.',
    image: {
      src: '/images/homepage/resource-allocation/cycle-analysis.webp',
      alt: 'Coaching session showing productivity analysis and system optimization',
      className: 'pb-6 object-center object-contain',
    },
    fade: [],
  },
];

export const Feature2 = () => {
  return (
    <section id="feature2" className="bg-muted py-16 md:py-28 lg:py-32">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Everything you need to thrive working remotely
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-20">
          {ITEMS.map((item, i) => {
            const gridClasses = {
              0: 'md:col-span-3 md:row-span-3',
              1: 'md:col-span-3 md:row-span-3 md:col-start-4',
              2: 'md:col-span-2 md:row-span-2 md:row-start-4',
              3: 'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4',
              4: 'md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4',
            }[i];
            return <Item key={i} {...item} className={gridClasses} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  image,
  fade = [],
  className,
}: ItemType & { className?: string }) => {
  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px]',
        className,
      )}
    >
      <CardHeader className="mb-2">
        <h3 className="inline leading-tight font-semibold text-balance">
          {title}{' '}
          <span className="text-muted-foreground font-medium">
            {description}
          </span>
        </h3>
      </CardHeader>

      <CardContent className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
        {fade.includes('right') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-r from-transparent via-transparent" />
        )}
        {fade.includes('bottom') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent" />
        )}
        {fade.includes('top') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-t from-transparent via-transparent" />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={cn('object-cover object-left-top', image.className)}
        />
      </CardContent>
    </Card>
  );
};

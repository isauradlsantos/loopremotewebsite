import Image from 'next/image';

import { CircleDot, Diamond, Blend, ChartNoAxesColumn } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    title: 'Community access',
    description: 'Private Slack workspace with curated channels for accountability and connection.',
    content: {
      title: 'Your virtual workspace for focused collaboration.',
      description: `Join a carefully curated community of remote professionals who understand the challenges of working alone. Our private Slack includes dedicated channels for daily check-ins, focus sessions, and peer support.`,
      image: '/images/homepage/features-tabs/1.webp',
      className: 'md:[&_img]:translate-x-20 [&_img]:translate-x-5 ',
    },
    icon: CircleDot,
  },
  {
    title: 'Body-doubling sessions',
    description: 'Virtual focus rooms with timed work sessions and accountability partners.',
    content: {
      title: 'Focus better with virtual coworkers by your side.',
      description:
        'Research-backed body-doubling sessions help ADHD brains stay on task. Join daily focus sessions, set intentions, and work alongside other motivated professionals in our virtual lobby.',
      image: '/images/homepage/features-tabs/2.webp',
    },
    icon: Blend,
  },
  {
    title: 'Peer matching',
    description: 'Algorithmically matched work partners based on complementary skills and goals.',
    content: {
      title: 'Work alongside inspiring, high-performing professionals.',
      description:
        'Our curated peer clusters are intentionally matched based on work styles, goals, and complementary skills. Research shows sitting near high performers increases your output by 15%.',
      image: '/images/homepage/features-tabs/3.webp',
    },
    icon: Diamond,
  },
  {
    title: 'Systems coaching',
    description: 'Monthly group sessions and quarterly 1-on-1 coaching for productivity optimization.',
    content: {
      title: 'Build ADHD-friendly systems that actually work.',
      description:
        'Get expert guidance on executive function challenges, productivity systems, and workflow optimization. Our coaches specialize in neurodivergent-friendly approaches to remote work success.',
      image: '/images/homepage/features-tabs/4.webp',
    },
    icon: ChartNoAxesColumn,
  },
];

export const Feature3 = () => {
  return (
    <section id="feature3" className="bg-mint-50 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            A complete solution for neurodivergent remote work
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            Close The Loop combines proven focus techniques, expert coaching, and curated community to address the unique challenges of ADHD and remote work isolation.
          </p>
        </div>

        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse md:mt-12 lg:mt-20"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl bg-black/[0.03] p-1.5 lg:basis-1/4 lg:flex-col">
            {FEATURES.map((feature) => (
              <TabsTrigger
                key={feature.title}
                value={feature.title}
                className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
              >
                <div>
                  <feature.icon className="size-7 md:size-8 lg:size-9" />
                  <h3 className="mt-3 font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {feature.description}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
              className={cn(
                'bg-background m-0 flex-1 overflow-hidden rounded-xl',
                feature.content.className,
              )}
              key={feature.title}
              value={feature.title}
            >
              <div className="max-w-2xl p-5 text-lg text-balance lg:p-7">
                <h4 className="inline font-semibold">
                  {feature.content.title}{' '}
                </h4>
                <span className="text-muted-foreground mt-2 font-medium text-pretty">
                  {feature.content.description}
                </span>
              </div>
              <div className="relative h-[420px] rounded-lg lg:h-[500px] lg:flex-1">
                <Image
                  src={feature.content.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-left-top"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

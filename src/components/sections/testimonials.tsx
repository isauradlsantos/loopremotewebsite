'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
  {
    quote:
      "Throughout my career I've helped fund and build solutions for Europe's biggest challenges—climate, digitalization, health, sustainability—but at their heart, it's always been about empowering people.",
    author: 'Diogo Pinto, PhD',
    company: 'Project Acquisition Coordinator',
    image: '/images/homepage/testimonials/diogo-pinto2.png',
    className: 'object-top',
  },
  {
    quote:
      "A trained biologist turned into innovation, entrepreneurship and ecosystem manager after several (positive) twists. I am a natural communicator, a story-teller, who loves to work with and for people.",
    author: 'Inês Matias',
    company: 'Ecosystem Lead for Open Innovation Industry Partnerships',
    image: '/images/homepage/testimonials/ines-matias1.png',
  },
  {
    quote:
      "I am a million things at the same time: I work with amazing clients on driving growth to their businesses, I manage my own business, and I am a recording artist. It\'s fun!",
    author: 'Isaura Santos',
    company: 'Fractional Marketing, Operations, and Business Consultant & Music Artist',
    image: '/images/homepage/testimonials/isaura-santos2.png',
    className: 'object-top',
  },
  {
    quote:
      "After more than 10 years writing about science, I get a kick out of turning dense medical research into clear, compelling stories that anyone can dive into (and actually enjoy).",
    author: 'And de Barros, PhD',
    company: 'Managing Science Editor',
    image: '/images/homepage/testimonials/ana-barros.png',
    className: 'object-top',
  },
  {
    quote:
      "While running operations and production at Nebula Studios, I partner with creatives to bring animation and film projects from concept to screen. Damn, I love my job!",
    author: 'Liliana Ramires',
    company: 'COO & Film Producer',
    image: '/images/homepage/testimonials/liliana-ramires.png',
    className: 'object-top',
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-mint py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Meet fellow remote
            <br />
            professionals like you
          </h2>
          <div className="flex flex-1 flex-col items-start gap-3 md:max-w-md md:self-end">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Our cohorts unite scientists, engineers, marketers, designers, consultants, writers, artists, and more, all hand-picked to spark inspiration and drive collective momentum.
            </p>
            <Button asChild variant="outline" className="group">
              <Link href="/community-stories">
                Apply to join a cohort
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <div className="relative">
              <CarouselContent className="-ml-4">
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card
                      className={`h-full overflow-hidden border-[7px] transition-all ${
                        current === index
                          ? 'border-foreground'
                          : 'border-mint text-emerald-600 shadow-none'
                      }`}
                    >
                      <CardHeader className="p-0">
                        <div className="relative aspect-[4/3.3] w-full bg-emerald-600/20">
                          <div className="absolute inset-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className={cn(
                                'object-cover transition-all',
                                testimonial.className,
                                current !== index && 'mix-blend-luminosity'
                              )}
                            />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-5 pb-7">
                        <blockquote className="text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl">
                          {testimonial.quote}
                        </blockquote>
                      </CardContent>
                      <CardFooter className="flex-col items-start">
                        <div className="font-semibold max-md:text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground text-xs md:text-sm">
                          {testimonial.company}
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div className="container mt-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className={`size-3 rounded-full transition-colors ${
                        current === index
                          ? 'bg-foreground'
                          : 'bg-foreground/40 hover:bg-foreground/60'
                      }`}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <CarouselPrevious className="relative bg-foreground/40 hover:bg-foreground/60 size-10 translate-y-0 [&>svg]:size-5 border-2 border-foreground/20 hover:border-foreground/40" />
                  <CarouselNext className="relative bg-foreground/40 hover:bg-foreground/60 size-10 translate-y-0 [&>svg]:size-5 border-2 border-foreground/20 hover:border-foreground/40" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

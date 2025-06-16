'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Autoplay from 'embla-carousel-autoplay';
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Daily focus sessions',
    description: 'Timed sprints with your cohort. Body-doubling that turns individual tasks into shared momentum.',
    icon: CircleDot,
  },
  {
    title: 'Curated peer matching',
    description: 'Work alongside inspiring, hand-picked top-performing remote pros who spark fresh ideas and keep motivation high.',
    icon: Diamond,
  },
  {
    title: 'ADHD-friendly structure',
    description: 'Team rituals. Monday activation, async SCRUM, executive-function prompts that keep group progress visible and steady.',
    icon: Blend,
  },
  {
    title: 'Systems coaching',
    description: 'Monthly group clinics, optional 1-on-1 productivity coaching, and team-building events lock in habits and keep the crew connected.',
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: '/images/homepage/hero.webp', label: 'Kanban' },
  { image: '/images/homepage/hero2.webp', label: 'Issues' },
  { image: '/images/homepage/hero3.webp', label: 'Add Issues' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-sand-100 relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      {/* Orange Circle Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-40 h-40 bg-orange-400/40 rounded-full blur-lg"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-orange-500/50 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-orange-300/45 rounded-full blur-md"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-400/60 rounded-full"></div>
      </div>
      
      <div className="relative container grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        {/* Gradient border */}
        <div className="to-foreground/27 absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px bg-linear-to-r from-transparent" />
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12 relative z-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Structured remote coworking. Maximum productivity.        </h1>

            <p className="text-sand-700 font-inter-tight mt-3 text-3xl leading-13 font-medium md:text-4xl lg:text-5xl">
            Join a hand-matched cohort that keeps things moving.</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex max-w-[250px] gap-2.5 lg:gap-5"
                >
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-inter font-semibold">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button aria-label="Join the waitlist">Join the waitlist</Button>
            <Link href="#early-bird">
              <Button
                aria-label="Early bird: 50% off first cohort"
                variant="outline"
                className="max-sm:hidden"
              >
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  Early bird: 50% off first cohort{' '}
                  <ArrowRight className="size-4 stroke-3" />
                </span>
              </Button>
            </Link>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative size-full min-h-[30rem] overflow-hidden rounded-t-xl">
                    <Image
                      src={slide.image}
                      alt={`Streamline product interface showing ${slide.label}`}
                      fill
                      className="object-cover object-left-top"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mt-6 mb-8 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div className={cn('flex flex-col items-center font-medium', className)}>
      <div className="">
        <span className="text-sand-700">{currentSlide + 1} of 3 — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
          >
            <div
              className={cn(
                'h-0.5 w-6 rounded-full transition-colors',
                index === currentSlide
                  ? 'bg-primary'
                  : 'bg-primary/20 hover:bg-primary/40',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

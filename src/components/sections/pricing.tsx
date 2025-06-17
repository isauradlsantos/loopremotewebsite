'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Early bird: 50% off first cohort (limited offer)',
    monthlyPrice: '€149',
    monthlyPerUnit: 'per month',
    features: [
      'Access CTL Slack',
      'Daily focus sessions',
      'Monday activation call',
      'Async SCRUM check-ins',
      'Group productivity clinic',
      'Team-building activities',
    ],
    cta: 'Join waitlist',
  },
  {
    name: 'CTL Cohort Subscription',
    monthlyPrice: '€299',
    monthlyPerUnit: 'per month',
    features: [
      'Access CTL Slack',
      'Daily focus sessions',
      'Monday activation call',
      'Async SCRUM check-ins',
      'Group productivity clinic',
      'Team-building activities',
    ],
    cta: 'Join waitlist',
    popular: true,
  },
  {
    name: 'Productivity Coaching + CTL Cohort Subscription',
    monthlyPrice: '€399',
    monthlyPerUnit: 'per month',
    features: [
      '1-on-1 productivity coaching + Group clinic',
      'Access CTL Slack',
      'Daily focus sessions',
      'Monday activation call',
      'Async SCRUM check-ins',
      'Team-building activities',
    ],
    cta: 'Join waitlist',
  },
];

export default function Pricing({
  headerTag = 'h2',
}: {
  headerTag?: 'h1' | 'h2';
}) {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          {headerTag === 'h1' ? (
            <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Pricing
            </h1>
          ) : (
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Pricing
            </h2>
          )}
          <p className="text-muted-foreground text-lg text-balance">
            Join a curated community of remote professionals who understand the challenges of working alone. 40-60% cheaper than assembling individual apps and coaching.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                plan.popular &&
                  'from-orange-100/70 to-orange-50 scale-[1.075] rounded-3xl bg-linear-to-b p-3 shadow-xl shadow-orange-500/10',
              )}
            >
              <Card
                className={cn(
                  'h-full border-none bg-zinc-100 dark:bg-zinc-900',
                  plan.popular && 'bg-background relative ring-2 ring-orange-400 shadow-lg',
                )}
              >
                <CardHeader>
                  <h3 className={cn(
                    "text-2xl font-semibold",
                    plan.popular && "text-orange-700"
                  )}>
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    <p className={cn(
                      "text-muted-foreground text-lg font-medium",
                      plan.popular && "text-orange-600"
                    )}>
                      {plan.monthlyPrice}
                      {plan.monthlyPerUnit && ' ' + plan.monthlyPerUnit}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6">
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    className={plan.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25' : ''}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

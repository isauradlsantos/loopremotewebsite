'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is Close The Loop?',
    answer:
      'Close The Loop is a membership-based virtual coworking community built around hand-matched cohorts of 10–15 remote professionals. You get private Slack access, daily focus sprints, ADHD-friendly rituals, and optional expert coaching—so you never work alone again.',
  },
  {
    question: 'How is this different from other virtual coworking apps?',
    answer:
      'Close The Loop is a comprehensive approach to remote work. When you join CTL, you become part of a dedicated team and a vibrant community of hand-picked peers who inspire you and achieve goals alongside you. It is more than a service for random focus sessions; it is an exceptional group of professionals who quickly become your new work family.',
  },
  {
    question: 'Do I need an ADHD diagnosis to join?',
    answer:
      'No. CTL is highly focused on supporting neurodivergent professionals, but our cohorts mix neurodivergent and neurotypical members. By sharing experiences across perspectives, everyone gains fresh strategies, built-in accountability, and stronger teamwork.',
  },
  {
    question: 'What does "body-doubling" mean?',
    answer:
      'Body-doubling is working side-by-side (virtually) with your cohort in timed focus sessions. Seeing and hearing peers boosts accountability, sharpens focus, and makes tasks feel more manageable.',
  },
  {
    question: 'What if I can\'t make the scheduled sessions?',
    answer:
      'Our virtual lobby stays open all day, every day, so you can drop into any focus sprint. Async SCRUM check-ins let you stay aligned even when you can\'t join live.',
  },
  {
    question: 'What happens if I don\'t attend sessions consistently?',
    answer:
      'Close The Loop prioritizes the group\'s dynamic and productivity. Regular attendance ensures everyone benefits from a motivated, engaged cohort. If you frequently miss sessions, you may lose your cohort spot. This preserves the high-performing team environment and ensures all members get the accountability and community they signed up for.',
  },
  {
    question: 'How do you match peers in the community?',
    answer:
      'Each week we hand-pick new members into cohorts based on:\n\nYour role, industry, and top goals\n\nTime-zone and preferred focus hours\n\nComplementary skills, experience level, and ambition',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes. Commit for one month, and if you\'re not satisfied, we\'ll refund your full membership fee—no questions asked.',
  },
  {
    question: 'Can I try before committing to a full membership?',
    answer:
      'Absolutely. We offer a limited-time early-bird pilot at 50% off your first cohort. If it\'s not a fit, you can cancel or request a refund before regular billing begins.',
  },
  {
    question: 'How does the systems coaching work?',
    answer:
      'Systems coaching includes:\n\nMonthly group clinics to diagnose workflow roadblocks and share best practices\n\nOptional one-on-one sessions (with the Productivity Coaching add-on) to develop custom workflows and troubleshoot your unique challenges',
  },
];

export const FAQPage = () => {
  return (
    <section className="bg-sand-100 min-h-screen py-16 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            We've got answers
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center text-balance">
            Everything you need to know about Close The Loop and how we can help you thrive in remote work.
          </p>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <Accordion
            type="single"
            collapsible
            defaultValue="0"
            className="w-full space-y-4"
          >
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={i.toString()}
                className="border-muted rounded-xl bg-background px-6"
              >
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">Still have questions?</p>
            <Button asChild>
              <a href="mailto:hi@loopremote.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


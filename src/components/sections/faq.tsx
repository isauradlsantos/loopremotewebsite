import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const leftQuestions = [
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
    question: 'How do you match peers in the community?',
    answer:
      'Each week we hand-pick new members into cohorts based on:\n\nYour role, industry, and top goals\n\nTime-zone and preferred focus hours\n\nComplementary skills, experience level, and ambition',
  },
];

const rightQuestions = [
  {
    question: 'What if I can\'t make the scheduled sessions?',
    answer:
      'Our virtual lobby stays open all day, every day, so you can drop into any focus sprint. Async SCRUM check-ins let you stay aligned even when you can\'t join live.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes. Commit for one month, and if you\'re not satisfied, we\'ll refund your full membership fee—no questions asked.',
  },
  {
    question: 'How does the systems coaching work?',
    answer:
      'Systems coaching includes:\n\nMonthly group clinics to diagnose workflow roadblocks and share best practices\n\nOptional one-on-one sessions (with the Productivity Coaching add-on) to develop custom workflows and troubleshoot your unique challenges',
  },
  {
    question: 'Can I try before committing to a full membership?',
    answer:
      'Absolutely. We offer a limited-time early-bird pilot at 50% off your first cohort. If it\'s not a fit, you can cancel or request a refund before regular billing begins.',
  },
];

export const FAQ = () => {
  return (
    <section className={'pb-16 md:pb-28 lg:pb-32'}>
      <div className="container mx-auto lg:max-w-5xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight lg:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 grid gap-x-12 md:mt-10 md:grid-cols-2 lg:mt-14">
          <Accordion
            type="single"
            collapsible
            className="text-muted-foreground border-t"
          >
            {leftQuestions.map((item, i) => (
              <AccordionItem key={i} value={`left-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion
            collapsible
            type="single"
            className="text-muted-foreground md:border-t"
          >
            {rightQuestions.map((item, i) => (
              <AccordionItem key={i} value={`right-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

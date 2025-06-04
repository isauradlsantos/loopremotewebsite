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
      'Close The Loop is a membership-based virtual cowork community designed for neurodivergent remote professionals. We bundle focus scaffolds, curated peer matching, and systems coaching to address remote work isolation and executive function challenges.',
  },
  {
    question: 'How is this different from other virtual coworking apps?',
    answer:
      'Unlike generic platforms like Focusmate or Flow Club, we provide curated peer matching, ADHD-specific structure with Monday activation calls and async SCRUM, plus expert systems coaching - all in one integrated community.',
  },
  {
    question: 'Do I need an ADHD diagnosis to join?',
    answer:
      'No diagnosis required! While we\'re designed with neurodivergent professionals in mind, anyone struggling with remote work isolation, executive function challenges, or seeking structured accountability is welcome.',
  },
  {
    question: 'What does "body-doubling" mean?',
    answer:
      'Body-doubling is working alongside others virtually to improve focus and accountability. Our timed focus sessions provide this proven ADHD strategy, helping members stay on task and feel less isolated.',
  },
  {
    question: 'How do you match peers in the community?',
    answer:
      'We use intentional matching based on work styles, goals, and complementary skills. Research shows sitting near high performers increases output by 15% - we apply this digitally through our curated peer clusters.',
  },
];

const rightQuestions = [
  {
    question: 'What if I can\'t make the scheduled sessions?',
    answer:
      'All tiers include flexible scheduling. Core members get daily focus sessions at multiple times, Plus members get extended hours, and Pro members can request custom session times with their peer groups.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes! Our early cohort includes a "refund if not helpful" guarantee. We\'re confident in our approach, but we understand this investment needs to deliver real value for your work and wellbeing.',
  },
  {
    question: 'How does the systems coaching work?',
    answer:
      'Plus members get monthly group coaching sessions focused on productivity systems and executive function. Pro members also receive quarterly 1-on-1 sessions for personalized systems optimization and ADHD-friendly workflow design.',
  },
  {
    question: 'Can I try before committing to a full membership?',
    answer:
      'We\'re launching with a special early-bird cohort at 50% off to test our approach. This gives you full access to experience the community and structure before our regular pricing begins.',
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

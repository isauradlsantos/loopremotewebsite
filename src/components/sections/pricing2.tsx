'use client';

import { useState } from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';

interface FeatureSection {
  category: string;
  features: {
    name: string;
    earlyBird: boolean;
    ctlCohort: boolean;
    productivityCoaching: boolean;
  }[];
}

const pricingPlans = [
  {
    name: 'Early Bird',
    price: '€149',
    description: 'Limited seats',
    button: {
      text: 'Join waitlist',
      variant: 'outline' as const,
    },
  },
  {
    name: 'CTL Cohort',
    price: '€299',
    description: '',
    button: {
      text: 'Join waitlist',
      variant: 'outline' as const,
    },
  },
  {
    name: 'Productivity Coaching',
    price: '€399',
    description: '',
    button: {
      text: 'Join waitlist',
      variant: 'outline' as const,
    },
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: 'Community',
    features: [
      {
        name: 'Access CTL Slack',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: 'Hand-Matched Peer Cohorts',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: 'Curated Peer Matching',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
    ],
  },
  {
    category: 'Productivity Sessions',
    features: [
      {
        name: 'Daily Focus Sprints',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: 'Monday Activation Call',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: 'Async SCRUM Check-ins',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: 'Body-Doubling Focus Rooms',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
    ],
  },
  {
    category: 'Coaching & Accountability',
    features: [
      {
        name: 'Monthly Group Productivity Clinic',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
      {
        name: '1-on-1 Productivity Coaching',
        earlyBird: false,
        ctlCohort: false,
        productivityCoaching: true,
      },
      {
        name: 'Team-Building Activities',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
    ],
  },
  {
    category: 'Special Offers',
    features: [
      {
        name: 'Pricing Discount (First Cohort)',
        earlyBird: true,
        ctlCohort: false,
        productivityCoaching: false,
      },
      {
        name: 'Money-Back Guarantee (1st month)',
        earlyBird: true,
        ctlCohort: true,
        productivityCoaching: true,
      },
    ],
  },
];

const Pricing2 = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to CTL Cohort plan

  return (
    <section className="pb-16 md:pb-28 lg:pb-32">
      <div className="container">
        <PlanHeaders
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <div className="mt-6 lg:mt-12">
          <FeatureSections selectedPlan={selectedPlan} />
        </div>
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between py-4">
            <CollapsibleTrigger
              className="flex items-center gap-2"
              aria-label="Toggle pricing plans"
            >
              <h3 className="text-2xl font-semibold">
                {pricingPlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={`size-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </CollapsibleTrigger>
            <Button variant="outline" size="sm">
              {pricingPlans[selectedPlan].button.text}
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    size="lg"
                    variant="secondary"
                    key={index}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 max-md:hidden">
        <div className="col-span-1"></div>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
            <p className="mb-4 text-3xl font-bold">{plan.price}</p>
            <Button variant="outline" className="w-fit mb-4">
              {plan.button.text}
            </Button>
            {plan.description && (
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="mb-8">
        <div className="bg-muted-foreground/5 px-2 py-4">
          <h3 className="text-lg font-semibold">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-primary/90 grid grid-cols-2 border-b py-2 font-medium max-md:last:border-b-0 md:grid-cols-4"
          >
            <span className="flex items-center py-3">{feature.name}</span>
            {/* Mobile View - Only Selected Plan */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-3">
                {(() => {
                  const value = [
                    feature.earlyBird,
                    feature.ctlCohort,
                    feature.productivityCoaching,
                  ][selectedPlan];
                  return value ? (
                    <Check className="size-4 text-green-500" />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  );
                })()}
              </div>
            </div>
            {/* Desktop View - All Plans */}
            <div className="hidden md:block">
              <div className="flex items-center gap-1 py-3">
                {feature.earlyBird ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-1 py-3">
                {feature.ctlCohort ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-1 py-3">
                {feature.productivityCoaching ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

export default Pricing2;

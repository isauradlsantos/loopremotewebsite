import React from 'react';
import Link from 'next/link';

import { ArrowRight, Users, TrendingUp, Shield, Clock, Target, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ForBusinesses = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'Deep-Work Sprints',
      description: 'Daily, timed focus sessions boost output by turning solo tasks into shared momentum.',
    },
    {
      icon: Users,
      title: 'High-Performance Pairing',
      description: 'Employees are matched with complementary peers, driving accountability and fresh ideas.',
    },
    {
      icon: Shield,
      title: 'Neurodivergent-Smart Rhythm',
      description: 'Monday activations, async SCRUM, and exec-function cues keep neurodivergent and neurotypical brains on track.',
    },
    {
      icon: Clock,
      title: 'Habit-Building Clinics',
      description: 'Monthly productivity workshops and light social events strengthen engagement and cohesion.',
    },
    {
      icon: Target,
      title: 'Plug-and-Play Rollout',
      description: 'Instant Slack-based setup. No new software or complex integrations required.',
    },
    {
      icon: Zap,
      title: 'Zero Extra Headcount',
      description: 'Company-exclusive cohorts provide coaching and facilitation benefits without extra managers or Scrum masters.',
    },
  ];

  const enterpriseFeatures = [
    {
      title: 'Dedicated Team Cohorts',
      description: 'Private cohorts exclusively for your organization with hand-matched peers based on roles and goals.',
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing tools and workflows through our flexible API.',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into team productivity, engagement, and goal achievement metrics.',
    },
    {
      title: 'Admin Controls',
      description: 'Full administrative oversight with user management, billing, and compliance features.',
    },
    {
      title: 'Priority Support',
      description: 'Dedicated account management and 24/7 technical support for enterprise clients.',
    },
    {
      title: 'Compliance Ready',
      description: 'SOC 2 compliant with enterprise-grade security and data protection measures.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Team Starter',
      price: '$49',
      period: 'per user/month',
      description: 'Perfect for small teams getting started with remote productivity',
      features: [
        'Up to 25 team members',
        'Basic cohort matching',
        'Standard support',
        'Core productivity tools',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Business Growth',
      price: '$39',
      period: 'per user/month',
      description: 'Ideal for growing organizations with advanced needs',
      features: [
        'Up to 100 team members',
        'Advanced matching algorithms',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
      ],
      cta: 'Contact Sales',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'annual',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited team members',
        'Dedicated account manager',
        'Custom development',
        'Advanced security',
        'Compliance features',
        'On-site training',
      ],
      cta: 'Schedule Demo',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-sand-100">
      {/* Hero Section */}
      <section className="py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Remote Team's Productivity
            </h1>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              <br />
              Close The Loop provides enterprise-grade virtual coworking solutions that boost productivity and employee engagement without additional hires, complex integrations, or access to sensitive data.
              <br />
              <br />
              <span className="font-semibold">Transforming isolation into connected, high-performing teams.</span>
            </p>
            <br />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/pricing">
                  View Enterprise Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="https://tidycal.com/isaurasantos/close-the-loop">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Boost Performance and Collaboration Without Hiring or Headaches
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Close The Loop provides science-backed techniques and structured routines designed to enhance productivity, connection, and focus for both neurodivergent and neurotypical professionals.
              <br />
              Build high-performing teams without additional headcount or complex implementations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <benefit.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Flexible Plans for Every Business Size
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Choose the plan that best fits your organization's needs and scale as you grow.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative border-2 ${
                  tier.popular 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    <Link href="/pricing">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gray-900 py-16 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Transform Your Remote Team?
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Let's discuss how Close The Loop can help your organization thrive in the remote work era.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600">
                <Link href="mailto:enterprise@loopremote.com">
                  Contact Enterprise Sales
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/pricing">
                  View All Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 
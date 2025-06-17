import { Users, Brain, DollarSign } from 'lucide-react';

export const Feature1 = () => {
  const ITEMS = [
    {
      value: '2×',
      label: 'Task-completion doubles when working side-by-side with a cohort',
      secondaryLabel: '1 in 5 remote professionals battles daily loneliness at work.',
      icon: Users,
    },
    {
      value: '35%',
      label: 'Higher goal-hit rate through peer accountability',
      secondaryLabel: 'Neurodivergent adults perform better with structure and community.',
      icon: Brain,
    },
    {
      value: '–60%',
      label: 'Lower cost with CTL systems and community',
      secondaryLabel: '€700 /mo wasted on apps that fix neither focus nor isolation.',
      icon: DollarSign,
    },
  ];

  return (
    <section id="feature1" className="py-16 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Orange Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-28 h-28 bg-orange-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-orange-300/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            For neurodivergent remote professionals and anyone looking to beat isolation.
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            Remote work has surged since 2020, making isolation common for many. At the same time, diagnoses of ADHD and other neurodivergent conditions are rising, so more professionals are seeking the structure and community they need to perform at their best.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {ITEMS.map((metric, i) => (
            <div
              key={i}
              className="from-muted to-orange-50 via-mint relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-linear-to-br md:[aspect-ratio:3.8/4] border border-orange-200/50 hover:border-orange-300/80 transition-all duration-300"
            >
              <div className="p-8 pb-2">
                <metric.icon className="fill-orange-500 text-orange-600 size-10" />
              </div>
              <div className="p-6">
                <div className="text-6xl font-semibold tracking-tight bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold tracking-tight text-gray-800">
                  {metric.label}
                </div>
                <div className="text-lg font-medium tracking-tight text-gray-600 mt-2">
                  {metric.secondaryLabel}
                </div>
              </div>
              {/* Small orange accent circle */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-6 text-end text-sm">
          *Sources: Focusmate.com, CDC 2023, industry research
        </div>
      </div>
    </section>
  );
};

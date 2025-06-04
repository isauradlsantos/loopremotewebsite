import React from 'react';

export const About = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            About Close The Loop
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We understand the unique challenges of remote work for neurodivergent professionals.
            Our mission is to create structured, supportive virtual environments where you can thrive.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-muted-foreground">
              Carefully curated peer groups matched by work style and goals, 
              creating the perfect balance of support and productivity.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">ADHD-Friendly Structure</h3>
            <p className="text-muted-foreground">
              Executive function scaffolds, body-doubling sessions, and 
              accountability systems designed specifically for neurodivergent minds.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Expert Coaching</h3>
            <p className="text-muted-foreground">
              Systems coaching and productivity optimization from professionals 
              who understand the intersection of ADHD and remote work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

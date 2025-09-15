import React from 'react';

const experiences = [
  {
    id: 1,
    period: '2023 - Present',
    position: 'Senior Frontend Developer',
    company: 'TechSolutions Inc.',
    companyIcon: '🏢',
    description: 'Leading the frontend development team in building a comprehensive design system and component library used across multiple products.',
    achievements: [
      'Architected and implemented a scalable component library using React, TypeScript, and Storybook',
      'Reduced bundle size by 35% through code splitting and lazy loading techniques',
      'Mentored junior developers and conducted code reviews to maintain high code quality',
    ],
  },
  {
    id: 2,
    period: '2020 - 2023',
    position: 'Frontend Developer',
    company: 'WebCraft Studios',
    companyIcon: '🎨',
    description: 'Developed responsive and accessible web applications for clients across various industries, focusing on modern JavaScript frameworks.',
    achievements: [
      'Built 15+ client projects using React, Next.js, and various state management solutions',
      'Implemented CI/CD pipelines that reduced deployment time by 60%',
      'Collaborated with designers to ensure pixel-perfect implementation of UI designs',
    ],
  },
  {
    id: 3,
    period: '2018 - 2020',
    position: 'Junior Web Developer',
    company: 'Digital Innovators',
    companyIcon: '💡',
    description: 'Started my professional journey developing and maintaining client websites, focusing on HTML, CSS, and JavaScript.',
    achievements: [
      'Created responsive websites for small to medium-sized businesses',
      'Learned and implemented modern JavaScript frameworks like React',
      'Participated in team code reviews and improved coding practices',
    ],
  },
];

export default function Experiences() {
  return (
    <section className="py-8 mx-auto max-w-4xl px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Work
          {' '}
          <span className="color-primary-text">Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start group">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-neutral-900 group-hover:bg-purple-500 transition-colors duration-300 z-10"></div>

              {/* Period */}
              <div className="w-32 flex-shrink-0 text-right pr-0">
                <span className="text-blue-400 font-medium text-sm">
                  {exp.period}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 ml-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.position}
                </h3>
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-400/20 rounded-2xl p-6 hover:border-neutral-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-blue-400">
                        <span className="text-sm">🏢</span>
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm text-neutral-300 leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

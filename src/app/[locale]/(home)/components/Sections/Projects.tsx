import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.',
    image: '/api/placeholder/500/300',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-600 to-purple-700',
    featured: true,
  },
  {
    id: 2,
    title: 'Nucleus UI Library',
    description: 'An open-source component library with 50+ accessible and customizable UI components for React applications.',
    image: '/api/placeholder/500/300',
    tags: ['React', 'Storybook', 'Styled Components'],
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'from-teal-500 to-cyan-600',
    featured: true,
  },
  {
    id: 3,
    title: 'FitTrack Mobile App',
    description: 'A fitness tracking mobile application with workout plans, progress tracking, and social features for fitness enthusiasts.',
    image: '/api/placeholder/500/300',
    tags: ['React Native', 'Redux', 'Firebase'],
    appStoreUrl: '#',
    googlePlayUrl: '#',
    gradient: 'from-orange-500 to-red-600',
    featured: true,
  },
  {
    id: 4,
    title: 'DevNotes Blog Platform',
    description: 'A modern blogging platform for developers with markdown support, code highlighting, and a clean reading experience.',
    image: '/api/placeholder/500/300',
    tags: ['Next.js', 'GraphQL', 'Vercel'],
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'from-violet-600 to-purple-600',
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="py-8 mx-auto max-w-7xl px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Featured
          {' '}
          <span className="color-primary-text">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map(project => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden border border-neutral-400/20 hover:border-neutral-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-neutral-900/50 backdrop-blur-sm"
          >
            {/* Project Image */}
            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-white text-center p-6">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                  <span className="text-2xl">📱</span>
                </div>

              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    <span>🔗</span>
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-neutral-400/40 hover:border-neutral-300/60 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <span>⭐</span>
                    GitHub
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    <span>📱</span>
                    App Store
                  </a>
                )}
                {project.googlePlayUrl && (
                  <a
                    href={project.googlePlayUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-neutral-400/40 hover:border-neutral-300/60 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <span>🤖</span>
                    Google Play
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 font-medium"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
}

import GithubActivity from './GithubActivity'; //

export default function About() {
  return (
    <div className="bg-zinc-950 text-white px-6 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-8 sm:mb-16">
          About Me
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-300">
            I'm a <span className="text-white font-semibold">DevOps Engineer</span>{' '}
            focused on building reliable, scalable systems covering CI/CD, Kubernetes, cloud infrastructure, GitOps, and observability. I work on production-grade automation, platform tooling, and cloud-native architectures.
          </p>

          <p className="text-gray-300">
            I contribute to{' '}
            <span className="text-cyan-400">open-source projects</span> in CNCF ecosystems,
            and enjoy designing systems, breaking them under load, and making them faster, simpler, and more resilient.
          </p>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl italic text-cyan-400 pt-8 font-light">
            "Engineering reliability. Automating excellence."
          </blockquote>
        </div>

        {/* GitHub Activity integrated here */}
        <div className="mt-16 sm:mt-24 border-t border-zinc-900 pt-8 sm:pt-16">
          <GithubActivity />
        </div>
      </div>
    </div>
  );
}
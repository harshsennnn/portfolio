export default function About() {
  return (
    <div className="bg-zinc-950 text-white px-6 py-1">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-16">
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
            in the CNCF ecosystem and enjoy designing systems, breaking them under load, and making them faster, simpler, and more resilient.
          </p>

          {/* <p className="text-gray-300">
            Outside DevOps, I enjoy building systems, breaking them, and making them faster,
            cleaner, and more reliable.
          </p> */}

          <blockquote className="text-2xl sm:text-3xl md:text-4xl italic text-cyan-400 mt-16 font-light">
            "Engineering reliability. Automating excellence."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

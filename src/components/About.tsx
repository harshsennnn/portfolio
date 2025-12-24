export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-16">
          About Me
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-300">
            I'm a <span className="text-white font-semibold">DevOps & MLOps Engineer</span>{' '}
            specializing in building scalable CI/CD pipelines, cloud-native architectures,
            automation systems, and Kubernetes-based deployments. I work across
            containerization, cloud infrastructure, GitOps, monitoring, and
            developer-platform tooling.
          </p>

          <p className="text-gray-300">
            I contribute to{' '}
            <span className="text-cyan-400">open-source projects</span> in CNCF ecosystems,
            Kubernetes tooling, and DevOps automation. I also develop backend systems,
            cloud-native microservices, and real-world workflow automation for
            production-grade environments.
          </p>

          <p className="text-gray-300">
            Outside DevOps, I enjoy building systems, breaking them, and making them faster,
            cleaner, and more reliable.
          </p>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl italic text-cyan-400 mt-16 font-light">
            "Engineering reliability. Automating excellence."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

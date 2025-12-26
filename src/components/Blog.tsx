import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const posts = [

    {
      title: 'How to Secure and Optimize Docker: Best Practices',
      date: 'Aug 2025',
      readTime: '5 min read',
      link: '#',
    },
    {
      title: 'Essential Tips for Beginners in DevOps and Cloud Engineering',
      date: 'Jun 2025',
      readTime: '3 min read',
      link: '#',
    },
    ];
    // {
    //   title: 'Simulating AWS Cognito Locally Using Docker & LocalStack',
    //   date: 'Oct 2024',
    //   readTime: '6 min read',
    //   link: '#',
    // },
    // {
    //   title: 'Why Every Team Should Adopt GitOps Early',
    //   date: 'Sep 2024',
    //   readTime: '5 min read',
    //   link: '#',
    // },

  return (
    <div className="bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-4 sm:mb-6">Blog</h1>
        <p className="text-gray-400 text-lg mb-8 sm:mb-16">
          Thoughts on DevOps, cloud infrastructure, and engineering best practices.
        </p>

        <div className="space-y-1">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="block border-t border-zinc-800 py-6 sm:py-8 hover:bg-zinc-900/30 transition-all group px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={24}
                  className="text-gray-600 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1 hidden sm:block"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

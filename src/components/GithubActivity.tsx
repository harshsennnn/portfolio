import { GitHubCalendar } from 'react-github-calendar'; //

export default function GithubActivity() {
  return (
    <div id="github" className="font-sans">
      <header className="mb-10">
        <p className="text-zinc-500 text-sm mb-2 italic">Activity Feed</p>
        <h2 className="text-4xl font-bold text-white mb-4">
          GitHub Contributions
        </h2>
        <p className="text-zinc-400 text-sm">
          Total: <span className="text-white font-bold">2,011</span> contributions in the last year
        </p>
      </header>

      {/* Contribution Graph Card */}
      <div className="bg-[#111111] border border-zinc-900 rounded-xl p-6 sm:p-8 overflow-hidden">
        <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar">
          <GitHubCalendar 
            username="harshsennnn" 
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            fontSize={12}
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
        
        {/* Custom Legend */}
        <div className="mt-4 flex justify-end items-center gap-2 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-[#161b22] rounded-sm" />
            <div className="w-3 h-3 bg-[#0e4429] rounded-sm" />
            <div className="w-3 h-3 bg-[#006d32] rounded-sm" />
            <div className="w-3 h-3 bg-[#26a641] rounded-sm" />
            <div className="w-3 h-3 bg-[#39d353] rounded-sm" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
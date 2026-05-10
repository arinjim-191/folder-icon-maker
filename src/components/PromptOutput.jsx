export default function PromptOutput({ topic, prompt, copied, onCopy }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            {topic.emoji} {topic.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Folder icon prompt · ready to paste</p>
        </div>
        <span className="text-xs text-gray-600">{prompt.length} chars</span>
      </div>

      {/* Prompt text */}
      <div className="rounded-lg bg-black/40 border border-white/10 p-4">
        <p className="text-sm text-gray-300 leading-relaxed font-mono">{prompt}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            copied
              ? "bg-green-900/40 border-green-700 text-green-400"
              : "bg-white/10 border-white/20 text-white hover:bg-white/20"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy Prompt"}
        </button>

        {/* Quick-open links */}
        <a
          href={`https://www.bing.com/images/create?q=${encodeURIComponent(prompt.slice(0, 480))}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
        >
          Try in DALL-E →
        </a>
      </div>

      {/* Tip */}
      <p className="text-xs text-gray-600 border-t border-white/5 pt-3">
        💡 Use 1:1 square ratio · 1024×1024px · Apply result with Folder Colorizer Pro (Win) or Folder Icon (Mac)
      </p>
    </div>
  );
}

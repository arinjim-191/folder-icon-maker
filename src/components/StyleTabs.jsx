const STYLES = [
  { id: "midjourney", label: "Midjourney",        desc: "Best quality" },
  { id: "dalle",      label: "DALL-E 3",          desc: "ChatGPT / Bing" },
  { id: "sd",         label: "Stable Diffusion",  desc: "Local / free" },
  { id: "firefly",    label: "Adobe Firefly",      desc: "Safe for work" },
];

export default function StyleTabs({ active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {STYLES.map((s) => (
        <button
          key={s.id}
          onClick={() => onChange(s.id)}
          className={`px-3 py-2 rounded-lg border text-xs transition-all ${
            active === s.id
              ? "bg-white text-gray-900 border-white"
              : "bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white"
          }`}
        >
          <span className="font-medium">{s.label}</span>
          <span className={`ml-1.5 ${active === s.id ? "text-gray-500" : "text-gray-600"}`}>
            · {s.desc}
          </span>
        </button>
      ))}
    </div>
  );
}

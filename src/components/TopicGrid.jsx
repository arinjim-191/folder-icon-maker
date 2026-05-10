import { useState } from "react";
import { categories as defaultCategories } from "../data/topics";

const CATEGORY_COLORS = {
  Movies:  "text-red-400 border-red-900/40",
  Games:   "text-green-400 border-green-900/40",
  Anime:   "text-orange-400 border-orange-900/40",
  Music:   "text-purple-400 border-purple-900/40",
  Sports:  "text-blue-400 border-blue-900/40",
  Nature:  "text-teal-400 border-teal-900/40",
  Custom:  "text-yellow-400 border-yellow-900/40",
};

export default function TopicGrid({ topics, customTopics, selected, onSelect, onRemove }) {
  const [filter, setFilter] = useState("All");

  // Derive all unique categories including custom
  const allCategories = ["All", ...new Set(topics.map((t) => t.category))];

  const visible = filter === "All" ? topics : topics.filter((t) => t.category === filter);

  // Group by category
  const grouped = visible.reduce((acc, t) => {
    (acc[t.category] ||= []).push(t);
    return acc;
  }, {});

  const isCustom = (t) => customTopics.some((c) => c.name === t.name);

  return (
    <div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs border transition-all ${
              filter === cat
                ? "bg-white text-gray-900 border-white"
                : "bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grouped grid */}
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className={`text-xs font-semibold uppercase tracking-widest mb-3 pb-2 border-b ${CATEGORY_COLORS[category] || "text-gray-400 border-white/10"}`}>
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {items.map((topic) => (
              <TopicCard
                key={topic.name}
                topic={topic}
                isSelected={selected?.name === topic.name}
                isCustom={isCustom(topic)}
                onSelect={() => onSelect(topic)}
                onRemove={() => onRemove(topic.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopicCard({ topic, isSelected, isCustom, onSelect, onRemove }) {
  return (
    <div
      onClick={onSelect}
      className={`relative group cursor-pointer rounded-xl border p-3 transition-all duration-150 ${
        isSelected
          ? "border-white/60 bg-white/10"
          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/8"
      }`}
    >
      <div className="text-2xl mb-2">{topic.emoji}</div>
      <div className="text-xs font-medium text-white leading-tight">{topic.name}</div>
      <div className="text-xs text-gray-500 mt-0.5">{topic.category}</div>

      {isCustom && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all text-xs leading-none p-0.5"
          title="Remove"
        >
          ✕
        </button>
      )}

      {isSelected && (
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white" />
      )}
    </div>
  );
}

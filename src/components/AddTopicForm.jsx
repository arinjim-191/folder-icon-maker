import { useState } from "react";
import { buildCustomPrompt } from "../data/promptBuilder";

const GENRES = ["Movies", "Games", "Anime", "Music", "Sports", "Nature", "Custom"];

const GENRE_EMOJIS = {
  Movies: "🎬", Games: "🎮", Anime: "⛩️",
  Music: "🎵", Sports: "🏆", Nature: "🌿", Custom: "✨",
};

export default function AddTopicForm({ onAdd }) {
  const [name, setName]     = useState("");
  const [genre, setGenre]   = useState("Custom");
  const [open, setOpen]     = useState(false);

  function handleAdd() {
    if (!name.trim()) return;
    onAdd({
      name: name.trim(),
      category: genre,
      emoji: GENRE_EMOJIS[genre] || "✨",
      // Minimal fallbacks — promptBuilder handles the rest
      palette: "bold vibrant cinematic colors",
      vibe: "dynamic action, dramatic energy, cinematic poster feel",
      elements: `${name.trim()} iconic imagery and symbols`,
      fontStyle: "bold condensed font with dramatic lighting",
    });
    setName("");
    setOpen(false);
  }

  return (
    <div>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-gray-500 hover:text-white hover:border-white/40 transition-all"
        >
          + Add your own topic
        </button>
      ) : (
        <div className="flex flex-wrap gap-3 items-center p-4 rounded-xl border border-white/10 bg-white/5">
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Topic name (e.g. Harry Potter)"
            className="flex-1 min-w-48 bg-black/40 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/50"
          />
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-black/40 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/50"
          >
            {GENRES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Add
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg border border-white/10 text-gray-500 text-sm hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

import { useState, useMemo } from "react";
import { topics } from "./data/topics";
import { buildPrompt } from "./data/promptBuilder";
import TopicGrid from "./components/TopicGrid";
import PromptOutput from "./components/PromptOutput";
import AddTopicForm from "./components/AddTopicForm";
import StyleTabs from "./components/StyleTabs";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [customTopics, setCustomTopics] = useState([]);
  const [aiStyle, setAiStyle] = useState("midjourney");
  const [copied, setCopied] = useState(false);

  const allTopics = useMemo(() => [...topics, ...customTopics], [customTopics]);

  const prompt = useMemo(
    () => (selectedTopic ? buildPrompt(selectedTopic, aiStyle) : ""),
    [selectedTopic, aiStyle]
  );

  function handleCopy() {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleAdd(newTopic) {
    setCustomTopics((prev) => [...prev, newTopic]);
  }

  function handleRemove(name) {
    setCustomTopics((prev) => prev.filter((t) => t.name !== name));
    if (selectedTopic?.name === name) setSelectedTopic(null);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              PromptForge
              <span className="ml-2 text-xs font-normal bg-red-600 text-white px-2 py-0.5 rounded-full align-middle">
                BETA
              </span>
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              AI image prompt generator — any topic, any tool
            </p>
          </div>
          <a
            href="https://github.com/yourusername/prompt-generator"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            GitHub →
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Add custom topic */}
        <AddTopicForm onAdd={handleAdd} />

        {/* Topic grid */}
        <TopicGrid
          topics={allTopics}
          customTopics={customTopics}
          selected={selectedTopic}
          onSelect={setSelectedTopic}
          onRemove={handleRemove}
        />

        {/* Output */}
        {selectedTopic && (
          <div className="space-y-4">
            <StyleTabs active={aiStyle} onChange={setAiStyle} />
            <PromptOutput
              topic={selectedTopic}
              prompt={prompt}
              copied={copied}
              onCopy={handleCopy}
            />
          </div>
        )}

        {!selectedTopic && (
          <div className="text-center py-16 text-gray-600">
            <div className="text-4xl mb-3">👆</div>
            <p className="text-sm">Select a topic above to generate your prompt</p>
          </div>
        )}
      </main>

      <footer className="border-t border-white/10 px-6 py-4 mt-12">
        <p className="text-center text-xs text-gray-600">
          Built with React + Vite · Deploy free on Netlify
        </p>
      </footer>
    </div>
  );
}

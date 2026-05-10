# PromptForge — AI Folder Icon Prompt Generator

Generate perfect AI image prompts for folder icons across any topic — movies, games, anime, music, sports, and more.

## Tech Stack
- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling
- **Netlify** — free hosting with one-click deploy

---

## Getting Started

### 1. Clone / download the project
```bash
git clone https://github.com/yourusername/prompt-forge.git
cd prompt-forge
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Project Structure

```
prompt-forge/
├── src/
│   ├── App.jsx                  # Root component, state management
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Tailwind base styles
│   ├── components/
│   │   ├── TopicGrid.jsx        # Card grid with category filter
│   │   ├── PromptOutput.jsx     # Generated prompt display + copy
│   │   ├── StyleTabs.jsx        # AI tool selector tabs
│   │   └── AddTopicForm.jsx     # Custom topic input form
│   └── data/
│       ├── topics.js            # All topic data (ADD NEW TOPICS HERE)
│       └── promptBuilder.js     # Prompt generation engine
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                 # Auto-deploy config for Netlify
└── package.json
```

---

## Adding New Topics

Open `src/data/topics.js` and add a new object to the `topics` array:

```js
{
  name: "Harry Potter",       // Display name
  category: "Movies",         // Groups cards in the grid
  emoji: "⚡",               // Shown on the card
  palette: "deep maroon, gold, Hogwarts midnight blue, warm candlelight amber",
  vibe: "magical school adventure, ancient wizardry, mystery and wonder",
  elements: "sorting hat, golden snitch, Hogwarts castle, lightning bolt scar",
  fontStyle: "elegant magical serif font with gold ink and wax seal texture",
},
```

That's it — the prompt builder handles the rest automatically.

---

## Adding New AI Tool Styles

Open `src/data/promptBuilder.js` and add a new case to the `buildPrompt` function:

```js
case "imagine":
  return `/imagine ${core}`;
```

Then add the tab in `src/components/StyleTabs.jsx`:

```js
{ id: "imagine", label: "Imagine", desc: "Your tool" },
```

---

## Deploying to Netlify (Free)

### Option A — Drag & Drop (easiest)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder into the browser
4. Done — live URL in seconds!

### Option B — GitHub + Auto-Deploy
1. Push your code to GitHub
2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy — every `git push` auto-deploys!

### Option C — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## Deploying to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/prompt-forge",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## Customisation Ideas

| Feature | Where to change |
|---|---|
| Site name / branding | `src/App.jsx` header section |
| Add new category | `src/data/topics.js` — add new `category` value |
| Change dark theme colors | `src/index.css` + Tailwind classes in components |
| Add AI tool | `promptBuilder.js` + `StyleTabs.jsx` |
| Add filters / search | `src/components/TopicGrid.jsx` |
| Save favourites | Add `localStorage` in `App.jsx` |

---

## License
MIT — free to use and modify.

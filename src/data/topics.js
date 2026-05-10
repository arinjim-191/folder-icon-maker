// ─────────────────────────────────────────────
//  TOPICS DATA
//  Add new topics here. Each topic needs:
//   name     – display name
//   category – groups topics in the grid
//   emoji    – shown on the card
//   palette  – color words for the AI prompt
//   vibe     – atmosphere/mood description
//   elements – key visual elements to include
//   fontStyle– how the text/title should look
// ─────────────────────────────────────────────

export const topics = [
  // ── MOVIES ────────────────────────────────
  {
    name: "Marvel Cinematic Universe",
    category: "Movies",
    emoji: "🦸",
    palette: "crimson red, gold, electric blue, cosmic black",
    vibe: "epic superhero ensemble, Infinity Gauntlet energy, cosmic scale",
    elements: "Iron Man arc reactor, Captain America shield, Thor lightning, Thanos gauntlet",
    fontStyle: "bold red condensed slab-serif with gold 3D metallic extrusion",
  },
  {
    name: "The Matrix",
    category: "Movies",
    emoji: "🟢",
    palette: "neon green, pitch black, digital white",
    vibe: "digital dystopia, glitchy reality, hacker underground",
    elements: "cascading matrix code rain, man in long coat, red vs blue pill",
    fontStyle: "glowing green monospace with scanline CRT effect",
  },
  {
    name: "Pirates of the Caribbean",
    category: "Movies",
    emoji: "☠️",
    palette: "deep ocean blue, aged gold, dark mahogany, storm grey",
    vibe: "high seas adventure, cursed treasure, swashbuckling action",
    elements: "skull and crossed swords, galleon ship on stormy seas, compass",
    fontStyle: "weathered gold distressed serif with barnacle texture",
  },
  {
    name: "Interstellar",
    category: "Movies",
    emoji: "🌌",
    palette: "deep space black, golden accretion disk, white starfield",
    vibe: "existential cosmic wonder, time dilation, love across dimensions",
    elements: "black hole with gravitational lensing, wormhole tunnel, dust storm",
    fontStyle: "clean white sans-serif with light warp distortion",
  },

  // ── GAMES ─────────────────────────────────
  {
    name: "Minecraft",
    category: "Games",
    emoji: "⛏️",
    palette: "grass green, dirt brown, sky blue, stone grey",
    vibe: "pixelated creativity, infinite blocky world, adventure survival",
    elements: "Creeper face, diamond pickaxe, pixelated terrain, TNT block",
    fontStyle: "chunky pixelated 8-bit font with block shadow",
  },
  {
    name: "GTA V",
    category: "Games",
    emoji: "🚗",
    palette: "neon night orange, dark urban grey, skyline yellow",
    vibe: "open world crime, cinematic heist energy, Los Santos chaos",
    elements: "city skyline at dusk, wanted stars, luxury car, helicopter",
    fontStyle: "bold italic condensed urban street font in orange",
  },
  {
    name: "Cyberpunk 2077",
    category: "Games",
    emoji: "🤖",
    palette: "neon cyan, electric magenta, dark carbon, bright yellow",
    vibe: "dystopian megacity, chrome body mods, corporate vs outlaw",
    elements: "Night City skyline, cyber implants, V silhouette, neon signs",
    fontStyle: "angular futuristic neon font with glitch artifact effect",
  },
  {
    name: "The Legend of Zelda",
    category: "Games",
    emoji: "🗡️",
    palette: "Hyrule green, Triforce gold, twilight purple, sky blue",
    vibe: "epic fantasy quest, ancient wisdom, courage against darkness",
    elements: "Triforce symbol, Master Sword, Hyrule castle, Link silhouette",
    fontStyle: "elegant fantasy serif in gold with Hylian rune border",
  },

  // ── ANIME ─────────────────────────────────
  {
    name: "Naruto",
    category: "Anime",
    emoji: "🍥",
    palette: "orange, white, red, deep blue",
    vibe: "ninja determination, friendship bonds, explosive chakra energy",
    elements: "Konoha leaf symbol, Rasengan energy ball, Naruto running pose",
    fontStyle: "bold brushstroke Japanese calligraphy with orange chakra glow",
  },
  {
    name: "Dragon Ball Z",
    category: "Anime",
    emoji: "⚡",
    palette: "Super Saiyan gold, bright orange gi, electric blue aura, white",
    vibe: "over-the-top power levels, earth-shattering battles, transformation energy",
    elements: "Dragon Ball orbs, Kamehameha wave, Goku Super Saiyan aura",
    fontStyle: "heavy bold kanji-inspired font with golden power aura glow",
  },
  {
    name: "Attack on Titan",
    category: "Anime",
    emoji: "⚔️",
    palette: "military green, blood red, grey stone wall, dark sky",
    vibe: "survival horror, humanity's last stand, giant looming threat",
    elements: "Survey Corps wings emblem, ODM gear blades, colossal titan silhouette",
    fontStyle: "heavy military stencil font with cracked stone texture",
  },

  // ── MUSIC ─────────────────────────────────
  {
    name: "Hip Hop",
    category: "Music",
    emoji: "🎤",
    palette: "gold chain yellow, pure black, spray-paint white, urban grey",
    vibe: "street culture, raw lyrical power, urban jungle energy",
    elements: "microphone, vinyl record, spray paint tags, boombox",
    fontStyle: "graffiti wildstyle lettering in gold on black",
  },
  {
    name: "Rock & Metal",
    category: "Music",
    emoji: "🎸",
    palette: "blood red, jet black, chrome silver, electric white",
    vibe: "raw guitar power, stadium energy, rebellious loud intensity",
    elements: "electric guitar, lightning bolt, crowd fists raised, speaker amp",
    fontStyle: "spiked heavy metal font with chrome chrome texture and fire",
  },
  {
    name: "Lo-Fi Beats",
    category: "Music",
    emoji: "🎵",
    palette: "warm amber, dusty pink, faded blue, soft cream",
    vibe: "cozy late night studying, nostalgia, rain on window calm",
    elements: "anime girl at desk, vinyl player, city rain window, coffee cup",
    fontStyle: "handwritten casual font with soft grain overlay",
  },

  // ── SPORTS ────────────────────────────────
  {
    name: "Football (Soccer)",
    category: "Sports",
    emoji: "⚽",
    palette: "vivid green pitch, white, team primary colors, stadium gold",
    vibe: "global passion, last-minute drama, stadium roar, beautiful game",
    elements: "football mid-kick, stadium lights, scoreboard, goal net",
    fontStyle: "bold athletic condensed font with stadium floodlight glow",
  },
  {
    name: "Basketball (NBA)",
    category: "Sports",
    emoji: "🏀",
    palette: "hardwood orange, court brown, arena spotlight gold, deep navy",
    vibe: "gravity-defying dunks, clutch moments, hardwood glory",
    elements: "basketball mid-air, hoop and net, arena lights, slam dunk silhouette",
    fontStyle: "bold italic varsity font with leather texture",
  },

  // ── NATURE ────────────────────────────────
  {
    name: "Deep Ocean",
    category: "Nature",
    emoji: "🌊",
    palette: "abyssal navy, bioluminescent teal, dark midnight blue, white foam",
    vibe: "mysterious depths, alien life, crushing pressure, ancient wonder",
    elements: "anglerfish, whale silhouette, coral reef glow, submarine rays of light",
    fontStyle: "flowing watery serif with ripple distortion and bubble particles",
  },
  {
    name: "Outer Space",
    category: "Nature",
    emoji: "🚀",
    palette: "deep cosmos black, nebula purple and pink, star gold, planet blue",
    vibe: "infinite vastness, humbling scale, exploration and discovery",
    elements: "spiral galaxy, astronaut silhouette, ringed planet, shooting stars",
    fontStyle: "thin white futuristic font with star particle scatter",
  },
];

// ── CATEGORIES (auto-derived, for filtering) ──
export const categories = [...new Set(topics.map((t) => t.category))];

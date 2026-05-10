// ─────────────────────────────────────────────
//  PROMPT BUILDER
//  Takes a topic + AI tool style and returns
//  a ready-to-paste image generation prompt.
// ─────────────────────────────────────────────

const STYLE_SUFFIXES = {
  midjourney: "--ar 1:1 --style raw --stylize 800 --v 6",
  dalle: "",   // DALL-E wraps differently (see below)
  sd: ", masterpiece, best quality, sharp focus, vivid colors, square format, 1:1, highly detailed, no blur, clean edges",
  firefly: ". Render in cinematic illustration style, dramatic lighting, square 1:1 format.",
};

/**
 * Core prompt that works for all styles.
 */
function corePrompt(topic) {
  return (
    `Square folder icon design for "${topic.name}". ` +
    `The title text "${topic.name.toUpperCase()}" is prominently displayed at the top in ${topic.fontStyle}. ` +
    `Color palette: ${topic.palette}. ` +
    `Atmosphere: ${topic.vibe}. ` +
    `Key visual elements: ${topic.elements}. ` +
    `Ultra-detailed cinematic poster quality, sharp icon-ready edges, no letterbox, no white background, ` +
    `dramatic lighting, photorealistic textures blended with graphic design aesthetics, square composition.`
  );
}

export function buildPrompt(topic, style = "midjourney") {
  const core = corePrompt(topic);

  switch (style) {
    case "midjourney":
      return `${core} ${STYLE_SUFFIXES.midjourney}`;

    case "dalle":
      return (
        `Create a square digital folder icon for "${topic.name}". ` +
        core +
        ` Style: ultra-detailed digital concept art, icon design. Square 1024x1024 format.`
      );

    case "sd":
      return core + STYLE_SUFFIXES.sd;

    case "firefly":
      return core + STYLE_SUFFIXES.firefly;

    default:
      return core;
  }
}

/**
 * Build a prompt for a custom topic with minimal data.
 * Used when the user adds their own topic without full metadata.
 */
export function buildCustomPrompt(name, genre, style = "midjourney") {
  const fallback = {
    name,
    palette: "bold vibrant colors with high contrast",
    vibe: "dynamic action, cinematic drama, powerful energy",
    elements: `${name} iconic symbols and imagery`,
    fontStyle: "bold condensed font with dramatic lighting and glow effects",
  };
  return buildPrompt(fallback, style);
}

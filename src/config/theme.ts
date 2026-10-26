export const themeColors = {
  obsidian: "#090a0f",
  obsidianSoft: "#0f111a",
  surface: "#151824",
  gold: "#f59e0b",
  goldLight: "#fbbf24",
  crimson: "#e11d48",
} as const;

export type ThemeColor = keyof typeof themeColors;

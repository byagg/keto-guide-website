/**
 * Unified Typography System
 * Provides consistent text styling across the application
 */

export const typography = {
  // Headings
  h1: "text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground",
  h2: "text-3xl md:text-4xl font-bold font-serif tracking-tight text-foreground",
  h3: "text-2xl md:text-3xl font-bold font-serif tracking-tight text-foreground",
  h4: "text-xl md:text-2xl font-semibold font-serif tracking-tight text-foreground",
  h5: "text-lg md:text-xl font-semibold font-sans tracking-tight text-foreground",
  h6: "text-base md:text-lg font-semibold font-sans tracking-tight text-foreground",
  
  // Body text
  body: "text-base font-sans text-foreground leading-relaxed",
  bodyLarge: "text-lg font-sans text-foreground leading-relaxed",
  bodySmall: "text-sm font-sans text-foreground leading-relaxed",
  
  // Muted text
  muted: "text-base font-sans text-muted-foreground leading-relaxed",
  mutedLarge: "text-lg font-sans text-muted-foreground leading-relaxed",
  mutedSmall: "text-sm font-sans text-muted-foreground leading-relaxed",
  
  // Lists
  list: "text-base font-sans text-foreground leading-relaxed",
  listItem: "text-base font-sans text-foreground leading-relaxed",
  
  // Spacing
  spacing: {
    tight: "space-y-2",
    normal: "space-y-4",
    relaxed: "space-y-6",
    loose: "space-y-8",
  },
  
  // Line height
  lineHeight: {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
  },
} as const;


export const spaces = {
  "4xs": "clamp(0.1875rem, 0.1875rem + 0vi, 0.1875rem)",
  "3xs": "clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem)",
  "2xs": "clamp(0.5625rem, 0.5408rem + 0.1087vi, 0.625rem)",
  xs: "clamp(0.875rem, 0.8533rem + 0.1087vi, 0.9375rem)",
  s: "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)",
  m: "clamp(1.6875rem, 1.6223rem + 0.3261vi, 1.875rem)",
  l: "clamp(2.25rem, 2.163rem + 0.4348vi, 2.5rem)",
  xl: "clamp(3.375rem, 3.2446rem + 0.6522vi, 3.75rem)",
  "2xl": "clamp(4.5rem, 4.3261rem + 0.8696vi, 5rem)",
  "3xl": "clamp(6.75rem, 6.4891rem + 1.3043vi, 7.5rem)",
} as const;

export type SpacesKey = keyof typeof spaces;

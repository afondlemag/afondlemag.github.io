export const colors = {
  white: "#f2f2e9",
  gray: "#66676c",
  black: "#231f20",
  beige: "#f6f4ed",
  "blue-1": "#3d4a9a",
  "blue-2": "#5ac6ed",
  "red-1": "#e7392e",
  "red-2": "#f38882",
  "green-1": "#00a1a2",
  "green-2": "#7dc3a8",
  "yellow-1": "#ffd239",
  "yellow-2": "#fcf28f",
  orange: "#eb5c38",
} as const;

export type ColorKey = keyof typeof colors;

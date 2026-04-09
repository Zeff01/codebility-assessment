export const COLORS = {
  background: '#eee8f9',
  heading: '#13092c',
  subtitle: '#6b5d80',
  cardText: '#160d30',
  cardSubtext: '#4a3c62',
  primary: '#7c3aed',
  accent: '#c4368a',
  darkGradient1: '#6730de',
  darkGradient2: '#3d16a8',
} as const;

export const SPACING = {
  containerPadding: '48px 32px',
  sectionMargin: 36,
  gridGap: 14,
  cardPadding: '26px 22px',
  cardCompactPadding: '20px 20px',
  iconMargin: 13,
  titleMargin: 7,
} as const;

export const ICON_SIZES = {
  large: { width: 46, height: 46, radius: 12 },
  medium: { width: 36, height: 36, radius: 9 },
  mediumRound: { width: 36, height: 36, radius: 10 },
  xl: { width: 52, height: 52, radius: 14 },
} as const;

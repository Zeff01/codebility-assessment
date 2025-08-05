export const Fonts = {
  // Font Families
  primary: 'SpaceMono',
  secondary: 'System',
  cursive: 'cursive',
  
  // Font Sizes
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
  '5xl': 32,
  
  // Font Weights 
  normal: 'normal',
  bold: 'bold',
  
  // Line Heights
  lineHeightTight: 1.2,
  lineHeightNormal: 1.4,
  lineHeightRelaxed: 1.6,
  
  // Letter Spacing
  letterSpacingTight: -0.5,
  letterSpacingNormal: 0,
  letterSpacingWide: 0.5,
} as const;

// Helper function to get font style
export const getFontStyle = (size: keyof typeof Fonts, weight?: string) => ({
  fontFamily: Fonts.primary,
  fontSize: Fonts[size],
  fontWeight: weight || Fonts.normal,
});

// Text-specific font styles
export const TextFontStyles = {
  title: {
    fontFamily: Fonts.primary,
    fontSize: Fonts['4xl'],
    fontWeight: Fonts.bold,
  },
  subtitle: {
    fontFamily: Fonts.primary,
    fontSize: Fonts['2xl'],
    fontWeight: Fonts.bold,
  },
  heading: {
    fontFamily: Fonts.primary,
    fontSize: Fonts.xl,
    fontWeight: Fonts.bold,
  },
  body: {
    fontFamily: Fonts.primary,
    fontSize: Fonts.base,
    fontWeight: Fonts.normal,
  },
  caption: {
    fontFamily: Fonts.primary,
    fontSize: Fonts.sm,
    fontWeight: Fonts.normal,
  },
  button: {
    fontFamily: Fonts.primary,
    fontSize: Fonts.lg,
    fontWeight: Fonts.bold,
  },
} as const; 
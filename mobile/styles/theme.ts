export const theme = {
  colors: {
    primary: "#8B5CF6", // Purple 500
    primaryDark: "#7C3AED", // Purple 600
    primaryLight: "#A78BFA", // Purple 400
    secondary: "#F3F4F6", // Gray 100
    background: "#FFFFFF",
    surface: "#F9FAFB", // Gray 50
    text: {
      primary: "#111827", // Gray 900
      secondary: "#6B7280", // Gray 500
      light: "#9CA3AF", // Gray 400
      white: "#FFFFFF",
    },
    border: "#E5E7EB", // Gray 200
    success: "#10B981", // Emerald 500
    warning: "#F59E0B", // Amber 500
    error: "#EF4444", // Red 500
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
      "4xl": 36,
    },
    weights: {
      normal: "400" as const,
      medium: "500" as const,
      semibold: "600" as const,
      bold: "700" as const,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
    },
  },
  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
}

export type Theme = typeof theme

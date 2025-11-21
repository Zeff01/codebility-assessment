// theme.ts
export const theme = {
  colors: {
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    
    // Background colors
    bgPrimary: '#ffffff',
    bgSecondary: '#f8fafc',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardGradient: 'linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%)',
    
    // Text colors
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    textLight: '#94a3b8',
    
    // Border colors
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
    
    // Category colors (dynamic per category)
    categoryBadge: {
      electronics: '#3b82f6',
      jewelery: '#ec4899',
      "men's clothing": '#8b5cf6',
      "women's clothing": '#f59e0b',
    }
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  radius: {
    sm: '6px',
    md: '10px',
    lg: '12px',
    xl: '16px',
  },
  
  transitions: {
    fast: '0.15s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  }
};

// styles.ts
export const styles = {
  // Product Card Styles
  productCard: {
    base: {
      cursor: 'pointer',
      border: `2px solid ${theme.colors.border}`,
      borderRadius: theme.radius.lg,
      padding: '16px',
      background: theme.colors.bgPrimary,
      transition: `all ${theme.transitions.medium}`,
      boxShadow: theme.shadows.sm,
    },
    hover: {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows.xl,
      borderColor: theme.colors.primary,
    }
  },
  
  productImage: {
    container: {
      height: 180,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.colors.cardGradient,
      borderRadius: theme.radius.md,
      padding: '16px',
      marginBottom: '12px',
      overflow: 'hidden',
    },
    img: {
      maxHeight: '160px',
      maxWidth: '100%',
      objectFit: 'contain' as const,
      transition: `transform ${theme.transitions.medium}`,
    }
  },
  
  productTitle: {
    fontSize: '15px',
    margin: '12px 0',
    height: '42px',
    overflow: 'hidden',
    color: theme.colors.textPrimary,
    fontWeight: '600',
    lineHeight: '1.4',
  },
  
  productPrice: {
    fontSize: '20px',
    fontWeight: '700',
    background: theme.colors.bgGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  categoryBadge: (category: string) => ({
    fontSize: '11px',
    color: '#ffffff',
    background: theme.colors.categoryBadge[category as keyof typeof theme.colors.categoryBadge] || theme.colors.primary,
    padding: '6px 12px',
    borderRadius: theme.radius.sm,
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  }),
  
  // Search Input Styles
  searchInput: {
    base: {
      flex: 1,
      padding: '14px 20px',
      borderRadius: theme.radius.lg,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      color: theme.colors.textPrimary,
      fontSize: '15px',
      transition: `all ${theme.transitions.fast}`,
      outline: 'none',
      boxShadow: theme.shadows.sm,
    },
    focus: {
      borderColor: theme.colors.primary,
      boxShadow: `0 0 0 3px rgba(99, 102, 241, 0.1)`,
    }
  },
  
  // Modal Styles
  modal: {
    overlay: {
      position: 'fixed' as const,
      inset: 0,
      background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
    },
    content: {
      width: '90%',
      maxWidth: 900,
      background: theme.colors.bgPrimary,
      borderRadius: theme.radius.xl,
      padding: '32px',
      maxHeight: '90vh',
      overflow: 'auto',
      boxShadow: theme.shadows.xl,
      position: 'relative' as const,
    },
    closeButton: {
      position: 'absolute' as const,
      top: '20px',
      right: '20px',
      background: theme.colors.primary,
      color: 'white',
      border: 'none',
      borderRadius: theme.radius.md,
      padding: '10px 20px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: `all ${theme.transitions.fast}`,
      fontSize: '14px',
    },
    imageContainer: {
      flex: '1 1 300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.colors.cardGradient,
      borderRadius: theme.radius.lg,
      padding: '32px',
    },
    detailsContainer: {
      flex: '1 1 350px',
    },
    title: {
      fontSize: '28px',
      marginBottom: '16px',
      color: theme.colors.textPrimary,
      fontWeight: '700',
    },
    price: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '20px',
      background: theme.colors.bgGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    description: {
      background: '#f8fafc',
      padding: '16px',
      borderRadius: theme.radius.md,
      marginBottom: '20px',
      borderLeft: `4px solid ${theme.colors.primary}`,
      color: theme.colors.textPrimary,
      lineHeight: '1.7',
    }
  },
  
  // Page Header Styles
  header: {
    background: theme.colors.bgGradient,
    padding: '40px 20px',
    textAlign: 'center' as const,
    boxShadow: theme.shadows.lg,
  },
  
  headerTitle: {
    color: 'white',
    fontSize: '42px',
    margin: 0,
    fontWeight: '800',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  headerSubtitle: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '16px',
    margin: '8px 0 0 0',
    fontWeight: '500',
  }
};
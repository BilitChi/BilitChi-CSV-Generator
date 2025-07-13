let defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['**/*.html'],
  theme: {
    // Remove 2xl breakpoint
    screens: Object.fromEntries(
      Object.entries(defaultTheme.screens).filter(
        ([key, value]) => key !== '2xl'
      )
    ),
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
    zIndex: {
      '-999': '-999',
      '-1': '-1',
      0: 0,
      1: 1,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      999: 999,
      auto: 'auto',
    },
    fontSize: {
      tiny: [
        '0.65rem',
        {
          lineHeight: '1rem',
        },
      ],
      xss: [
        '0.72rem',
        {
          lineHeight: '1rem',
        },
      ],
      xs: [
        '.8rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '.85rem',
        {
          lineHeight: '1rem',
        },
      ],
      default: [
        '.9rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      md: [
        '.98rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      xmd: [
        '1rem',
        {
          lineHeight: '1.65rem',
        },
      ],
      lg: [
        '1.05rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      xlg: [
        '1.12rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      '1.5xl': [
        '1.35rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2.5xl': [
        '1.6rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      '3.5xl': [
        '2rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      '4xl': [
        '2.25rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4.5xl': [
        '2.6rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '5xl': [
        '3.5rem',
        {
          lineHeight: '3.25rem',
        },
      ],
    },
    fontWeight: {
      light: 300,
      default: 400,
      semibold: 500,
      bold: 700,
    },
  },
};

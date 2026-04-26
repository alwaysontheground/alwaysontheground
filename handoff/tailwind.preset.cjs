/** ontheground — Tailwind preset (v0.4)
 *  Drop into tailwind.config.js:
 *    const otg = require('./handoff/tailwind.preset.cjs');
 *    module.exports = { presets: [otg], content: [...] }
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xxs: '11px', xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '22px',
        'h4': '22px', 'h3': '28px', 'h2': '40px', 'h1': '60px',
        'display': '96px', 'display-xl': '160px',
      },
      letterSpacing: {
        label:     '0.14em',
        labelWide: '0.22em',
        display:   '-0.035em',
      },
      colors: {
        paper:   { DEFAULT: '#F4EFE6', 2: '#EBE4D6', 3: '#DED5C2' },
        ink:     { DEFAULT: '#1A1714', 2: '#3A332C', 3: '#6B6358', 4: '#A49B8C' },
        accent:  { DEFAULT: '#B8642B', 2: '#8A4A1F' },
        signal:  '#8B2E19',
        rule:    { DEFAULT: '#D4CBB8', strong: '#8E8573' },
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px',
        6: '32px', 7: '48px', 8: '64px', 9: '96px', 10: '144px',
      },
      borderRadius: { pill: '9999px' },
      maxWidth:     { grid: '1440px' },
    },
  },
};

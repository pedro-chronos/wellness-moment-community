/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wm: {
          bg: 'var(--wm-background)',
          surface: 'var(--wm-surface)',
          'surface-alt': 'var(--wm-surface-alt)',
          'surface-deep': 'var(--wm-surface-deep)',
          primary: 'var(--wm-primary)',
          secondary: 'var(--wm-secondary)',
          accent: 'var(--wm-accent)',
          ink: 'var(--wm-text)',
          muted: 'var(--wm-text-muted)',
          invert: 'var(--wm-text-invert)',
          'invert-muted': 'var(--wm-text-invert-muted)',
          border: 'var(--wm-border)',
          'border-strong': 'var(--wm-border-strong)',
          'border-invert': 'var(--wm-border-invert)',
          thread: 'var(--wm-thread)',
          'thread-invert': 'var(--wm-thread-invert)',
          overlay: 'var(--wm-overlay)',
          'overlay-invert': 'var(--wm-overlay-invert)',
          placeholder: 'var(--wm-placeholder)',
          'placeholder-ink': 'var(--wm-placeholder-ink)',
          'placeholder-invert': 'var(--wm-placeholder-invert)',
          'placeholder-ink-invert': 'var(--wm-placeholder-ink-invert)',
        },
      },
      fontFamily: {
        display: 'var(--wm-font-display)',
        sans: 'var(--wm-font-sans)',
      },
      fontSize: {
        'display-xl': ['var(--wm-size-display-xl)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['var(--wm-size-display-lg)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-md': ['var(--wm-size-display-md)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-sm': ['var(--wm-size-display-sm)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        quote: ['var(--wm-size-quote)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        numeral: ['var(--wm-size-numeral)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        lead: ['var(--wm-size-lead)', { lineHeight: '1.6' }],
        body: ['var(--wm-size-body)', { lineHeight: '1.6' }],
        small: ['var(--wm-size-small)', { lineHeight: '1.55' }],
        eyebrow: ['var(--wm-size-eyebrow)', { lineHeight: '1.2', letterSpacing: '0.22em' }],
        // Mesmo corpo do eyebrow com tracking menor: botões e chips de UI,
        // onde 0.22em quebraria a leitura em telas estreitas.
        label: ['var(--wm-size-eyebrow)', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      },
      borderRadius: {
        wm: 'var(--wm-radius)',
      },
      maxWidth: {
        container: 'var(--wm-container)',
        measure: 'var(--wm-measure)',
      },
      transitionTimingFunction: {
        wm: 'var(--wm-ease)',
      },
      spacing: {
        rail: 'var(--wm-rail)',
        'rail-lg': 'var(--wm-rail-lg)',
      },
    },
  },
  plugins: [],
};

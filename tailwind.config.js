module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Outfit', 'sans-serif'],
      body: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#0f172a',    // Deep Slate
        'secondary-dark-bg': '#1e293b', // Slate 800
        'light-gray': '#f1f5f9',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-black': 'rgba(0, 0, 0, 0.4)',
        'neon-blue': '#3b82f6',
        'neon-purple': '#8b5cf6',
        'primary-glow': '#6366f1',
      },
      fontSize: {
        14: '14px',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

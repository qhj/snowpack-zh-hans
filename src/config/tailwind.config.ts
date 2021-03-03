export = {
  purge: ['src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        banner: '#b224d0',
        nav: '#2e5e82',
      },
      spacing: {
        '160': '40rem',
      },
      width: {
        logo: '1em',
      },
      height: {
        logo: '1em',
        'screen/2': '50vh',
      },
      maxWidth: {
        main: '87.5rem',
      },
      minHeight: {
        '80': '20rem',
      },
      maxHeight: {
        '120': '30rem',
      },
      backgroundImage: {
        hero: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' title='mountain' class='logo' fill='%23FFFB'%3E%3Cpath d='M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z' /%3E%3C/svg%3E")`,
        'big-button':
          'linear-gradient(45deg, rgb(36, 191, 98), rgb(38, 125, 214), rgb(178, 36, 208))',
      },
      backgroundSize: {
        '50%': '50%',
      },
      backgroundPosition: {
        'hero-position': 'calc(100% + 100px) calc(100% + 64px)',
      },
      gridTemplateColumns: {
        feature: 'repeat(auto-fit,minmax(250px,1fr))',
        main: '16rem auto',
        'main-auto': 'auto',
        content: 'auto 20rem',
      },
    },
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
      margin: ['first', 'last'],
    },
  },
  plugins: [],
}

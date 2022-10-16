/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  /* CD (EV on 20210406): add jit for tailwind 2.1v */
  mode: 'jit',
  /* CD (KO on 20200526): purge not tested */
  purge: {
    /* CD (EV on 202011): purge not tested */
    /* mode: 'all', */
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
  },
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: colors.trueGray,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      green: colors.green,
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        body: ['Roboto'],
        heading: ['Lato'],
        subheading: ['Lato']
      },
      height: {
        '110': '28rem',
        '120': '30rem',
        '128': '34rem',        
      },
      colors: {
        'nsk-primary': '#0079C1', // primary color taken from NSK logo
        'nsk-secondary': '#80d0ff', // secondary color created by CD
        // 029CE5 - from gradient
        // 337AB7 - blue text
        // 23527C - on hover
        // 'esl-100': '#E6FAC6', // slightly lighter shade of esl-150
        // 'esl-150': '#CFF09E', // main color
        // 'esl-200': '#BEEBC2', // slightly lighter shade of esl-250
        // 'esl-250': '#A8DBA8', // main color
        // 'esl-300': '#95DDB8', // slightly lighter shade of esl-350
        // 'esl-350': '#79BD9A', // main color
        // 'esl-400': '#54A8A8', // slightly lighter shade of esl-450 - previously indigo-400
        // 'esl-450': '#3B8686', // main color - previously indigo-700
        // 'esl-500': '#165F89', // slightly lighter shade of esl-550 - previously indigo-500
        // 'esl-550': '#0B486B', // main color - previously indigo-600
        // 'esl-600': '#665cd0', // slightly lighter shade of esl-650
        // 'esl-650': '#0B486B', // main color
        // 'esl-700': '#',
        // 'esl-800': '#',
        // 'esl-900': '#',
      },
      scale: {
       '101': '1.01',
      }
    }
  },
  variants: {},
  plugins: [
    //require('@tailwindcss/ui'), // CD (KO on 20220919): Tailwind UI is no longer needed for TW CSS v2
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    //require('@tailwindcss/colors'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    //require('tailwindcss-children'),
  ],
  /*prefix: 'cd-',*/ /* NOT WORKING */
}

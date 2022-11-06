module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    colors: {
      "dark-cyan": "hsl(185, 75%, 39%)",
      "desaturated-blue": "hsl(229, 23%, 23%)",
      "dark-grayish-blue": "hsl(227, 10%, 46%)",
      "grey": "hsla(228, 10%, 47%, 1)",
      "light-grey": "hsla(228, 9%, 92%, 1)",
      "white": "#fff"
    },
    borderWidth: {
      DEFAULT: '1px',
      '5': '5px'
    },
    borderRadius: {
      DEFAULT: '15px',
      full: '50%'
    },
    fontSize: {
      '10': '1rem',
      '14': '1.4rem',
      '18': '1.8rem',
    },
    extend: {
      backgroundImage: {
        'top-pattern': "url('../images/bg-pattern-top.svg')",
        'bottom-pattern': "url('../images/bg-pattern-bottom.svg')",
      },
      width: {
        '326': '32rem',
        '350': '35rem',
        '620': '620px',
        '978': '978px'
      },
      height: {
        '100vh': '100vh',
        '140': '140px',
        '620': '620px',
        '978': '978px'
      },
      margin: {
        '20': '2rem'
      },
      padding: {
        '24': '2.4rem',
        '50': '5rem'
      }
    },
  },
  plugins: [],
}

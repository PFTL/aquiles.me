const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: [
            './*.html',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['geomanistregular'],
                head: ['geomanistbold'],
                strong: ['geomanistbook'],
            },
            boxShadow: {
                link: '0 -4px 0 0 rgba(178, 245, 234, .7) inset',
                linkhover: '0 -6px 0 0 rgba(178, 245, 234, .7) inset',
                wikilink: '0 -4px 0 0 rgba(255, 208, 0, .9) inset',
                wikihover: '0 -12px 0 0 rgba(255, 208, 0, .6) inset',
            },
            backgroundImage: theme => ({
                'hero-image': "url('/static/Aquiles.jpg')",
                'hero-image-square': "url('/static/aquiles_square.jpg')",
            }),
        },
        typography: {
            default: {
                css: {
                    a: {
                        'text-decoration': 'none',
                        color: 'inherit',
                    },
                }
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            warmGray: colors.warmGray,
            gray: colors.coolGray,
            blue: colors.blue,
            white: colors.white,
            teal: colors.teal,
            green: colors.green,
            black: colors.black,
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

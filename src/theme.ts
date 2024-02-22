import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        heading: '"Merriweather", serif',
        body: '"Merriweather", serif',
        mono: '"Merriweather", serif',
    },
    breakpoints: {
        xs: '414px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    sizes: {
        'scrollbar-width': '.5rem',
    },
    colors: {
        primary: '#0BC5EA',
    },
    shadows: {
        border: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px',
        normal: '0 0 6px 3px rgba(0, 0, 0, 0.05)',
        layout: '0 0 8px 4px rgba(0, 0, 0, 0.05)',
    },
    semanticTokens: {
        colors: {
            'scrollbar-bg': {
                _light: '#F2F2F2',
            },
            'scrollbar-thumb': {
                _light: '#AFAFAF',
            },
        },
    },
})

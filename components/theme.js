import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#111111')(props),
      color: mode('#111111', '#e5e5e5')(props),
      lineHeight: '1.8',
      fontSize: '15px',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: { base: '2xl', md: '3xl' },
        fontWeight: '500',
        letterSpacing: '-0.025em',
        lineHeight: '1.2',
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: 'inherit',
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1px',
      textDecorationColor: mode(
        'rgba(0,0,0,0.3)',
        'rgba(255,255,255,0.3)'
      )(props),
      transition: 'text-decoration-color 0.2s ease, opacity 0.2s ease',
      _hover: {
        backgroundColor: 'transparent',
        textDecorationColor: mode(
          'rgba(0,0,0,0.8)',
          'rgba(255,255,255,0.8)'
        )(props),
      },
    }),
  },
};

const fonts = {
  body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  heading:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts });
export default theme;

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../components/theme';

import ReactGA from 'react-ga';

const trackingID = process.env.MEASUREMENT_ID;
ReactGA.initialize(trackingID);

export default class Document extends NextDocument {
  componentDidMount() {

    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    this.props.router.events.on('routeChangeComplete', handleRouteChange);
  }

  componentWillUnmount() {
    // Clean up event listeners on unmount
    this.props.router.events.off('routeChangeComplete', handleRouteChange);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

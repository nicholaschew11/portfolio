import { useEffect } from 'react';
import Layout from '../components/layouts/main';
import Chakra from '../components/chakra';
import { AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga'; 

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps, router }) {

  const trackingID = process.env.MEASUREMENT_ID;
  console.log(trackingID);
  useEffect(() => {
    ReactGA.initialize(trackingID);

    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website;
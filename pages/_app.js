import Layout from '../components/layouts/main';
import Chakra from '../components/chakra';
import { AnimatePresence } from 'framer-motion';

import Script from "next/script"

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps, router }) {
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', process.env.MEASUREMENT_ID, {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
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
    </>
  );
}

export default Website;
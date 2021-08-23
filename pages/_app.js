import '../styles/globals.css'


// import next's router for callbacks
import Router from 'next/router';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });


Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    NProgress.done();
};

Router.onRouteChangeError = (err, url) => {
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default MyApp

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
  } else {
    console.error('Service Worker not support');
  }
};

export default registerServiceWorker;

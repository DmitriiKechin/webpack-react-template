import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
// import { GlobalStyles } from './styles/globalStyles';
// import { globalTheme } from './styles/globalTheme';
// import { GlobalStyles } from './globalStyles';
// import { globalTheme } from './globalTheme';
// import { ThemeProvider } from 'styled-components';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <ThemeProvider theme={globalTheme}> */}
    {/* <GlobalStyles /> */}
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    {/* </ThemeProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,
);

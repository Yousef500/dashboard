// routes
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Box dir="rtl">
          <Router />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

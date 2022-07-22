// routes
import { Box } from '@mui/material';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import ScrollToTop from './components/ScrollToTop';
import RTL from './theme/cache';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <RTL>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Box>
          <Router />
        </Box>
      </ThemeProvider>
    </RTL>
  );
}

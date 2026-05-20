import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import NudgeAgencyPage from './components/templates/NudgeAgencyPage';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NudgeAgencyPage />
    </ThemeProvider>
  );
}

export default App;

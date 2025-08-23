import GlobalStyle from '../style/global';
import {Home} from '../pages';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

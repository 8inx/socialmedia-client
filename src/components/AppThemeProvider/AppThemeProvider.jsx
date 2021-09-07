import { globals } from 'config/globals';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle(globals)

const AppThemeProvider = ({children, ...props}) => {
  return (
      <ThemeProvider {...props}>
        <GlobalStyle/>
        {children}
      </ThemeProvider>
  )
}

export default AppThemeProvider;
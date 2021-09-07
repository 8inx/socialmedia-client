import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { Light } from "config/theme";
import AppThemeProvider from "components/AppThemeProvider/AppThemeProvider";

const AppRoutes = () => {
  return(
    <Router>
      <Switch>
          <Route path="/" exact>
            <div>Initial</div>
          </Route>
      </Switch>
    </Router>
  )
}
//unsplash.it/200/200

const App = () =>
  <AppThemeProvider theme={Light}>
    <AppRoutes/> 
  </AppThemeProvider>

export default App;
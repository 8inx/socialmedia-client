import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"


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


const App = () => 
    <AppRoutes/> 

export default App;
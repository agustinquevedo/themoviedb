import { HashRouter, Switch, Route } from "react-router-dom"
// Provider
import { GlobalProvider } from "./context/GlobalState"
// Components
import Navbar from './components/Navbar'
// Pages
import Home from './pages/Home'
import Favorites from './pages/Favorites'


const App = () => {
  return (
    <GlobalProvider>
      <HashRouter basename="/">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
        </Switch>
      </HashRouter>
    </GlobalProvider>
  );
}

export default App

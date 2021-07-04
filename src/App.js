import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
import Navbar from './components/Navbar'
// Pages
import Home from './pages/Home'
import Favorites from './pages/Favorites'


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </Router>
  );
}

export default App

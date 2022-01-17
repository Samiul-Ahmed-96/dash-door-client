import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Components/Pages/Home/Home/Home';
import Members from './Components/Pages/Members/Members';
import Products from './Components/Pages/Products/Products';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route exact path="/home">
          <Home/>
      </Route>
      <Route exact path="/products">
          <Products/>
      </Route>
      <Route exact path="/members">
          <Members/>
      </Route>
      <Route exact path="/products">
          <Products/>
      </Route>
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;

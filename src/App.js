import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
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
      <Route exact path="/products">
          <Products/>
      </Route>
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;

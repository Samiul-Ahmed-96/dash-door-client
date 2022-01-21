import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import AddNewProduct from './Components/Pages/AddNewProduct/AddNewProduct';
import Home from './Components/Pages/Home/Home/Home';
import Members from './Components/Pages/Members/Members';
import OrderList from './Components/Pages/OrderList/OrderList';
import ProductEdit from './Components/Pages/ProductEdit/ProductEdit';
import Products from './Components/Pages/Products/Products';
import SalesReport from './Components/Pages/SalesReport/SalesReport';
import UserFeedback from './Components/Pages/UserFeedback/UserFeedback';
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
      <Route exact path="/manageProducts">
          <Products/>
      </Route>
      <Route exact path="/addNewProduct">
          <AddNewProduct/>
      </Route>
      <Route exact path="/userFeedback">
          <UserFeedback/>
      </Route>
      <Route exact path="/OrderList">
          <OrderList/>
      </Route>
      <Route exact path="/salesReport">
          <SalesReport/>
      </Route>
      <Route exact path="/ProductEdit/:id">
          <ProductEdit/>
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

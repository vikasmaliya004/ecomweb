import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Navbar from './navbar';
import {Switch,Route} from 'react-router-dom'
import Products from './Products';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/products" component ={Products}/>
        <Route exact path="/products/:id" component ={Product}/>
 
            <Home/>
            </Switch>
    </div>
  );
}

export default App;

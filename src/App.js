import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Login from './Login';
import Customers from './Customers';
import Products from './Products';
import Orders from './Orders';

function App() {
  return (
     <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<Login />}></Route>
              <Route exact path='/orders' element={<Orders />}></Route>
              <Route exact path='/customers' element={<Customers />}></Route>
              <Route exact path='/products' element={<Products />}></Route>
            </Routes>
          </div>
      </Router>
  );
}

export default App;

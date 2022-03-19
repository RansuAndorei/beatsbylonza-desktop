import './Customers.module.css';
import {
  Link
} from 'react-router-dom';

function Customers() {
  return (
    <div className="container">
      <div className="leftNavigation">
        <div className="imageContainer">
          <img alt="logo" src={require('./images/logo.png')} className="image"/>
        </div>
        <Link to="/orders">
          <div className="tabContainer">
              Orders
          </div>
        </Link>
        <Link to="/products">
          <div className="tabContainer">
              Products
          </div>
        </Link>
        <Link to="/customers">
          <div className="tabContainer active">
              Customers
          </div>
        </Link>
        <Link to="/">
          <div className="logoutContainer">
              <div className="logout">
                  LOGOUT
              </div>
          </div>
        </Link>
      </div>
      <div className="contentContainer">

      </div>
    </div>
  );
}

export default Customers;

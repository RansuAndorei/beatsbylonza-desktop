import styles from './Orders.module.css';
import {
  Link
} from 'react-router-dom';

import { orders } from './data';

function Orders() {
  return (
    <div className={styles.container}>
      <div className={styles.leftNavigation}>
        <div className={styles.imageContainer}>
          <img alt="logo" src={require('./images/logo.png')} className={styles.image}/>
        </div>
        <Link to="/orders">
          <div className={`${styles.tabContainer} ${styles.active}`}>
              Orders
          </div>
        </Link>
        <Link to="/products">
          <div className={styles.tabContainer}>
              Products
          </div>
        </Link>
        <Link to="/customers">
          <div className={styles.tabContainer}>
              Customers
          </div>
        </Link>
        <Link to="/">
          <div className={styles.logoutContainer}>
              <div className={styles.logout}>
                  LOGOUT
              </div>
          </div>
        </Link>
      </div>
      <div className={styles.contentContainer}>

        <div className={styles.headingContainer}>
          <div className={styles.titleContainer}>
            Orders
          </div>

          <div className={styles.buttonContainer}>

              <input className={styles.search} placeholder='🔎︎ Search' />


            <div className={styles.deleteContainer}>
              Delete
            </div>
          </div>
        </div>

        <div className={styles.gridContainerHeading}>
            <div className={styles.item}></div>
            <div className={styles.item}>Date</div>
            <div className={styles.item}>Product ID</div>
            <div className={styles.item}>Order ID</div>
            <div className={styles.item}>Quantity</div>
            <div className={styles.item}>Address</div>
            <div className={styles.item}>Status</div>
        </div>
      
        {
          orders.map((order, index)=>{
            return(
              <div className={styles.gridContainer} key={index}>
                <div className={styles.item}><input type="checkbox" id={order.id} name={order.id} value={order.id} /></div>
                <div className={styles.item}>{order.date}</div>
                <div className={styles.item}>{order.productID}</div>
                <div className={styles.item}>{order.orderID}</div>
                <div className={styles.item}>{order.quantity}</div>
                <div className={styles.item}>{order.address}</div>
                <div className={styles.item}>{order.status}</div>
              </div>
            )
          })
        }

        <div className={styles.arrowContainer}>
          <div className={styles.arrowLeft}>◄</div>
          <p>1 of 2</p>
          <div className={styles.arrowRight}>►</div>
        </div>
        
      </div>
    </div>
  );
}

export default Orders;

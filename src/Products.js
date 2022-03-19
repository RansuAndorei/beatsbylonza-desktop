import styles from './Products.module.css';
import {
  Link
} from 'react-router-dom';

import { products } from './data';

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.leftNavigation}>
        <div className={styles.imageContainer}>
          <img alt="logo" src={require('./images/logo.png')} className={styles.image}/>
        </div>
        <Link to="/orders">
          <div className={styles.tabContainer}>
              Orders
          </div>
        </Link>
        <Link to="/products">
          <div className={`${styles.tabContainer} ${styles.active}`}>
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
            Products
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
            <div className={styles.item}>Name</div>
            <div className={styles.item}>Product ID</div>
            <div className={styles.item}>Category</div>
            <div className={styles.item}>Price</div>
            <div className={styles.item}>Sales</div>
            <div className={styles.item}>Status</div>
        </div>
      
        {
          products.map((product, index)=>{
            return(
              <div className={styles.gridContainer} key={index}>
                <div className={styles.item}><input type="checkbox" id={product.id} name={product.id} value={product.id} /></div>
                <div className={styles.itemImageContainer}>
                  <img className={styles.itemImage} alt={product.picture} src={product.picture}/>
                </div> 
                <div className={styles.item}>{product.name}</div>
                <div className={styles.item}>{product.id}</div>
                <div className={styles.item}>{product.category}</div>
                <div className={styles.item}>{product.price}</div>
                <div className={styles.item}>{product.sales}</div>
                <div className={styles.item}>{product.status}</div>
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

export default Products;

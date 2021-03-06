import styles from './Products.module.css';
import {
  Link
} from 'react-router-dom';

import { products } from './data';
import { useState, useEffect } from 'react';

function Products() {
  const [currentProducts, setcurrentProducts] = useState();
  const [sortedProducts, setSortedProducts] = useState();
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
    const tempProducts = products.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    )
    setSortedProducts(tempProducts);
    setcurrentProducts(tempProducts);
    setLoading(false);
  },[])

  const sortFunction = (type) => {
    setSort(type)
    currentProducts.sort((a, b) => a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0)
  }

  const back = () =>{
    if(page > 1){
      setcurrentProducts(()=>{
        return sortedProducts.slice((page-2)* 7, (page-1) *7)
      })
      setPage(prev => prev-1);
      setSearchValue('');
    }
  }

  const forward = () =>{
    if(page < Math.ceil(products.length / 7)){
      setcurrentProducts(()=>{
        return sortedProducts.slice((page)* 7, (page+1) *7)
      })
      setPage(prev => prev+1);
      setSearchValue('');
    }
  }

  const search = (value) =>{
    setSearchValue(value);
    setPage(1)
    setcurrentProducts(() => {
      const tempProducts = sortedProducts.filter((product) => {
        if (product.name.toLowerCase().includes(value, 0) || product.id.toLowerCase().includes(value, 0) || product.category.toLowerCase().includes(value, 0) || product.status.toLowerCase().includes(value, 0)) {
          return product;
        }else{
          return null
        }
      });
      return tempProducts;
    });
  }

  if(loading){
    return <div>Loading</div>
  }else{
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
  
                <input className={styles.search} placeholder='??????? Search' value={searchValue} onChange={(event)=> search(event.target.value.toLowerCase())}/>
  
  
              <div className={styles.deleteContainer}>
                Delete
              </div>
            </div>
          </div>
  
          <div className={styles.gridContainerHeading}>
              <div className={styles.item}></div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('name')}}>Name {sort === 'name' ? <span>???</span> : <span>???</span>}</div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('id')}}>Product ID {sort === 'id' ? <span>???</span> : <span>???</span>}</div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('category')}}>Category {sort === 'category' ? <span>???</span> : <span>???</span>}</div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('price')}}>Price {sort === 'price' ? <span>???</span> : <span>???</span>}</div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('sales')}}>Sales {sort === 'sales' ? <span>???</span> : <span>???</span>}</div>
              <div className={styles.itemHeader} onClick={()=>{sortFunction('status')}}>Status {sort === 'status' ? <span>???</span> : <span>???</span>}</div>
          </div>
        
          {
            currentProducts.map((product, index) => {
             if(index < 7){
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
             }else{
               return null
             }
            })
          }
  
          <div className={styles.arrowContainer}>
            <div className={styles.arrowLeft} onClick={back}>???</div>
            <p>{page} of {Math.ceil(sortedProducts.length / 7)}</p>
            <div className={styles.arrowRight}  onClick={forward}>???</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Products;

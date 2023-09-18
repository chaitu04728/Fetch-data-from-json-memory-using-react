import React, { Component } from 'react';
import ProductsList from './ProductsList';
import './index.css';

class AllProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: [
        // { id: 1, name: 'Soaps', quantity: 10, price: 25 },
        // { id: 2, name: 'Brush', quantity: 5, price: 19 },
        // { id: 3, name: 'Paste', quantity: 3, price: 99 },
        // { id: 4, name: 'DishWash', quantity: 6, price: 45 },
        // { id: 5, name: 'Cleaner', quantity: 4, price: 50 },
        // { id: 6, name: 'Clips', quantity: 8, price: 105 },
        // { id: 6, name: 'Clips', quantity: 8, price: 105 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className='hd'>Assignment 02</h1>
       < h2 className='hd'>Welcome to Products Page</h2>
        <ProductsList products={this.state.productsData} />
      </div>
    );
  }
}

export default AllProductsPage;

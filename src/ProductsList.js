import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;

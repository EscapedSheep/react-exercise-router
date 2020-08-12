import React, { Component } from 'react';

class Product extends Component {
    render() {
    return(
        <div className="route">
          <div>
            <h4>Product Details:</h4>
          </div>
          <div>
            <label htmlFor="id">
              Id:{" "}
              <span name="id">{this.props.product.id}</span>
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price:{" "}
              <span name="price">{this.props.product.price}</span>
            </label>
          </div>
          <div>
            <label htmlFor="quantity">
              Quantity:{" "}
              <span name="quantity">{this.props.product.quantity}</span>
            </label>
          </div>
          <div>
            <label htmlFor="desc">
              Desc:{" "}
              <span name="desc">{this.props.product.desc}</span>
            </label>
          </div>
          <div>
            <label htmlFor="url">
              URL:{" "}
              <span name="url">/products/{this.props.product.id}</span>
            </label>
          </div>
        </div>
    )
    }
}

export default Product;
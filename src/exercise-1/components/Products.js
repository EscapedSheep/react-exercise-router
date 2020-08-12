import React, { Component } from 'react';
import Product from './Product'
import { Link, Switch, Route } from 'react-router-dom';
import '../styles/Products.css';

class Products extends Component {
    state = {
        productList: [
            {
              id: 1,
              name: "Bicycle",
              price: 30,
              quantity: 15,
              desc: "Bicycle is Good"
            },
            {
              id: 2,
              name: "TV",
              price: 40,
              quantity: 16,
              desc: "TV is good"
            },
            {
              id: 3,
              name: "Pencil",
              price: 50,
              quantity: 17,
              desc: "Pencil is good"
            }
        ]
    }
    
    render() {
        const products = this.state.productList;
        return (
            <div className="route">
              <ul className="productsLink">
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`} style={{color: 'red'}}>{product.name}</Link>
                    </li>
                ))}
              </ul>

              <Switch>
                  {products &&
                  <Route path='/products/:id' render={({match}) => (
                    <Product product={products.find(p => p.id === Number(match.params.id) )}></Product>
                  )
                  }></Route>}
              </Switch>
            </div>

        )
    }
}

export default Products;
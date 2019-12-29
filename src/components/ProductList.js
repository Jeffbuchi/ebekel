import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {
    render() {
        return (
           <React.Fragment>
               <div className= "py-5">
                   <div className = "container">
                       <Title name = "Ebekel" title = "Products" />
                       <div className = "row">
                           <ProductConsumer>
                              {value => {
                                 return value.products.map( stock => {
                                     return < Product key = {stock.id} stock = {stock}/>
                                 })
                              }}  
                           </ProductConsumer>
                           </div>
                   </div>
               </div>

           </React.Fragment>
        )
    }
}

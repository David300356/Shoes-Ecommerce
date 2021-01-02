import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import Title from './Title';
import Product from './Product'
import RoomFilter from './RoomFilter';


export default class Products extends Component {
    render() {
        return (
            <>
        <div className="container">
            <Title title="Filter your choises"/>
            <RoomFilter />
            <Title title="Our products"/>
            <div className="row">
               <ProductConsumer>
                {(value)=>{
                   return value.sortedProducts.map(product=>{
                       return <Product key={product.id} product={product}/>;
                   })
                }}
            </ProductConsumer> 
            </div>
        </div>
           </> 
        )
    }
}

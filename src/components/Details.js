import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import Title from './Title';
import { Link } from "react-router-dom";
import styled from 'styled-components'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                        const {id,title,info,img,inCart,price}=value.detailProduct;
                    return (
                        <div className="container py-5">
                    <Title title="Details of product"/>
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-20 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fuid" alt="product"/>
                          </div>
                          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model:{title}</h2>
                            <h4 className="text-blue">
                                <strong>price:<span>$</span>{price}</strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product:
                            </p>
                            <p text-muted>{info}</p>

                            <div>
                            <Link to="/products">
                              <ButtonWrapper>
                                  Back to products
                              </ButtonWrapper>
                          </Link>
                          <ButtonWrapper disabled={inCart?true:false} onClick={()=>{
                              value.addToCart(id);
                              }}>
                                 {inCart?"in cart":"Add to cart"}
                           </ButtonWrapper>
                            </div>
                            
                          </div>     
                      </div>
                      </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
const ButtonWrapper=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:teal;
border-radius:0.8rem;
text-decoration-line:none;
padding:0.3rem 0.4rem;
cursor:pointer;
color:white;
transition:all 1s ease-in-out;
&:hover{
  background:maroon;
  
}
`


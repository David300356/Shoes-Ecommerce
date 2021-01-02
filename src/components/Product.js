import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {FaCartPlus} from 'react-icons/fa'
export default class Product extends Component {
    render() {
        const {id,title,img,inCart,price}=this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <ProductConsumer>
                    {(value)=>(
                       <div className="card">
                          <div className="img-container" onClick={()=>value.handleDetail(id)}>
                         <Link to="./details">
                          <img src={img} alt="product" className="card-img-top img-fluid"/>
                           </Link>
                           <ButtonWrapper>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                            value.addToCart(id);
                            }}>
                              {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="button"><FaCartPlus/></i>)}
                              </button>
                             </ButtonWrapper>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                             <h5 className="text-blue font-italic mb-0">
                              <span className="mr-1">$</span>
                                  {price}
                                </h5>
                                </div>
                            </div>
                    )}
                </ProductConsumer>
            </ProductWrapper>
        )
    }
}
const ProductWrapper=styled.div`
.card{
    background:transparent;
    transition:all 1s linear;
    
}
&:hover{
    .card{
        transition:all 1s linear;
        box-shadow:10px 5px 5px 3px #173459;
    }
    .img-container{
        transition:all 2s;
    }
}
.card-footer{
    background:transparent;
    border-top:none;
    transition:all 1s linear;
}
.img-container{
    overflow:hidden;
    position:relative;
    //width:250px;
    height:300px;
}

`
const ButtonWrapper=styled.div`
  .cart-btn{
    font-size:1.8rem;
    color:black;
    padding:0.05rem 2.1rem;
    border-radius:0.8rem;
    background:olive;
    border:none;
    position:absolute;
    right:0;
    bottom:0;
  }
  &:hover{
    .cart-btn{
      transition:all 1s linear;
      color:black;
      background:maroon;
    }
  }
`

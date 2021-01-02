import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CartTotals = ({value}) => {
    const {cartTax,cartSubTotal,cartTotal,clearCart}=value
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/Products">
                        <ButtonWrapper onClick={()=>clearCart()}>
                            clear cart
                        </ButtonWrapper>
                    </Link>
                   
                    <h3>cartSubTotal:${cartSubTotal}</h3>
                    <h3>cartTax:${cartTax}</h3>
                    <h3>cartTotal:${cartTotal}</h3>

                </div>
                    
                </div>
            </div>
        </>
    )
}
const ButtonWrapper=styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:teal;
    border-radius:0.8rem;
    text-decoration:none;
    padding:0.4rem 0.4rem;
    cursor:pointer;
    transition:all 1s ease-in-out;
    &:hover{
      background:maroon;
      
    }
`

export default CartTotals
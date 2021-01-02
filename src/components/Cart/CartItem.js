import React from 'react'
import {FaTrash} from 'react-icons/fa'

const CartItem = ({item,value}) => {
    const {id,title,img,price,count,total}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row my-2 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'7rem'}} className="img-fluid"  alt="product"/>
                 </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product:</span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price:</span>{price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 col-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                        </div>
                    </div>
                </div>

           
            <div className="col-10 mx-auto col-lg-2">
                  <div className="cart-icon" onClick={()=>removeItem(id)}>
                  <FaTrash/>
                  </div>
                </div>
            <div className="col-10 mx-auto col-lg-2">
                   <strong>Item total:$ {total}</strong>
                </div>
        </div>
    )
}

export default CartItem
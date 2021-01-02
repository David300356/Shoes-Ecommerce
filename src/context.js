import React, { Component } from 'react'
import  { storeProducts } from './data.js'
const ProductContext= React.createContext()

class ProductProvider extends Component {
    state={
        products:[],
        sortedProducts:[],
        detailProduct:[],
        cart:[],
        gender:"all",
        type:"all",
        
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singItem={...item};
            tempProducts=[...tempProducts,singItem];
        })
        this.setState(()=>{
            return {
                products:tempProducts,
                sortedProducts:tempProducts
            }
        });
    }

    getItem=(id)=>{
        const product=this.state.products.find(item=>item.id===id);
        return product;
    }

    handleDetail=id=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
      };

      filterRooms = () => {
        let {
          gender,
          products,
          type
        } = this.state;
    
        let tempRooms = [...products];
        // transform values
        // filter by type
        if (type !== "all") {
          tempRooms = tempRooms.filter(product => product.type === type);
        }
        if (gender !== "all") {
            tempRooms = tempRooms.filter(product => product.gender === gender);
          }
        this.setState({
          sortedProducts: tempRooms
        });
      };

      addToCart=id=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]}
        },()=>{
           this.addTotals();
        })
    };
    increment=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedproduct=tempCart.find(item=>item.id===id);
        const index=tempCart.indexOf(selectedproduct);
        const product=tempCart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return {
                cart:[...tempCart]
            }
        },()=>{
            this.addTotals();
        })

    };
    decrement=(id)=>{
       let tempCart=[...this.state.cart];
       const selectedproduct=tempCart.find(item=>item.id===id);
       const index=tempCart.indexOf(selectedproduct);
       const product=tempCart[index];
        product.count=product.count-1;
       if(product.count===0){
               this.removeItem(id)
       }else{
            product.total=product.count*product.price;
            this.setState(()=>{
               return {
                   cart:[...tempCart]
               }
           },()=>{
               this.addTotals();
           })
           }
   };
   removeItem=(id)=>{
       let tempProducts=[...this.state.products];
       let tempCart=[...this.state.cart];
       tempCart=tempCart.filter(item=>item.id!==id);
       const index=tempProducts.indexOf(this.getItem(id));
       let removedProduct=tempProducts[index];
       removedProduct.inCart=false;
       removedProduct.count=0;
       removedProduct.total=0;
       this.setState(()=>{
           return {
               cart:[...tempCart],
               products:[...tempProducts]
           }
       },()=>{
           this.addTotals(); 
       })
   };
   clearCart=()=>{
      this.setState(()=>{
          return {cart:[]}
      },()=>{
          this.setProducts();
          this.addTotals();
      });
   };
   addTotals=()=>{
       let subTotal=0;
       this.state.cart.map(item=>(subTotal+=item.total));
       const tempTax=subTotal*0.1;
       const tax=parseFloat(tempTax.toFixed(2));
       const total=subTotal+tax;
       this.setState(()=>{
           return {cartSubTotal:subTotal,
               cartTax:tax,
               cartTotal:total}
       })
   }



    
    
    
      render() {
        return (
            <ProductContext.Provider value={{...this.state,
            handleDetail:this.handleDetail,
            handleChange: this.handleChange,
            addToCart:this.addToCart,
            decrement:this.decrement,
            increment:this.increment,
            clearCart:this.clearCart,
            removeItem:this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer= ProductContext.Consumer;

export { ProductProvider, ProductConsumer};

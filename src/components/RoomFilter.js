import React, { Component } from 'react'
import {ProductConsumer} from '../context';
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
export default class RoomFilter extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                        const {gender,handleChange,type,products}=value;
                        // get unique types
                        let genders = getUnique(products, "gender");
                        // add all
                        genders = ["all", ...genders];
                        // map to jsx
                        genders = genders.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ));

                        let types = getUnique(products, "type");
                        // add all
                        types = ["all", ...types];
                        // map to jsx
                        types = types.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ));
                        return (
                            <section className="filter-container">
                            <div className="form-group">
                             <label htmlFor="gender">Gender</label>
                             <select
                              name="gender"
                              id="gender"
                              onChange={handleChange}
                              className="form-control"
                              value={gender}
                            >
                              {genders}
                            </select>
                          </div>
                          

                          <div className="form-group">
                             <label htmlFor="type">Type</label>
                             <select
                              name="type"
                              id="type"
                              onChange={handleChange}
                              className="form-control"
                              value={type}
                            >
                              {types}
                            </select>
                          </div>
                          </section>
                        )

                }}
            </ProductConsumer>
        )
    }
}

































// import React from 'react'
// import { useContext } from "react";
// import { ProductContext } from "../context";
// const getUnique = (items, value) => {
//     return [...new Set(items.map(item => item[value]))];
//   };
// const RoomFilter = ({products}) => {
//     const context = useContext(ProductContext);
//     const {gender,handleChange}=context;
//   // get unique types
//   let genders = getUnique(products, "gender");
//   // add all
//   genders = ["all", ...genders];
//   // map to jsx
//   genders = genders.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//     return (
//         <div className="form-group">
//         <label htmlFor="type">room type</label>
//         <select
//           name="gender"
//           id="gender"
//           onChange={handleChange}
//           className="form-control"
//           value={gender}
//         >
//           {genders}
//         </select>
//       </div>
//     )
// }

// export default RoomFilter


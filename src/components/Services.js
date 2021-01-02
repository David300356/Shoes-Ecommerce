import React, { Component } from "react";
import Title from "./Title";
import {FaSocks,FaShoppingCart,FaShoePrints,FaPhone} from 'react-icons/fa'
export default class Services extends Component {
  state = {
    services: [
      {
        icon:<FaSocks/>,
        title: "Free Shoe Sock",
        info:
          "Shop at our store to get free shoe sock without extra charges..."
      },
      {
        icon:<FaShoppingCart/>,
        title: "Discounts",
        info:
          "Shop at our store to get a 10% discount on our products..."
      },
      {
        icon:<FaShoePrints/>,
        title: "Latest Products",
        info:
          "Don't miss new fashionable products on the market...."
      },
      {
        icon:<FaPhone/>,
        title: "Customer Care",
        info:
          "Our 24/7 customer care servises can save you a lot of time...."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

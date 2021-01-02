import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

export default class Home extends Component {
    render() {
        return (
           <>
           <Hero>
        <Banner
          title="Latest sneakers"
          subtitle="At Lower prices"
        >
          <Link to="/Products" className="btn-primary">
            our products
          </Link>
        </Banner>
      </Hero>
      <Services/>
      
           </>
        )
    }
}

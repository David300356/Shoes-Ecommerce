import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {FaCartPlus} from 'react-icons/fa'
//import logo from "../images/logo.svg";
import { FaAlignLeft } from "react-icons/fa";
export default class Navbar extends Component {

  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
    
    render() {
        return (
            <nav className="navbar ">
            <div className="nav-center">
            <div className="nav-header">
            <button
              type="button"
              className="nav-btn "
              onClick={this.handleToggle}
            >
              <FaAlignLeft className="nav-icon" />
            </button>
          </div>
              <ul
                className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
              </ul>
            </div>
            <Link to="/cart">
            <ButtonWrapper>
                <span className="mr-2">
              <i className="button"><FaCartPlus/></i>
              </span>
                my Cart
            </ButtonWrapper>
            </Link>
          </nav>
        )
    }
}
const ButtonWrapper=styled.div`
    text-transform:capitalize;
    font-size:1.4rem;
    color:black!important;
    background:white;
    border-radius:0.8rem;
    text-decoration:none !important;
    padding:0.1rem 0.2rem;
    cursor:pointer;
    transition:all 1s ease-in-out;
    &:hover{
      background:green;
      
    }
`

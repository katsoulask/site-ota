import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "../style/style.css";
import styled from "styled-components";

const li = [
  {
    link: "/",
    text: "Αρχική",
  },
  {
    link: "/about/",
    text: "Ποιοί Είμαστε",
  },
  {
    link: "/contact/",
    text: "Επικοινωνία",
  },
  {
    link: "/archive/",
    text: "Αρχείο",
  },
  {
    link: "/media/",
    text: "Media",
  },
];

const HoverText = styled.p`
  color: whitesmoke;
  font-size: 20px;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

export default class NavBar extends Component {
  state = {
    toggle: false,
  };

  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navBar">
        <button onClick={this.toggle}>
          <FaAlignRight />
        </button>
        <ul className={this.state.toggle ? "links show-nav" : "links"}>
          {li.map((objLink, i) => {
            return (
              <li key={i}>
                <a href={objLink.link}>
                  <HoverText>{objLink.text}</HoverText>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

import React from "react";
//import arrowNext from '../images/arrow-right.svg';
//import arrowLeft from '../images/arrow-left.svg';

const a = 3
const b = 4

const c = {
    a,
    b
}

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,

      images: [
        "https://via.placeholder.com/200x150?text=first",
        "https://via.placeholder.com/200x150?text=second",
        "https://via.placeholder.com/200x150?text=third",
        "https://via.placeholder.com/200x150?text=fourth",
        "https://via.placeholder.com/200x150?text=fifth",
        "https://via.placeholder.com/200x150?text=sixth",
        "https://via.placeholder.com/200x150?text=seventh",
        "https://via.placeholder.com/200x150?text=eighth",
        "https://via.placeholder.com/200x150?text=ninth",
        "https://via.placeholder.com/200x150?text=tenth",
      ],
      // imported images of right and left arrows
     // arrowNext,
      //: arrowLeft
    };
  }

  render() {
    return null;
  }
}

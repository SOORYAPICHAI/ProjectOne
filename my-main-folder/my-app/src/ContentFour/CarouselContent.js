import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CardContentSplit from "./CardContentSplit";
import {Card} from '@material-ui/core'

export default class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      autoplay:true,
      infinity:true,
    };
    return (
        
      <div className="container" style={{width:'100%'}}>
       
        <Slider {...settings}>
          <CardContentSplit />
          <CardContentSplit />
          <CardContentSplit />
         
        </Slider>
        
      </div>
  
    );
  }
}
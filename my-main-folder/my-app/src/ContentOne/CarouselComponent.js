import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import MediaControlCard from "./CardCarousel";
import {Card} from '@material-ui/core'

export default class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      autoplay:true,
      infinity:true,
    };
    return (
        <Card style={{boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"}}>
      <div className="container" style={{width:'100%'}}>
        <Slider {...settings}>
           
            <div style={{boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"}}>
            <MediaControlCard />
          </div>
           
          
          <div style={{boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"}}>
            <MediaControlCard />
          </div>
          <div style={{boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"}}>
            <MediaControlCard />
          </div>
          <div style={{boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"}}>
            <MediaControlCard />
          </div >
        </Slider>
      </div>
      </Card>
    );
  }
}
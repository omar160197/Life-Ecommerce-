import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ImageGallaryComponent ({title,image}){
    return (
       
            <Carousel autoPlay infiniteLoop interval="2000" thumbWidth={60} transitionTime="500">
                <div>
                    <img src={image} />
                    <p className="legend">{title}</p>
                </div>
                <div>
                    <img src={image}/>
                    <p className="legend">{title}</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">{title}</p>
                </div>
             
            </Carousel>
        
    )
}
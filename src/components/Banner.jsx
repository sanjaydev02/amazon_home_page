import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="relative">
    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
    >
        <div>
            <img loading="lazy" src="./Images/img1.jpg" alt="" />
        </div>

        <div>
        <img loading="lazy" src="./Images/img2.jpg" alt="" />
        </div>

         <div>
           <img loading="lazy" src="./Images/img3.jpg" alt="" />
         </div>
         <div>
           <img loading="lazy" src="./Images/img4.jpg" alt="" />
         </div>
         <div>
           <img loading="lazy" src="./Images/img5.jpg" alt="" />
         </div>
         <div>
           <img loading="lazy" src="./Images/img6.jpg" alt="" />
         </div>
    </Carousel>
</div>
  )
}

export default Banner
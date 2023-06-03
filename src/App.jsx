import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Card2 from './components/Card2';
import Footer from './components/Footer';

const Product = [
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
  {
    img1:'./Images/Products/p1.jpg',
    img2:'./Images/Products/p2.jpg',
    img3:'./Images/Products/p3.jpg',
    img4:'./Images/Products/p4.jpg',

  },
]
const App = () => {
  return (
    <div>
    <Navbar/>  
    <Banner/>
    <div className="w-screen flex flex-row flex-wrap max-w-[95%] mx-auto py-[20px] gap-x-[20px] gap-y-[20px]">
        {Product.map((images,i)=>{
           if((i+1)%2==0)
              return  <Card2 key={i} img1={images.img1}/>
          return  <Card key={i} img1={images.img1} img2={images.img2} img3={images.img3} img4={images.img4}/>
               
          
        })
        }
    </div>
    <Footer/>
   </div>
  )
};

export default App;

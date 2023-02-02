import { Wrapper } from "@googlemaps/react-wrapper";
import '../assets/css/products.css';
import Navigation from '../components/Navigation';
import urlImage from '../assets/img/HaGiangProduct.jpg'
import Panorama from "./Panorama";
import { FaAngleDoubleRight,FaAngleDoubleLeft } from 'react-icons/fa';
import axios from "axios";
import React from "react";
const baseURL = "http://localhost:5000/api/tours";



function Products() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  const tour = post.tours[15];
  const fenway = { lat: tour.lat, lng: tour.lng };
  console.log(tour);
  
  console.log(fenway);
    return (
      <div>
      < Navigation/> 
      <div className="product dFlex">
        <div className="productImageWapper dFlex">
            <div className="arrowLeft"> <FaAngleDoubleLeft /> </div>
            <div className="ImageBox">
            <img src={urlImage} alt="" ></img>
           </div>
            <div className="arrowRight"><FaAngleDoubleRight /> </div>
        </div>
        <div className="productContentWapper">
            <h1 className="productTitle">
            {tour.name}
            </h1>
            <p className="productDescription">
               {tour.description}
            </p>
            <h1 className="productPrice"> {tour.price}</h1>
            <button className="btn primaryBackground">Đặt ngay</button>
        </div>
      </div>
      <div className="image360">
        <h1 className="image360Title"> Hình ảnh 360</h1>
      <Wrapper apiKey='AIzaSyBvgI41OPI6G0QOCYLIHNKVjKn9Zc0DdPY'>
      <Panorama fenway= {fenway} />
    </Wrapper>
      </div>
      <div className="commentWapper">
        <h1 className="commentTitle">Comment</h1>
        <div>
        {tour.comments.map(item => (
            <div className="commentItem" key={item.customerId}>
              <h2 className="commentAuthor">{item.customerName}</h2>
              <p className="commentContent" >{item.content}</p>
            </div>
          ))}
        </div>
        </div>


      <div className="inputCommentWapper">
          <input type="text" name="name" className='commentInput' placeholder='type something' />
          <button className="btn commentbtn"> Public</button>
      </div>
    </div>
      
    );
  }
   
export default Products;
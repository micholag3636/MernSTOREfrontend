import React from 'react'
import "./Main.css"
import Product from "./Product.js"
import {useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getProducts as listProducts} from "../redux/actions/productActions"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {useState} from "react"




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



function Main() {


    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts;

    useEffect(() => {
        dispatch(listProducts())



    }, [dispatch])

    

    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(4)


   


    

  

    return (
        <div className="Main">
            <div className="back">

            </div>
        <Swiper


observer = {true}
observeParents = {true}

pagination={{clickable: true}}







 
       
        spaceBetween={10}
        slidesPerView={1}
        
        

        
        autoplay={{disableOnInteraction: false }}


        navigation = {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}



      
          
      
        


  

      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

            {loading ? (
                    <h1>Loading...</h1>
                ): error ? (
                    <h2>{error}</h2>
                ) : (
                    products.slice(start,end).map((product) => 
                    <SwiperSlide  key={product._id}  className="swiperc">
                        <div >
                    
                    <Product className="Productsc"
                    key={product._id}
                    productId = {product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}

                            
                    
                    /> 
                    </div>
                    <div onClick={() =>{
                        setStart(start + 4)
                        setEnd(end + 4)

                        
                        
                         console.log("done")
                         
                         } } className="swiper-button-next"> </div>
                    <div onClick={() =>{
                      

                        if (start === 0){
                            console.log("Cant go back")


                        } else {


                        setStart(start - 4)
                        setEnd(end - 4)

                        }


                    }



                    } className="swiper-button-prev"> </div>
                   <div className="swiper-pagination"></div>

                    </SwiperSlide>)


                )
            
            }







      
      
      </Swiper>
      </div>
      


  




        

       
    )
}

export default Main
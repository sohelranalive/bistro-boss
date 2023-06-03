import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTittle from "../../../components/SectionTittle/SectionTittle";



const Category = () => {
    return (
        <section>
            <SectionTittle
                heading={"Order Now"}
                subHeading={"From 11:00am to 10:00pm"}
            ></SectionTittle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h1 className="-mt-10 uppercase text-white text-3xl font-bold text-center">Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className="-mt-10 uppercase text-white text-3xl font-bold text-center">PIZZAA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className="-mt-10 uppercase text-white text-3xl font-bold text-center">Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className="-mt-10 uppercase text-white text-3xl font-bold text-center">Dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h1 className="-mt-10 uppercase text-white text-3xl font-bold text-center">Salads</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
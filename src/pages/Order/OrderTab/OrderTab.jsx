import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './OrderTab.css'


const OrderTab = ({ items, category }) => {

    const totalItem = items.length;
    const totalPage = Math.ceil(totalItem / 6)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    let pages = [];

    for (let i = 0; i < totalPage; i++) {

        const start = i * 6;
        const end = start + 6;

        const showItems = items.slice(start, end)

        pages.push(<SwiperSlide>
            <div className="grid grid-cols-3 gap-10">
                {showItems.map(item => <FoodCard key={item._id} item={item} category={category}></FoodCard>)}
            </div>
        </SwiperSlide>);
    }

    return (
        <div className="my-10">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {pages}
            </Swiper>
        </div>


        // <div className="grid grid-cols-3 gap-10">
        //     {items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
        // </div>
    );
};

export default OrderTab;
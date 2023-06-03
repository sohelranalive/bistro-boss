import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const PopularItems = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')


    return (
        <div className="my-10">
            <SectionTittle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTittle>
            <section>
                <MenuCategory items={popularItems} category='salad'></MenuCategory>
            </section>
        </div>
    );
};

export default PopularItems;
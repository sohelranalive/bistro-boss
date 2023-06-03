import PageCover from "../../Shared/PageCover/PageCover";
import orderCoverImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const location = useLocation()
    const selectedCategory = location.state?.category || 'salad'
    console.log(selectedCategory);

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']

    // const { category } = useParams()
    // const initialTabIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(categories.indexOf(selectedCategory))
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <PageCover
                bgImage={orderCoverImage}
                title='Order here'
                subTitle='Would you like to try a dish?'>
            </PageCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><p className="uppercase">Salad</p></Tab>
                    <Tab><p className="uppercase">Pizza</p></Tab>
                    <Tab><p className="uppercase">Soup</p></Tab>
                    <Tab><p className="uppercase">Dessert</p></Tab>
                    <Tab><p className="uppercase">Drinks</p></Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} category='salad'></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} category='pizza'></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} category='soup'></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} category='dessert'></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} category='drinks'></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
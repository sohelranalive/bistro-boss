import { Helmet } from 'react-helmet-async';
import PageCover from '../../Shared/PageCover/PageCover';
import bgImage from '../../../assets/menu/banner3.jpg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import sectionImage1 from '../../../assets/menu/dessert-bg.jpeg'
import sectionImage2 from '../../../assets/menu/pizza-bg.jpg'
import sectionImage3 from '../../../assets/menu/salad-bg.jpg'
import sectionImage4 from '../../../assets/menu/soup-bg.jpg'
import SectionCover from '../../../components/SectionCover/SectionCover';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageCover
                bgImage={bgImage}
                title='Our Menu'
                subTitle='Would you like to try a dish?'>
            </PageCover>
            <SectionTittle heading="Today's Offer" subHeading="Don't Miss"></SectionTittle>
            <MenuCategory items={offered} category='salad'></MenuCategory>
            <br /><br /><br />
            <SectionCover
                bgImage={sectionImage1}
                title='Dessert'
                subTitle='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vero delectus iusto quo explicabo molestiae.'>
            </SectionCover>
            <br />
            <MenuCategory items={dessert} category='dessert'></MenuCategory>
            <br /><br /><br />
            <SectionCover
                bgImage={sectionImage2}
                title='Pizza'
                subTitle='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vero delectus iusto quo explicabo molestiae.'>
            </SectionCover>
            <br />
            <MenuCategory items={pizza} category='pizza'></MenuCategory>
            <br /><br /><br />
            <SectionCover
                bgImage={sectionImage3}
                title='Salad'
                subTitle='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vero delectus iusto quo explicabo molestiae.'>
            </SectionCover>
            <br />
            <MenuCategory items={salad} category='salad'></MenuCategory>
            <br /><br /><br />
            <SectionCover
                bgImage={sectionImage4}
                title='Soup'
                subTitle='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vero delectus iusto quo explicabo molestiae.'>
            </SectionCover>
            <br />
            <MenuCategory items={soup} category='soup'></MenuCategory>
            <br /><br /><br />
        </div>
    );
};

export default Menu;
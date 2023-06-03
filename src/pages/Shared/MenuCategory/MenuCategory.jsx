import { useNavigate } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";

const MenuCategory = ({ items, category }) => {


    const navigate = useNavigate()

    const handleViewFullMenu = (category) => {
        navigate('/order', { state: { category: category } })
    }


    return (
        <>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <br />
            <div className="text-center">
                <button onClick={() => handleViewFullMenu(category)} className="btn btn-outline border-0 border-b-4 border-slate-800">View Full Menu</button>
                {/* <Link to={`/order/${category}`} className="btn btn-outline border-0 border-b-4 border-slate-800">View Full Menu</Link> */}
            </div>
        </>
    );
};

export default MenuCategory;
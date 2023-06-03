import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaWallet, FaHome, FaList, FaBook, FaUsers } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrShop } from 'react-icons/gr';
import { MdContactPhone } from 'react-icons/md';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [, cart] = useCart()

    // const isAdmin = true;

    const [isAdmin] = useAdmin()
    console.log(isAdmin);


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaList /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItem'><FaBook /> Manage All Item</NavLink></li>
                            <li><NavLink to='/dashboard/allUser'><FaUsers /> All Users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                                <li><NavLink to='/'><FaCalendarAlt /> Reservation</NavLink></li>
                                <li><NavLink to='/'><FaWallet /> Payment History</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/myCart'>
                                        <FaShoppingCart /> My Cart
                                        <div className="badge badge-secondary">{cart?.length}</div>
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburgerMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order'><GrShop /> Order</NavLink></li>
                    <li><NavLink to='/s'><MdContactPhone /> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
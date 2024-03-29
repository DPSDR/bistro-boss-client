import { FaBorderAll, FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="drawer-anchor menu p-4 w-80 min-h-full">

                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>
                            MyCart
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><TiThMenu></TiThMenu> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaBorderAll></FaBorderAll> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
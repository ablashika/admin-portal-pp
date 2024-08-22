import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../../assets/css/App.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineTransaction } from "react-icons/ai";
import { VscArrowSwap } from "react-icons/vsc";

const BottomHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={` z-1 d-flex d-lg-none ${styles.grid_column}`}>
                <header className={`w-100 px-2 py-3 ${styles.header_height} shadow bg-white d-flex justify-content-evenly align-items-center`}>
                    <div className="w-25 h-100">
                        <NavLink to="/dashboard" className={({ isActive }) =>
                            `h-100 text-decoration-none text-dark d-flex flex-column justify-content-center
                        ${isActive ? styles.bottom_navigation_active : ''
                            }`} >
                            <div className="h-50 fs-3 pb-2 pb-md-4 text-center">
                                <AiOutlineDashboard />
                            </div>
                            <p className={`m-0 p-0 d-flex justify-content-center align-items-center h-50 ${styles.bottom_navigation_text}`}>
                                Dashboard
                            </p>
                        </NavLink>
                    </div>
                    <div className="w-25 h-100">
                        <NavLink to="/merchant-transactions" className="h-100 text-decoration-none text-dark d-flex flex-column justify-content-center">
                            <div className="h-50 fs-3 pb-2 pb-md-4 text-center">
                                <VscArrowSwap />
                            </div>
                            <p className={`m-0 p-0 text-center d-flex justify-content-center align-items-center h-50 ${styles.bottom_navigation_text}`}>
                                Merchants' Transactions
                            </p>
                        </NavLink>
                    </div>
                    <div className="w-25 h-100">
                        <NavLink to="/customer-transactions" className="h-100 text-decoration-none text-dark d-flex flex-column justify-content-center">
                            <div className="h-50 fs-3 pb-2 pb-md-4 text-center">
                                <AiOutlineTransaction />
                            </div>
                            <p className={`m-0 p-0 text-center d-flex justify-content-center align-items-center h-50  ${styles.bottom_navigation_text}`}>
                                Customers' Transactions
                            </p>
                        </NavLink>
                    </div>
                    <div className="w-25 h-100">
                        <div
                            className="h-100 text-decoration-none text-dark  d-flex flex-column justify-content-center"
                            onClick={toggleMenu}
                        >
                            <div className="h-50 fs-3 pb-2 pb-md-4 text-center">
                                <GiHamburgerMenu />
                            </div>
                            <p className={`m-0 p-0 d-flex justify-content-center align-items-center h-50 ${styles.bottom_navigation_text}`}>
                                Menu
                            </p>
                        </div>

                    </div>

                </header >
                {menuOpen && (
                    <div className={`fixed-bottom w-100 bg-white shadow ${styles.menu}`}>
                        <div className="d-flex flex-column p-3">
                            <NavLink to="/profile" className="text-dark text-decoration-none py-2">Profile</NavLink>
                            <NavLink to="/settings" className="text-dark text-decoration-none py-2">Settings</NavLink>
                            <NavLink to="/logout" className="text-dark text-decoration-none py-2">Logout</NavLink>
                        </div>
                    </div>
                )}
            </div >



        </>
    )
}

export default BottomHeader
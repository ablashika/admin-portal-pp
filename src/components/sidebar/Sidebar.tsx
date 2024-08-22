import Logo from "/images/favicon.png"
import styles from "../../assets/css/App.module.css";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
    BsClockHistory,
    BsWallet2,
    BsKey,
    BsBoxArrowInLeft,
} from "react-icons/bs";
import { FiUsers, FiUserPlus, FiUserCheck } from "react-icons/fi";
import {
    // VscSettings,
    VscArrowSwap,
    VscFileSymlinkDirectory,
} from "react-icons/vsc";
import { GiPayMoney, GiReceiveMoney, GiSpeaker } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import {
    RiShareForwardLine,
    RiApps2Line,
    RiPaypalFill,
    RiAdvertisementLine,
} from "react-icons/ri";
import { SiPayoneer, SiWebmoney } from "react-icons/si";
// import { TbHammer } from "react-icons/tb";
import { MdOutlineSkateboarding, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
    AiOutlineBarChart,
    AiOutlineTransaction,
    AiOutlineDashboard
} from "react-icons/ai";
import Collapse from 'react-bootstrap/Collapse';

type ShowDropdown = {
    manageAdmins: boolean;
    configurations: boolean;
    transactions: boolean;
    merchants: boolean;
    settlement: boolean;
    wallets: boolean;
    directPayout: boolean;
    reports: boolean;
};

const Sidebar = () => {
    const [open, setOpen] = useState<ShowDropdown>({
        manageAdmins: false,
        configurations: false,
        transactions: false,
        merchants: false,
        settlement: false,
        wallets: false,
        directPayout: false,
        reports: false,
    });

    // Function for handling the sidebar items toggle
    const handleToggle = (section: keyof ShowDropdown) => {
        setOpen((prevState) => {
            const newState = Object.keys(prevState).reduce((acc, key) => {
                acc[key as keyof ShowDropdown] = false;
                return acc;
            }, {} as ShowDropdown);

            return {
                ...newState,
                [section]: !prevState[section],
            };
        });
    };


    return (
        <>
            <aside className={`w-100 h-100 overflow-auto shadow bg-white d-md-none d-none d-lg-block`}>
                <div className={`d-flex justify-content-start ps-4 mt-4 ${mediaQueries.header_height}`}>
                    <img src={Logo} alt="ProplesPay logo" className={`${mediaQueries.sidebar_logo_image} d-flex my-auto`} />

                    <h3 className="fs-4 d-flex my-auto ms-2">Peoples<span className="text-danger">Pay</span></h3>
                </div>
                <div className="d-flex flex-column pt-4">
                    <div className="">
                        <NavLink to="/dashboard"
                            className={({ isActive }) => `text-decoration-none py-3 d-flex align-items-center  
                            ${isActive ? styles.bottom_navigation_active : ''
                                }`}>
                            <div className="ps-4 text-center">
                                <AiOutlineDashboard />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6 ">Dashboard</div>
                        </NavLink>
                    </div>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('manageAdmins')}
                        aria-expanded={open.manageAdmins}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <FiUserCheck />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Manage Admins
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.manageAdmins ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.manageAdmins}>
                        <div>
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <FiUserPlus />
                                    <NavLink to="/manage-admin/create-admin" className="ps-2 text-dark text-decoration-none">
                                        Create Admin
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <FiUsers />
                                    <NavLink to="/manage-admin/all-admin" className="ps-2 text-dark text-decoration-none">
                                        All Admin
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <BsKey />
                                    <NavLink to="/manage-admin/admin-roles" className="ps-2 text-dark text-decoration-none">
                                        Admin Roles
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    {/* <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('configurations')}
                        aria-expanded={open.configurations}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <VscSettings />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Configurations
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.configurations ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.configurations}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <FiUsers />
                                    <NavLink to="/customer-profile" className="ps-2 text-dark text-decoration-none">
                                        Customer Profile
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <TbHammer />
                                    <NavLink to="/charges" className="ps-2 text-dark text-decoration-none">
                                        Charges
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <RiApps2Line />
                                    <NavLink to="/merchant-apps" className="ps-2 text-dark text-decoration-none">
                                        Merchant Apps
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse> */}
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('transactions')}
                        aria-expanded={open.transactions}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <GiPayMoney />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Transactions
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.transactions ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.transactions}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <GiPayMoney />
                                    <NavLink to="/transactions/all" className="ps-2 text-dark text-decoration-none">
                                        All Transactions
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <VscArrowSwap />
                                    <NavLink to="/transactions/clients" className="ps-2 text-dark text-decoration-none">
                                        Clients' Transactions
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <AiOutlineTransaction />
                                    <NavLink to="/transactions/customers" className="ps-2 text-dark text-decoration-none">
                                        Customers' Transactions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div className="">
                        <NavLink to="/customers" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <FiUsers />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">Customers</div>
                        </NavLink>
                    </div>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('merchants')}
                        aria-expanded={open.merchants}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <FiUsers />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Merchants
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.merchants ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.merchants}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <MdOutlineSkateboarding />
                                    <NavLink to="/clients/onboarding" className="ps-2 text-dark text-decoration-none">
                                        Merchants Onboarding
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <RiApps2Line />
                                    <NavLink to="/clients/approved-merchants" className="ps-2 text-dark text-decoration-none">
                                        Approved Merchants
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <BiCategory />
                                    <NavLink to="/clients/add-documents" className="ps-2 text-dark text-decoration-none">
                                        Add Documents
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div className="">
                        <NavLink to="/e-levy" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <FaRegMoneyBillAlt />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">E-Levy</div>
                        </NavLink>
                    </div>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('settlement')}
                        aria-expanded={open.settlement}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <SiWebmoney />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Settlement
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.settlement ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.settlement}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <GiReceiveMoney />
                                    <NavLink to="/settlement/add" className="ps-2 text-dark text-decoration-none">
                                        Initiate
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <VscArrowSwap />
                                    <NavLink to="/settlement/approval" className="ps-2 text-dark text-decoration-none">
                                        Approvals
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <BsClockHistory />
                                    <NavLink to="/settlement/history" className="ps-2 text-dark text-decoration-none">
                                        History
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('wallets')}
                        aria-expanded={open.wallets}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <BsWallet2 />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Wallets
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.wallets ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.wallets}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <BsWallet2 />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        All Wallets
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <VscFileSymlinkDirectory />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Direct Debit
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <VscFileSymlinkDirectory />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Direct Credit
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('directPayout')}
                        aria-expanded={open.directPayout}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <RiPaypalFill />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Direct Payout
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.directPayout ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.directPayout}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <SiPayoneer />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Direct Payout
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <VscArrowSwap />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Approvals
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <BsClockHistory />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        History
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div className="">
                        <NavLink to="/dashboard" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <BsBoxArrowInLeft />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">Reversals</div>
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to="/dashboard" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <RiShareForwardLine />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">Referrals</div>
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to="/dashboard" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <GiSpeaker />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">SMS Broadcast</div>
                        </NavLink>
                    </div>
                    <div
                        className={`d-flex justify-content-between align-items-center ${styles.cursor}`}
                        onClick={() => handleToggle('reports')}
                        aria-expanded={open.reports}
                    >
                        <div className="p-0 m-0 py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <AiOutlineBarChart />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">
                                Reports
                            </div>
                        </div>
                        <div className="pe-4 fs-4 d-flex justify-content-between align-items-center">
                            {open.reports ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </div>
                    </div>
                    <Collapse in={open.reports}>
                        <div className="">
                            <ul className="list-unstyled m-0">
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <AiOutlineBarChart />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Customers Report
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <AiOutlineBarChart />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Sales Report
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <AiOutlineBarChart />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Transactions Report
                                    </NavLink>
                                </li>
                                <li className="py-3 ps-5 text-justify d-flex justify-content-start align-items-center">
                                    <AiOutlineBarChart />
                                    <NavLink to="" className="ps-2 text-dark text-decoration-none">
                                        Fraud Report
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                    <div className="">
                        <NavLink to="/dashboard" className="text-decoration-none text-dark py-3 d-flex align-items-center">
                            <div className="ps-4 text-center">
                                <RiAdvertisementLine />
                            </div>
                            <div className="ps-2 d-flex align-items-center fs-6">Advert</div>
                        </NavLink>
                    </div>

                </div>

            </aside >
        </>
    )
}

export default Sidebar;


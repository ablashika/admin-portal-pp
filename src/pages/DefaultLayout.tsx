
import mediaQueries from "../assets/css/mediaQueries.module.css";
import styles from "../assets/css/App.module.css";
import BottomHeader from "../components/header/Bottom.header";
import Sidebar from "../components/sidebar/Sidebar"
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <div className={`${styles.grid} ${mediaQueries.grid}`}>
                <Sidebar />

                <div className="w-100 overflow-x-hidden overflow-y-scroll border border-primary">
                    <Outlet />
                </div>

                <BottomHeader />
            </div >

        </>
    )
}

export default DefaultLayout
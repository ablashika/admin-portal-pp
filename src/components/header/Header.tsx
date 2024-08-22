import React, { ReactNode } from 'react';
import styles from "../../assets/css/App.module.css";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import Notification from "../notification/Notification";
import Image from "/images/image.png";

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {

    return (
        <>
            <div className="container pt-4 position-sticky top-0 right-0 z-1 d-md-none d-none d-lg-block">
                <header className={`w-100 px-2 ${mediaQueries.header_height} shadow bg-white rounded`}>
                    <div className="row w-100 mx-0 d-flex align-items-center justify-content-center">
                        {children}
                        <div className={`col-md-4 d-flex align-items-center justify-content-end ${mediaQueries.header_height}`}>
                            < Notification />

                            <img src={Image} alt="profile image" className={`rounded-circle ${styles.profile_image}`} />
                        </div>
                    </div>

                </header>
            </div>
        </>
    )
}


export default Header;
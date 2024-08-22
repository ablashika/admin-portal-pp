import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import styles from "../../assets/css/App.module.css";

const Notification = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        console.log("Toggled Dropdown", !showDropdown);
    };

    return (
        <div className="position-relative me-3">
            <div className={`fs-3 d-flex align-items-center ${styles.cursor}`} onClick={toggleDropdown}>
                <IoMdNotificationsOutline />
            </div>
            {showDropdown && (
                <div className="position-absolute left-0 top-4 end-0 mt-2 bg-white shadow-lg rounded" style={{ width: '300px', }}>
                    <div className={`border-bottom position-sticky bg-white top-0 d-flex align-items-center ${styles.notification_height}`}>
                        <h3 className="ps-3 py-0 mb-0">Notification</h3>
                    </div>
                    <div className="overflow-x-hidden overflow-y-scroll" style={{ height: '300px' }}>
                        <ul className="px-0 my-0">
                            <li className="list-unstyle border-bottom py-2 px-2 text-justify px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa!</li>
                            <li className="list-unstyle border-bottom py-2 px-2 text-justify px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa!</li>
                            <li className="list-unstyle border-bottom py-2 px-2 text-justify px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa!</li>
                            <li className="list-unstyle border-bottom py-2 px-2 text-justify px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa!</li>
                            <li className="list-unstyled border-bottom py-2 px-2 text-justify px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dicta!</li>
                            <li className="list-unstyled border-bottom py-2 px-2 text-justify px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, blanditiis.</li>
                        </ul>
                    </div>
                    <div className={`border-top position-sticky bg-white bottom-0 px-3 d-flex align-items-center ${styles.notification_height}`}>
                        <button type="button" className={`w-100 border py-2 bg-danger text-white ${styles.rounded_button}`}>View all Notifications</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Notification;



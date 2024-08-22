import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchModal from "./Search.modal";
import styles from "../../assets/css/App.module.css";

const Search = () => {
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <span className={`d-flex justify-content-center align-items-center ${styles.rounded_button} ${styles.search_width}`} onClick={handleShow} role="button" >
                <IoSearchOutline className="fs-5" />
                <p className="my-0 ps-1">Search...</p>
            </span>

            <SearchModal
                show={showModal}
                handleClose={handleClose}
            />
        </>
    )
}

export default Search;

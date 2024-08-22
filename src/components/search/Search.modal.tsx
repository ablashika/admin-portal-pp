import Modal from 'react-bootstrap/Modal';
import { IoSearchOutline } from "react-icons/io5";
import styles from "../../assets/css/App.module.css";

interface SearchModalProps {
    show: boolean;
    handleClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-none'>
                    <Modal.Title className='col-12'>
                        <span className='col-12 border border-dark d-flex align-items-center rounded'>
                            <IoSearchOutline className="fs-5 mx-2" />
                            <input
                                type="search"
                                name="search"
                                id="search"
                                autoComplete='Off'
                                autoFocus
                                className={`w-100 px-3 py-2 border-0 border-start rounded-end fw-light ${styles.search_input}`}
                            />
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='rounded'>Woohoo, you are reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;

import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "../../assets/css/App.module.css";
import "react-datepicker/dist/react-datepicker.css";


const Datepicker = () => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    return (
        <>
            <div>
                <div className="w-75 px-3 col-3 d-flex align-items-center justify-content-center">
                    <p className="my-0 py-0 text-start w-100">Start</p>
                    <p className="my-0 py-0 text-end w-100">End</p>
                </div>
                <div className="w-75 border px-3 col-3 d-flex align-items-center justify-content-center rounded">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className={`w-100 text-start border-0 px-0 py-0 ${styles.date_picker}`}
                        placeholderText="Select start date"
                    />
                    <p className="my-0 py-0"> - </p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) => setEndDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className={`w-100 text-end border-0 px-0 py-0 ${styles.date_picker}`}
                        placeholderText="Select end date"
                        minDate={startDate ?? undefined}
                    />
                </div>
            </div>
        </>
    )
}

export default Datepicker;


const TransactionsOverview = () => {
    return (
        <>
            <div className="col-12 col-md-6 p-0 pb-3 pe-md-3">
                {/* Total transactions */}
                <div className="py-3 px-3 card h-100 p-0 rounded border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#DC3545"
                        strokeWidth="1"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                    </svg>
                    <p className="mb-2 fs-6">TRANSACTIONS</p>
                    <p className="m-0 fw-bold fs-5">GH&#8373; 2000.00</p>
                </div>
            </div>

            <div className="col-12 col-md-6 p-0 pb-3 ps-md-3">
                {/* Paid charges */}
                <div className="py-3 px-3 card h-100 rounded border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#DC3545"
                        strokeWidth="1"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="mb-2 fs-6">PAID CHARGES</p>
                    <p className="m-0 fw-bold fs-5">GH&#8373; 400.00</p>
                </div>
            </div>

            <div className="col-12 col-md-6 py-3 p-0 pe-md-3 ">
                {/* Total elevy */}
                <div className="py-3 px-3 card h-100 rounded border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#DC3545"
                        strokeWidth="1"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="mb-2">TOTAL ELEVY</p>
                    <p className="m-0 fw-bold fs-5">GH&#8373; 400.00</p>
                </div>
            </div>

            <div className="col-12 col-md-6 py-3 p-0 ps-md-3">
                {/* Approved merchants */}
                <div className="py-3 px-3 card h-100 rounded border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#DC3545"
                        strokeWidth="1"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <p className="mb-2">APPROVED CLIENTS</p>
                    <p className="m-0 fw-bold fs-5">53</p>
                </div>
            </div>
        </>
    )
}

export default TransactionsOverview
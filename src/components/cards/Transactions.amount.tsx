

const TransactionsAmount = () => {
    return (
        <>
            <div className="col-12 h-100 col-md-6 p-0 pt-3 pe-md-3">
                {/* Successful amount */}
                <div className="py-3 px-3 card h-100 rounded border border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        fill="#dc3545"
                        strokeWidth="1"
                        stroke="#DC3545"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M50 5C25.19 5 5 25.19 5 50s20.19 45 45 45 45-20.19 45-45S74.81 5 50 5zm0 86C27.39 91 9 72.61 9 50S27.39 9 50 9s41 18.39 41 41-18.39 41-41 41zm22.41-56.41c.78.78.78 2.05 0 2.83l-28 28c-.39.38-.9.58-1.41.58s-1.02-.2-1.41-.59l-14-14c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0L43 61.17l26.59-26.59c.78-.78 2.04-.78 2.82.01z" />
                    </svg>
                    <p className="mb-2">SUCCESSFUL</p>
                    <p className="m-0 fw-bold fs-5">GH&#8373; 2000.00</p>
                </div>
            </div>
            <div className="col-12 h-100 col-md-6 pt-3 p-0 ps-md-3">
                {/* Failed amount */}
                <div className="py-3 px-3 card h-100 rounded border-success shadow d-flex flex-column justify-content-center align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        fill="#dc3545"
                        strokeWidth="1"
                        stroke="#DC3545"
                        width="50"
                        height="50"
                        className="mb-2"
                    >
                        <path d="M32,2A30,30,0,1,0,62,32,30,30,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28,28,0,0,1,32,60Z" />
                        <path d="M45.56,18.44a1,1,0,0,0-1.41,0L32,30.59,19.86,18.44a1,1,0,0,0-1.41,1.41L30.59,32,18.44,44.14a1,1,0,1,0,1.41,1.41L32,33.41,44.14,45.56a1,1,0,0,0,1.41-1.41L33.41,32,45.56,19.86A1,1,0,0,0,45.56,18.44Z" />
                    </svg>
                    <p className="mb-2">FAILED</p>
                    <p className="m-0 fw-bold fs-5">GH&#8373; 2000.00</p>
                </div>
            </div>


        </>
    )
}

export default TransactionsAmount
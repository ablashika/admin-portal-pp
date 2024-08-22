import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridPagination, GridToolbar } from '@mui/x-data-grid';
// import DatePicker from "../../components/datepicker/Datepicker";
import { styled } from '@mui/material/styles';
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import Header from '../../components/header/Header';

// Define the columns
const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'client',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Client'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 200,
    },
    {
        field: 'client_description',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Client Description'}
            </p>
        ),
        type: 'string',
        hideable: false,
        resizable: false,
        width: 150,
    },
    {
        field: 'transaction_date',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Transaction Date'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 150,
    },
    {
        field: 'transaction_time',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Transaction Time'}
            </p>
        ),
        type: 'string',
        sortable: false,
        resizable: false,
        width: 150,
    },
    {
        field: 'recipient_name',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Recipient Name'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 150,
    },
    {
        field: 'account_type',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Account Type'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 120,
    },
    {
        field: 'amount',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Amount'}
            </p>
        ),
        valueFormatter: (value?: number) => {
            if (value == null) {
                return '';
            }
            return `Gh\u20B5 ${value.toFixed(2)}`;
        },
        type: 'string',
        resizable: false,
        width: 120,
    },
    {
        field: 'charge',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Charge'}
            </p>
        ),
        valueFormatter: (value?: number) => {
            if (value == null) {
                return '';
            }
            return `Gh\u20B5 ${value.toFixed(2)}`;
        },
        type: 'string',
        resizable: false,
        width: 100,
    },
    {
        field: 'debit',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Debit'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 100,
    },
    {
        field: 'credit',
        renderHeader: () => (
            <p className='text-wrap fw-bold'>
                {'Credit'}
            </p>
        ),
        type: 'string',
        resizable: false,
        width: 100,
    },
];

const StyledGridOverlay = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .no-results-primary': {
        fill: '#DC3545',
    },
    '& .no-results-secondary': {
        fill: '#DC3545',
    },
}));

function CustomNoResultsOverlay() {
    return (
        <StyledGridOverlay>
            <Box sx={{
                height: 400,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width='50'
                    height='50'
                    viewBox="0 0 523 299"
                    aria-hidden
                    focusable="false"
                >
                    <path
                        className="no-results-primary"
                        d="M262 20c-63.513 0-115 51.487-115 115s51.487 115 115 115 115-51.487 115-115S325.513 20 262 20ZM127 135C127 60.442 187.442 0 262 0c74.558 0 135 60.442 135 135 0 74.558-60.442 135-135 135-74.558 0-135-60.442-135-135Z"
                    />
                    <path
                        className="no-results-primary"
                        d="M348.929 224.929c3.905-3.905 10.237-3.905 14.142 0l56.569 56.568c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0l-56.568-56.569c-3.905-3.905-3.905-10.237 0-14.142ZM212.929 85.929c3.905-3.905 10.237-3.905 14.142 0l84.853 84.853c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0l-84.853-84.853c-3.905-3.905-3.905-10.237 0-14.142Z"
                    />
                    <path
                        className="no-results-primary"
                        d="M212.929 185.071c-3.905-3.905-3.905-10.237 0-14.142l84.853-84.853c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-84.853 84.853c-3.905 3.905-10.237 3.905-14.142 0Z"
                    />
                    <path
                        className="no-results-secondary"
                        d="M0 43c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 53 0 48.523 0 43ZM0 89c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 99 0 94.523 0 89ZM0 135c0-5.523 4.477-10 10-10h74c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 181c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 227c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM523 227c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10ZM523 181c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 135c0 5.523-4.477 10-10 10h-74c-5.523 0-10-4.477-10-10s4.477-10 10-10h74c5.523 0 10 4.477 10 10ZM523 89c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 43c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10Z"
                    />
                </svg>
                <p>No results found.</p>
            </Box>
        </StyledGridOverlay>
    );
}

const CustomPagination = () => {
    return (

        <GridPagination sx={
            {
                '& .MuiTablePagination-toolbar': {
                    margin: 0,
                    padding: 0,
                },
                '& .MuiTablePagination-selectLabel': {
                    margin: 0,
                    padding: 0,
                },
                '& .MuiTablePagination-input': {
                    margin: 0,
                    padding: 0,
                    marginRight: '20px'
                },
                '& .MuiTablePagination-displayedRows': {
                    margin: 0,
                    padding: 0,
                },
                '& .MuiTablePagination-actions': {
                    margin: 0,
                    padding: 0,
                },
            }
        } />
    );
};

const FailedTransactions = () => {
    return (
        <>
            <Header>
                <div className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}>
                    <h6 className='text-danger m-0'>Failed Transactions</h6>
                </div>
            </Header>
            <div className="container">
                <div className="w-100 pt-3 pb-lg-5 w-100 h-100">
                    <div className="pb-4 d-flex d-lg-none justify-content-end">
                        {/* <DatePicker /> */}
                    </div>

                    {/* Card */}
                    <div className="row m-0 mb-5 mt-lg-4">
                        <div className="col-sm-6">
                            <div className="card py-3">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <p className="card-title fs-4">Failed Transactions</p>
                                    <h5 className='card-text text-danger fs-3 fw-bold'>34</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-4 mt-md-0">
                            <div className="card py-3">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <p className="card-title fs-4">Amount</p>
                                    <h5 className='card-text text-danger fs-3 fw-bold'>Gh&#8373; 234.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table  */}
                    <div className="w-100 h-100">
                        <Box sx={{
                            height: 'auto',
                            width: '100%',
                            '& .MuiDataGrid-root': {
                                height: 'auto !important',
                            },
                            '& .MuiDataGrid-main': {
                                height: 'auto !important',
                            },
                            '& .MuiDataGrid-cell': {
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                            },

                            '& .MuiDataGrid-toolbarContainer': {
                                padding: '1.5rem 1rem',
                            },
                            '& .MuiButton-text': {
                                color: '#000',
                            },
                            '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after': {
                                borderBottom: '2px solid #000'
                            },
                            '& .MuiDataGrid-cell:hover': {
                                fontWeight: 'bold',
                            },
                            '& .MuiDataGrid-cell:focus': {
                                fontWeight: 'bold',
                            },
                            '& .MuiDataGrid-scrollbar': {
                                display: 'none',
                            },
                        }}>
                            <DataGrid
                                autoHeight
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 25,
                                        },
                                    },
                                }}
                                pageSizeOptions={[25, 50, 100]}
                                slots={{
                                    toolbar: GridToolbar,
                                    noResultsOverlay: CustomNoResultsOverlay,
                                    pagination: CustomPagination
                                }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        // quickfilterexcludehiddencolumns: "false",
                                    },
                                }}
                            />
                        </Box>
                    </div>
                </div >
            </div>
        </>
    )
}

export default FailedTransactions;



// define the rows
const rows = [
    {
        id: 1,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 2,
        client: 'KORAPAY DISBURSEMENT',
        client_description: 'Transfer payment',
        transaction_date: '26/Jun/2024',
        transaction_time: '17:59',
        recipient_name: 'Payment transfer',
        account_type: 'Vodafone',
        amount: 900,
        charge: 0.9,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 3,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'AirtelTigo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 4,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Wallet',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 5,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Cards',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 6,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 7,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 8,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 9,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 10,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 11,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 12,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 13,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 14,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 15,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 16,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 17,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 18,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 19,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 20,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 21,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 22,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 23,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 24,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 25,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 26,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 27,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 28,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 29,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 30,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 31,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 32,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 33,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 34,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 35,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 36,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 37,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 38,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 39,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    }, {
        id: 40,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 41,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 42,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 43,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

    {
        id: 44,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 45,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 46,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 47,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 48,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },


    {
        id: 49,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 50,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 51,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },
    {
        id: 52,
        client: 'KORAPAY LIMITED TECHNOLOGIES',
        client_description: 'Kora checkout',
        transaction_date: '10/Jun/2024',
        transaction_time: '14:59',
        recipient_name: 'Collections',
        account_type: 'Momo',
        amount: 2900,
        charge: 2,
        debit: 'Paid',
        credit: 'Paid',
    },

];


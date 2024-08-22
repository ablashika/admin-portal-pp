import * as React from 'react';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowId,
    GridColDef,
    GridToolbar,
    GridPagination,
} from '@mui/x-data-grid';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import Header from '../../components/header/Header';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

type Row = (typeof initialRows)[number];

const AllAdmin = () => {
    const [rows, setRows] = React.useState<Row[]>(initialRows);

    const deactivate = React.useCallback(
        (id: GridRowId) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        [],
    );

    const edit = React.useCallback(
        (id: GridRowId) => () => {
            setRows((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === id)!;
                return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
            });
        },
        [],
    );

    const reset = React.useCallback(
        (id: GridRowId) => () => {
            setRows((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === id)!;
                return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
            });
        },
        [],
    );

    const columns = React.useMemo<GridColDef<Row>[]>(
        () => [
            {
                field: 'date_created',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Date Created'}
                    </p>
                ),
                type: 'string',
                editable: true,
                resizable: false,
                width: 200,
            },
            {
                field: 'name',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Name'}
                    </p>
                ),
                type: 'string',
                editable: true,
                resizable: false,
                width: 300,
            },
            {
                field: 'role',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Role'}
                    </p>
                ),
                type: 'string',
                editable: true,
                resizable: false,
                width: 300,
            },
            {
                field: 'email',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Email'}
                    </p>
                ),
                type: 'string',
                editable: true,
                resizable: false,
                width: 300,
            },
            {
                field: 'status',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Status'}
                    </p>
                ),
                type: 'string',
                editable: true,
                resizable: false,
                width: 150,
            },
            {
                field: 'actions',
                type: 'actions',
                width: 80,
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Action'}
                    </p>
                ),
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={edit(params.id)}
                        showInMenu
                    />,
                    <GridActionsCellItem
                        icon={<BlockIcon />}
                        label="Disable"
                        onClick={deactivate(params.id)}
                        showInMenu
                    />,
                    <GridActionsCellItem
                        icon={<RestartAltIcon />}
                        label="Reset Password"
                        onClick={reset(params.id)}
                        showInMenu
                    />,
                ],
            },
        ],
        [deactivate, edit, reset],
    );

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
            // <div>
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
            // </div>
        );
    };

    return (
        <>
            <Header>
                <div className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}>
                    <h6 className='text-danger m-0'>All Administrators</h6>
                </div>
            </Header>

            <div className="w-100 pt-4 pb-lg-5 w-100 h-100 py-5">

                {/* Table  */}
                <div className="container">

                    <div className="w-100 py-4">
                        <Box sx={{
                            height: 'auto',
                            width: '100%',
                            '& .MuiDataGrid-root': {
                                height: 'auto !important',
                            },
                            '& .MuiDataGrid-main': {
                                height: 'auto !important',
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
                                border: 0,
                            },
                        }}>
                            <DataGrid
                                autoHeight
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                        },
                                    },
                                }}
                                pageSizeOptions={[10, 25, 50,]}
                                slots={{
                                    toolbar: GridToolbar,
                                    noResultsOverlay: CustomNoResultsOverlay,
                                    pagination: CustomPagination

                                }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
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

export default AllAdmin




// define the rows
const initialRows = [
    {
        id: 1,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Super Admin',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 2,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Support Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 3,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Operations Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 4,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Finance Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 5,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Auditor',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 6,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Auditor',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 7,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Finance Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 8,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Operations Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 9,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Support Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 10,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Super Admin',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 11,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Operations Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 12,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Auditor',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 13,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Finance Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 14,
        date_created: '10/Jun/2024',
        name: 'Nana Ama',
        role: 'Support Officer',
        email: 'nana@mail.com',
        status: 'Active',
    },
    {
        id: 15,
        date_created: '10/Jun/2024',
        name: 'Nana Akosua',
        role: 'Super Admin',
        email: 'nana@mail.com',
        status: 'Active',
    },
]
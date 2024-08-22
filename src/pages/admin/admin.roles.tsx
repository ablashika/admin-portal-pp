import * as React from 'react';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowId,
    GridColDef,
} from '@mui/x-data-grid';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import Header from '../../components/header/Header';
import Box from '@mui/material/Box';
import Button from "../../components/button/Button"
import { Link } from 'react-router-dom';

type Row = (typeof initialRows)[number];

const AdminRoles = () => {
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
                resizable: false,
                width: 200,
            },
            {
                field: 'role_name',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Role Name'}
                    </p>
                ),
                type: 'string',
                resizable: false,
                width: 300,
            },
            {
                field: 'description',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Description'}
                    </p>
                ),
                type: 'string',
                hideable: false,
                resizable: false,
                width: 400,
            },

            {
                field: 'status',
                renderHeader: () => (
                    <p className='text-wrap fw-bold'>
                        {'Status'}
                    </p>
                ),
                type: 'string',
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
                ],
            },
        ],
        [deactivate, edit],
    );

    return (
        <>
            <Header>
                <div className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}>
                    <h6 className='text-danger m-0'>All Administrator Roles</h6>
                </div>
            </Header>

            {/* Table  */}
            <div className="container">

                <div className="w-100 py-5">
                    <h6 className='text-danger m-0 pb-4 d-flex d-lg-none border-bottom mb-4'>All Administrator Roles</h6>

                    <Link to='/' className='d-flex justify-content-end text-decoration-none'>
                        <Button text="Add Role" size="medium"
                            onClick={() => alert('Clicked!')} />
                    </Link>

                    <Box sx={{
                        height: 'auto',
                        width: '100%',
                        paddingTop: '25px',
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
                        },
                        '& .MuiDataGrid-footerContainer': {
                            display: 'none',

                        },
                    }}>
                        <DataGrid
                            autoHeight
                            rows={rows}
                            columns={columns}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                },
                            }}
                        />
                    </Box>
                </div>
            </div >

        </>
    )
}

export default AdminRoles




// define the rows
const initialRows = [
    {
        id: 1,
        date_created: '10/Jun/2024',
        role_name: 'Super Admin',
        description: '14:59',
        status: 'Active',
    },
    {
        id: 2,
        date_created: '10/Jun/2024',
        role_name: 'Support Officer',
        description: '14:59',
        status: 'Active',
    },
    {
        id: 3,
        date_created: '10/Jun/2024',
        role_name: 'Operations Officer',
        description: '14:59',
        status: 'Active',
    },
    {
        id: 4,
        date_created: '10/Jun/2024',
        role_name: 'Finance Officer',
        description: '14:59',
        status: 'Active',
    },
    {
        id: 5,
        date_created: '10/Jun/2024',
        role_name: 'Auditor',
        description: '14:59',
        status: 'Active',
    }
]
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridPagination,
  GridRowId,
  GridToolbar,
} from "@mui/x-data-grid";
import Header from "../../components/header/Header";
import { styled } from "@mui/material/styles";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

type Row = (typeof initialRows)[number];

const Transactions = () => {
  const [rows, setRows] = React.useState<Row[]>(initialRows);

  const view = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    []
  );

  const edit = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    []
  );

  // Define the columns
  const columns: GridColDef<(typeof initialRows)[number]>[] = [
    {
      field: "date_initiated",
      renderHeader: () => <p className="text-wrap fw-bold">{"Date Initiated"}</p>,
      type: "date",
      resizable: false,
      width: 150,
      valueFormatter: ({ value }) => {
        new Date(value);
      },
    },
    {
      field: "description",
      renderHeader: () => (
        <p className="text-wrap fw-bold">{"Description"}</p>
      ),
      type: "string",
      hideable: false,
      resizable: false,
      width: 200,
    },
    {
      field: "start_date",
      renderHeader: () => <p className="text-wrap fw-bold">{"Start Date"}</p>,
      type: "date",
      resizable: false,
      width: 150,
      valueFormatter: ({ value }) => {
        new Date(value);
      },
    },
    {
      field: "end_date",
      renderHeader: () => <p className="text-wrap fw-bold">{"End Date"}</p>,
      type: "date",
      resizable: false,
      width: 150,
      valueFormatter: ({ value }) => {
        new Date(value);
      },
    },
    {
      field: "account_number",
      renderHeader: () => <p className="text-wrap fw-bold">{"Account Number"}</p>,
      type: "string",
      resizable: false,
      width: 220,
    },
    {
      field: "account_name",
      renderHeader: () => <p className="text-wrap fw-bold">{"Account Name"}</p>,
      type: "string",
      resizable: false,
      width: 220,
    },
    {
      field: "account_issuer",
      renderHeader: () => <p className="text-wrap fw-bold">{"Account Issuer"}</p>,
      type: "string",
      resizable: false,
      width: 220,
    },
    {
      field: "amount",
      renderHeader: () => <p className="text-wrap fw-bold">{"Amount"}</p>,
      valueFormatter: (value?: number) => {
        if (value == null) {
          return "";
        }
        return `Gh\u20B5 ${value.toFixed(2)}`;
      },
      type: "string",
      resizable: false,
      width: 120,
    },
    {
      field: "status",
      renderHeader: () => <p className="text-wrap fw-bold">{"Status"}</p>,
      type: "string",
      resizable: false,
      width: 100,
    },
    {
      field: "actions",
      type: "actions",
      width: 80,
      renderHeader: () => <p className="text-wrap fw-bold">{"Action"}</p>,
      getActions: (params) => {
        const actions = [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="Details"
            onClick={view(params.id)}
            showInMenu
          />,
        ];

        if (
          status === "Failed" ||
          status === "Authorization Pending" 
        ) {
          actions.push(
           
          );
        }

        return actions;
      },
    },
  ];
  [view, edit];

  const StyledGridOverlay = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& .no-results-primary": {
      fill: "#DC3545",
    },
    "& .no-results-secondary": {
      fill: "#DC3545",
    },
  }));

  const CustomPagination = () => {
    return (
      <GridPagination
        sx={{
          "& .MuiTablePagination-toolbar": {
            margin: 0,
            padding: 0,
          },
          "& .MuiTablePagination-selectLabel": {
            margin: 0,
            padding: 0,
          },
          "& .MuiTablePagination-input": {
            margin: 0,
            padding: 0,
            marginRight: "20px",
          },
          "& .MuiTablePagination-displayedRows": {
            margin: 0,
            padding: 0,
          },
          "& .MuiTablePagination-actions": {
            margin: 0,
            padding: 0,
          },
        }}
      />
    );
  };

  function CustomNoResultsOverlay() {
    return (
      <StyledGridOverlay>
        <Box
          sx={{
            height: 400,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="50"
            height="50"
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

  return (
    <>
      <Header>
        <div
          className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}
        >
          <h6 className="text-danger m-0">Pending Sttlements</h6>
        </div>
      </Header>
      <div className="container">
        <div className="pt-3">
          {/* Card */}
          <div className="row m-0 mb-5 mt-lg-4">
            <div className="col-md-6 col-lg-3">
              <div className="card py-3">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-title fs-4">Successful</p>
                  <h5 className="card-text text-danger fs-3 fw-bold">
                    1234.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-md-0">
              <div className="card py-3">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-title fs-4">Failed</p>
                  <h5 className="card-text text-danger fs-3 fw-bold">
                    Gh&#8373; 134.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-md-4 mt-lg-0">
              <div className="card py-3">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-title fs-4">Amount</p>
                  <h5 className="card-text text-danger fs-3 fw-bold">
                    Gh&#8373; 123.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-md-4 mt-lg-0">
              <div className="card py-3">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-title fs-4">Charges</p>
                  <h5 className="card-text text-danger fs-3 fw-bold">
                    Gh&#8373; 34.00
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Table  */}
          <div className="pb-5">
            <Box
              sx={{
                height: "auto",
                width: "100%",
                "& .MuiDataGrid-root": {
                  height: "auto !important",
                },
                "& .MuiDataGrid-main": {
                  height: "auto !important",
                },
                "& .MuiDataGrid-cell": {
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                },
                "& .MuiDataGrid-toolbarContainer": {
                  padding: "1.5rem 1rem",
                },
                "& .MuiButton-text": {
                  color: "#000",
                },
                "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after": {
                  borderBottom: "2px solid #000",
                },
                "& .MuiDataGrid-cell:hover": {
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-cell:focus": {
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-scrollbar": {
                  display: "none",
                },
                "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate":
                  {
                    color: "#DC3545",
                  },
              }}
            >
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
                  pagination: CustomPagination,
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
                checkboxSelection
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

// define the rows
const initialRows = [
  {
    id: 1,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 2,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 3,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 4,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 5,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 6,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 7,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 8,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },

  {
    id: 9,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 10,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 11,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 12,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 13,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 14,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
  {
    id: 15,
    date_initiated: "17/Jun/2024",
    description: "Kora checkout",
    start_date: "17/Jun/2024",
    end_date: "17/Jun/2024",
    account_number: "1234567890000",
    account_name: "Collections",
    account_issuer: "Momo",
    amount: 2900,
    status: "Pending",
  },
]
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef, GridPagination, GridRowId, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/header/Header";
import { styled } from "@mui/material/styles";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

type Row = (typeof initialRows)[number];

const Elevy = () => {
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
  // Define the columns
  const columns: GridColDef<(typeof initialRows)[number]>[] = [
    {
      field: "client_id",
      renderHeader: () => <p className="text-wrap fw-bold">{"Client Id"}</p>,
      headerAlign: "left",
      align: "left",
      type: "number",
      resizable: false,
      width: 200,
    },
    {
      field: "date",
      renderHeader: () => <p className="text-wrap fw-bold">{"Date"}</p>,
      type: "date",
      resizable: false,
      width: 200,
      valueFormatter: ({ value }) => {
        new Date(value);
      },
    },
    {
      field: "number_of_transactions",
      renderHeader: () => (
        <p className="text-wrap fw-bold">{"Number of Transactions"}</p>
      ),
      type: "number",
      headerAlign: "left",
      align: "left",
      resizable: false,
      width: 200,
    },
    {
      field: "total_amount",
      renderHeader: () => <p className="text-wrap fw-bold">{"Total Amount"}</p>,
      valueFormatter: (value?: number) => {
        if (value == null) {
          return "";
        }
        return `Gh\u20B5 ${value.toFixed(2)}`;
      },
      type: "string",
      resizable: false,
      width: 200,
    },
    {
      field: "taxable_amount",
      renderHeader: () => (
        <p className="text-wrap fw-bold">{"Taxable Amount"}</p>
      ),
      valueFormatter: (value?: number) => {
        if (value == null) {
          return "";
        }
        return `Gh\u20B5 ${value.toFixed(2)}`;
      },
      type: "string",
      resizable: false,
      width: 200,
    },
    {
      field: "accumulated_elevy",
      renderHeader: () => (
        <p className="text-wrap fw-bold">{"Accumulated Elevy"}</p>
      ),
      valueFormatter: (value?: number) => {
        if (value == null) {
          return "";
        }
        return `Gh\u20B5 ${value.toFixed(2)}`;
      },
      type: "string",
      resizable: false,
      width: 200,
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

        return actions;
      },
    },
  ];
  [view];

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

  return (
    <>
      <Header>
        <div
          className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}
        >
          <h6 className="text-danger m-0">E-levy Records</h6>
        </div>
      </Header>

      <div className="container">
        {/* Table  */}
        <div className="py-5">
          <Box
            sx={{
              height: "auto",
              width: "100%",
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
            '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate': {
                color: '#DC3545',
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
                pagination: CustomPagination
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
    </>
  );
};

export default Elevy;

// define the rows
const initialRows = [
  {
    id: 1,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 2,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 3,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 4,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 5,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 6,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 7,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 8,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 9,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 10,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 11,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 12,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 13,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 14,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 15,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 16,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 17,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 18,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 19,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 20,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 21,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 22,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 23,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 24,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 25,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 26,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 27,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 28,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 29,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 30,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 31,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 32,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 33,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 34,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 35,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 36,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 37,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 38,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 39,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 40,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 41,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 42,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 43,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },

  {
    id: 44,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 45,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 46,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 47,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 48,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 49,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 50,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 51,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
  {
    id: 52,
    client_id: 203495,
    date: "17/Jun/2024",
    number_of_transactions: 1,
    number: 900,
    total_amount: 700,
    taxable_amount: 123,
    accumulated_elevy: 7,
  },
];

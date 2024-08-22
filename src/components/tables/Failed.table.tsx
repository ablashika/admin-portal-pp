import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,
        width: "15%"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        width: "15%"
    },
    '&:nth-of-type(3)': {
        width: "30%"
    }
}));

const FailedTable = () => {
    return (
        <>
            <div className="card w-100 h-100 rounded border-0">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" colSpan={5} className='fw-bold'>
                                    Failed Transactions
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="left" className="fw-bold">TRANSACTION DATE</StyledTableCell>
                                <StyledTableCell align="left" className="fw-bold">TRANSACTION TIME</StyledTableCell>
                                <StyledTableCell align="left" className="fw-bold">CLIENT</StyledTableCell>
                                <StyledTableCell align="left" className="fw-bold">AMOUNT</StyledTableCell>
                                <StyledTableCell align="left" className="fw-bold">ACCOUNT TYPE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <StyledTableCell align="left">10/Jun/2024 </StyledTableCell>
                                <StyledTableCell align="left">14:59 PM</StyledTableCell>
                                <StyledTableCell align="left">KORAPAY LIMITED TECHNOLOGIES</StyledTableCell>
                                <StyledTableCell align="left">GH¢ 2,900.00</StyledTableCell>
                                <StyledTableCell align="left">Momo</StyledTableCell>
                            </TableRow>
                            <TableRow >
                                <StyledTableCell align="left">10/Jun/2024 </StyledTableCell>
                                <StyledTableCell align="left">14:59 PM</StyledTableCell>
                                <StyledTableCell align="left">KORAPAY LIMITED TECHNOLOGIES</StyledTableCell>
                                <StyledTableCell align="left">GH¢ 2,900.00</StyledTableCell>
                                <StyledTableCell align="left">Momo</StyledTableCell>
                            </TableRow>
                            <TableRow >
                                <StyledTableCell align="left">10/Jun/2024 </StyledTableCell>
                                <StyledTableCell align="left">14:59 PM</StyledTableCell>
                                <StyledTableCell align="left">KORAPAY LIMITED TECHNOLOGIES</StyledTableCell>
                                <StyledTableCell align="left">GH¢ 2,900.00</StyledTableCell>
                                <StyledTableCell align="left">Momo</StyledTableCell>
                            </TableRow>
                            <TableRow >
                                <StyledTableCell align="left">10/Jun/2024 </StyledTableCell>
                                <StyledTableCell align="left">14:59 PM</StyledTableCell>
                                <StyledTableCell align="left">KORAPAY LIMITED TECHNOLOGIES</StyledTableCell>
                                <StyledTableCell align="left">GH¢ 2,900.00</StyledTableCell>
                                <StyledTableCell align="left">Momo</StyledTableCell>
                            </TableRow>
                            <TableRow >
                                <StyledTableCell align="left">10/Jun/2024 </StyledTableCell>
                                <StyledTableCell align="left">14:59 PM</StyledTableCell>
                                <StyledTableCell align="left">KORAPAY LIMITED TECHNOLOGIES</StyledTableCell>
                                <StyledTableCell align="left">GH¢ 2,900.00</StyledTableCell>
                                <StyledTableCell align="left">Momo</StyledTableCell>
                            </TableRow>
                        </TableBody>
                        <caption>
                            <Link to='/failed-transactions' className='text-decoration-none'>
                                <button type='button' className="d-flex ms-auto py-2 px-5 border-0 bg-danger justify-content-center align-items-center text-white rounded">View all</button>
                            </Link>
                        </caption>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default FailedTable
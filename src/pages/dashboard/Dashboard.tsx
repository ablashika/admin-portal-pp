
import PaymentsSource from "../../components/cards/Payments.source";
import TransactionsOverview from "../../components/cards/Transactions.overview";
import TransactionsStatus from "../../components/cards/Transactions.status";
import TransactionsAmount from "../../components/cards/Transactions.amount";
import SuccessfulTransactions from "../../components/tables/Successful.table";
import FailedTransactions from "../../components/tables/Failed.table";
import DatePicker from "../../components/datepicker/Datepicker";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import Header from '../../components/header/Header';
import Search from "../../components/search/Search";
import Datepicker from "../../components/datepicker/Datepicker";



const Dashboard = () => {
    return (
        <>

            <Header>
                <div className={`col-md-4 d-flex align-items-center ${mediaQueries.header_height}`}>
                    <Search />
                </div>
                <div className={`col-md-4 d-flex align-items-center justify-content-center ${mediaQueries.header_height}`}>
                    <Datepicker />
                </div>
            </Header>
            <div className="container">
                <div className="pt-3 py-lg-5">
                    <div className="pb-3 d-flex d-lg-none justify-content-end">
                        <DatePicker />
                    </div>

                    <div className="row m-0 d-md-flex border border-primary">
                        <div className="col-12 col-lg-6 p-0 border border-info">
                            <div className="row m-0 border border-danger">
                                <TransactionsOverview />

                                <p className="m-0 p-0 text-danger my-auto">Transactions Amounts</p>

                                <TransactionsAmount />

                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0 border border-info">
                            <div className="row m-0">
                                <div className="col-12 p-0 pb-3 ps-lg-3">
                                    <TransactionsStatus />
                                </div>
                                <div className="col-12 p-0 pt-3 ps-lg-3">
                                    <PaymentsSource />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-0 pt-4">
                        <div className="col-12 p-0 pb-4">
                            <SuccessfulTransactions />
                        </div>
                        <div className="col-12 p-0 pt-4">
                            <FailedTransactions />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard
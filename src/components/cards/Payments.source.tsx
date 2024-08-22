import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { value: 55, label: 'MTN' },
    { value: 45, label: 'Vodafone' },
    { value: 35, label: 'AirtelTigo' },
    { value: 25, label: 'Cards' },
    { value: 15, label: 'Wallets' },
];


const PaymentsSource = () => {
    return (
        <>

            <div className="card rounded border border-dark shadow">
                <p className='d-flex justify-content-center m-0 py-3'>Payments Source Channels</p>
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                    <PieChart
                        series={[{ data, innerRadius: 100 }]}
                        height={250}
                        width={500}
                    />
                </div>
            </div>


        </>
    )
}

export default PaymentsSource;
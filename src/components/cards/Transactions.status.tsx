import { LineChart } from '@mui/x-charts/LineChart';

const successful = [2400, 1398, 1800, 1908, 1800, 1800, 1300];
const pending = [1500, 1000, 1000, 180, 1890, 1000, 890];
const failed = [400, 398, 800, 908, 800, 800, 300];

const generateTimeLabels = () => {
    const labels = [];
    const currentHour = new Date().getHours();
    for (let i = 6; i >= 0; i--) {
        let hour = currentHour - i;
        if (hour < 0) {
            hour += 24;
        }
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        labels.push(`${displayHour}${period}`);
    }
    return labels;
};

const TransactionsStatus = () => {
    const xLabels = generateTimeLabels();
    return (
        <>
            <div className="card rounded border border-dark shadow">
                <p className='d-flex justify-content-center m-0 py-3'>Transaction Status</p>
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                    <LineChart
                        height={250}
                        width={500}
                        series={[
                            { data: successful, label: 'successful', color: '#00FF00' },
                            { data: pending, label: 'pending', color: '#FFA500' },
                            { data: failed, label: 'failed', color: '#FF0000' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </div>
            </div>
        </>
    );
};

export default TransactionsStatus;









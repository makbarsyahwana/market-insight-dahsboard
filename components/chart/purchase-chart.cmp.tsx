import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import {faker} from '@faker-js/faker'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

export default function PurchaseChart() {
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: '#FFE854',
            borderWidth: 4,
            fill: true,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
        {
            type: 'bar' as const,
            label: 'Gross',
            backgroundColor: '#279D44',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            stack: 'stack0'
        },
        {
            type: 'bar' as const,
            label: 'Nett',
            backgroundColor: '#37B04C',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
            stack: 'stack0'
        },
        ],
    };

    return (
        <Chart type='bar' data={data} />
    )
}
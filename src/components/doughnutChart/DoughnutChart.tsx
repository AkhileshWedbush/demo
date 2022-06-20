import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Doughnut, Bar } from 'react-chartjs-2'

import { DonutChartProps } from './styles'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({
  legendLabels,
  title,
  dataValues,
  bgColors,
  borderColors,
  borderWidth,
}: DonutChartProps) => {
  const data: ChartData<'doughnut'> = {
    labels: legendLabels,
    datasets: [
      {
        label: title,
        data: dataValues,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: borderWidth,
      },
    ],
  }

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart

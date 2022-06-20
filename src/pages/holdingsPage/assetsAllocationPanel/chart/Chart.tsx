import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

// interface DoughnutProps {
//   options: ChartOptions<'doughnut'>
//   data: ChartData<'doughnut'>
// }

ChartJS.register(ArcElement, Tooltip, Legend)

const data: ChartData<'doughnut'> = {
  labels: ['Equity: 93%', 'Fixed Income: 2%', 'Cash 1%'],
  datasets: [
    {
      label: 'Asset Allocation',
      data: [97, 2, 1],
      backgroundColor: ['#6699D2', '#0847BE', '#000833'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF)'],
      borderWidth: 0,
    },
  ],
}

const options: ChartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
      // labels: {
      //   color: 'blue',
      //   position: 'right',
      // },
    },
  },
}

function Chart() {
  return <Doughnut data={data} options={options} />
}

export default Chart

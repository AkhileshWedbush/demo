import Table from './Table'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const TablePrimary = Template.bind({})
TablePrimary.args = {
  columns: [
    {
      Header: '',
      accessor: 'col1',
    },
    {
      Header: 'Date',
      accessor: 'col2',
    },
    {
      Header: 'Action',
      accessor: 'col3',
    },
    {
      Header: 'Category',
      accessor: 'col4',
    },
    {
      Header: 'Quantity',
      accessor: 'col5',
    },
    {
      Header: 'Symbol',
      accessor: 'col6',
    },
    {
      Header: 'Description',
      accessor: 'col7',
    },
    {
      Header: 'Amount',
      accessor: 'col8',
    },
  ],
  data: [
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Dividend',
      col4: 'Withdrawals',
      col5: '10',
      col6: 'AMZN',
      col7: 'Amazon.com, inc',
      col8: '11.02',
    },
    {
      col1: '...',
      col2: '3/24/2022',
      col3: 'Wire',
      col4: 'Transfer',
      col5: '20',
      col6: 'CHY',
      col7: 'Calamos Convertible High Income Funds',
      col8: '11.02',
    },
  ],
}

export const TableSecondary = Template.bind({})
TableSecondary.args = {
  columns: [
    {
      Header: 'Symbol',
      accessor: 'ticker',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Change',
      accessor: 'change',
    },
  ],
  data: [
    { ticker: 'IBM', price: 212.9, change: -2.6, down: true },
    { ticker: 'MSFT', price: 299.5, change: -0.6, down: true },
    { ticker: 'AAPL', price: 170.8, change: 2.8, down: true },
    { ticker: 'AMZN', price: 3268.7, change: -2.6, down: true },
    { ticker: 'GOOGLE', price: 2789.6, change: 12.34, down: true },
    { ticker: 'BRK', price: 348.3, change: 5.6, down: true },
    { ticker: 'BABA', price: 58.1, change: 11.54, down: true },
    { ticker: 'NFLX', price: 1230.2, change: -2.67, down: true },
  ],
}

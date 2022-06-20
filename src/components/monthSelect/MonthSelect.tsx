import Select from 'react-select'

const MonthSelect = () => {
  const options = [
    { value: 'jan2022', label: 'January 2022' },
    { value: 'feb2022', label: 'February 2022' },
    { value: 'mar2022', label: 'March 2022' },
    { value: 'apr2022', label: 'April 2022' },
    { value: 'may2022', label: 'May 2022' },
    { value: 'jun2022', label: 'June 2022' },
    { value: 'jul2022', label: 'July 2022' },
    { value: 'aug2022', label: 'August 2022' },
    { value: 'sep2022', label: 'September 2022' },
    { value: 'oct2022', label: 'October 2022' },
    { value: 'nov2022', label: 'November 2022' },
    { value: 'dec2022', label: 'December 2022' },
  ]

  const selectOption = { label: 'January 2022', value: 'jan2022' }

  return (
    <>
      <Select options={options} value={selectOption} />
    </>
  )
}

export default MonthSelect

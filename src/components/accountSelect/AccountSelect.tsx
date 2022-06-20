import Select from 'react-select'

const AccountSelect = () => {
  const options = [
    { value: 'allAccounts', label: 'All Accounts' },
    { value: 'accountNum_529Accounts', label: "Amy's 529 Account - 529-04" },
    { value: 'accountNum_RothIRA', label: 'Roth IRA - 4212' },
    { value: 'accountNum_RothIRA2', label: 'Roth IRA - 4218' },
  ]

  const selectOption = { label: 'All Accounts', value: 'allAccounts' }

  return (
    <>
      <Select options={options} value={selectOption} />
    </>
  )
}

export default AccountSelect

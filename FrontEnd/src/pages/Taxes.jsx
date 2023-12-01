import React from 'react'

const Taxes = () => {
    function calculate(amount, percent) {
        return (amount * percent) / 100;
      }
      
      function calculateIncomeTax(totalIncome) {
        if (totalIncome <= 250000) {
          return 0;
        } else if (totalIncome <= 500000) {
          return calculate(totalIncome - 250000, 5);
        } else if (totalIncome <= 750000) {
          return calculate(totalIncome - 500000, 10) + 12500;
        } else if (totalIncome <= 1000000) {
          return calculate(totalIncome - 750000, 15) + 37500;
        } else if (totalIncome <= 1250000) {
          return calculate(totalIncome - 1000000, 20) + 75000;
        } else if (totalIncome <= 1500000) {
          return calculate(totalIncome - 1250000, 25) + 125000;
        } else {
          return calculate(totalIncome - 1500000, 30) + 187500;
        }
      }
  return (
    <div className='pb-14'>Taxes Breakdowm
        hello ,{calculateIncomeTax(21_50_000)}
    </div>
  )
}

export default Taxes
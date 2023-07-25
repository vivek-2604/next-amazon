import React from 'react'
interface Props{
    amount: number
}


function FormatedPrice({amount}: Props) {
  const FormatedAmount = new Number(amount).toLocaleString("en-US",{
    style: "currency",
    currency:"USD",
    minimumFractionDigits: 2
  })
    return (
    <div>{FormatedAmount}</div>
  )
}

export default FormatedPrice
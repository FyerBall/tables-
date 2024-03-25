"use client"
import React from "react"

import { Search } from "@/app/payments/search-input"

function TableGlobalFilter({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, debounce, onChange])

  return (
    <Search
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search all columns..."
    />
  )
}

export default TableGlobalFilter

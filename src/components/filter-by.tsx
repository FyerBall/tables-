// "use client"

// import React from "react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Status } from "@/app/types"
// import { ColumnFiltersState } from "@tanstack/react-table"
// import { fi } from "@faker-js/faker"
// import { loadGetInitialProps } from "next/dist/shared/lib/utils"

// const StatusItem = ({
//   status,
//   setColumnFilters,
// }: //   isActive,
// {
//   status: Status
//   setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
//   //   isActive: boolean
// }) => {
//   console.log(status)

//   //   handle when the status is clicked
//   const handleStatusClick = () => {
//     console.log("status clicked")
//     // find what the current status is
//     // if the status is already in the filter, remove it
//     // if the status is not in the filter, add it
//     // combine the new filter with the existing filters
//     // reset filters

//     setColumnFilters(status)
//   }

//   return (
//     <DropdownMenuItem
//       onClick={handleStatusClick}
//       //   onClick={() =>
//       //     // setColumnFilters((prev) => {
//       //     //   console.log(prev)
//       //       //   const statuses = prev.find((filter) => filter.id === "status")?.value
//       //       //   if (!statuses) {
//       //       //     return prev.concat({
//       //       //       id: "status",
//       //       //       value: [status.id],
//       //       //     })
//       //       //   }

//       //       //   return prev.map((f) =>
//       //       //     f.id === "status"
//       //       //       ? {
//       //       //           ...f,
//       //       //           value: isActive
//       //       //             ? statuses.filter((s) => s !== status.id)
//       //       //             : statuses.concat(status.id),
//       //       //         }
//       //       //       : f
//       //       //   )
//       //     })
//       //   }
//     >
//       {status}
//     </DropdownMenuItem>
//   )
// }

// function FilterBy({
//   columnFilters,
//   setColumnFilters,
// }: {
//   columnFilters: ColumnFiltersState
//   setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
// }) {
//   console.log(columnFilters)
//   const statusValues = Object.values(Status)

//   for (let i = 0; i < statusValues.length; i++) {
//     const value = statusValues[i]
//     console.log(value)
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>Filter By</DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {statusValues.map((status) => (
//           <StatusItem
//             setColumnFilters={setColumnFilters}
//             // isActive={filterStatus.includes(status)}
//             key={status}
//             status={status}
//           />
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// export default FilterBy
// {
//   /* {statusValues.map((status) => (
//           <StatusItem
//             setColumnFilters={setColumnFilters}
//             // isActive={filterStatus.includes(status)}
//             key={status}
//             status={status}
//           />
//         ))} */
// }

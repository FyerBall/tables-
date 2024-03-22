"use client"
// TODO: [ ] use zod to validate the input
// TODO: [ ] add math operations to the input. example: 2+2 = 4
// TODO: [ ] resize the input to fit the content

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "./column-header"
import Actions from "./actions"
import { Tasks } from "../page"
import React, { HTMLProps, ReactNode, useState } from "react"
import { Category } from "./makeData"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useDebounce } from "../hooks/use-debounce"
import { Status } from "@/app/types"

export const tasksColumns: ColumnDef<Tasks>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    // header: ({ column }) => (
    //   <DataTableColumnHeader column={column} title="title" />
    // ),
    header: ({ table }) => (
      <>
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />{" "}
        <button
          {...{
            onClick: table.getToggleAllRowsExpandedHandler(),
          }}
        >
          {table.getIsAllRowsExpanded() ? (
            <ChevronDown size={18} className="text-gray-500" />
          ) : (
            <ChevronRight size={18} className="text-gray-500" />
          )}
        </button>{" "}
        First Name
      </>
    ),
    cell: ({ row }) => <ShowTasks row={row.original} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <div>Status</div>,
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original
  //     return <Actions payment={payment} />
  //   },
  // },
]

function ShowTasks({ row }: { row: Tasks }) {
  return <div>{row.title}</div>
}

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate, rest.checked])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer hidden"}
      {...rest}
    />
  )
}

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: "relationship" | "complicated" | "single"
  subRows?: Person[]
}

export const peopleColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    header: ({ table }) => (
      <>
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />{" "}
        <button
          {...{
            onClick: table.getToggleAllRowsExpandedHandler(),
          }}
        >
          {table.getIsAllRowsExpanded() ? (
            <ChevronDown size={18} className="text-gray-500" />
          ) : (
            <ChevronRight size={18} className="text-gray-500" />
          )}
        </button>{" "}
        First Name
      </>
    ),
    cell: ({ row, getValue }) => (
      <div
        style={{
          // Since rows are flattened by default,
          // we can use the row.depth property
          // and paddingLeft to visually indicate the depth
          // of the row
          paddingLeft: `${row.depth * 2}rem`,
        }}
      >
        <div>
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />{" "}
          {row.getCanExpand() ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
            >
              {row.getIsExpanded() ? (
                <ChevronDown size={18} className="text-gray-500" />
              ) : (
                <ChevronRight size={18} className="text-gray-500" />
              )}
            </button>
          ) : (
            ""
          )}
          {""}
          {getValue<boolean>()}
        </div>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    footer: (props) => props.column.id,
  },
]
export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    size: 400,
    header: ({ table }) => (
      <div className=" flex items-center ">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />{" "}
        <button
          {...{
            onClick: table.getToggleAllRowsExpandedHandler(),
          }}
        >
          {table.getIsAllRowsExpanded() ? (
            <ChevronDown size={18} className="text-gray-500" />
          ) : (
            <ChevronRight size={18} className="text-gray-500" />
          )}
        </button>{" "}
        <p className="">Name</p>
      </div>
    ),
    cell: ({ row, getValue, column }) => (
      <div
        style={{
          // Since rows are flattened by default,
          // we can use the row.depth property
          // and paddingLeft to visually indicate the depth
          // of the row
          paddingLeft: `${row.depth * 1}rem`,
        }}
      >
        <div className="flex items-start ">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />{" "}
          {row.getCanExpand() ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
            >
              {row.getIsExpanded() ? (
                <ChevronDown size={18} className="text-gray-500" />
              ) : (
                <ChevronRight size={18} className="text-gray-500" />
              )}
            </button>
          ) : (
            ""
          )}
          {""}
          <InputCell row={row.original} value={getValue()} />
        </div>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.amount,
    id: "amount",
    cell: ({ getValue, column, row }) => (
      <InputCell row={row.original} value={getValue()} />
    ),
    header: () => <span>Amount</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "quantity",
    header: () => "Quantity",
    cell: ({ getValue, column, row }) => (
      <InputCell row={row.original} value={getValue()} />
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue, column, row }) => (
      <DropdownCell row={row.original} value={getValue()} />
    ),
    footer: (props) => props.column.id,
  },
]

function InputCell({ row, value }: { row: Category; value: any }) {
  const [inputValue, setInputValue] = useState(value)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleUpdate = useDebounce((value: string) => {
    console.log("update", value)
    console.log("id", row.id)
  }, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    handleUpdate(value)
  }

  return (
    <div
      className="flex items-center"
      onClick={() => {
        setIsEditing(true)
        setTimeout(() => {
          inputRef.current?.focus()
        }, 0)
      }}
    >
      {isEditing ? (
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          onBlur={() => setIsEditing(false)}
          id={row.id}
          name={row.name}
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="cursor-pointer"
          title="Click to edit"
        >
          {inputValue}
        </div>
      )}
    </div>
  )
}

function DropdownCell({ row, value }: { row: Category; value: any }) {
  const [inputValue, setInputValue] = useState(value)

  const handleUpdate = useDebounce((value: string) => {
    console.log("update", value)
    console.log("id", row.id)
  }, 500)

  const handleClicked = (status: Status) => {
    setInputValue(status)
    handleUpdate(status)
  }

  // handle clear status value
  const handleClear = () => {
    setInputValue("")
    handleUpdate("")
  }

  // Get all the values of the status enum
  const statusValues = Object.values(Status)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{inputValue}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {statusValues.map((status) => (
          <DropdownMenuItem key={status} onClick={() => handleClicked(status)}>
            {status}
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem onClick={handleClear}>Clear</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

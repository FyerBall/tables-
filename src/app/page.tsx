"use client"
import React from "react"
import { DataTable } from "./payments/data-table"
import {
  categoryColumns,
  peopleColumns,
  tasksColumns,
} from "./payments/tasks-columns"
import { makeCategoryData, makeData } from "./payments/makeData"

export type Status = "pending" | "failed" | "success"

export type SubTasks = {
  id: string
  title: string
  status: Status
}

export type Tasks = {
  id: string
  title: string
  status: Status
  subTasks: SubTasks[]
}

async function getData(): Promise<Tasks[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728edd52f",
      title: "Task 10",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei3rwfsdsoief",
      title: "Task 1",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "dsdsds",
      title: "Task 2",
      status: "failed",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "728ed52f",
      title: "Task 3",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei5dsdad43rwoief",
      title: "Task 14",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "dsddsdssds",
      title: "Task 123",
      status: "failed",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "728e53gsd52f",
      title: "Task 123",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei3rwoief",
      title: "Task 196",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "dsdfsdssdssds",
      title: "Task 14",
      status: "failed",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei543rwoief",
      title: "Task 3",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "dsddsddsdsssds",
      title: "Task 9",
      status: "failed",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "728e53d52f",
      title: "Task 6",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei3rwfsoief",
      title: "Task 19",
      status: "pending",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
    {
      id: "dsdfsdsds",
      title: "Task 13",
      status: "failed",
      subTasks: [
        {
          id: "728edd52f",
          title: "Sub Task 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          title: "Sub Task 2",
          status: "pending",
        },
      ],
    },
  ]
}

export default function Home() {
  // const data = await getData()
  const [data, setData] = React.useState(() => makeData(100, 5, 3))
  const [categoryData, setCategoryData] = React.useState(() =>
    makeCategoryData(100, 5, 3)
  )
  return (
    <main className="container mx-auto py-10">
      {/* <DataTable columns={peopleColumns} data={data} /> */}
      <DataTable columns={categoryColumns} data={categoryData} />
    </main>
  )
}

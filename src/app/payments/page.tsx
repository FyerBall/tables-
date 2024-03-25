import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728edd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      subRows: [
        {
          id: "728edd52f",
          name: "Item 1",
          status: "pending",
        },
        {
          id: "728edd52f",
          name: "Item 2",
          status: "pending",
        },
      ],
    },
    {
      id: "mfei3rwfsdsoief",
      amount: 100,
      status: "pending",
      email: "b@exmaple.com",
    },
    {
      id: "dsdsds",
      amount: 32,
      status: "failed",
      email: "f43ed@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "mfei5dsdad43rwoief",
      amount: 100,
      status: "pending",
      email: "b@exmaple.com",
    },
    {
      id: "dsddsdssds",
      amount: 32,
      status: "failed",
      email: "f43ed@example.com",
    },
    {
      id: "728e53gsd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "mfei3rwoief",
      amount: 100,
      status: "pending",
      email: "b@exmaple.com",
    },
    {
      id: "dsdfsdssdssds",
      amount: 32,
      status: "failed",
      email: "f43ed@example.com",
    },
    {
      id: "mfei543rwoief",
      amount: 100,
      status: "pending",
      email: "b@exmaple.com",
    },
    {
      id: "dsddsddsdsssds",
      amount: 32,
      status: "failed",
      email: "f43ed@example.com",
    },
    {
      id: "728e53d52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "mfei3rwfsoief",
      amount: 100,
      status: "pending",
      email: "b@exmaple.com",
    },
    {
      id: "dsdfsdsds",
      amount: 32,
      status: "failed",
      email: "f43ed@example.com",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

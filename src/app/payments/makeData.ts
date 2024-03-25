import { faker } from "@faker-js/faker"

export type Status = "pending" | "failed" | "completed"

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: "relationship" | "complicated" | "single"
  subRows?: Person[]
}

export type SubCategory = {
  name: string
  amount: string
  quantity: number
}

export type Category = {
  id: string
  name: string
  amount: string
  quantity: number
  subRows?: SubCategory[]
  dueDate: Date
  status: Status
  emoji?: string
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  }
}

const newCategory = (): Category => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    // amount: faker.commerce.price(),
    amount: "0123456789",
    quantity: faker.number.int(100),
    status: faker.helpers.shuffle<Category["status"]>([
      "completed",
      "failed",
      "pending",
    ])[0]!,
    dueDate: faker.date.future(),
    emoji: faker.helpers.shuffle([
      "😀",
      "😎",
      "🤯",
      "🤔",
      "😳",
      "🤗",
      "😏",
      "😍",
      "😂",
      "🤣",
      "😇",
      "🥰",
      "😜",
      "😝",
      "🤑",
      "🤩",
      "🥳",
      "🥺",
      "😢",
      "😭",
      "😤",
      "😠",
      "😡",
      "🤬",
    ])[0],
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 2] ? makeDataLevel(depth + 2) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export function makeCategoryData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Category[] => {
    const len = lens[depth]!
    return range(len).map((d): Category => {
      return {
        ...newCategory(),
        subRows: lens[depth + 2] ? makeDataLevel(depth + 2) : undefined,
      }
    })
  }

  return makeDataLevel()
}

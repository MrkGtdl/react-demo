export interface todo {
  id: string
  description: string
  status: string
}

// export const mockdata: todo[] = [
//   {
//     id: new Date().toJSON().toString(),
//     description: 'this is a test',
//     status: 'In Progress',
//   },
// ]

export enum PageList {
  list,
  add,
  edit,
}

export interface todo {
  id: number;
  description: string;
  status: string;
  user: string;
  priority: string;
  checked: false;
  time:string
}

export enum PageList {
  list,
  add,
  edit,
}

export interface todo {
  id: string;
  description: string;
  status: string;
  user: string;
  priority: string;
  checked: false;
}

export enum PageList {
  list,
  add,
  edit,
}

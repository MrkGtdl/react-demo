import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { todo } from "./todo.type";

export const ListContext = createContext({
  todoList: [] as todo[],
  setTodolist: (a: any) => { },
});

export const ListContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todoList, setTodolist] = useState<todo[]>([]);

  useEffect(() => {
    const listResult = window.localStorage.getItem("list");
    if (!listResult) {
      window.localStorage.setItem("list", JSON.stringify([]));
    }
  })

  useEffect(() => {
    const listResult = window.localStorage.getItem("list") || "[]";
    const result = JSON.parse(listResult)
    setTodolist(result)
  }, [])

  const setDataList = (q: any) => {

    const data = JSON.stringify([...todoList, q]);
    window.localStorage.setItem("list", data);
    setTodolist([...todoList, q]);
  };

  return (
    <ListContext.Provider value={{ todoList, setTodolist: setDataList }}>
      {children}
    </ListContext.Provider>
  );
};

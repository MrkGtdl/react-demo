import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";

export const ListContext = createContext({
  listTodo: [],
  setTodolist: (a: any) => {},
});

export const ListContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [listTodo, setTodolist] = useState([]);

  const setDataList = (q: any) => {
    setTodolist(q);
  };

  return (
    <ListContext.Provider value={{ listTodo, setTodolist: setDataList }}>
      {children}
    </ListContext.Provider>
  );
};

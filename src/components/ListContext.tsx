import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";

export const ListContext = createContext({
  todolist: [],
  setTodolist: (a: any) => {},
});

export const ListContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todolist, setTodolist] = useState([]);

  const setDataList = (q: any) => {
    setTodolist(q);
  };

  useEffect(() => {
    window.localStorage.setItem("listtest", JSON.stringify(todolist));
  }, []);

  return (
    <ListContext.Provider value={{ todolist, setTodolist: setDataList }}>
      {children}
    </ListContext.Provider>
  );
};

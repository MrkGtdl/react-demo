import React, { useContext, useEffect, useState } from 'react'
import { todo } from "./todo.type";
import "./css/create.style.css";
import { ListContext } from "./ListContext";


function NewCreate() {
  const useListContext = useContext(ListContext);

  const listResult = window.localStorage.getItem("list");

  // const [list, setListTodo] = useState<todo[]>(listResult ? JSON.parse(listResult) : []);
  const [user, setUser] = useState("");
  const [description, setDesc] = useState("");
  const [priority, setPrio] = useState("High");


  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();


    const data: todo = {
      user: user,
      id: new Date().toLocaleTimeString(),
      description: description,
      priority: priority,
      status: "In Progress",
      checked: false,
    };

    useListContext.setTodolist(data)
    // setListTodo([...list, data])



    // useListContext.setTodolist((c: any) => {
    //   console.log("c", c)

    // });

    // const _setTodoList = (data: todo[]) => {
    //   todoList(data);
    //   window.localStorage.setItem("list", JSON.stringify(data));
    // };

    // useListContext.setTodolist((c: any) => {
    //   console.log("data", data)
    //   return [...c, data];
    // });

  };
  console.log("useListContext", useListContext)
  return (
    <>
      <div className="create-card">
        <h2>Create to do?</h2>
        {/* <p>{JSON.stringify(list)}</p> */}
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              placeholder="User"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="TO-DO Description"
            />
          </div>
          <div>
            <label>
              Priority Level:
              <select
                onChange={(e) => setPrio(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <br />
          <div className="create-footer">
            <input type="submit" value="Submit" />
            <input type="button" value="Back" />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCreate
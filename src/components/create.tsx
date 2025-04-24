import React, { useContext, useState } from "react";
import { todo } from "./todo.type";
import "./css/create.style.css";
import { ListContext } from "./ListContext";


// Set props to be passed on to another component
type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClkHnd: (data: todo) => void;
};

const AddToDo = (props: Props) => {
  const useListContext = useContext(ListContext);
  // track state in a function component.

  const [user, setUser] = useState("");
  const [description, setDesc] = useState("");
  const [priority, setPrio] = useState("High");

  // declare the props
  const { onBackBtnClickHnd, onSubmitClkHnd } = props;

  // function that is responsible for setting the setstate
  const onUserChange = (e: any) => {
    setUser(e.target.value);
  };

  const onDescChange = (e: any) => {
    setDesc(e.target.value);
  };

  // function that is responsible for storing the data into the variable
  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();
    const data: todo = {
      user: user,

      description: description,
      priority: priority,
      status: "In Progress",
      checked: false,
    };

    onSubmitClkHnd(data);
    onBackBtnClickHnd();

    useListContext.setTodolist((c: any) => {
      // console.log("data", data)
      return [...c, data];
    });



    // window.localStorage.setItem("list", JSON.stringify(data));
  };

  return (
    <>
      <div className="create-card">
        <h2>Create to do?</h2>
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input
              type="text"
              value={user}
              onChange={onUserChange}
              placeholder="User"
            />
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={onDescChange}
              placeholder="TO-DO Description"
            />
          </div>
          <div>
            <label>
              Priority Level:
              <select
                value={priority}
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
            <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToDo;

import React, { useContext, useEffect, useState } from "react";
import { todo } from "./todo.type";
import { ListContext } from "./ListContext";
import { Link, useNavigate } from "react-router-dom";

import "./css/create.style.css";

function NewCreate() {
  const useListContext = useContext(ListContext);
  const navigate = useNavigate();
  const uniqueId = Math.random().toString(35).slice(8);
  const [user, setUser] = useState("");
  const [description, setDesc] = useState("");
  const [priority, setPrio] = useState("High");

  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();

    const data: todo = {
      id: uniqueId,
      user: user,
      description: description,
      time: new Date().toLocaleTimeString(),
      priority: priority,
      status: "In Progress",
      checked: false,
    };

    useListContext.setTodolist(data);
    e.target.reset();
    navigate("/");
  };

  return (
    <>
      <div className="create-card">
        <div>
          <article>
            <header>
              <h1>WHAT TODO</h1>
            </header>
          </article>
        </div>
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
              <select onChange={(e) => setPrio(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <br />
          <div className="create-footer">
            <input type="submit" value="Submit" />
            <Link to="/">
              <input type="button" value="Back" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCreate;

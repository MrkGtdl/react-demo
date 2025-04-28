import React, { useContext, useEffect, useState } from "react";
import "./css/delete.style.css";
import { todo } from "./todo.type";
import { ListContext } from "./ListContext";
import { Link, useParams } from "react-router-dom";

const DeleteRecord = () => {
  const useListContext = useContext(ListContext);
  const [data, setData] = useState<any>("");
  const params = useParams();

  useEffect(() => {
    const item = useListContext.todoList.find((item) => item.id === params.id);
    setData(item);
  }, []);

  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();
    console.log("delete this record");
  };

  return (
    <>
      <div className="delete-card">
        <div>
          <article>
            <header>
              <h1>DELETE TODO</h1>
            </header>
          </article>
        </div>
        <div className="delete-body">
          <h1>id :{data.id}</h1>
          <h1>User :{data.user}</h1>
          <h1>description :{data.description}</h1>
          <h1>priority :{data.priority}</h1>
          <h1>status :{data.status}</h1>
          <h1>time :{data.time}</h1>
        </div>

        <div className="delete-footer">
          <input type="button" value="Delete" onClick={onSubmitbtnClkHnd} />
          <Link to="/">
            <input type="button" value="Back" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeleteRecord;

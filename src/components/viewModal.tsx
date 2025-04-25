import React, { useContext, useEffect, useState } from 'react'
import './css/viewModal.style.css'
import { todo } from './todo.type'
import { ListContext } from "./ListContext";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ViewModal = () => {
  const useListContext = useContext(ListContext);
  const [data, setData] = useState<any>("");
  const params = useParams();
  console.log("params", params.id)
  useEffect(() => {
    const item = useListContext.todoList.find(item => item.id === params.id);
    setData(item);

  }, [])
  console.log(data)
  return (
    <>
      <div className="view-card">
        <div>
          <article>
            <header>
              <h1>VIEW TODO</h1>
            </header>
          </article>
        </div>
        <div className="view-body">
          <h1>id :{data.id}</h1>
          <h1>User :{data.user}</h1>
          <h1>description :{data.description}</h1>
          <h1>priority :{data.priority}</h1>
          <h1>status :{data.status}</h1>
          <h1>time :{data.time}</h1>
        </div>

        <div className="view-footer" >

          <Link to="/">
            <input type="button" value="Back" />
          </Link>
        </div>
      </div >
    </>
  );
}

export default ViewModal

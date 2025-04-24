import React, { useContext } from 'react'
import './css/viewModal.style.css'
import { todo } from './todo.type'
import { ListContext } from "./ListContext";
import { Link } from 'react-router-dom';


const ViewModal = () => {
  const useListContext = useContext(ListContext);

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
          <h1>{useListContext.todoList.map((c: any) => {
            return <h1>{JSON.parse(JSON.stringify(c.user))}</h1>
          })}</h1>
        </div>


      </div >
    </>
  );
}

export default ViewModal

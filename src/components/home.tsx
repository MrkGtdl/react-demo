import { useContext, useEffect, useState } from "react";

import { todo, PageList } from "./todo.type";
import List from "./todolist";
import React from "react";
import AddToDo from "./create";
import NewCreate from "./newCreate";
import EditRecord from "./edit";
import "./css/home.style.css";
import { ListContext } from "./ListContext";
import { Link } from "react-router-dom";

const Home = () => {
  const useListContext = useContext(ListContext);
  const [list, listTodo] = useState([] as todo[]);
  const [createPage, setCreate] = useState(PageList.list);
  const [editPage, setEdit] = useState({} as todo);

  const addTodoClick = () => {
    setCreate(PageList.add);
  };
  return (
    <>
      <div className="card">
        <div>
          <article>
            <header>
              <h1>WHAT TODO</h1>
            </header>
          </article>
        </div>

        <section>
          {createPage === PageList.list && (
            <>
              <div className="createbtn">
                <Link to="/create">
                  <input type="button" value="Create" onClick={addTodoClick} />
                </Link>

                <List list={list} />
              </div>
            </>
          )}

          {/* {createPage === PageList.add && (
            <AddToDo
              onBackBtnClickHnd={showListSection}
              onSubmitClkHnd={addData}
            />
          )} */}

          {createPage === PageList.add && <NewCreate />}

          {/* {createPage === PageList.edit && (
            <EditRecord
              data={editPage}
              onBackBtnClickHnd={showListSection}
              onUpdateClkHnd={updateData}
            />
          )} */}
        </section>
      </div>
    </>
  );
};

export default Home;

import { useEffect, useState } from 'react'

import { todo, PageList } from './todo.type'
import List from './todolist'
import React from 'react'
import AddToDo from './create'
import EditRecord from './edit'
import './css/home.style.css'

const Home = () => {
  const [list, todoList] = useState([] as todo[])
  const [createPage, setCreate] = useState(PageList.list)
  const [editPage, setEdit] = useState({} as todo)

  const addTodoClick = () => {
    setCreate(PageList.add)
  }

  // store the ata into the localstorage
  const _setTodoList = (list: todo[]) => {
    todoList(list)
    window.localStorage.setItem('list', JSON.stringify(list))
  }

  useEffect(() => {
    const listResult = window.localStorage.getItem('list')
    if (listResult) {
      _setTodoList(JSON.parse(listResult))
    }
  }, [])

  const showListSection = () => {
    setCreate(PageList.list)
  }
  const addData = (data: todo) => {
    _setTodoList([...list, data])
  }
  const deleteRecord = (data: todo) => {
    const indexToDelete = list.indexOf(data)
    const tempList = [...list]

    tempList.splice(indexToDelete, 1)
    _setTodoList(tempList)
  }

  const editData = (data: todo) => {
    setCreate(PageList.edit)
    setEdit(data)
  }

  // function for updating the data
  const updateData = (data: todo) => {
    const filteredData = list.filter((x) => x.id === data.id)[0]

    const indexedRecord = list.indexOf(filteredData)

    const tempdata = [...list]

    tempdata[indexedRecord] = data
    _setTodoList(tempdata)
  }
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
                <input type="button" value="Create" onClick={addTodoClick} />
                <List
                  list={list}
                  onDeleteClkHnd={deleteRecord}
                  onEdit={editData}
                />
              </div>
            </>
          )}

          {createPage === PageList.add && (
            <AddToDo
              onBackBtnClickHnd={showListSection}
              onSubmitClkHnd={addData}
            />
          )}

          {createPage === PageList.edit && (
            <EditRecord
              data={editPage}
              onBackBtnClickHnd={showListSection}
              onUpdateClkHnd={updateData}
            />
          )}
        </section>
      </div>
    </>
  )
}

export default Home

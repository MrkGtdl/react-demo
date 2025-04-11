import React, { useState } from 'react'
import { todo } from './todo.type'
import './css/create.style.css'

// Set props to be passed on to another component
type Props = {
  onBackBtnClickHnd: () => void
  onSubmitClkHnd: (data: todo) => void
}

const AddToDo = (props: Props) => {
  // track state in a function component.
  const [description, setDesc] = useState('')

  // declare the props
  const { onBackBtnClickHnd, onSubmitClkHnd } = props

  // function that is responsible for setting the setstate
  const onDescChange = (e: any) => {
    setDesc(e.target.value)
  }

  // function that is responsible for storing the data into the variable
  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault()
    const data: todo = {
      id: new Date().toJSON().toString(),
      description: description,
      status: 'In Progress',
    }
    onSubmitClkHnd(data)
    onBackBtnClickHnd()
  }

  return (
    <>
      <div className="create-card">
        <h2>Create to do?</h2>
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input
              type="text"
              value={description}
              onChange={onDescChange}
              placeholder="TO-DO Description"
            />
          </div>
          <br />
          <div className="create-footer">
            <input type="submit" value="Submit" />
            <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddToDo

import React, { useState } from 'react'
import { todo } from './todo.type'
import './css/edit.style.css'

type Props = {
  data: todo
  onBackBtnClickHnd: () => void
  onUpdateClkHnd: (data: todo) => void
}

const EditRecord = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClkHnd } = props
  const [description, setDesc] = useState(data.description)

  const onDescChange = (e: any) => {
    setDesc(e.target.value)
  }

  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault()
    const updateData: todo = {
      id: data.id,
      description: description,
      status: 'In Progress',
    }
    onUpdateClkHnd(updateData)
    onBackBtnClickHnd()
  }

  return (
    <>
      <div className="edit-card">
        <h2>Update to do?</h2>
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input type="text" value={description} onChange={onDescChange} />
          </div>
          <br />
          <div className="edit-footer">
            <input type="submit" value="Update" />
            <input
              type="button"
              value="Back"
              onClick={onBackBtnClickHnd}
              placeholder="Update Description"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default EditRecord

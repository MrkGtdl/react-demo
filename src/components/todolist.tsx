import React, { useState } from 'react'
import { todo } from './todo.type'
import ViewModal from './viewModal'

type Props = {
  list: todo[]
  onDeleteClkHnd: (data: todo) => void
  onEdit: (data: todo) => void
}

const List = (props: Props) => {
  const { list, onDeleteClkHnd, onEdit } = props
  const [displayModal, setDisplayModal] = useState(false)
  const viewRecord = (data: todo) => {
    setDataToshow(data)
    setDisplayModal(true)
  }
  const onCloseModal = () => {
    setDisplayModal(false)
  }
  const [dataToShow, setDataToshow] = useState(null as todo | null)

  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {list.map((list) => {
          return (
            <tr key={list.id}>
              <td>{`${list.id}`}</td>
              <td>{`${list.description}`}</td>
              <td>{`${list.status}`}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewRecord(list)}
                  />
                  <input
                    type="button"
                    value="Update"
                    onClick={() => onEdit(list)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClkHnd(list)}
                  />
                </div>
              </td>
            </tr>
          )
        })}
      </table>
      {displayModal && dataToShow !== null && (
        <ViewModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  )
}

export default List

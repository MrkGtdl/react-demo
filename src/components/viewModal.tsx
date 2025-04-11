import React from 'react'
import './css/viewModal.style.css'
import { todo } from './todo.type'

type Props = {
  onClose: () => void
  data: todo
}

const ViewModal = (props: Props) => {
  const { onClose, data } = props
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="view-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div>
            <h1>Summary</h1>
          </div>
        </div>

        <div>
          <label htmlFor="">Description: {data.description}</label>
        </div>
      </div>
    </div>
  )
}

export default ViewModal

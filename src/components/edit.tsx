import React, { useRef, useState } from "react";
import { todo } from "./todo.type";
import "./css/edit.style.css";

type Props = {
  data: todo;
  onBackBtnClickHnd: () => void;
  onUpdateClkHnd: (data: todo) => void;
};

const EditRecord = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClkHnd } = props;
  const [description, setDesc] = useState(data.description);
  const [user, setUser] = useState(data.user);
  const [priority, setPrio] = useState(data.priority);
  const [checked, setCheckbox] = useState(data.checked);
  const [status, setStatus] = useState(data.status);

  const handleChange = (e: any) => {
    setCheckbox(e.target.checked);
    if (e.target.checked) {
      setStatus("Completed");
    } else {
      setStatus("In Progress");
    }
  };

  const onUserChange = (e: any) => {
    setUser(e.target.value);
  };

  const onDescChange = (e: any) => {
    setDesc(e.target.value);
  };

  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();
    const updateData: todo = {
      id: data.id,
      description: description,
      status: status,
      user: user,
      priority: priority,
      checked: checked,
    };
    onUpdateClkHnd(updateData);
    onBackBtnClickHnd();
  };

  return (
    <>
      <div className="edit-card">
        <h2>Update to do?</h2>
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input
              type="text"
              value={user}
              onChange={onUserChange}
              placeholder="User"
            />
          </div>
          <div>
            <input type="text" value={description} onChange={onDescChange} />
          </div>
          <div>
            <label>
              Priority Level:
              <select
                value={priority}
                onChange={(e) => setPrio(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>

          <br />
          <div>
            <label>
              Mark as complete
              <input
                type="checkbox"
                checked={checked}
                defaultChecked={false}
                onChange={handleChange}
              />
            </label>
            {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
          </div>
          <hr />
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
  );
};

export default EditRecord;

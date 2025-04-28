import React, { useContext, useEffect, useRef, useState } from "react";
import { todo } from "./todo.type";
import "./css/edit.style.css";
import { ListContext } from "./ListContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditRecord = () => {
  const useListContext = useContext(ListContext);
  const navigate = useNavigate();
  const [id, setId] = useState<any>();
  const [user, setUser] = useState<any>();
  const [description, setDesc] = useState<any>();
  const [priority, setPrio] = useState<any>();
  const [checked, setCheckbox] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [time, setTime] = useState<any>();
  const params = useParams();
  useEffect(() => {
    const item = useListContext.todoList.find((item) => item.id === params.id);
    if (item) {
      setId(item.id);
      setUser(item.user);
      setDesc(item.description);
      setPrio(item.priority);
      setCheckbox(item.checked);
      setStatus(item.status);
      setTime(item.time);
    }
  }, []);

  const handleChange = (e: any) => {
    setCheckbox(e.target.checked);
    if (e.target.checked) {
      setStatus("Completed");
    } else {
      setStatus("In Progress");
    }
  };

  const onSubmitbtnClkHnd = (e: any) => {
    e.preventDefault();
    const updateData: todo = {
      id: id,
      user: user,
      description: description,
      status: status,
      priority: priority,
      checked: checked,
      time: time,
    };

    useListContext.updateTodolist(updateData);
    navigate("/");
  };

  return (
    <>
      <div className="edit-card">
        <div>
          <article>
            <header>
              <h1>EDIT TODO</h1>
            </header>
          </article>
        </div>
        <form onSubmit={onSubmitbtnClkHnd}>
          <div>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="User"
            />
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
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
          </div>
          <hr />
          <br />
          <div className="edit-footer">
            <input type="submit" value="Update" />
            <Link to="/">
              <input type="button" value="Back" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRecord;

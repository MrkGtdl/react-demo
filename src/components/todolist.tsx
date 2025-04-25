import React, { useContext, useState } from "react";
import { todo } from "./todo.type";
import ViewModal from "./viewModal";
import { ListContext } from "./ListContext";
import { Link } from "react-router-dom";

type Props = {
  list: todo[];
  // onDeleteClkHnd: (data: todo) => void;
  // onEdit: (data: todo) => void;
};

const List = (props: Props) => {
  const useListContext = useContext(ListContext);
  // console.log("useListContext", useListContext.todolist.map(c));
  // const { list, onDeleteClkHnd, onEdit } = props;
  const { list } = props;
  const [displayModal, setDisplayModal] = useState(false);
  const viewRecord = (data: todo) => {
    setDataToshow(data);
    setDisplayModal(true);
  };
  const onCloseModal = () => {
    setDisplayModal(false);
  };
  const [dataToShow, setDataToshow] = useState(null as todo | null);
  return (
    <div>
      <table>
        <tr>

          <th>User</th>
          <th>Description</th>
          <th>Status</th>
          <th>Level</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
        {useListContext.todoList.map((c: any) => {

          return (
            <tr>

              <td>{JSON.parse(JSON.stringify(c.user))}</td>
              <td>{JSON.parse(JSON.stringify(c.description))}</td>
              <td>{JSON.parse(JSON.stringify(c.status))}</td>
              <td>{JSON.parse(JSON.stringify(c.priority))}</td>
              <td>{JSON.parse(JSON.stringify(c.time))}</td>
              <td>
                <div>
                  <Link to={`/view/${c.id}`}>
                    <input
                      type="button"
                      value="View"
                    // onClick={() => viewRecord(list)}
                    />
                  </Link>
                  <Link to={`/edit/${c.id}`}>
                    <input
                      type="button"
                      value="Update"
                    // onClick={() => onEdit(list)}
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                  // onClick={() => onDeleteClkHnd(list)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to="/create">
        {displayModal && dataToShow !== null && (
          <ViewModal />
        )}
      </Link>
    </div>
  );
};

export default List;

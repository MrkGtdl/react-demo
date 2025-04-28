import React, { useContext, useState } from "react";
import { todo } from "./todo.type";
import ViewModal from "./viewModal";
import { ListContext } from "./ListContext";
import { Link } from "react-router-dom";

type Props = {
  list: todo[];
};

const List = (props: Props) => {
  const useListContext = useContext(ListContext);
  const { list } = props;
  const [displayModal, setDisplayModal] = useState(false);

  const [dataToShow, setDataToshow] = useState(null as todo | null);
  const onDeleteClkHnd = (e: any) => {
    useListContext.deleteTodolist(e);
  };
  return (
    <div>
      <table>
        <tr>
          <th>User</th>
          <th>Description</th>
          <th>Status</th>
          <th>Level</th>
          <th>Actions</th>
        </tr>
        {useListContext.todoList.map((c: any) => {
          return (
            <tr>
              <td>{JSON.parse(JSON.stringify(c.user))}</td>
              <td>{JSON.parse(JSON.stringify(c.description))}</td>
              <td>{JSON.parse(JSON.stringify(c.status))}</td>
              <td>{JSON.parse(JSON.stringify(c.priority))}</td>

              <td>
                <div>
                  <Link to={`/view/${c.id}`}>
                    <input type="button" value="View" />
                  </Link>
                  <Link to={`/edit/${c.id}`}>
                    <input type="button" value="Update" />
                  </Link>

                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClkHnd(c.id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to="/create">
        {displayModal && dataToShow !== null && <ViewModal />}
      </Link>
    </div>
  );
};

export default List;

import React, { useContext, useState } from "react";
import { todo } from "./todo.type";
import ViewModal from "./viewModal";
import { ListContext } from "./listContext";

type Props = {
  list: todo[];
  onDeleteClkHnd: (data: todo) => void;
  onEdit: (data: todo) => void;
};

const List = (props: Props) => {
  const useListContext = useContext(ListContext);
  // console.log("useListContext", useListContext.todolist.map(c));
  const { list, onDeleteClkHnd, onEdit } = props;
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
        {useListContext.todolist.map((c: any) => {
          return (
            <tr>
              <td>{JSON.parse(JSON.stringify(c.user))}</td>
              <td>{JSON.parse(JSON.stringify(c.description))}</td>
              <td>{JSON.parse(JSON.stringify(c.status))}</td>
              <td>{JSON.parse(JSON.stringify(c.priority))}</td>
              <td>{JSON.parse(JSON.stringify(c.id))}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    // onClick={() => viewRecord(list)}
                  />
                  <input
                    type="button"
                    value="Update"
                    // onClick={() => onEdit(list)}
                  />
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
        {/* {list.map((list) => {
          return (
            <tr key={list.id}>
              <td>{`${list.user}`}</td>
              <td>{`${list.description}`}</td>
              <td>{`${list.status}`}</td>
              <td>{`${list.priority}`}</td>
              <td>{`${list.id}`}</td>
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
          );
        })} */}
      </table>
      {displayModal && dataToShow !== null && (
        <ViewModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default List;

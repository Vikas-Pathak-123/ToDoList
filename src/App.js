import { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [editIdx, setEditIdx] = useState();

  const editItem = (idx) => {
    let arr = [...list];
    arr[idx] = editInput;
    setList(arr);
  };

  const onDelete = (idx) => {
    // let arr = list.filter((item, id) => id !== idx);
    let arr = [...list];
    arr.splice(idx, 1);
    setList(arr);
  };

  const renderList = () => {
    return list.map((it, idx) => {
      return (
        <div key={idx}>
          <div>
            <p>{it}</p>
            <button onClick={() => onDelete(idx)}>Delete</button>
            <button
              onClick={() => {
                setEdit(true);
                setEditInput(it);
                setEditIdx(idx);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      );
    });
  };

  const addItem = () => {
    let arr = [...list];
    if (item.length > 0) {
      arr.push(item);
      setItem("");
      setList(arr);
    }
  };
  return (
    <div className="App">
      {edit ? (
        <div>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button
            onClick={() => {
              setEdit(false);
              editItem(editIdx);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <input
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button onClick={addItem}>Submit</button>
        </div>
      )}
      <div>{renderList()}</div>
    </div>
  );
}

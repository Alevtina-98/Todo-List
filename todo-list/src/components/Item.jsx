import { useState } from "react";

function Item({ title, id, status, dateCreated, tasks, setTasks }) {
  const [checked, setChecked] = useState(status);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const classes = ["todo"];

  if (checked === true) {
    classes.push("status");
  }

  const onUpdateStatus = () => {
    setChecked(!checked);
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: !checked };
      }
      return item;
    });
    setTasks(updatedTasks);
  };
  const onRemoveItem = () => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setTasks(updatedTasks);
    setIsEditing(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };
  return (
    <li className={classes.join(" ")}>
      <div>
        <label>
          <input type="checkbox" checked={checked} onChange={onUpdateStatus} />
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="editable-input"
              autoFocus
            />
          ) : (
            <span>{title}</span>
          )}

          <span className="data">{dateCreated}</span>
        </label>
        {!isEditing && (
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        )}
        <i className="material-icons red-text" onClick={onRemoveItem}>
          X
        </i>
      </div>
    </li>
  );
}
export default Item;

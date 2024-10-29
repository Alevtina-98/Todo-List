import { useState } from "react";

function Item({ title, id, status, dateCreated, tasks, setTasks }) {
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  if (checked === true) {
    classes.push("status");
  }

  const onUpdateStatus = () => {
    setChecked(!checked);
    tasks.map((item) => {
      if (item.id === id) {
        item.status = !checked;
      }
      return true;
    });
    setTasks([...tasks]);
  };
  const onRemoveItem = () => {
    setTasks([...tasks.filter((item) => item.id !== id)]);
  };

  return (
    <li className={classes.join(" ")}>
      <div>
        <label>
          <input type="checkbox" checked={checked} onChange={onUpdateStatus} />
          <span>{title}</span>
        </label>
        <span className="data">{dateCreated}</span>
        <i className="material-icons red-text" onClick={onRemoveItem}>
          X
        </i>
      </div>
    </li>
  );
}
export default Item;

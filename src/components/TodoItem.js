import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteItem, toggleComplete }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{item.task}</div>
          {/* {item.author?.name && <div> by {item.author.name} </div>} */}
          <div>by {item.author?.name || "Unknown Author"}</div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteItem(item._id)}
            >
              Delete
            </button>

            <button
              className="button-delete"
              onClick={() => toggleComplete(item._id)}
            >
              {item.isComplete ? "Undo" : "Done"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;

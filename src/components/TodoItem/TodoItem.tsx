import { ReactNode } from "react";
import { TodoItemType } from "../../type/todoItemType";

const TodoItem: React.FC<{ todo: TodoItemType; children?: ReactNode }> = ({
  todo,
  children,
}) => {
  const { subject, content } = todo;
  return (
    <div style={{ padding: "0.75rem", margin: "0.5rem", border: "1px solid" }}>
      <div>{subject}</div>
      <div>{content}</div>
    </div>
  );
};

export default TodoItem;

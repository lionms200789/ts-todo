import { useContext } from "react";
import { TodoContext } from '../../context/todoContext';
import TodoItem from "../../components/TodoItem";

const Todo = () => {
    const { todos } = useContext(TodoContext);
    return <>
    <div>TODO PAGE</div>
    {
        todos.map(item => <TodoItem todo={item} />)
    }
    </>
};

export default Todo;
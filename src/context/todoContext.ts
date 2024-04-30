import { createContext } from "react";
import { TodoContextType } from "../type/todoContextType";

export const TodoContext = createContext<TodoContextType>({
    todos: []
});
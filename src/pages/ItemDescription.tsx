import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom";

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = (props: ComponentProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todos } = props;
    const [toDo, setTodo] = useState<ToDo>();

    useEffect(() => {
        const searchTodo = todos.find((todo) => String(todo.id) === id)
        if (searchTodo) {
            setTodo(searchTodo);
        } else {
            navigate('/404');
        }
        console.log(searchTodo);
    }, [id, todos, navigate]) // Добавил navigate в зависимости

    return (
        <div className="container">
            <h1>{toDo?.text}</h1>
        </div>
    )
}
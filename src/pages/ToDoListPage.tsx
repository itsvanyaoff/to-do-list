import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const CreateNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        }
        setTodos([...todos, newToDo])
    }

    const UpdateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo;
        });
        setTodos(newTodos)
    }

    const DeleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(newTodos)
    }

    return (
        <>
            {/* <Header /> */}
            <Form CreateNewToDo={CreateNewToDo} />
            <ToDoList todos={todos} UpdateToDo={UpdateToDo} DeleteToDo={DeleteToDo} />
        </>
    )
} 
import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: { todos: ToDo[], UpdateToDo: Function, DeleteToDo: Function }) => {

    const checkedList = () => {
        return props.todos.filter((item) => !item.isDone).map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} updateToDo={props.UpdateToDo} deleteToDo={props.DeleteToDo} /> // для кажого элемента в массиве выводим айтем
            )
        })
    }
    const uncheckedList = () => {
        return props.todos.filter((item) => item.isDone).map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} updateToDo={props.UpdateToDo} deleteToDo={props.DeleteToDo} /> // для кажого элемента в массиве выводим айтем
            )
        })
    }
    // будем массив элементами кот будут элеметы типа туду
    // const todo1: ToDo = { // создаем объект
    //     id: 0,
    //     text: 'Первая задача',
    //     isDone: true
    // }
    // const todo2: ToDo = {
    //     id: 1,
    //     text: 'Вторая задача',
    //     isDone: false
    // }
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list failed">
                    {checkedList()}



                    {/* todos.filter((item) => !item.isDone).map((item, idx) => {
                        //     return (
                        //         <ToDoListItem toDoItem={item} key={idx} /> // для кажого элемента в массиве выводим айтем
                        //     )
                        // }) */}


                </ul>
                <ul className="todo-list completed">
                    {uncheckedList()}

                </ul>
            </div>
        </>
    )
}
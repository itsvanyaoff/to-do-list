import { ToDo } from '../../../models/todo-item';
import './ToDoListItem.scss';

// interface Human {
//     name: string,
// }
// interface Man extends Human { // наследование - те взаимствует
//     sex: 'man'
// }
// interface Woman extends Human {
//     sex?: 'woman'
// }
// // type FirstType = string | number;

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    // console.log(props);
    //     const human1: Man = {
    //         name: 'Alex',
    //         sex: 'man'
    //     }
    //     const human2: Woman = {
    //         name: 'Kate',
    //     }
    // let myVar: FirstType = 'my variable'
    // myVar = 3
    return (
        <>
            <li className="todo-list-item__wrapper">
                <span>{props.toDoItem.text}</span>
                <div className="todo-list-item__buttons">
                    <button className="btn-trash" onClick={() => props.deleteToDo(props.toDoItem)}></button>
                    <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'} onClick={() => props.updateToDo(props.toDoItem)}></button>
                </div>
            </li>
        </>
    )
}
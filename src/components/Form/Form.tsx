import { ChangeEvent, useState } from 'react';
import './Form.scss'

export const Form = (props: { CreateNewToDo: Function }) => {
    const [text, setText] = useState<string>('')

    const formSubmit = (e: React.FormEvent) => {

        if (text) {
            props.CreateNewToDo(text);
            setText('')
        }
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={formSubmit}>
                <label>
                    <input
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit"></button>
                </label>
            </form>
        </div>
    )
}
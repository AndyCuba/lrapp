import { useState } from 'react';
import { StyledCheckbox, StyledTodo, StyledDescription } from './style';

type TodoPropsType = {
    id: number,
    title: string,
    completed: boolean
}

function Todo(props: TodoPropsType) {
    const { id, title, completed } = props;
    const [isCompleted, setCompleted] = useState(completed);

    const handleChange = () => {
        setCompleted(!isCompleted);
    };

    return(
        <StyledTodo completed={isCompleted}>
            <label htmlFor={'input' + id} >
                <StyledCheckbox completed={isCompleted}/>
                <StyledDescription completed={isCompleted}>
                    <h2>{title}</h2>
                    <p>{title}</p>
                </StyledDescription>
            </label>
            <input
                type='checkbox'
                id={'input' + id}
                checked={isCompleted}
                onChange={handleChange}
                hidden
            />
        </StyledTodo>
    );
};

export default Todo;
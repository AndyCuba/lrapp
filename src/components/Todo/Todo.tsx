import { useCallback, useEffect, useState } from 'react';
import { StyledCheckbox, StyledTodo, StyledDescription } from './style';

type TodoPropsType = {
    id: number,
    title: string,
    completed: boolean,
    description: string | null,
    todos: {
        id: number,
        title: string,
        completed: boolean
    }[]
}

function Todo(props: TodoPropsType) {
    const { id, title, completed, todos, description } = props;
    const [isCompleted, setCompleted] = useState(completed);

    const updateTodos = useCallback(() => {
        const index = todos.findIndex(todo => todo.id === id);

        todos[index].completed = isCompleted;
    }, [todos, id, isCompleted]); 

    const handleChange = () => {
        setCompleted(!isCompleted);
    };

    useEffect(() => {
        updateTodos();
    }, [isCompleted, updateTodos]);

    useEffect(() => {

    }, []);

    return(
        <StyledTodo completed={isCompleted}>
            <label htmlFor={'input' + id} >
                <StyledCheckbox completed={isCompleted}/>
                <StyledDescription completed={isCompleted}>
                    <h2>{title}</h2>
                    {description && <p>{description}</p>}
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
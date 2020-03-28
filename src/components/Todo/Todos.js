import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const Todos = ({todos, onEditMode, onRemove, onClear}) => {

    return (
        <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'>Todo List</h3>
            {
                todos.map(todo => <TodoItem key={todo.id}
                                            onEditMode={onEditMode}
                                            onRemove={onRemove}
                                            todo={todo}/>)
            }
            <button type='button'
                    className='btn btn-danger btn-tn-block text-uppercase mt-5'
                    onClick={onClear}>
                Clear List
            </button>
        </ul>
    );
};

export default React.memo(Todos, (prevProps, nextProps) => JSON.stringify(prevProps.todos) === JSON.stringify(nextProps.todos));
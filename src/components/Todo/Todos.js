import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const Todos = ({todos, onEditMode, onRemove, onClear}) => {

    return (
        <section>
            <h3>Todo List</h3>
            <TodoItem/>
        </section>
    );
};

export default React.memo(Todos, (prevProps, nextProps) => JSON.stringify(prevProps.todos) === JSON.stringify(nextProps.todos));
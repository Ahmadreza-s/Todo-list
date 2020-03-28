import React from 'react';

const TodoItem = ({todo, onEditMode, onRemove}) => {

    return (
        <li className='list-group-item text-capitalize d-flex justify-content-between my-2'
            style={{borderTopWidth: '1px'}}>
            <h6>{todo.title}</h6>
            <div className='todo-icon'>
                <span className='mx-2 text-success' onClick={() => onEditMode(todo.id)}>
                    <i className="fas fa-pencil-alt"/>
                </span>
                <span className='mx-2 text-danger' onClick={() => onRemove(todo.id)}>
                    <i className="fas fa-trash-alt"/>
                </span>
            </div>
        </li>
    );
};

export default TodoItem;
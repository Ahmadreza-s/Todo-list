import React from 'react';

const TodoInput = ({onSubmit, onChanged, todo, isEditMode}) => {
    const inputEl = React.useRef();
    if (isEditMode && inputEl.current)
        inputEl.current.focus();
    return (
        <div className='card card-body my-3'>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input className='form-control text-capitalize'
                           placeholder={`${isEditMode ? 'Edit' : 'Add'} todo item`}
                           onChange={onChanged}
                           value={todo}
                           ref={inputEl}/>
                </div>
                <button type='submit'
                        className={`btn btn-block bg-${isEditMode ? 'warning' : 'primary'} mt-3 text-uppercase text-white`}
                        disabled={!todo}>
                    {
                        isEditMode ? 'Edit Item' : 'Add Item'
                    }
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
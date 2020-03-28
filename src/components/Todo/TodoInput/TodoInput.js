import React from 'react';

const TodoInput = ({onSubmit, onChanged, todo}) => {
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
                           placeholder='Add todo item'
                           onChange={onChanged}
                           value={todo}/>
                </div>
                <button type='submit'
                        className='btn btn-block bg-primary mt-3 text-uppercase text-white'>
                    Add item
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
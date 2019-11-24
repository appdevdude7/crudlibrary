import React from 'react'

import BookItem from './BookItem';
import {MdDelete} from 'react-icons/md';

const BookList = ({expenses, handleEdit, handleDelete, clearItems}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense)=> {
                    return <BookItem 
                                key={expense.id} 
                                expense={expense}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit} />
                })}
            </ul>
            {expenses.length> 0 && <button className="btn" onClick={clearItems} >
                clear expenses
                <MdDelete className="btn-icon" />
            </button> }
        </>
    )
}

export default BookList

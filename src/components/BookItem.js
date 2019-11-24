import React from 'react'

import {MdEdit, MdDelete} from 'react-icons/md';

const BookItem = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, author, amount} = expense;
    return (
        <>
            <div className="card">
                <li className="card-item">
                        <span className="expense"><b>Book Name :</b> {charge}</span>
                        <span className="expense"><b>Author :</b> {author}</span>
                        <span className="expense"><b>Price :</b> $ { amount}</span>
                        <button className="edit-btn" aria-label="edit button" onClick={()=>handleEdit(id)} >
                            <MdEdit />
                        </button>
                        <button className="clear-btn" aria-label="delete button" onClick={()=>handleDelete(id)}>
                            <MdDelete />
                        </button>
                </li>
                {/* <li className="item" >
                    <div className="info" >
                        <span className="expense">{charge}</span>
                        <span className="expense">{author}</span>
                        <span className="amount">${ amount}</span>
                    </div>
                    <div>
                        <button className="edit-btn" aria-label="edit button" onClick={()=>handleEdit(id)} >
                            <MdEdit />
                        </button>
                        <button className="clear-btn" aria-label="delete button" onClick={()=>handleDelete(id)}>
                            <MdDelete />
                        </button>
                    </div>
                </li> */}
            </div>
        </>
    )
}

export default BookItem

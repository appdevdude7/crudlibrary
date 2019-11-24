import React from 'react'

import {MdSend} from 'react-icons/md';

const BookForm = ({
    charge,
    author,
    amount,
    handleCharge,
    handleAuthor,
    handleAmount,
    handleSubmit,
    edit
}) => {
    return (
        <>
        <h2 className="text-center">Add New Book</h2>
        <form onSubmit={handleSubmit} >
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="expense">Book Name</label>
                    <input type="text" className="form-control" 
                        id="charge" name="charge"
                        value={charge} onChange={handleCharge} 
                        placeholder="e.g. Rich Dad Poor Dad" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">author</label>
                    <input type="text" className="form-control" 
                        id="author" name="author"
                        value={author} onChange={handleAuthor} 
                        placeholder="e.g. Robert Kiyosaki" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" className="form-control" 
                        id="amount" name="amount"
                        value={amount} onChange={handleAmount} 
                        placeholder="e.g. 2500" />
                </div>
            </div>
            <button type="submit" className="btn">
                {edit? 'edit' : 'submit'}
                <MdSend className="btn-icon" />
            </button>
        </form>
        </>
    )
}

export default BookForm

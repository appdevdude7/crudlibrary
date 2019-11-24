import React, { useState,useEffect } from 'react';

import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Alert from './components/Alert';

import uuid from 'uuid/v4';
const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')) : [];

function App() {
  // ******state values*********
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single expense
  const [author, setAuthor] = useState('');
  // single Amount
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState ({show: false});
  // edit
  const [edit, setEdit] = useState (false);
  // edit item
  const [id, setId] = useState(0);
// ****** use Effect *********
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // ******functionality*********
  const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleAuthor = e => {
    setAuthor(e.target.value);
  }
  const handleAmount = e => {
    setAmount(e.target.value);
  }
  // handle alert
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(()=> {
      setAlert({show: false});
    },3000);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== "" && author !== "" && amount > 0 ) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge,author, amount} :item
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({type:'success', text: 'Book Edited'});
      }
      else{
        const singleExpense = {id: uuid(), charge, author, amount};
        setExpenses([...expenses, singleExpense]);
        handleAlert({type:'success', text: 'Book successfully added'});
      }
      setCharge('');
      setAuthor('');
      setAmount('');
    }
    else {
      // handle alert called
      handleAlert({type: 'danger', text: `Book Name, Author Name can't be empty and Price has to be greater than zero`});
    }
  };
  // clear all items
  //new change
  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: "danger", text: "All items deleted"});
  };
  // handle delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item => item.id !== id );
    setExpenses(tempExpenses);
    handleAlert({type: "danger", text: "Book deleted"});
  };
  // handle edit
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge, author, amount} = expense;
    setCharge(charge);
    setAuthor(author);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  /* const result = useState(initialExpenses);
  const expenses = result[0];
  const setExpenses = result[1];
  console.log(expenses,setExpenses);
 */
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1 className="title">Book Library</h1>
      <main className="App">
        <BookForm 
          charge={charge} 
          amount={amount} 
          author={author}
          handleAmount={handleAmount} 
          handleCharge={handleCharge}
          handleAuthor={handleAuthor}
          edit={edit}
          handleSubmit={handleSubmit} />
      </main>
      <BookList expenses={expenses} 
          handleDelete={handleDelete}
          clearItems={clearItems} 
          handleEdit={handleEdit}  />
      <h1>
        Total Amount for Books : <span className="total">
          ${expenses.reduce((acc, curr) => {
            return (acc+= parseInt(curr.amount));
          },0 )}
          </span>
      </h1>
    </>
  );
}

export default App;

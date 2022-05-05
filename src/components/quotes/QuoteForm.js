import { useRef } from 'react';
import { Prompt } from 'react-router-dom';
import { useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [current, setCurrent]=useState(false);
  
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function Run() {
    setCurrent(true)
  }
  function RunBoy() {
    setCurrent(false)
  }
  return (
    <>
    <Prompt
    when={current}
    message="Are you sure you want to leave?"
  />
    <Card>
      <form onFocus={Run} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={RunBoy} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </>
  );
};

export default QuoteForm;
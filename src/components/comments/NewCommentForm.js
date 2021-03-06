import { useRef } from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from "../../hooks/use-http"
import { addComment } from "../../lib/api";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  
  const {sendRequest}=useHttp(addComment);
 
  const submitFormHandler = (event) => {
    event.preventDefault();
const existingText=commentTextRef.current.value;
    sendRequest({commentData:{text:existingText},quoteId:props.quoteId});
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

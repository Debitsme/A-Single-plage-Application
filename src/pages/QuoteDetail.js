import { Fragment } from 'react';
import { useParams, Route,Link} from 'react-router-dom';
import { useEffect } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
// ];



const QuoteDetail = () => {
  
  const params = useParams();
  const {quoteId}=params

  const {sendRequest,status,data:loadedQuotes,error}=useHttp(getSingleQuote,true);
  useEffect(()=>{
    sendRequest(quoteId);
    
  },[sendRequest,quoteId]);
  if(status==="pending"){
    return (<div className="centered">
      <LoadingSpinner/> 
    </div>)
  }
  if(error){
    return  <p className="centered focused">{error }</p>
    
  }
  // if((status==="completed") && (!loadedQuotes || loadedQuotes.length===0)){
  //   return <NoQuotesFound/>
   
  // }
  

  // const existing=DUMMY_QUOTES.find((item)=>item.id===params.quoteId);
  if(!loadedQuotes.text){
    return <p>Nothing Here!</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author}/>

      < Route  path={`/quotes/${params.quoteId}`} exact>
      <div className='centered'>

      <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`} >Add a Comment</Link>
      </div>
     </Route>
      < Route  path='/quotes/:quoteId/comments'>
     <Comments/>
     </Route>
    </Fragment>
  );
};

export default QuoteDetail;

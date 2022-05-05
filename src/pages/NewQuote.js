import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api";
const NewQuote = () => {
  
 const {sendRequest, status}= useHttp(addQuote);
 const History=useHistory();
 useEffect(()=>{
    if(status==="completed"){
      History.push("/quotes")
    }
},[status,History])
  
  const Aloha= quoteData =>{
    sendRequest(quoteData)
    console.log(quoteData);
   
  }

  return <><h1>New Quote Page</h1>
    <QuoteForm isLoading={status==="pending"} onAddQuote={Aloha}/></>
};

export default NewQuote;
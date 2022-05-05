import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Wrapper from "./components/layout/Wrapper";
import NoQuotesFound from './components/quotes/NoQuotesFound';

function App() {
  return (
    <Wrapper>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route path='*'>
        <NoQuotesFound />
      </Route>
    </Switch>
    </Wrapper>
  );
}

export default App;

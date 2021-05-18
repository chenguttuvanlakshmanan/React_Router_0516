import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './components/layout/Layout';
import Allquotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import DetailsQuote from './pages/QuoteDetails';

function App() {
  return (
   
      <Layout>
        <Switch>
          <Route path="/quotes" exact>
            <Allquotes></Allquotes>
          </Route>
          <Route path="/quotes/:quoteId" >
            <DetailsQuote></DetailsQuote>
          </Route>
          <Route path="/new-quotes" >
            <NewQuote></NewQuote>
          </Route>
          <Route path="/" exact >
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route to="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    
  );
}

export default App;

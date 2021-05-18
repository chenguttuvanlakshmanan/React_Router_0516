import React,{Fragment} from "react";
import {useParams,Route,Link,useRouteMatch}  from 'react-router-dom'
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_DATA = [
    {id:'q1',author:"cheng",text:"Learning react is fun"},
    {id:'q2',author:"chenguttuvan",text:"Learning react is great"},
]

function DetailsQuote() {
    const params = useParams();
    const match = useRouteMatch()
    const quote = DUMMY_DATA.find( quote => quote.id === params.quoteId)

    if (!quote)  {
        return <p>Quote Not Found</p>
    }

    return(
        <Fragment>
         <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
         <Route path={`/quotes/${params.quoteId}`} exact>
             <div className="centered">
                 <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                     Load Comments
                 </Link>
             </div>
         </Route>
         <Route path={`${match.path}/comments`}>
             <Comments></Comments>
         </Route>
         </Fragment>
    )
}

export default DetailsQuote;
import QuoteForm from '../components/quotes/QuoteForm'
import {useHistory} from 'react-router-dom'

function NewQuote() {
    const history = useHistory();
    const onQuoteHandler = quoteData => {
        console.log(quoteData);
        history.push("/quotes")
        
    }
    return(
         <QuoteForm onAddQuote={onQuoteHandler}></QuoteForm>
    )
}

export default NewQuote;
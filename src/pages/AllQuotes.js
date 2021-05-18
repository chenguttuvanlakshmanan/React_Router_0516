import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
    {id:'q1',author:"cheng",text:"Learning react is fun"},
    {id:'q2',author:"chenguttuvan",text:"Learning react is great"},
]

function Allquotes() {
    return(
        <QuoteList quotes={DUMMY_DATA}></QuoteList>
    )
}

export default Allquotes;
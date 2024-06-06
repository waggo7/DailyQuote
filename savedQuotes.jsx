
export default function SavedQuotes(quote){

    return(
        <div>

        <h2> Saved Quotes</h2>
            <ul>
                {quote.map((quote, index) => (
                    <li key={index}>
                        ({quote.quote} - {quote.author})
                    </li>
                ))}
            </ul>
        </div>
    )
}
savedQuote:"export default function SavedQuotes(quote){

    return(
        <div>

        <h2> Saved Quotes</h2>
            <ul>
                {quote.map((quote, index) => (
                    <li key={index}>
                        ({quote.quote} - {quote.author})
                    </li>
                ))}
            </ul>
        </div>
    )
}"
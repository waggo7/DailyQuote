import { useState } from "react";
import axios from "axios";


export default function GetQuote({ handleSave }) {
    const [input, setInput] = useState('')
    const [author, setAuthor] = useState('')

    const getQuote = async () => {
        const options = {
            method: 'GET',
            url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
            params: {
                cat: 'famous',
                count: '1'
            },
            headers: {
                'X-RapidAPI-Key': 'be51cdea8cmsh469d1121015b269p105554jsnf2f3aef4054e',
                'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setAuthor(response.data[0].author)
            setInput(response.data[0].quote)
        } catch (error) {
            console.error(error);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        getQuote();
    }

    const handleQuoteSave = () => {
        if (input && author) {
            handleSave({ input, author })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Famous Quote & Author </button>
            </form>
            {input && (
                <div>
                    <p>  {input}   -{author}</p>
                    <button onClick={handleQuoteSave}>save</button>
                </div>
            )}
        </div>
    )
}
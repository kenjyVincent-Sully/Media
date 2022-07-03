import { useState, useEffect } from 'react';
import { getSearchResults } from "@api/search";
import { Form, Search, Suggestions, ButtonSearch } from './style';

const SearchBar = () => {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        const keywordsValue = e.currentTarget.value;
        setInput(keywordsValue);
    }

    const autoComplete = () => {
        getSearchResults(input).then(results => {

            setResults(results.results);
        })
            .catch(err => console.log(err));
    }

    const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13 && input.length >= 2) {
            setActiveSuggestionIndex(0);

        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === results.length) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };

    const SuggestionsListComponent = () => {
        return results.length > 0 ? (
            <Suggestions>
                <ul className="suggestions">
                    {results.map((result, i) => {

                        const { title, id } = result;

                        return (
                            <li key={`${i}-${id}`} >

                                <a href={`/${id}`}>
                                    {title}
                                </a>

                            </li>
                        )
                    })}
                </ul>
            </Suggestions>

        ) : (
            <>
                {input.length > 0 &&
                    <div className="no-suggestions">
                        <span role="img" aria-label="tear emoji">
                            😪
                        </span>{" "}
                        <em>Désole pas de suggestion</em>
                    </div>
                }
            </>


        );
    };

    useEffect(() => {
        if (input.length >= 2) {

            autoComplete();
        }
    }, [input]);

    return (
        <div>
            <Form action='/search-page' method='GET'>
                <Search name='q'
                    type="search"
                    placeholder='Rechercher un film'
                    onChange={handleSearch}
                    onKeyDown={onKeyDown}
                    value={input}

                />
                <ButtonSearch type="submit" />

            </Form>
            {<SuggestionsListComponent />}
        </div>
    )
}

export default SearchBar;
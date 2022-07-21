import { useState } from 'react';
import { Search as SearchAPI } from "@api/search";
import { Form, Search, Suggestions, ButtonSearch } from './style';

const SearchBar = () => {
    // const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = ( { currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
       new SearchAPI().getSearchResults(value)
       .then(({ results }) => {
        setResults(results);
      })
      .catch((err) => console.log(err));
    }

    // const SuggestionsListComponent = () => {
    //     return results.length > 0 ? (
    //         <Suggestions>
    //             <ul className="suggestions">
    //                 {results.map((result, i) => {

    //                     const { title, id } = result;

    //                     return (
    //                         <li key={`${i}-${id}`} >

    //                             <a href={`/${id}`}>
    //                                 {title}
    //                             </a>

    //                         </li>
    //                     )
    //                 })}
    //             </ul>
    //         </Suggestions>

    //     ) : (
    //         <>
    //             {input.length > 0 &&
    //                 <div className="no-suggestions">
    //                     <span role="img" aria-label="tear emoji">
    //                         😪
    //                     </span>{" "}
    //                     <em>Désole pas de suggestion</em>
    //                 </div>
    //             }
    //         </>
    //     );
    // };

    return (
        <div>
            <Form action='/search-page' method='GET'>
                <Search name='q'
                    type="search"
                    placeholder='Rechercher un film'
                    onChange={handleSearch}
                />
                <ButtonSearch type="submit" aria-label="Recherche">Recherche</ButtonSearch>

            </Form>
            {/* {<SuggestionsListComponent />} */}
        </div>
    )
}

export default SearchBar;
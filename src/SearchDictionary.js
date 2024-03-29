import React, {useState} from "react"; 
import Results from "./Results";
import "./Results.css";
import axios from "axios";

  export default function SearchDictionary (){
      let [keyword, setKeyword]= useState("");
      let [results, setResults]= useState(null);

    
    function search (event){
        event.preventDefault();
        

        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
      return (
          <div className= "SearchWord">
              <form onSubmit={search}>
                  <input 
                    type="search"
                   autoFocus={true}
                   onChange={handleKeywordChange}
                  />
                  <button 
                     type= "Submit"
                     className= "btn btn-primary">
                      Search
                  </button>
              </form>
              <Results results={results} />
          </div>
      );
  }
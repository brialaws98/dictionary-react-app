import React, {useState} from "react"; 
import axios from "axios";

  export default function SearchDictionary (){
      let [keyword, setKeyword]= useState("");

    function search (event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        console.log(response.data[0]);
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
              </form>
          </div>
      );
  }
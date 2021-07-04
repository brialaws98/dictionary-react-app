import React, {useState} from "react"; 

  export default function SearchDictionary (){
      let [keyword, setKeyword]= useState("");

    function search (event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
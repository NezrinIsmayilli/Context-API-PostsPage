import React, { Component } from 'react'
import  { BookContext } from '../contexts/BookContext';

class Search extends Component {
  render() {
    return (
        <BookContext.Consumer>
            {value=>
            <div className="container">
              <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form-row row mb-5">
                    <div className="col-12">
                        <input 
                             type="text" 
                             className="form-control" 
                             placeholder="Seach a book"
                             onChange={value.searchBook}/>
                    </div>
                </div>
             </form>
            </div>
            }
        </BookContext.Consumer>
    )
  }
}

export default Search;


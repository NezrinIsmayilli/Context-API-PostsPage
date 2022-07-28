import React, { Component } from 'react'
import  { PostContext } from '../contexts/PostContext';

class Search extends Component {
  render() {
    return (
        <PostContext.Consumer>
            {value=>
            <div className="container">
              <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form-row row mb-5">
                    <div className="col-12">
                        <input 
                             type="text" 
                             className="form-control" 
                             placeholder="Seach a post for title"
                             onChange={value.searchPost}/>
                    </div>
                </div>
             </form>
            </div>
            }
        </PostContext.Consumer>
    )
  }
}

export default Search;


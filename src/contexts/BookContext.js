import React, { Component } from 'react'

export const BookContext = React.createContext();

class BookContextProvider extends Component {

    state={
      books: [],
      searchQuery: ""
    }


  componentDidMount(){
    
    this.getMovies();
    console.log()
  }

  async getMovies(){
    await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data.results.books
      })
    })
  }

  searchBook=(e)=>{
    this.setState({
      searchQuery: e.target.value

    })
  }

  render() {
    let filterBook = this.state.books.filter((book)=>
    book.title.toLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !==-1)

    

    return (
      <BookContext.Provider value={{filterBook: filterBook, searchBook:this.searchBook}}>
            {this.props.children}
      </BookContext.Provider>
    )
  }
}

export default BookContextProvider;
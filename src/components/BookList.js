import React from 'react';
import '../css/BookList.css';
import Book from './Book';
import  { BookContext } from '../contexts/BookContext';
import  { ThemeContext } from '../contexts/ThemeContext';
import Search from './Search';

class BookList extends React.Component {


    render() {
        return (

            <ThemeContext.Consumer>{(contextTheme) => (
                <BookContext.Consumer>
                    {contextBook => {
                    
                    const { filterBook } = contextBook;
                    const {changeTheme, isDarkTheme, dark, light } = contextTheme;
                    const theme = isDarkTheme ? dark : light;
                
                    return (
                        <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                            <Search/>
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">BooksPage</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                <button type="button" className="btn btn-sm btn-info" style={{marginTop: '-70px'}}
                                onClick={changeTheme}>Change Theme</button>
                            </div>
                            <div className="row d-flex justify-content-center">
        
                                {filterBook.map((book, i) => {
                                    return <Book book={book}
                                        key={i}
                                    />
                                })}
        
                            </div>
                        </div>
                    </section>
                    )
                }}
            </BookContext.Consumer>
            )}


            </ThemeContext.Consumer>




        )
    }

}

export default BookList;

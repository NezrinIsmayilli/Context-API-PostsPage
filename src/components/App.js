import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookContextProvider from '../contexts/BookContext';
import ThemeContextProvider from '../contexts/ThemeContext';

class App extends React.Component {

    render () {

        return (
                <ThemeContextProvider>
                    <BookContextProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<BookList />}/>
                            </Routes>
                        </BrowserRouter>
                        
                    </BookContextProvider>
                </ThemeContextProvider>
        );

    }
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostContextProvider from '../contexts/PostContext';
import ThemeContextProvider from '../contexts/ThemeContext';

class App extends React.Component {

    render () {

        return (
                <ThemeContextProvider>
                    <PostContextProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<PostList />}/>
                            </Routes>
                        </BrowserRouter>
                        
                    </PostContextProvider>
                </ThemeContextProvider>
        );

    }
}

export default App;
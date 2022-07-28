import React from 'react';
import '../css/PostList.css';
import Post from './Post';
import  { PostContext } from '../contexts/PostContext';
import  { ThemeContext } from '../contexts/ThemeContext';
import Search from './Search';

class PostList extends React.Component {

    render() {
        return (

            <ThemeContext.Consumer>{(contextTheme) => (
                <PostContext.Consumer>
                    {contextPost => {
                    
                    const { filterPost } = contextPost;
                    const {changeTheme, isDarkTheme, dark, light } = contextTheme;
                    const theme = isDarkTheme ? dark : light;
                
                    return (
                        <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                            <Search/>
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">PostsPage</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                <button type="button" className="btn btn-sm btn-info" style={{marginTop: '-70px'}}
                                onClick={changeTheme}>Change Theme</button>
                            </div>
                            <div className="row d-flex justify-content-center">
        
                                {filterPost.map((post) => {
                                    return <Post post={post}
                                        key={post.id}
                                    />
                                })}
        
                            </div>
                        </div>
                    </section>
                    )
                }}
            </PostContext.Consumer>
            )}


            </ThemeContext.Consumer>




        )
    }

}

export default PostList;

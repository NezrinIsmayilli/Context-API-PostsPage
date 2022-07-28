import React from 'react';
import '../css/Post.css';
import  { ThemeContext } from '../contexts/ThemeContext';
import {LoremPicsum} from 'react-lorem-picsum'

class Post extends React.Component { 

    render () {

        return (
        <ThemeContext.Consumer>{(contextTheme) => {
            const { isDarkTheme, dark, light } = contextTheme;
            const theme = isDarkTheme ? dark : light;
            const {title,id,body, userId} = this.props.post

            return (

                <div className="card mb-5 col-lg-5 col-7 ms-5 p-0" style={{background: theme.bg}}>
                    <div className="row g-0">
                        <div className="col-md-4 p-0 ">
                            <LoremPicsum id={id} width={180} height={200} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content- between">
                                <h5 className="card-title">Title --- {title}</h5>
                                <h6 className="card-text desc" style={{color: theme.desc}}>Body --- {body}</h6>
                                <div className="end d-flex flex-column justify-content-between">
                                    <p className="card-text"><small className="text-muted">UserId: {userId}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                           
            );
        }}

        </ThemeContext.Consumer>
        );
    }
}

export default Post;
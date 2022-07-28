import React from 'react';
import '../css/Book.css';
import  { ThemeContext } from '../contexts/ThemeContext';

class Book extends React.Component { 

    render () {

        return (
        <ThemeContext.Consumer>{(contextTheme) => {
            const { isDarkTheme, dark, light } = contextTheme;
            const theme = isDarkTheme ? dark : light;

            return (

                <div className="card mb-5 col-lg-5 col-7 ms-5 p-0" style={{background: theme.bg}}>
                    <div className="row g-0">
                        <div className="col-md-4 p-0 ">
                            <img src={this.props.book.book_image} className="w-100 h-90" alt="err"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content- between">
                                <h5 className="card-title">{this.props.book.title}</h5>
                                <h6 className='card-text author'>Publisher: {this.props.book.author}</h6>
                                <p className="card-text desc" style={{color: theme.desc}}>{this.props.book.description}</p>
                                <div className="end d-flex flex-column justify-content-between">
                                    <a href={this.props.book.amazon_product_url} className="card-text"><small className="text-muted">Amazon Product URL</small></a>
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

export default Book;
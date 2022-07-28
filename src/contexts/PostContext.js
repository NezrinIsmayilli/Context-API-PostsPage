import React, { Component } from 'react'

export const PostContext = React.createContext();

class PostContextProvider extends Component {

    state={
      posts: [],
      searchQuery: ""
    }


  componentDidMount(){
    
    this.getPosts();
    console.log()
  }

  async getPosts(){
    await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=50`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  searchPost=(e)=>{
    this.setState({
      searchQuery: e.target.value

    })
  }

  render() {
    let filterPost = this.state.posts.filter((post)=>
    post.title.toLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !==-1)

    

    return (
      <PostContext.Provider value={{filterPost: filterPost, searchPost:this.searchPost}}>
            {this.props.children}
      </PostContext.Provider>
    )
  }
}

export default PostContextProvider;
import "./AddPostForm.css"
import CloseIcon from '@material-ui/icons/Close';
import { Component } from "react"

export class AddPostForm extends Component {

   state = {
      postTitle: '',
      postDescription: '',
   }

   handlePostTitleChange = (e) => {
      this.setState({
         postTitle: e.target.value
      })
   }
   handlePostDescChange = (e) => {
      this.setState({
         postDescription: e.target.value
      })
   }

   createPost = () => {
      const post = {
         id: this.props.blogArr.length + 1,
         title: this.state.postTitle,
         description: this.state.postDescription,
         liked: false,
      }

      this.props.addNewBlogPost(post);
      this.props.formShowHide()
   }

   render() {
      const formShowHide = this.props.formShowHide;
      return (
      <>
         <form action='' className="addPostForm">
            <h2>Create Post</h2>
            <div>
               <input
                  type='text'
                  name="postTitle"
                  placeholder="Post Title"
                  value={this.state.postTitle}
                  onChange={this.handlePostTitleChange}
                  required
               />
            </div>
            <div>
               <textarea
                  name="postDescription"
                  placeholder="Post Body"
                  value={this.state.postDescription}
                  onChange={this.handlePostDescChange}
                  required
               />
            </div>
            <div>
               <button onClick={this.createPost} className="blackButton" type="button">
                  Add Post
               </button>
            </div>
            <CloseIcon onClick={formShowHide} className="closeIcon"/>
         </form>
         <div className="overlay" onClick={formShowHide}></div>
      </>
   )
   }

};

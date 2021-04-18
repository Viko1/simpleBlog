import "./EditPostForm.css"
import CloseIcon from '@material-ui/icons/Close';
import { Component } from "react"

export class EditPostForm extends Component {

   state = {
      postTitle: this.props.selectedPost.title,
      postDescription: this.props.selectedPost.description,
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


   savePost = (pos) => {
      const post = {
         id: this.props.selectedPost.id,
         title: this.state.postTitle,
         description: this.state.postDescription,
         liked: this.props.selectedPost.liked,
         comment: this.props.selectedPost.comment,
      };

      this.props.editBlogPost(post);
      this.props.formHideEdit(pos)
   }

   render() {
      const formHideEdit = this.props.formHideEdit;
      return (
      <>
         <form action='' className="editPostForm">
            <h2>Edit Post</h2>
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
                  className="postText"
                  name="postDescription"
                  placeholder="Post Body"
                  value={this.state.postDescription}
                  onChange={this.handlePostDescChange}
                  required
               />
            </div>
            <div>
               <button onClick={this.savePost} className="blackButton" type="button">
                  Save
               </button>
            </div>
            <CloseIcon onClick={formHideEdit} className="closeIcon"/>
         </form>
         <div className="overlay" onClick={formHideEdit}></div>
      </>
   )
   }

};

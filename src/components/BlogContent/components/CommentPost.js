import "./CommentPost.css"
import CloseIcon from '@material-ui/icons/Close';
import { Component } from "react"

export class CommentPost extends Component {

   state = {
      postComments: this.props.selectedPost.comment,
   }

   handlePostCommentChange = (e) => {
      this.setState({
         postComments: e.target.value
      })
   }


   savePostComment = (pos) => {
      const post = {
         comment: this.state.postComments,
         id: this.props.selectedPost.id,
         title: this.props.selectedPost.title,
         description: this.props.selectedPost.description,
         liked: this.props.selectedPost.liked,
      };
      console.log(post.comment)
      this.props.commentPost(post);
      this.props.formHideComments(pos)
   }

   render() {
      const formHideEdit = this.props.formHideComments;
      return (
      <>
         <form action='' className="commentPostForm">
            <h2>Add comment</h2>
            <div>
               <textarea
                  className="postText"
                  name="postDescription"
                  placeholder="Comment"
                  value={this.state.postComments}
                  onChange={this.handlePostCommentChange}
                  required
               />
            </div>
            <div>
               <button onClick={this.savePostComment} className="blackButton" type="button">
                  Post
               </button>
            </div>
            <CloseIcon onClick={formHideEdit} className="closeIcon"/>
         </form>
         <div className="overlay" onClick={formHideEdit}></div>
      </>
   )
   }

};

import "./addPostForm.css"
import CloseIcon from '@material-ui/icons/Close';

export const AddPostForm = ({formShowHide}) => {
   return (
      <>
         <form action='' className="addPostForm">
            <h2>Create Post</h2>
            <div>
               <input type='text' name="postTitle" placeholder="Post Title"/>
            </div>
            <div>
               <textarea name="postDescription" placeholder="Post Body"/>
            </div>
            <div>
               <button onClick={formShowHide} className="blackButton" type="button">
                  Add Post
               </button>
            </div>
            <CloseIcon onClick={formShowHide} className="closeIcon"/>
         </form>
         <div className="overlay" onClick={formShowHide}></div>
      </>
   )
};

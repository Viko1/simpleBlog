import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./BlogCard.css"

export const BlogCard = ({title, comment, description, liked, likePost, deletePost, formShowEdit, formHideEdit, handleSelectPost, formShowComment, formHideComment}) => {

   const editFormSave = () => {
      handleSelectPost();
      formShowEdit();
   };

   const editCommentSave = () => {
      formShowComment();
      handleSelectPost();
   }

   const heartFill = liked ? 'crimson' : 'black'
   return (
      <div className="post">
         <div className="postContent">
            <h2>{title}</h2>
            <p>
               {description}
            </p>
            <div>
               <button onClick={likePost}>
                  <FavoriteIcon style={{fill: heartFill}}/>
               </button>
               <button className="blackButton comments_buton" onClick={editCommentSave}>Add comment</button>
               <p>{ comment }</p>
            </div>
         </div>
         <div className="postControl">
            <button className="editBtn" onClick={editFormSave}>
               <EditIcon/>
            </button>
            <button className="deleteBtn" onClick={deletePost}>
               <DeleteForeverIcon/>
            </button>
         </div>
      </div>
   )


}

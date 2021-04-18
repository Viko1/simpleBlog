import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./BlogCard.css"

export const BlogCard = ({title, description, liked, likePost, deletePost, formShowEdit, formHideEdit, handleSelectPost }) => {

   const editFormSave = () => {
      handleSelectPost();
      formShowEdit();
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

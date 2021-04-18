import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import "./BlogCard.css"

export const BlogCard = ({title, description, liked, likePost, deletePost}) => {

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
            <button className="deleteButton" onClick={deletePost}>
               <DeleteIcon/>
            </button>
         </div>

      </div>
   )


}

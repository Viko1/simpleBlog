import "./BlogContent.css";
import {Component} from "react";
import {posts} from '../../share/projectData';
import {BlogCard} from "./components/BlogCard";
import {AddPostForm} from "./components/AddPostForm";
import {EditPostForm} from "./components/EditPostForm";
import {CommentPost} from "./components/CommentPost";

export class BlogContent extends Component {

   state = {
      showAddForm: false,
      showEditForm: false,
      blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts,
      selectedPost: {},
      showCommentForm: false,
   };

   likePost = pos => {
      const temp = [...this.state.blogArr];
      temp[pos].liked = !temp[pos].liked;

      this.setState({
         blogArr: temp
      })

      localStorage.setItem('blogPosts', JSON.stringify(temp))
   };

   deletePost = pos => {
      if (window.confirm(`Delete ${this.state.blogArr[pos].title}?`)) {
         const temp = [...this.state.blogArr];
         temp.splice(pos, 1);

         this.setState({
            blogArr: temp
         })

         localStorage.setItem('blogPosts', JSON.stringify(temp))
      }
   }

   formShowAdd = () => {
      this.setState({
         showAddForm: true
      })
   }
   formShowHide = () => {
      this.setState({
         showAddForm: false,
      })
   }
   formShowEdit = () => {
      this.setState({
         showEditForm: true
      })
   }
   formHideEdit = () => {
      this.setState({
         showEditForm: false,
      })
   }
   formShowComments = () => {
      this.setState({
         showCommentForm: true
      })
   }
   formHideComments = () => {
      this.setState({
         showCommentForm: false,
      })
   }



   handleSelectPost = (blogPost) => {
      this.setState({
         selectedPost: blogPost
      })
   }


   commentPost = (CommentedPost) => {
      this.setState((state) => {
         const posts = [...this.state.blogArr];
         posts[CommentedPost.id - 1] = (CommentedPost);
         localStorage.setItem('blogPosts', JSON.stringify(posts));
         return {
            blogArr:posts
         }
      })
   }

   editBlogPost = (updatedBlogPost) => {
      this.setState((state) => {
         const posts = [...this.state.blogArr];
         posts[updatedBlogPost.id - 1] = (updatedBlogPost);
         localStorage.setItem('blogPosts', JSON.stringify(posts));
         return {
            blogArr:posts
         }
      })
   }

   addNewBlogPost = (blogPost) => {

      this.setState((state) => {
         const posts = [...this.state.blogArr];
         posts.push(blogPost);
         localStorage.setItem('blogPosts', JSON.stringify(posts));
         return {
            blogArr:posts
         }
      })

      this.formShowHide()
   }
   render() {
      const blogPosts = this.state.blogArr.map((item, pos) => {
         return (
            <BlogCard
               key={item.id}
               title={item.title}
               comment={item.comment}
               description={item.description}
               liked={item.liked}
               likePost={() => this.likePost(pos)}
               deletePost={() => this.deletePost(pos)}
               formShowEdit={this.formShowEdit}
               formHideEdit={this.formHideEdit}
               formShowComment={this.formShowComments}
               formHideComment={this.formShowComments}
               handleSelectPost={() => this.handleSelectPost(item)}
            />
         )
      });
      return (
         <div className="blogPage">
            {
               this.state.showAddForm ?
                  <AddPostForm
                     blogArr={this.state.blogArr}
                     formShowHide={this.formShowHide}
                     addNewBlogPost={this.addNewBlogPost}
                  /> : null
            }
            {
               this.state.showEditForm ?
                  <EditPostForm
                     formHideEdit={this.formHideEdit}
                     selectedPost={this.state.selectedPost}
                     editBlogPost={this.editBlogPost}
                  /> : null

            }
            {
               this.state.showCommentForm ?
                  <CommentPost
                     formHideComments={this.formHideComments}
                     selectedPost={this.state.selectedPost}
                     commentPost={this.commentPost}
                  /> : null

            }
            <h1>Vitalii Ropiak Blog</h1>
            <div className="addNewPost">
               <button className="blackButton" onClick={this.formShowAdd}>Create new Post</button>
            </div>
            <div className="posts">
               {blogPosts}
            </div>
         </div>
      )
   }
}

import { useParams } from 'react-router-dom'
import { useUserValue } from '../../contexts/UserContext'
import { useState } from 'react'
import useBlogMutations from '../../hooks/useBlogMutations'
import useBlog from '../../hooks/useBlog'
import BlogDetailsContainer from './BlogDetailsContainer'

const BlogDetails = () => {
  const [comment, setComment] = useState('')

  const user = useUserValue()
  const { id: blogId } = useParams()
  const { blog, isPending } = useBlog(blogId)
  const { updateBlogMutation, deleteBlogMutation, addCommentMutation } =
    useBlogMutations(blogId)

  const handleLike = (blog) => {
    updateBlogMutation.mutate({
      ...blog,
      likes: blog.likes + 1,
      user: blog?.user?.id,
    })
  }

  const handleDelete = (blog) => {
    if (window.confirm(`Are you sure you want to delete ${blog.title}?`)) {
      deleteBlogMutation.mutate(blog.id)
    } else return
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    addCommentMutation.mutate({ blogId, comment })
    setComment('')
  }

  if (isPending) return <div>Blog loading...</div>

  return (
    <BlogDetailsContainer
      blog={blog}
      user={user}
      handleLike={handleLike}
      handleAddComment={handleAddComment}
      handleDelete={handleDelete}
      comment={comment}
      setComment={setComment}
    />
  )
}

export default BlogDetails

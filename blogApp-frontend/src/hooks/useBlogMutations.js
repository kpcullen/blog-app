import { useMutation, useQueryClient } from '@tanstack/react-query'
import blogService from '../services/blogs'
import useNotification from './useNotifcation'
import { useNavigate } from 'react-router-dom'

const useBlogMutations = (blogId) => {
  const queryClient = useQueryClient()
  const notify = useNotification()
  const navigate = useNavigate()

  const updateBlogMutation = useMutation({
    mutationFn: blogService.update,
    onSuccess: (returnedBlog) => {
      queryClient.invalidateQueries(['blogs'])
      notify('LIKE', returnedBlog.title)
    },
    onError: (error) => {
      notify('LIKE_ERROR', error.message)
    },
  })

  const deleteBlogMutation = useMutation({
    mutationFn: blogService.remove,
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs'])
      notify('REMOVE_BLOG')
      navigate('/blogs')
    },
    onError: (error) => {
      notify('REMOVE_BLOG_ERROR', error.message)
    },
  })
  const addCommentMutation = useMutation({
    mutationFn: ({ blogId, comment }) =>
      blogService.addComment(blogId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries(['blog', blogId])
      notify('ADD_COMMENT')
    },
    onError: (error) => {
      notify('COMMENT_ERROR', error.message)
    },
  })
  return { updateBlogMutation, deleteBlogMutation, addCommentMutation }
}

export default useBlogMutations

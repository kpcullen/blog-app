import { useMutation, useQueryClient } from '@tanstack/react-query'
import useNotification from './useNotifcation'
import blogService from '../services/blogs'

const useNewBlogMutation = (user) => {
  const notify = useNotification()
  const queryClient = useQueryClient()
  const newBlogMututation = useMutation({
    mutationFn: blogService.create,
    onSuccess: (newBlog) => {
      queryClient.setQueryData(['blogs'], (oldBlogs) => [...oldBlogs, newBlog])
      notify('ADD_BLOG', user.name)
    },
    onError: (error) => {
      notify('BLOG_ERROR', error.message)
    },
  })
  return { newBlogMututation }
}

export default useNewBlogMutation

import { useMutation, useQueryClient } from '@tanstack/react-query'
import blogService from '../../services/blogs'
import { useNotificationDispatch } from '../../contexts/NotificationContext'
import { Form, Button, Container } from 'react-bootstrap'
import useNewBlogMutation from '../../hooks/useNewBlogMutation'
import CreateNewBlogContainer from './CreateNewBlogContainer'

const CreateNewBlog = ({ blogFormRef, user }) => {
  const { newBlogMututation } = useNewBlogMutation(user)

  const handleBlogSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const author = formData.get('blogAuthor')
    const title = formData.get('blogTitle')
    const url = formData.get('blogUrl')
    const newBlog = {
      author,
      title,
      url,
    }
    newBlogMututation.mutate(newBlog)
    blogFormRef.current.toggleVisibility()
  }

  return <CreateNewBlogContainer handleBlogSubmit={handleBlogSubmit} />
}

export default CreateNewBlog

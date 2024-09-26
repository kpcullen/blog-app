import { useMutation, useQueryClient } from '@tanstack/react-query'
import blogService from '../../services/blogs'
import { useNotificationDispatch } from '../../contexts/NotificationContext'
import { Form, Button, Container } from 'react-bootstrap'
import CreateNewBlogContainer from './CreateNewBlogContainer'
import useNewBlogMutation from '../../hooks/useNewBlogMutation'

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

  return (
    // <CreateNewBlogContainer
    //   handleBlogSubmit={handleBlogSubmit}
    //   blogFormRef={blogFormRef}
    // />
    <Container>
      <Form onSubmit={handleBlogSubmit}>
        <Form.Group className="sm-3" controlId="blogTitle">
          <Form.Label>Blog title</Form.Label>
          <Form.Control
            type="text"
            name="blogTitle"
            placeholder="enter blog title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="blogUrl">
          <Form.Label>Blog URL</Form.Label>
          <Form.Control
            type="text"
            name="blogUrl"
            placeholder="enter blog url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Blog Author</Form.Label>
          <Form.Control
            type="text"
            name="blogAuthor"
            placeholder="enter blog author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default CreateNewBlog

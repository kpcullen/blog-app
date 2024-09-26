import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-router-dom'

const CreateNewBlogContainer = ({ handleBlogSubmit }) => {
  return (
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

export default CreateNewBlogContainer

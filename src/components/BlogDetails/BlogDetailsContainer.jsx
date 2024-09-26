import { Button, Container, Table } from 'react-bootstrap'
import { formattedUrl } from '../../utils/helpers'

const BlogDetailsContainer = ({
  blog,
  handleLike,
  handleDelete,
  handleAddComment,
  comment,
  setComment,
  user,
}) => {
  return (
    <Container>
      <h2>
        {blog.title} written by {blog.author}
      </h2>
      <a href={formattedUrl(blog)} target="_blank" rel="noopener noreferrer">
        {blog.url}
      </a>
      <div>
        Total likes: {blog.likes}{' '}
        <Button
          className="ms-2"
          variant="primary"
          size="sm"
          onClick={() => handleLike(blog)}
        >
          Like
        </Button>
      </div>
      added by {blog.user.name}{' '}
      {user.username === blog.user.username ? (
        <Button
          className="ms-2 mt-2"
          variant="outline-danger"
          size="sm"
          onClick={() => handleDelete(blog)}
        >
          Remove blog
        </Button>
      ) : (
        ''
      )}
      <Table striped>
        <thead>
          <tr>
            <th>
              <h3>Comments</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {blog.comments.map((comment, i) => (
            <tr key={i}>
              <td>{comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={comment}
          placeholder="Add your comment"
          onChange={(e) => {
            setComment(e.target.value)
          }}
        />{' '}
        <Button className="ms-2" variant="primary" size="sm" type="submit">
          Add comment
        </Button>
      </form>
    </Container>
  )
}
export default BlogDetailsContainer

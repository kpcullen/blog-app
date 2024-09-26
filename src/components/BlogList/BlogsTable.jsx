import { Table } from 'react-bootstrap'
import Blog from './BlogListItem'

const BlogsTable = ({ sortedBlogs, user }) => {
  return (
    <>
      <h2>Added blogs:</h2>
      <Table striped>
        <tbody>
          {sortedBlogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <Blog blog={blog} user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default BlogsTable

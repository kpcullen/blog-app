import Togglable from '../Togglable'
import CreateNewBlog from '../CreateNewBlog'
import { useRef } from 'react'
import { useUserValue } from '../../contexts/UserContext'
import { Container } from 'react-bootstrap'
import useGetBlogs from '../../hooks/useGetBlogs'
import BlogsTable from './BlogsTable'

const BlogList = () => {
  const blogFormRef = useRef()
  const user = useUserValue()
  const { blogs, isPending } = useGetBlogs()

  if (isPending) return <div>Blogs are loading...</div>

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  return (
    <Container>
      <Togglable buttonLabel="Add a new blog" ref={blogFormRef}>
        <CreateNewBlog blogs={blogs} user={user} blogFormRef={blogFormRef} />
      </Togglable>
      <BlogsTable user={user} sortedBlogs={sortedBlogs} />
    </Container>
  )
}

export default BlogList

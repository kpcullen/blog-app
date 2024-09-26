import { useQuery } from '@tanstack/react-query'
import blogService from '../services/blogs'

const useBlog = (blogId) => {
  const { data: blog, isPending } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => blogService.getBlog(blogId),
  })
  return { blog, isPending }
}

export default useBlog

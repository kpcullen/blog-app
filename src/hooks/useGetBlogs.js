import { useQuery } from '@tanstack/react-query'
import blogService from '../services/blogs'

const useGetBlogs = () => {
  const { isPending, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll,
    retechOnWindowFocus: false,
    retry: 1,
  })
  return { blogs, isPending }
}

export default useGetBlogs

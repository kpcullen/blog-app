import { useQuery } from '@tanstack/react-query'
import userService from '../services/users'

const useUsers = () => {
  const { isPending, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: userService.getAll,
    retechOnWindowFocus: false,
    retry: 1,
  })
  return { isPending, users }
}

export default useUsers

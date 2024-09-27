import useUsers from '../../hooks/useUsers'
import UsersContainer from './UsersContainer'

const Users = () => {
  const { users, isPending } = useUsers()

  if (isPending) return <div>Loading users...</div>

  return <UsersContainer users={users} />
}

export default Users

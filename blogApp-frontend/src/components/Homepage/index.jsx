import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import BlogList from '../BlogList'
import Users from '../Users'
import User from '../User'
import Notification from '../Notification'
import BlogDetails from '../BlogDetails'
import blogService from '../../services/blogs'
import { useUserDispatch } from '../../contexts/UserContext'

import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import styles from './styles'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

const Homepage = ({ user }) => {
  const userDispatch = useUserDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
    }
  })

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    blogService.setToken(null)
    userDispatch({ type: 'LOGOUT' })
  }
  return (
    <Container>
      <NavBar user={user} styles={styles} handleLogout={handleLogout} />

      <div>
        <Notification />
        <Header styles={styles} />
        <Routes>
          <Route path="/" element={<BlogList user={user} />} />
          <Route path="/blogs" element={<BlogList user={user} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </Container>
  )
}

export default Homepage

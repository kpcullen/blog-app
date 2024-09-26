import axios from 'axios'
const baseUrl = '/api/blogs'
let token

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getBlog = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async (newBlog) => {
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (newObject) => {
  const response = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
  console.log(response.data)
  return response.data
}

const remove = async (id) => {
  const config = { headers: { Authorization: token } }
  await axios.delete(`${baseUrl}/${id}`, config)
}

const addComment = async (id, comment) => {
  console.log(comment)
  const response = await axios.post(`${baseUrl}/${id}/comments`, { comment })
  console.log(response.data)
  return response.data
}

export default { getAll, create, setToken, update, remove, getBlog, addComment }

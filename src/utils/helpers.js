export const formattedUrl = (blog) => {
  return blog.url.startsWith('http://') || blog.url.startsWith('https://')
    ? blog.url
    : `http://${blog.url}`
}

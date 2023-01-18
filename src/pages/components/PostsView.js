import {useState, useEffect} from 'react'
import StatusSpinner from './StatusSpinner'
import Post from './Post'
export default function PostsViewPanel() {
  // Posts are stored and updated here
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  //effect calls api then stores them in state (posts); sets error if error
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])

  console.log(posts.posts)

  return (
    <div className='postsviewpanel flex md:flex-col gap-2'>
      <div>
        {isLoading ?  <div><StatusSpinner/></div>  : posts.posts.map(post => {
          return <Post post={post}></Post>
        })}
      </div>
    </div>
  )
}